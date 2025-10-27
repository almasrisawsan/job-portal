export default function JobDetails({job}) {
      if (!job) return <section className="jobDetails-container">
        <div className="detail-item">
      <h3>
        No Details for this job or this job does not exist!
      </h3>
    </div>
      </section>;
  const detailsData = [
    { label: "Minimum Qualification", value: job.minimumQualification || "N/A" },
    { label: "Experience Level", value: job.experienceLevel || "N/A" },
    { label: "Experience Length", value: job.experienceLength || "N/A" },
    { label: "Location", value: job.location || "N/A" },
    { label: "Application Deadline", value: job.applicationDeadline || "N/A" },
    { label: "Salary Range", value: job.salary || "N/A" },
  ];
   return (
    <section className="jobDetails-container">
      {detailsData.map((item, index) => (
        <Details key={index} label={item.label} value={item.value} />
      ))}
    </section>
  );
}
function Details({ label, value }) {
  return (
    <div className="detail-item">
      <h3>
        <span>{label}:</span> {value}
      </h3>
    </div>
  );
}