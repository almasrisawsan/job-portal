// components/JobForm.jsx
import React from "react";
import Button from "./Button";
import Containar from "./Containar";

import Footer from  "./Footer"
const JobForm = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-8">
        <div className="mx-auto bg-white rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gray-200 py-4">
            <h1 className="text-xlg font-semibold text-black text-center">
              Create a Job
            </h1>
          </div>

          {/* Form */}
          <Containar>
            <form className="p-6 space-y-6 shadow-md m-2">
              {/* Company Name & Website */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-gray-800 mb-3">
                    Company Name
                  </h2>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-3 py-2 text-sm border text-gray-800  border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-gray-800 mb-3">
                    Company Website
                  </h2>
                  <input
                    type="text"
                    className="w-full px-3 py-2 text-sm border text-gray-800  border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Website Link"
                  />
                </div>
              </div>

              {/* Job Title */}
              <div>
                <h2 className="text-sm font-semibold text-gray-800 mb-3">
                  Job Title
                </h2>
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full px-3 py-2 text-sm border text-gray-800  border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Job Category & Job Type */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-gray-800 mb-3">
                    Job Category
                  </h2>
                  <select className="w-full px-3 py-2 text-sm border text-gray-800  border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option>Technology</option>
                    <option>Design</option>
                    <option>Marketing</option>
                  </select>
                </div>

                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-gray-800 mb-3">
                    Job Type
                  </h2>
                  <select className="w-full px-3 text-sm py-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Hourly</option>
                  </select>
                </div>
              </div>

              {/* Job Location & Experience */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-gray-800 mb-3">
                    Job Location
                  </h2>
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full px-3 py-2 text-gray-800  text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-gray-800 mb-3">
                    Experience
                  </h2>
                  <input
                    type="text"
                    placeholder="Experience"
                    className="w-full px-3 py-2 text-gray-800  text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Salary & Featured */}
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-gray-800 mb-3">
                    Salary Range
                  </h2>
                  <input
                    type="text"
                    placeholder="Salary Range"
                    className="w-full px-3 py-2 text-sm text-gray-800  border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-gray-800 mb-3">
                    Featured
                  </h2>
                  <select className="w-full px-3 text-sm py-2 border text-gray-800  border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>

              {/* Job Description */}
              <div>
                <h2 className="text-sm font-semibold text-gray-800 mb-3">
                  Job Description
                </h2>
                <textarea
                  rows={4}
                  placeholder="Job Description"
                  className="w-full h-[300px] px-3  text-gray-800 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4 mt-[20px]">
                <Button />
              </div>
            </form>
          </Containar>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default JobForm;
