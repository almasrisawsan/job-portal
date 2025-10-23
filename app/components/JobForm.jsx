import React from "react";
import { ChevronDown } from "lucide-react";

const JobForm = () => {
  return (
    <div className="space-y-6 bg-white shadow-md mx-auto p-6 rounded-xl max-w-4xl">

      {/* Company Name + Website */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
        <div>
          <label className="block mb-2 font-medium text-gray-600 text-xs">
            Company Name
          </label>
          <input
            type="text"
            placeholder="Name"
            className="bg-white px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 w-full text-sm placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-600 text-xs">
            Company Website
          </label>
          <input
            type="text"
            placeholder="Website Link"
            className="bg-white px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 w-full text-sm placeholder-gray-400"
          />
        </div>
      </div>

      {/* Job Title */}
      <div>
        <label className="block mb-2 font-medium text-gray-600 text-xs">
          Job Title
        </label>
        <input
          type="text"
          placeholder="Title"
          className="bg-white px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 w-full text-sm placeholder-gray-400"
        />
      </div>

      {/* Job Category + Type */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <label className="block mb-2 font-medium text-gray-600 text-xs">
            Job Category
          </label>
          <select
            defaultValue="Technology"
            className="bg-white px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 w-full text-sm appearance-none"
          >
           
            <option>Technology</option>
            <option>Design</option>
            <option>Marketing</option>
          </select>
          <ChevronDown
            size={18}
            className="top-9 right-3 absolute text-gray-500 pointer-events-none"
          />
        </div>

        <div className="relative">
          <label className="block mb-2 font-medium text-gray-600 text-xs">
            Job Type
          </label>
          <select
            defaultValue="Full Time"
            className="bg-white px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 w-full text-sm appearance-none"
          >
            <option value="" disabled>
              Select type
            </option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Internship</option>
          </select>
          <ChevronDown
            size={18}
            className="top-9 right-3 absolute text-gray-500 pointer-events-none"
          />
        </div>
      </div>

      {/* Location + Salary */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
        <div>
          <label className="block mb-2 font-medium text-gray-600 text-xs">
            Job Location
          </label>
          <input
            type="text"
            placeholder="Location"
            className="bg-white px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 w-full text-sm placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-600 text-xs">
            Salary Range
          </label>
          <input
            type="text"
            placeholder="Salary Range"
            className="bg-white px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 w-full text-sm placeholder-gray-400"
          />
        </div>
      </div>

      {/* Experience + Featured */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
        <div>
          <label className="block mb-2 font-medium text-gray-600 text-xs">
            Experience
          </label>
          <input
            type="text"
            placeholder="Experience"
            className="bg-white px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 w-full text-sm placeholder-gray-400"
          />
        </div>

        <div className="relative">
          <label className="block mb-2 font-medium text-gray-600 text-xs">
            Featured
          </label>
          <select className="bg-white px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 w-full text-sm appearance-none">
            <option value="">Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <ChevronDown
            size={18}
            className="top-9 right-3 absolute text-gray-500 pointer-events-none"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block mb-2 font-medium text-gray-600 text-xs">
          Job Description
        </label>
        <textarea
          placeholder="Job Description"
          rows="4"
          className="bg-white px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 w-full text-sm resize-none placeholder-gray-400"
        ></textarea>
      </div>
    </div>
  );
};

export default JobForm;
