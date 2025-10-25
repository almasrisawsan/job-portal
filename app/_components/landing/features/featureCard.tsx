import { MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
export interface IProps {
  jobId: string | number;
  companyName?: string;
  jobTitle?: string;
  location?: string;
  jobType?: string;
  salary?: string;
  companyInitial?: string;
}
const JobCard = ({ 
  jobId,
  companyName = "Match Company Limited",
  jobTitle = "Fresher UI/UX Designer (3 Year Exp.)",
  location = "Nairobi, Kenya",
  jobType = "Full Time",
  salary = "Ksh 150,000",
  companyInitial = "C",
}: IProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">

      <div className="flex items-center gap-4">

        <div className={`w-14 h-14 bg-teal-700 rounded-full flex items-center justify-center flex-shrink-0`}>
          <span className="text-white font-bold text-2xl font-poppins">
            {companyInitial}
          </span>
        </div>

        <div className="flex flex-col gap-1">

          <p className="text-sm text-gray-500 font-poppins">
            {companyName}
          </p>

          <h3 className="text-lg font-semibold text-gray-900 font-poppins">
            {jobTitle}
          </h3>

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span className="font-poppins">{location}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span className="font-poppins">{jobType}</span>
            </div>
            
            <span className="font-poppins font-medium text-gray-900">
              {salary}
            </span>
          </div>
        </div>
      </div>

      <Link 
        to={`/jobs/${jobId}`}
        className="bg-teal-700 text-white px-6 py-2.5 rounded-lg font-poppins font-medium hover:bg-teal-800 transition-colors whitespace-nowrap inline-flex items-center justify-center"
      >
        View Details
      </Link>
    </div>
  );
};

export default JobCard;