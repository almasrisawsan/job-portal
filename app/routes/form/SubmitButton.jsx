import React from "react";

function SubmitButton({ label }) {
  return (
    <div className="flex justify-end mt-6">
      <button
        type="submit"
        className="text-white font-medium px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        {label}
      </button>
    </div>
  );
}

export default SubmitButton;
