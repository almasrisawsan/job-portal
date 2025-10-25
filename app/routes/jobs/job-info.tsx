import type { Job } from "src/types/jobs.type";
import { useLoaderData, type LoaderFunctionArgs, Link } from "react-router";
import { AppAPI } from "src/services/axios";

export async function loader({ params }: LoaderFunctionArgs) {
  const id = params.id;
  if (!id) throw new Response("Job ID not provided", { status: 400 });

  try {
    const job = (await AppAPI.get(`/jobs/${id}`)) as Job;
    return job;
  } catch (error: any) {
    throw new Response(error.error || "Job not found", {
      status: error.status || 404,
    });
  }
}

export default function JobInfoPage() {
  const job: Job = useLoaderData<typeof loader>();

  if (!job) return <div className="p-4">Job not found</div>;

  return (
    <div className="flex flex-col flex-1 bg-white min-h-screen text-black">
      <div className="flex flex-col justify-center items-center bg-secondary px-4 w-full h-20 md:h-[100px] lg:h-[110px]">
        <div className="font-medium text-black text-xl md:text-2xl lg:text-3xl text-center leading-tight">
          {job.title}{" "}
          <span className="text-gray-700 text-sm md:text-base lg:text-lg">
            ({job.type})
          </span>{" "}
          - {job.company}
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-center items-center gap-4 md:gap-6 mt-6 px-4 w-full">
        <Link
          to={job.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center bg-white border border-gray-300 rounded-md w-full md:w-48 h-12 md:h-14 text-base md:text-lg lg:text-xl text-center hover:cursor-pointer"
        >
          View Company
        </Link>

        <button className="bg-primary rounded-md w-full md:w-48 h-12 md:h-14 text-white text-base md:text-lg lg:text-xl hover:cursor-pointer">
          Apply This Job
        </button>
      </div>

      <div className="space-y-10 px-4 md:px-10 lg:px-24 py-8">
        <div className="flex flex-col gap-0">
          <div className="flex flex-row items-baseline gap-2">
            <p className="font-semibold text-lg md:text-xl lg:text-2xl">
              Location:
            </p>
            <p className="font-normal text-gray-700 text-base md:text-lg lg:text-xl">
              {job.location}
            </p>
          </div>

          <div className="flex flex-row items-baseline gap-2">
            <p className="font-semibold text-lg md:text-xl lg:text-2xl">
              Salary:
            </p>
            <p className="font-normal text-gray-700 text-base md:text-lg lg:text-xl">
              {job.salary}
            </p>
          </div>

          <div className="flex flex-row items-baseline gap-2">
            <p className="font-semibold text-lg md:text-xl lg:text-2xl">
              Featured:
            </p>
            <p className="font-normal text-gray-700 text-base md:text-lg lg:text-xl">
              {job.isFeatured ? "Yes" : "No"}
            </p>
          </div>

          <div className="flex flex-row items-baseline gap-2">
            <p className="font-semibold text-lg md:text-xl lg:text-2xl">
              Tags:
            </p>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-50 px-3 py-1 rounded-full font-medium text-blue-700 text-base md:text-lg lg:text-xl"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            Job Description:
          </p>
          <p className="font-normal text-base md:text-lg lg:text-xl leading-relaxed">
            {job.description}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-semibold text-lg md:text-xl lg:text-2xl">
            {job.title} Requirements:
          </p>
          <ul className="space-y-2 pl-6 list-disc">
            {job.requirements.map((req, index) => (
              <li
                key={index}
                className="font-normal text-base md:text-lg lg:text-xl leading-relaxed"
              >
                {req}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
