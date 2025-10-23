import HeroBanner from "../../assets/ImageBanner.png";

const Index = () => {
  return (
    <div className="bg-[#eff6f2] relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-hidden">
      <img
        src={HeroBanner}
        alt="Hero Banner"
        className="w-full h-auto absolute inset-0 object-cover z-0"
      />

      <div className="relative z-10 flex flex-col items-start justify-center min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh]">
        <div className="max-w-lg sm:max-w-xl lg:max-w-2xl space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-left">
            Find A <span className="text-[#338573]">Job</span> That{" "}
            <span className="text-[#338573]">Matches</span> Your Passion
          </h1>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl text-left">
            Hand-picked opportunities to work from home, remotely, freelance,
            full-time, part-time, contract and internships.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Search by job title..."
              className="px-4 py-2 border bg-white border-gray-300 rounded flex-1"
            />
            <button className="bg-[#338573] text-white px-4 py-2 rounded">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
