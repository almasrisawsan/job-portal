import type { Job } from "src/types/jobs.type";
import SectionTitle from "../ui/section-title";
import FeaturedJobsList from "./featured-jobs-list";

export default function FeaturedJobs({ jobs }: { jobs: Job[] }) {
  return (
    <section className="flex flex-col justify-center gap-6 bg-white px-4 sm:px-10 py-8">
      <SectionTitle title="Featured Jobs" />
      <FeaturedJobsList jobs={jobs} />
    </section>
  );
}
