import React from "react";
import Button from "./Button";
import { Link } from "react-router";

const Header = () => (
  <nav className="flex justify-between items-center max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div className="text-xl font-bold">
      <Link to={"/"}>Job Portal</Link>
    </div>

    <div className="flex space-x-4">
      <button className="mr-5 ">
        <Link to={"/jobs-list"}>Dashboard</Link>
      </button>

      <Link to={"/create-job"}>
        <Button title={"Post a job"} />
      </Link>
    </div>
  </nav>
);

export default Header;
