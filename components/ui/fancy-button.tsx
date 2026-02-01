import { FC, ReactNode } from "react";

interface ButtonProps {
  text: string;
  icon: ReactNode;
}

const FancyButton: FC<ButtonProps> = ({ text, icon }) => {
  return (
    <a className="fancy-btn">
      <div className="group bg-black hover:bg-transparent text-primary-foreground hover:text-black rounded-[108em] py-3 px-6 sm:py-4 sm:px-8 md:py-5 md:px-10 flex items-center gap-2 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer transition-all duration-75">
        <span>{text}</span>
        <span className="group-hover:translate-x-[.75vw] transition-transform duration-100">
          {icon}
        </span>
      </div>
    </a>
  );
};

export default FancyButton;
