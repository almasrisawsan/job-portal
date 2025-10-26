import React from "react";

function FormHeader({ title }: { title: string }) {
  return (
    <div className="text-center p-10 bg-gray-100 text-black text-bold">
      <h3 className="text-4xl font-semibold text-gray-700">{title}</h3>
    </div>
  );
}

export default FormHeader;
