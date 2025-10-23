
import TextContent from "./textContent";

interface IProps {
  bgSrc?: string;
  mobileBgPosition?: string;   
  desktopBgPosition?: string;  
  containOnMobile?: boolean;
};

const Hero = ({
  bgSrc = "/assets/landing.png",
  mobileBgPosition = "bg-right",
  desktopBgPosition = "md:bg-right",
  containOnMobile = false,
}: IProps) => {
  
  const bgSizeClass = containOnMobile ? "bg-contain md:bg-cover" : "bg-cover";

  return (
    <section
      aria-label="Job Portal Hero"
      className={[
        "relative w-full h-screen overflow-hidden isolate",
        `bg-[url('${bgSrc}')]`,
        "bg-no-repeat",
        mobileBgPosition,
        desktopBgPosition,
        bgSizeClass,
      ].join(" ")}
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
