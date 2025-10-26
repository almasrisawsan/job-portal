export default function JobRequirements(props) {
  const req = props.requirements || [];
  return (
    <article className="jobRequirements-container">
      <h2>{props.title} Requirements:</h2>
      <ul>
        {req.map((r, index) => (
          <Require key={index} require={r} />
        ))}
      </ul>
    </article>
  );
}

function Require({ require }) {
  return <li>{require}</li>;
}
