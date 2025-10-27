export default function JobDescription({desc}) {
  return (
    <article className="jobDescription-container">
      <h2>Job description</h2>
        <p>{desc}</p>
    </article>
  );
}
