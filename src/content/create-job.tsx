import { useCategoryStore } from "src/store/categoryStore";
import {
  FeaturedEnum,
  JobTypeEnum,
  type JobFormData,
} from "src/validation/job.schema";

type JobField = {
  label: string;
  name: keyof JobFormData<string[]>; // key from form data
  type?: "select" | "textarea"; // optional
  options?: string[]; // optional
  full?: boolean; // optional
};

export function useJobFields(): JobField[] {
  const { categories } = useCategoryStore();
  const categoryNames = categories.map((c) => c.name) || [];

  return [
    { label: "Company Name", name: "companyName" },
    { label: "Company Website", name: "companyWebsite" },
    { label: "Job Title", name: "jobTitle", full: true },
    {
      label: "Job Category",
      name: "jobCategory",
      type: "select",
      options: categoryNames.length > 0 ? categoryNames : ["Other"],
    },
    {
      label: "Job Type",
      name: "jobType",
      type: "select",
      options: Array.from(JobTypeEnum),
    },
    { label: "Job Location", name: "jobLocation" },
    { label: "Salary Range", name: "salaryRange" },
    { label: "Experience", name: "experience" },
    {
      label: "Featured",
      name: "featured",
      type: "select",
      options: Array.from(FeaturedEnum),
    },
    { label: "Description", name: "description", type: "textarea", full: true },
  ];
}
