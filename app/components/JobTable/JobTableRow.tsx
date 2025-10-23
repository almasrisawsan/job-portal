import React from "react";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
const JobTableRow = ({ job }: any) => (
  <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
    <td className="py-8 px-4 text-[17px]">{job.title}</td>
    <td className="py-8 px-4 text-[17px]">{job.type}</td>
    <td className="py-8 px-4 text-[17px]">{job.postedDate ?? "2022-07-01"}</td>
    <td className="py-8 px-4 text-[17px]">{job.deadline ?? "2022-07-01"}</td>
    <td className="py-8 px-4 text-[17px] text-center space-x-3">
      <button className="text-blue-600 hover:text-blue-800">
        <EyeIcon className="h-5 w-5 inline" />
      </button>
      <button className="text-green-600 hover:text-green-800">
        <PencilIcon className="h-5 w-5 inline" />
      </button>
      <button className="text-red-600 hover:text-red-800">
        <TrashIcon className="h-5 w-5 inline" />
      </button>
    </td>
  </tr>
);

export default JobTableRow;
