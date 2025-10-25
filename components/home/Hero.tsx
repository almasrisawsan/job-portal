import { ImageHeroBanner } from "assets";
import SearchBar from "components/common/ui/Search";
import { useEffect, useState } from "react";

export default function Hero() {
  return (
    <section className="h-full bg-cover bg-center md:px-20 px-10 flex justify-between bg-secondary gap-50">
      <div className="flex flex-col pt-20 lg:w-1/2">
        <h1 className="md:text-7xl text-4xl font-bold">
          Find A <span className="text-primary">Job</span> That{" "}
          <span className="text-primary">Matches</span> Your Passion
        </h1>
        <div className="md:text-xl text-md text-[#616161] pb-24">
          Hand-picked opportunities to work from home, remotely, freelance,
          full-time, part-time, contract and internships.
        </div>
        <SearchBar />
      </div>
      <div className="hidden lg:block w-1/2">
        <img src={ImageHeroBanner} alt="hero banner" />
      </div>
    </section>
  );
}
