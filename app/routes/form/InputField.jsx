import React from "react";

function InputField({ label, placeholder }) {
  return (
    <div className="flex flex-col">
      <label className="mb-2 font-medium text-gray-700">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
      />
    </div>
  );
}

export default InputField;
