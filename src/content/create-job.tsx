export const getJobInputs = ({
  formData,
  handleChange,
}: {
  formData: any;
  handleChange: (key: string, value: string) => void;
}) => {
  return [
    {
      label: "Company Name",
      key: "companyName",
      input: (
        <input
          onChange={(e) => handleChange("companyName", e.target.value)}
          className="px-5 py-2 border border-gray-200 rounded-md"
          type="text"
          placeholder="Name"
          value={formData.companyName}
        />
      ),
    },
    {
      label: "Company Website",
      key: "companyWebsite",
      input: (
        <input
          onChange={(e) => handleChange("companyWebsite", e.target.value)}
          className="px-5 py-2 border border-gray-200 rounded-md"
          type="text"
          placeholder="Website Link"
          value={formData.companyWebsite}
        />
      ),
    },
    {
      label: "Job Title",
      key: "jobTitle",
      input: (
        <input
          onChange={(e) => handleChange("jobTitle", e.target.value)}
          className="px-5 py-2 border border-gray-200 rounded-md"
          type="text"
          placeholder="Title"
          value={formData.jobTitle}
        />
      ),
    },
    {
      label: "Job Category",
      key: "jobCategory",
      input: (
        <select
          className="px-5 py-2 border border-gray-200 rounded-md"
          onChange={(e) => handleChange("jobCategory", e.target.value)}
          value={formData.jobCategory}
        >
          <option value=""> Select Category </option>
          <option value="Marketing"> Marketing </option>
          <option value="Design"> Design </option>
          <option value="Content Creation"> Content Creation </option>
        </select>
      ),
    },
    {
      label: "Job Type",
      key: "jobType",
      input: (
        <select
          className="px-5 py-2 border border-gray-200 rounded-md"
          onChange={(e) => handleChange("jobType", e.target.value)}
          value={formData.jobType}
        >
          <option value=""> Select Type </option>
          <option value="Full Time"> Full Time </option>
          <option value="Part Time"> Part Time </option>
          <option value="Project Based"> Project Based </option>
        </select>
      ),
    },
    {
      label: "Job Location",
      key: "jobLocation",
      input: (
        <input
          onChange={(e) => handleChange("jobLocation", e.target.value)}
          className="px-5 py-2 border border-gray-200 rounded-md"
          type="text"
          placeholder="Location"
          value={formData.jobLocation}
        />
      ),
    },
    {
      label: "Salary Range",
      key: "salaryRange",
      input: (
        <input
          onChange={(e) => handleChange("salaryRange", e.target.value)}
          className="px-5 py-2 border border-gray-200 rounded-md"
          type="text"
          placeholder="Salary Range"
          value={formData.salaryRange}
        />
      ),
    },
    {
      label: "Experience",
      key: "experience",
      input: (
        <input
          onChange={(e) => handleChange("experience", e.target.value)}
          className="px-5 py-2 border border-gray-200 rounded-md"
          type="text"
          placeholder="Experience"
          value={formData.experience}
        />
      ),
    },
    {
      label: "Featured",
      key: "featured",
      input: (
        <select
          className="px-5 py-2 border border-gray-200 rounded-md"
          onChange={(e) => handleChange("featured", e.target.value)}
          value={formData.featured}
        >
          <option value=""> Select </option>
          <option value="Yes"> Yes </option>
          <option value="No"> No </option>
        </select>
      ),
    },
    {
      label: "Description",
      key: "description",
      input: (
        <textarea
          placeholder="Job Description"
          className="px-5 py-2 border border-gray-200 rounded-md w-full h-[300px] min-h-[150px]"
          onChange={(e) => handleChange("description", e.target.value)}
          value={formData.description}
        />
      ),
    },
  ];
};
