export default function JobTitle({title, type, company}){
    return(
        <div className="job-title">
            <h1>{title}</h1><span>{type}</span>
            <h2>{company}</h2>
        </div>
    );
}