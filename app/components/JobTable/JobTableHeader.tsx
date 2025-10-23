import React from "react";

const JobTableHeader = () => (
  <thead className="border-b-1 border-[#353030]">
    <tr >
      <th className="py-8 px-4 text-left">Title</th>
      <th className="py-8 px-4 text-left">Job Type</th>
      <th className="py-8 px-4 text-left">Posted Date</th>
      <th className="py-8 px-4 text-left">Application Deadline</th>
      <th className="py-8 px-4 text-center">Action</th>
    </tr>
    
  </thead>
);

export default JobTableHeader;