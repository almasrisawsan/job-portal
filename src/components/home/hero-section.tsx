import { ImageHeroSection } from "src/assets";
import SearchBar from "../ui/search-bar";
import FeaturedJobsList from "./featured-jobs/featured-jobs-list";

export default function HeroSection() {
  return (
    <section className="relative bg-secondary w-full h-[250px] md:h-[550px] lg:h-[700px]">
      <img
        src={ImageHeroSection}
        alt="hero banner"
        className="right-0 bottom-0 absolute h-full object-fill"
      />

      <div className="z-10 relative px-6 md:px-12 pt-5 md:pt-20 max-w-[300px] md:max-w-lg lg:max-w-2xl text-left">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-snug md:leading-tight">
          Find A <span className="text-primary">Job</span> That{" "}
          <span className="text-primary">Matches</span> Your Passion
        </h1>
        <p className="mt-4 mb-6 md:mb-8 text-gray-700 sm:text-md text-sm md:text-lg lg:text-xl">
          Hand-picked opportunities to work from home, remotely, freelance,
          full-time, part-time, contract and internships.
        </p>

        <div className="p-5">
          <SearchBar />
          <div className="mt-5">{/* <FeaturedJobsList /> */}</div>
        </div>
      </div>
    </section>
  );
}
