import React, { useState } from "react";

const Index = () => {
  return (
    <nav className="flex justify-between items-center max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="text-xl font-bold">Job Portal</div>

      <div className="flex space-x-4">
        <button className="mr-5">Dashboard</button>
        <button className="bg-[#338573] text-white px-4 py-2 rounded">
          Post a job
        </button>
      </div>
    </nav>
  );
};

export default Index;
