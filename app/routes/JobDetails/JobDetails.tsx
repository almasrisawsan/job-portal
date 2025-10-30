import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import JobDetailsIcon from "./components/JobDetailsIcon";
import type { Route } from "./+types/JobDetails";
import FullScreenLoading from "~/components/FullScreenLoading";
import { BASE_URL } from "~/constant";
import { getJobDetailsItems } from "./constant";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const res = await fetch(`${BASE_URL}/jobs/${params.jobId}`);
  const product = await res.json();
  return product;
}

// HydrateFallback is rendered while the client loader is running
export function HydrateFallback() {
  return <FullScreenLoading />;
}

const JobDetailsPage = ({ params, loaderData }: Route.ComponentProps) => {
  const data = loaderData;
  const jobDetailsItems = getJobDetailsItems(data);

  return (
    <div className="pb-8">
      {/* Job Title Section */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-4 px-4 text-center bg-[#F4F5F7] py-6 sm:py-8 min-h-[109px]">
          <h2 className="text-2xl sm:text-3xl font-medium text-foreground text-balance">
            {data.title}
            <span className="text-lg sm:text-xl">({data.type})</span>
          </h2>
          <span className="hidden sm:inline">-</span>
          <p className="text-xl sm:text-3xl font-medium text-foreground">
            {data.company}
          </p>
        </div>

        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex justify-center flex-wrap gap-3 text-xl">
            <Button
              size="lg"
              variant="outline"
              className="text-base sm:text-xl py-2 px-5 w-full sm:w-[187px] h-12 sm:h-14"
            >
              View Company
            </Button>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-xl w-full sm:w-[187px] h-12 sm:h-14 py-2 px-5"
            >
              <a href={data.companyUrl} target="_blank">
                Apply This Job
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Job Details Grid */}
        <Card className="p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {jobDetailsItems.map((item, idx) => (
              <JobDetailsIcon key={idx} {...item} />
            ))}
          </div>
        </Card>

        {/* Job Description */}
        <section className="mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
            Job description
          </h3>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-sm sm:text-base text-foreground leading-relaxed">
              {data.description}
            </p>
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
            {data.title} Requirements:
          </h3>
          <Card className="p-4 sm:p-6">
            <ul className="space-y-3">
              {data.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-sm sm:text-base text-foreground leading-relaxed">
                    {requirement}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default JobDetailsPage;
