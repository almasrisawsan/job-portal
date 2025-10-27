import React from "react";
import { Link } from "react-router";

function Button({ title }: { title: string }) {
  return (
    <button
      className="bg-[#338573] text-white px-7 py-3 rounded-md border-0  font-bold"
    >
      {title}
    </button>
  );
}

export default Button;
