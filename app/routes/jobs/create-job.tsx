import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "src/components/ui/button";
import {
  createJobSchema,
  JobTypeEnum,
  FeaturedEnum,
  type JobFormData,
} from "src/validation/job.schema";
import { useJobFields } from "src/content/create-job";
import { AppAPI } from "src/services/api";
import { useNavigate, useSearchParams } from "react-router";
import { ROUTES } from "src/content/constants";
import { useJobsStore } from "src/store/jobsStore";
import type { Job } from "src/types/jobs.type";

function getDefaultValues(job: Job | null, categoryNames: string[]) {
  if (!job) {
    return {
      companyName: "",
      companyWebsite: "",
      jobTitle: "",
      jobCategory: categoryNames[0] || "",
      jobType: "Full Time" as (typeof JobTypeEnum)[number],
      jobLocation: "",
      salaryRange: "",
      experience: "",
      featured: "No" as (typeof FeaturedEnum)[number],
      description: "",
    };
  }

  const jobType = JobTypeEnum.includes(job.jobType as any)
    ? (job.jobType as (typeof JobTypeEnum)[number])
    : JobTypeEnum.includes(job.type as any)
      ? (job.type as (typeof JobTypeEnum)[number])
      : "Full Time";

  const featured = FeaturedEnum.includes(job.featured as any)
    ? (job.featured as (typeof FeaturedEnum)[number])
    : job.isFeatured
      ? "Yes"
      : "No";

  console.log("🚀 ~ getDefaultValues ~ job:", job);

  return {
    companyName: job.companyName ?? job.company ?? "",
    companyWebsite: job.companyWebsite ?? job.companyUrl ?? "",
    jobTitle: job.jobTitle ?? job.title ?? "",
    jobCategory: job.jobCategory ?? job.category ?? categoryNames[0] ?? "",
    jobType: jobType as (typeof JobTypeEnum)[number],
    jobLocation: job.jobLocation ?? job.location ?? "",
    salaryRange: job.salaryRange ?? job.salary ?? "",
    experience: job.experience ?? "",
    featured: featured as (typeof FeaturedEnum)[number],
    description: job.description ?? job.jobDescription ?? "",
  };
}

export default function CreateJobPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { jobs, setJobs, getJob } = useJobsStore();

  const isEditMode = searchParams.get("mode") === "edit";
  const jobId = searchParams.get("id");
  const jobToEdit = isEditMode && jobId ? (getJob(jobId) ?? null) : null;

  const jobFields = useJobFields();
  const categoryNames =
    jobFields.find((f) => f.name === "jobCategory")?.options?.slice() || [];

  const schema = createJobSchema(categoryNames as string[]);
  type FormData = JobFormData<typeof categoryNames>;

  const { register, handleSubmit, reset, formState } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: getDefaultValues(jobToEdit, categoryNames),
  });

  const onSubmit = async (data: FormData) => {
    try {
      if (isEditMode && jobToEdit) {
        const res = await AppAPI.put(`/jobs/${jobToEdit.id}`, data);
        if (res.status === 200) {
          setJobs(
            jobs.map((j) => (j.id === jobToEdit.id ? { ...j, ...data } : j))
          );
          navigate(ROUTES.JOBS.LIST);
        }
      } else {
        const res = await AppAPI.post("/jobs", data);
        if (res.status === 201 || res.data?.id) {
          setJobs([...jobs, res.data]);
          reset();
          navigate(ROUTES.JOBS.LIST);
        }
      }
    } catch (err: any) {
      alert(err?.response?.data?.message || "Failed to submit job");
    }
  };

  return (
    <div className="pb-5">
      <div className="bg-gray-100 py-4 font-medium text-2xl text-center">
        {isEditMode ? "Edit Job" : "Create a Job"}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-5 px-5 border border-gray-200 rounded-md"
      >
        <div className="gap-5 grid grid-cols-1 lg:grid-cols-2 px-5 py-5">
          {jobFields.map((field) => (
            <div
              key={field.name}
              className={`flex flex-col gap-1 ${field.full ? "col-span-full" : ""}`}
            >
              <label className="font-medium">{field.label}</label>

              {field.type === "select" ? (
                <select
                  {...register(field.name as any)}
                  className="px-5 py-2 border border-gray-200 rounded-md"
                >
                  <option value="">Select {field.label}</option>
                  {field.options?.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : field.type === "textarea" ? (
                <textarea
                  {...register(field.name as any)}
                  className="px-5 py-2 border border-gray-200 rounded-md w-full h-[300px]"
                />
              ) : (
                <input
                  {...register(field.name as any)}
                  className="px-5 py-2 border border-gray-200 rounded-md"
                />
              )}

              {formState.errors[field.name as keyof FormData] && (
                <span className="text-red-500 text-sm">
                  {formState.errors[field.name as keyof FormData]?.message}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-end p-8">
          <Button type="submit" disabled={formState.isSubmitting}>
            {formState.isSubmitting
              ? isEditMode
                ? "Updating..."
                : "Posting..."
              : isEditMode
                ? "Update Job"
                : "Post Job"}
          </Button>
        </div>
      </form>
    </div>
  );
}
