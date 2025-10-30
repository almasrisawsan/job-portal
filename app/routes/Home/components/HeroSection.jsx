import bannerImage from "./assets/Image Banner.png";

const HeroSection = () => {
  return (
    <section className="relative bg-accent min-h-[600px] flex items-center">
      {/* Background Image - Hidden on small screens */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-right bg-no-repeat"
        style={{ backgroundImage: `url(${bannerImage})` }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Find A{" "}
              <span className="text-accent-foreground">Job</span> That
              <br />
              <span className="text-accent-foreground">Matches</span> Your
              <br />
              Passion
            </h1>

            <p className="text-foreground/70 text-base sm:text-lg max-w-md">
              Hand-picked opportunities to work from home, remotely, freelance,
              full-time, part-time, contract and internships.
            </p>

            {/* Search Form */}
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <input
                type="text"
                placeholder="Search by job title......................"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
