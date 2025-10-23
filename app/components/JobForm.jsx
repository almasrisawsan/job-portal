import React, { useState, useEffect } from "react";
import { ChevronDown, Plus, X } from "lucide-react";

const JobForm = ({ initialData = null, onSubmit, isLoading = false }) => {
  const [formData, setFormData] = useState({
    company: "",
    companyUrl: "",
    title: "",
    categoryId: "1",
    type: "Full-Time",
    location: "",
    salary: "",
    isFeatured: "false",
    description: "",
  });

  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [requirements, setRequirements] = useState([]);
  const [requirementInput, setRequirementInput] = useState("");

  // Load initial data if in edit mode
  useEffect(() => {
    if (initialData) {
      setFormData({
        company: initialData.company || "",
        companyUrl: initialData.companyUrl || "",
        title: initialData.title || "",
        categoryId: initialData.categoryId?.toString() || "1",
        type: initialData.type || "Full-Time",
        location: initialData.location || "",
        salary: initialData.salary || "",
        isFeatured: initialData.isFeatured?.toString() || "false",
        description: initialData.description || "",
      });
      setTags(initialData.tags || []);
      setRequirements(initialData.requirements || []);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const addRequirement = () => {
    if (requirementInput.trim()) {
      setRequirements([...requirements, requirementInput.trim()]);
      setRequirementInput("");
    }
  };

  const removeRequirement = (index) => {
    setRequirements(requirements.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      const jobData = {
        ...formData,
        categoryId: parseInt(formData.categoryId),
        isFeatured: formData.isFeatured === "true",
        tags,
        requirements,
      };
      onSubmit(jobData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md mx-auto p-6 rounded-xl max-w-4xl">

      {/* Company Name + Company Logo URL */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
        <div>
          <label className="block mb-2 font-medium text-gray-600 text-xs">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g., Nexus Corp"
            className="bg-white px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 w-full text-sm placeholder-gray-400"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-600 text-xs">
            Company Logo URL
          </label>
          <input
            type="text"
            name="companyUrl"
            value={formData.companyUrl}
            onChange={handleChange}
            placeholder="https://example.com/logo.png"
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
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g., Senior React Architect"
          className="bg-white px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 w-full text-sm placeholder-gray-400"
          required
        />
      </div>

      {/* Job Category + Type */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <label className="block mb-2 font-medium text-gray-600 text-xs">
            Job Category
          </label>
          <select
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            className="bg-white px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 w-full text-sm appearance-none"
            required
          >
            <option value="1">Technology</option>
            <option value="2">Design</option>
            <option value="3">Marketing</option>
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
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="bg-white px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 w-full text-sm appearance-none"
            required
          >
            <option value="" disabled>
              Select type
            </option>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Internship</option>
            <option>Contract</option>
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
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g., Remote, New York, San Francisco"
            className="bg-white px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 w-full text-sm placeholder-gray-400"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-600 text-xs">
            Salary Range
          </label>
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="e.g., $160,000 - $200,000"
            className="bg-white px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 w-full text-sm placeholder-gray-400"
            required
          />
        </div>
      </div>

      {/* Featured */}
      <div className="relative">
        <label className="block mb-2 font-medium text-gray-600 text-xs">
          Featured Job
        </label>
        <select
          name="isFeatured"
          value={formData.isFeatured}
          onChange={handleChange}
          className="bg-white px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 w-full text-sm appearance-none"
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <ChevronDown
          size={18}
          className="top-9 right-3 absolute text-gray-500 pointer-events-none"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block mb-2 font-medium text-gray-600 text-xs">
          Job Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="As a Senior Architect, you will be responsible for..."
          rows="5"
          className="bg-white px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 w-full text-sm resize-none placeholder-gray-400"
          required
        ></textarea>
      </div>

      {/* Tags */}
      <div>
        <label className="block mb-2 font-medium text-gray-600 text-xs">
          Skills/Tags
        </label>
        <div className="space-y-3">
          <div className="flex gap-2">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
              placeholder="e.g., React, TypeScript, Node.js"
              className="bg-white px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 flex-1 text-sm placeholder-gray-400"
            />
            <button
              type="button"
              onClick={addTag}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg transition-colors flex items-center gap-2"
            >
              <Plus size={18} />
              Add
            </button>
          </div>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm flex items-center gap-2"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="hover:text-blue-900"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Requirements */}
      <div>
        <label className="block mb-2 font-medium text-gray-600 text-xs">
          Job Requirements
        </label>
        <div className="space-y-3">
          <div className="flex gap-2">
            <input
              type="text"
              value={requirementInput}
              onChange={(e) => setRequirementInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addRequirement())}
              placeholder="Add a requirement..."
              className="bg-white px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 flex-1 text-sm placeholder-gray-400"
            />
            <button
              type="button"
              onClick={addRequirement}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg transition-colors flex items-center gap-2"
            >
              <Plus size={18} />
              Add
            </button>
          </div>
          {requirements.length > 0 && (
            <ul className="space-y-2">
              {requirements.map((requirement, index) => (
                <li
                  key={index}
                  className="bg-gray-50 border border-gray-200 px-3 py-2.5 rounded-lg flex items-start justify-between gap-3 text-sm"
                >
                  <span className="flex-1 text-gray-700">{requirement}</span>
                  <button
                    type="button"
                    onClick={() => removeRequirement(index)}
                    className="text-red-500 hover:text-red-700 flex-shrink-0"
                  >
                    <X size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg transition-colors w-full md:w-auto"
        >
          {isLoading ? 'Saving...' : (initialData ? 'Update Job' : 'Post Job')}
        </button>
      </div>
    </form>
  );
};

export default JobForm;
