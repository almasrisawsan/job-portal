import React from "react";
import Button from "./Button";
import Input from "./Input";

import womman from "../welcome/womman.png";
export default function HeroSection() {
  return (
    <section className="bg-white w-screen relative   ">
      <div className=" flex flex-col-reverse justify-center lg:items-start items-center gap-10 container mx-auto md:h-screen h-[50vh]  ">
        <div className="lg:w-1/2 z-10 relative">
          <h1 className="sm:text-4xl text-2xl  md:text-7xl  font-bold text-gray-900 md:mb-6 mb-3">
            Find A <span className="text-primary">Job</span> That{" "}
            <span className="text-primary">Matches</span> Your Passion
          </h1>
          <p className="text-gray-600 md:text-base text-sm md:mb-6 mb-3">
            Hand-picked opportunities to work from home, remotely, freelance,
            full-time, part-time, contract and internships.
          </p>
          <div className="flex ">
            <Input
              inputstyle="background"
              type="text"
              className="rounded-l-md w-full"
              placeholder="Search by job title..."
            />
            <Button size="lg" className="rounded-md absolute right-0">
              Search
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex absolute top-0  z-0left-0 justify-center">
        <img src={womman} alt="Hero" className="w-full  rounded-lg" />
      </div>
    </section>
  );
}
