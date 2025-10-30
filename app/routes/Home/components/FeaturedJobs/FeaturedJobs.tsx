import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";
import useFetch from "~/utils/useFetch";
import type { Job } from "~/routes/JobDetails/types";
import { Link } from "react-router";

const FeaturedJobs = () => {
  const {
    data: jobs,
    isLoading,
    error,
  } = useFetch<Job[]>("https://68f8f8e8deff18f212b83fba.mockapi.io/jobs");

  // Display only first 4 jobs
  const featuredJobs = jobs?.slice(0, 4) || [];

  return (
    <section className="py-10 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Featured Jobs
        </h2>

        {error && (
          <div className="text-center text-red-600 p-4 bg-red-50 rounded-lg">
            Failed to load jobs. Please try again later.
          </div>
        )}

        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-4">
                    <Skeleton className="w-12 h-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-6 w-64" />
                      <Skeleton className="h-4 w-40" />
                      <Skeleton className="h-4 w-80" />
                    </div>
                  </div>
                  <Skeleton className="h-9 w-28 mt-3 sm:mt-0" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {featuredJobs.map((job) => (
              <Card
                key={job.id}
                className="bg-white rounded-2xl border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#338573] flex items-center justify-center text-white font-semibold text-lg">
                    {job.company.charAt(0)}
                  </div>
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <p className="text-gray-600 text-sm">{job.company}</p>
                    <div className="flex space-x-3 text-sm text-gray-500 mt-1">
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                      <span>•</span>
                      <span>{job.salary}</span>
                    </div>
                  </CardContent>
                </div>
                <Link
                  to={`/job/${job.id}`}
                  className="bg-[#338573] hover:bg-[#52998a] text-white rounded-xl px-6 py-2 w-full sm:w-auto mt-3 sm:mt-0"
                >
                  View Details
                </Link>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedJobs;
