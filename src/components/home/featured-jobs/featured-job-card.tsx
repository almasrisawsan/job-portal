import { CompressOutlined, EnvironmentOutlined } from "@ant-design/icons";
import Button from "../../ui/button";
import type { Job } from "src/types/jobs.type";
import { NavLink } from "react-router";
import { ROUTES } from "src/content/constants";

export default function FeaturedJobCard({ job }: { job: Job }) {
  return (
    <div className="flex sm:flex-row flex-col items-start sm:items-center gap-4 sm:gap-5 shadow px-4 sm:px-5 py-4 sm:py-3 border border-gray-100 rounded-md w-full hover:scale-102 transition-transform duration-150">
      <div className="flex justify-center items-center bg-primary rounded-full w-12 sm:w-14 h-12 sm:h-14 font-bold text-white text-xl sm:text-2xl shrink-0">
        J
      </div>

      <div className="flex flex-col flex-1 justify-between w-full">
        <p className="font-normal text-gray-700 text-xs sm:text-sm">
          {job.company || "Match Company Limited"}
        </p>

        <p className="font-semibold text-black text-lg sm:text-xl">
          {job.title || "Fresher UI/UX Designer"}
        </p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-black">
          <div className="flex items-center gap-1">
            <EnvironmentOutlined className="text-primary text-xs sm:text-sm" />
            <span className="font-normal text-xs sm:text-sm">
              {job.location || "Dhaka, Bangladesh"}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <CompressOutlined className="text-primary text-xs sm:text-sm" />
            <span className="font-normal text-xs sm:text-sm">
              {job.type || "Full Time"}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="font-normal text-xs sm:text-sm">
              {job.salary || "Ksh 150,000"}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-3 sm:mt-0 w-full sm:w-auto">
        <NavLink to={ROUTES.JOBS.INFO(job.id)}>
          <Button className="bg-primary w-full sm:w-auto font-normal md:font-normal text-white cursor-pointer">
            View Details
          </Button>
        </NavLink>
      </div>
    </div>
  );
}
