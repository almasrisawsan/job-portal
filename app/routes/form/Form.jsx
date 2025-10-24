import React from "react";
import FormHeader from "./FormHeader";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";
import SubmitButton from "./SubmitButton";

function Form() {
  return (
    <form className="min-h-screen flex flex-col ">
      <FormHeader title="Create a Job" />

      <div className="flex flex-col flex-grow items-center py-4 px-4">
        <div className="w-full md:w-4/4 lg:w-3/4 rounded-xl shadow-md p-6 border border-gray-200 min-h-[80vh] flex flex-col justify-between bg-white">
          <div className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="Company Name" placeholder="Name" />
              <InputField label="Company Website" placeholder="Website Link" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
             <InputField label="Job Title" placeholder="Enter job title" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SelectField
                label="Job Category"
                options={["Technology", "Design", "Marketing", "Finance"]}
              />
              <SelectField
                label="Job Type"
                options={["Full Time", "Part Time", "Remote"]}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="Job Location" placeholder="Location" />
              <InputField label="Salary Range" placeholder="Salary Range" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="Experience" placeholder="Experience" />
              <SelectField label="Featured" options={["Yes", "No"]} />
            </div>

            <TextAreaField
              label="Job Description"
              placeholder="Job Description"
            />
          </div>

          <SubmitButton label="Post Job" />
        </div>
      </div>
    </form>
  );
}

export default Form;
