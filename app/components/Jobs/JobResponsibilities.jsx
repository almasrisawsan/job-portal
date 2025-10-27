export default function JobResponsibilities(props) {
  const res = props.responsibilities || [];
  return (
    <article className="jobResponsibilities-container">
      <h2>Responsibilities:</h2>
      <ul>
        {res.map((r, index) => (
          <Responsible key={index} res={r} />
        ))}
      </ul>
    </article>
  );
}

function Responsible({ res }) {
  return <li>{res||"Lorem ipsum dolor sit amet."}</li>;
}
