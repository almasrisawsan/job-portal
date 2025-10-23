import React from "react";
import { useNavigate } from "react-router";

const Navbar = ({ showDashboard = true }) => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <h1
        className="text-xl font-bold text-[#338573] cursor-pointer"
        onClick={() => navigate("/")}
      >
        JobsPortal
      </h1>

      <div className="flex items-center gap-4">
        {showDashboard && (
          <button
            onClick={() => navigate("/das")}
            // onClick={() => navigate("/dashboard")}
            className="text-sm text-[#338573] hover:text-[#52998a]"
          >
            Dashboard
          </button>
        )}

        <button
          onClick={() => navigate("/post-job")}
          className="px-4 py-2 bg-[#338573] text-white rounded hover:bg-[#52998a]"
        >
          Post a job
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
