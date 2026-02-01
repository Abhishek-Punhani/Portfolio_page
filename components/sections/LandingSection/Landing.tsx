import Header from "@/components/navigation/header";
import FancyButton from "@/components/ui/fancy-button";
import LiveClock from "@/components/ui/live-clock";
import ScrollDown from "@/components/ui/scroll-down";
import MagneticWrapper from "@/components/visualEffects/magnetic-btn";
import RotatingMoon from "@/components/visualEffects/rotating-moon";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

function Landing() {
  return (
    <div className="relative h-screen overflow-hidden p-4 sm:p-8">
      {/* Rotating Moon Background */}
      <RotatingMoon />

      {/* Header */}
      <Header />
      {/* Show btn on small screens - centered for phones */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 md:hidden">
        <MagneticWrapper>
          <FancyButton text="Let's Talk" icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>
      {/* LiveClock */}
      <div className="absolute right-4 bottom-4 md:right-10 md:bottom-10">
        <LiveClock timeZone="Asia/Kolkata" />
      </div>
      {/* /Slogan - centered & clamped for mobile */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 mt-2 flex justify-center px-4">
        <div className="flex flex-col items-center text-primary-foreground text-center font-medium uppercase leading-none">
          <div className="text-[12vw] sm:text-[14vw] md:text-[10vw] lg:text-[8vw] 2xl:text-[10rem]">
            <div>Code</div>
            <div>Innovation</div>
            <div>Excellence</div>
          </div>

          <div className="mt-6 max-w-[80%] sm:max-w-[60%] md:max-w-[45%] 2xl:max-w-[30rem] text-[0.62rem] sm:text-[0.85rem] md:text-[1rem] leading-[1.4] tracking-[-0.02rem] uppercase font-normal text-center">
            <span>Empowering innovation</span>
            <br />
            <span>through inspired designs</span>
            <br />
            <span>where challenges spark creativity</span>
            <br />
            <span>and solutions redefine possibilities!</span>
          </div>
        </div>
      </div>
      {/* Scroll Down btn */}
      <MagneticWrapper className="absolute left-1/2 -translate-x-1/2 bottom-[8rem] md:bottom-[4rem] 2xl:bottom-2">
        <ScrollDown />
      </MagneticWrapper>
    </div>
  );
}

export default Landing;
