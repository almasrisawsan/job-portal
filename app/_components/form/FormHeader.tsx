import React from "react";

function FormHeader({ title }: { title: string }) {
  return (
    <div className="bg-gray-100 flex justify-center items-center py-6">
      <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
    </div>
  );
}

export default FormHeader;
