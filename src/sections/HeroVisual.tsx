import { HeroSection } from "./HeroSection";
import { Navbar } from "./Navbar";

const HeroVisual = () => {
  return (
    <>
      <div className="relative w-full">
        <div className="w-screen h-screen  relative">
          <img
            src="/images/hero-bg.png"
            alt="Pink Curve Background"
            className="w-screen h-screen lg:h-[90vh] absolute top-[-23px] "
          />
        </div>
        {/* Content on top */}
        <div className="absolute inset-0 z-10  container">
          <Navbar />
          <HeroSection />
        </div>
      </div>
    </>
  );
};

export default HeroVisual;
