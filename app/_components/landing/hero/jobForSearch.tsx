import { Link } from "react-router-dom";

export interface IProps {
  jobId: string | number;
  jobTitle: string;
  companyName: string;
}

const SearchJobCard = ({ jobId, jobTitle, companyName }: IProps) => {
  return (
    <div className="flex items-center justify-between p-3 bg-white/90 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
      <div className="min-w-0">
        <h3 className="text-base font-semibold text-gray-900 font-poppins truncate">
          {jobTitle}
        </h3>
        <p className="text-sm text-gray-600 font-poppins truncate">
          {companyName}
        </p>
      </div>

      <Link
        to={`/jobs/${jobId}`}
        className="bg-teal-700 text-white px-4 py-2 rounded-md font-poppins text-sm font-medium hover:bg-teal-800 transition-colors whitespace-nowrap"
        aria-label={`View details for ${jobTitle} at ${companyName}`}
      >
        View Details
      </Link>
    </div>
  );
};

export default SearchJobCard;
