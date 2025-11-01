import type { Job } from "src/types/jobs.type";
import SectionTitle from "../../ui/section-title";
import FeaturedJobsList from "./featured-jobs-list";
import { useFetch } from "src/hooks/useFetch";
import LoadingSection from "src/components/common/loading-section";
import ErrorSection from "src/components/common/error-section";
import NotFoundSection from "src/components/common/not-found-section";
import { useJobsStore } from "src/store/jobsStore";

export default function FeaturedJobs() {
  // const { data: jobs, loading, error } = useFetch<Job[]>("/jobs");

  const { loading, error, filteredJobs } = useJobsStore();
  const hasJobs = filteredJobs && filteredJobs.length > 0;

  return (
    <section className="flex flex-col justify-center gap-6 bg-white px-4 sm:px-10 py-8">
      <SectionTitle title="Featured Jobs" />
      {loading ? (
        <LoadingSection />
      ) : error ? (
        <ErrorSection error={error} />
      ) : !hasJobs ? (
        <NotFoundSection text="jobs" />
      ) : (
        <FeaturedJobsList jobs={filteredJobs} />
      )}
    </section>
  );
}
