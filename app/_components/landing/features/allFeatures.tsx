import { jobs } from "./constants";
import JobCard from "./featureCard";

const AllFeatures = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-poppins font-bold text-4xl text-center mb-12 text-gray-900">
          Featured jobs
        </h2>
        
        <div className="flex flex-col gap-5">
          {jobs.map((job, index) => (
            <JobCard
              key={index}
              companyName={job.companyName}
              jobTitle={job.jobTitle}
              location={job.location}
              jobType={job.jobType}
              salary={job.salary}
              companyInitial={job.companyInitial}
              companyColor={job.companyColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllFeatures;