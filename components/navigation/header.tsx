import FancyButton from "../ui/fancy-btn";
import Profile from "../ui/profile";
import MagneticWrapper from "../visualEffects/magnetic-btn";
import { FaArrowRight } from "react-icons/fa";

function Header() {
  return (
    <div className="w-full flex items-center justify-center md:justify-between">
      <Profile />
      <div className="hidden md:inline">
        <MagneticWrapper>
          <FancyButton text="Let's talk" icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>
    </div>
  );
}

export default Header;
