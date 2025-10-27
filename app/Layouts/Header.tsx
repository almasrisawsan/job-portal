import React from "react";
import Button from "./Button";

const Header = () => (
  <header className="bg-white text-white py-4 px-6 flex justify-between items-center h-[109px]">
    <h1 className="text-[36px] font-semibold text-[#338573] ">JobsPortal</h1>
    <Button />
  </header>
);

export default Header;