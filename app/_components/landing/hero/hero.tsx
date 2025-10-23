
import TextContent from "./textContent";

interface IProps {
  bgSrc?: string;
  mobileBgPosition?: string;   
  desktopBgPosition?: string;  
  containOnMobile?: boolean;
};

const Hero = ({
  bgSrc = "/landing.png",
  containOnMobile = false,
}: IProps) => {
  
  const bgSizeClass = containOnMobile ? "bg-contain md:bg-cover" : "bg-cover";

  return (
    <section
      aria-label="Job Portal Hero"
      className={[
        "relative w-full h-screen overflow-hidden isolate",
        "bg-no-repeat",
        "bg-right",
        containOnMobile ? "bg-contain md:bg-cover" : "bg-cover",
      ].join(" ")}
      style={{ backgroundImage: `url(${bgSrc})` }}   // ✅ dynamic, works
    >
      <div
        className="
          absolute inset-0 z-0
          bg-gradient-to-r from-white/98 via-white/90 to-white/70
          md:hidden
        "
        aria-hidden="true"
      />
      <div className="relative z-10 h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-full flex items-center">
          <div className="max-w-2xl">
            <TextContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
