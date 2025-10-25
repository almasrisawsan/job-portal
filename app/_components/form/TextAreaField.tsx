import React from "react";

interface IProps {
    label: string,
    placeholder: string,
    rows?: number
}
function TextAreaField({ label, placeholder, rows = 5 }: IProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-2 font-medium text-gray-700">{label}</label>
      <textarea
        placeholder={placeholder}
        rows={rows}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
      ></textarea>
    </div>
  );
}

export default TextAreaField;
