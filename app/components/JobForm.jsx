import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { z } from "zod";
import Button from "./Button";
import { GetCatogries } from "../api/api";

// Zod validation schema
const jobFormSchema = z.object({
  company: z.string().min(2, "Company name must be at least 2 characters"),
  logo: z
    .string()
    .refine(
      (val) => val === "" || /^https?:\/\/.+/.test(val),
      "Please enter a valid URL"
    ),
  title: z.string().min(3, "Job title must be at least 3 characters"),
  category: z.string().min(1, "Category is required"),
  type: z.string().min(1, "Job type is required"),
  location: z.string().min(2, "Location must be at least 2 characters"),
  salary: z.string().optional(),
  description: z.string().min(10, "Description must be at least 10 characters"),
  postedAt: z.string(),
});

const JobForm = ({
  initialData = {},
  onSubmit,
  submitButtonText = "Post Job",
  title = "Create a Job",
}) => {
  const [formData, setFormData] = useState({
    company: initialData.company || "",
    logo: initialData.logo || "",
    title: initialData.title || "",
    category: initialData.category || "",
    type: initialData.type || "Full-time",
    location: initialData.location || "",
    salary: initialData.salary || "",
    description: initialData.description || "",
    postedAt:
      initialData.postedAt || new Date().toISOString().split("T")[0],
  });

  const [errors, setErrors] = useState({});
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await GetCatogries();
        setCategories(response.data);
        // Set default category if not already set and no initial data
        if (!initialData.category && response.data.length > 0) {
          setFormData((prev) => {
            if (!prev.category) {
              return { ...prev, category: response.data[0].name };
            }
            return prev;
          });
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data being submitted:", formData);

    // Validate form data with Zod
    const result = jobFormSchema.safeParse(formData);

    console.log("Validation result:", result);

    if (!result.success) {
      // Convert Zod errors to a format easier to work with
      const newErrors = {};

      if (result.error && result.error.issues) {
        result.error.issues.forEach((error) => {
          const field = error.path[0];
          newErrors[field] = error.message;
        });
      }

      setErrors(newErrors);

      // Scroll to first error
      const firstErrorField = Object.keys(newErrors)[0];
      const element = document.getElementsByName(firstErrorField)[0];
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        element.focus();
      }

      console.log("Validation errors:", newErrors);
      return;
    }

    // Clear errors and submit
    setErrors({});
    if (onSubmit) {
      // Find the categoryId based on the selected category name
      const selectedCategory = categories.find(
        (cat) => cat.name === formData.category
      );

      // Add categoryId to form data
      const submissionData = {
        ...formData,
        categoryId: selectedCategory ? selectedCategory.id : null,
      };

      console.log("Submission data with categoryId:", submissionData);
      onSubmit(submissionData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-6 w-full">
      {/* Title */}
      <h2 className="mb-6 font-medium text-center text-gray-900 text-lg">
        {title}
      </h2>

      {/* Error Summary */}
      {Object.keys(errors).length > 0 && (
        <div className="bg-red-50 border border-red-500 text-red-700 px-4 py-3 rounded mb-4">
          <strong className="font-bold">Please fix the following errors:</strong>
          <ul className="mt-2 ml-4 list-disc text-sm">
            {Object.entries(errors).map(([field, message]) => (
              <li key={field}>{message}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-6 bg-white shadow-sm p-6 rounded-lg">
        {/* Company Name + Logo URL */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
          <div>
            <label className="block mb-2 font-medium text-gray-700 text-sm">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Name"
              className={`bg-white px-3 py-2.5 border rounded-md focus:outline-none focus:ring-2 w-full text-sm placeholder-gray-400 ${
                errors.company
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-teal-500"
              }`}
            />
            {errors.company && (
              <p className="mt-1 text-red-500 text-xs">{errors.company}</p>
            )}
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700 text-sm">
              Company Logo URL
            </label>
            <input
              type="text"
              name="logo"
              value={formData.logo}
              onChange={handleChange}
              placeholder="https://example.com/logo.png"
              className={`bg-white px-3 py-2.5 border rounded-md focus:outline-none focus:ring-2 w-full text-sm placeholder-gray-400 ${
                errors.logo
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-teal-500"
              }`}
            />
            {errors.logo && (
              <p className="mt-1 text-red-500 text-xs">{errors.logo}</p>
            )}
          </div>
        </div>

        {/* Job Title */}
        <div>
          <label className="block mb-2 font-medium text-gray-700 text-sm">
            Job Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className={`bg-white px-3 py-2.5 border rounded-md focus:outline-none focus:ring-2 w-full text-sm placeholder-gray-400 ${
              errors.title
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-teal-500"
            }`}
          />
          {errors.title && (
            <p className="mt-1 text-red-500 text-xs">{errors.title}</p>
          )}
        </div>

        {/* Job Category + Type */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
          <div className="relative">
            <label className="block mb-2 font-medium text-gray-700 text-sm">
              Job Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              disabled={loadingCategories}
              className={`bg-white px-3 py-2.5 border rounded-md focus:outline-none focus:ring-2 w-full text-sm appearance-none ${
                errors.category
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-teal-500"
              }`}
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="mt-1 text-red-500 text-xs">{errors.category}</p>
            )}
            <ChevronDown
              size={18}
              className="top-10 right-3 absolute text-gray-500 pointer-events-none"
            />
          </div>

          <div className="relative">
            <label className="block mb-2 font-medium text-gray-700 text-sm">
              Job Type
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="bg-white px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 w-full text-sm appearance-none"
            >
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>
            <ChevronDown
              size={18}
              className="top-10 right-3 absolute text-gray-500 pointer-events-none"
            />
          </div>
        </div>
        {/* Location + Salary */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
          <div>
            <label className="block mb-2 font-medium text-gray-700 text-sm">
              Job Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              className={`bg-white px-3 py-2.5 border rounded-md focus:outline-none focus:ring-2 w-full text-sm placeholder-gray-400 ${
                errors.location
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-teal-500"
              }`}
            />
            {errors.location && (
              <p className="mt-1 text-red-500 text-xs">{errors.location}</p>
            )}
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700 text-sm">
              Salary Range
            </label>
            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="Salary Range"
              className="bg-white px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 w-full text-sm placeholder-gray-400"
            />
          </div>
        </div>

        {/* Posted Date */}
        <div>
          <label className="block mb-2 font-medium text-gray-700 text-sm">
            Posted Date
          </label>
          <input
            type="date"
            name="postedAt"
            value={formData.postedAt}
            onChange={handleChange}
            className={`bg-white px-3 py-2.5 border rounded-md focus:outline-none focus:ring-2 w-full text-sm ${
              errors.postedAt
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-teal-500"
            }`}
          />
          {errors.postedAt && (
            <p className="mt-1 text-red-500 text-xs">{errors.postedAt}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 font-medium text-gray-700 text-sm">
            Job Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Job Description"
            rows="6"
            className={`bg-white px-3 py-2.5 border rounded-md focus:outline-none focus:ring-2 w-full text-sm resize-none placeholder-gray-400 ${
              errors.description
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-teal-500"
            }`}
          ></textarea>
          {errors.description && (
            <p className="mt-1 text-red-500 text-xs">{errors.description}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 px-8 py-2.5 rounded-md font-medium text-sm text-white transition-colors"
          >
            {submitButtonText}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default JobForm;
