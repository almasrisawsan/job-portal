import { ImageHeroBanner } from "src/assets";
import SearchBar from "../ui/search-bar";

export default function HeroSection() {
  return (
    <section className="flex lg:flex-row flex-col justify-between gap-8 bg-secondary bg-cover bg-center px-4 md:px-10 lg:px-20 pb-5">
      <div className="flex flex-col pt-5 lg:pt-20 w-full lg:w-1/2">
        <h1 className="font-bold text-4xl md:text-7xl leading-tight">
          Find A <span className="text-primary">Job</span> That{" "}
          <span className="text-primary">Matches</span> Your Passion
        </h1>
        <div className="pb-12 text-gray-600 text-md md:text-xl">
          Hand-picked opportunities to work from home, remotely, freelance,
          full-time, part-time, contract and internships.
        </div>
        <SearchBar />
      </div>

      <div className="hidden lg:block w-1/2">
        <img
          src={ImageHeroBanner}
          alt="hero banner"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
