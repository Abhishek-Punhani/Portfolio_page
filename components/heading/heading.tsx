import { FC } from "react";

interface HeadingProps {
  number: string;
  title_1: string;
  title_2: string;
}

const Heading: FC<HeadingProps> = ({ number, title_1, title_2 }) => {
  return (
    <div className="relative my-10 px-4 sm:px-6 lg:px-8 z-20">
      {/*Number - Simplified background */}
      <div className="outline-none flex flex-col justify-start shrink-0 opacity-10 transform -top-20 sm:-top-24 md:-top-32 2xl:-top-24 w-[50px] sm:w-[60px] md:w-[71px] flex-none h-auto left-2 sm:left-4 lg:left-12 absolute whitespace-pre">
        <h2 className="font-pixel text-[120px] sm:text-[150px] md:text-[180px] text-center text-primary-foreground relative">
          <span className="text-primary-foreground/20">{number}</span>
        </h2>
      </div>

      {/* heading text wrapper - Clean and professional */}
      <div className="flex items-center flex-nowrap min-h-min overflow-hidden p-0 w-full font-oswald">
        <p className="text-[12vw] sm:text-[15vw] lg:text-[12vw] leading-[100%] text-primary-foreground mr-2 sm:mr-3 font-bold">
          {title_1}
        </p>
        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full"></div>
        </div>
        <p className="text-[12vw] sm:text-[15vw] lg:text-[12vw] leading-[100%] text-primary-foreground italic font-light">
          {title_2}
        </p>
      </div>
    </div>
  );
};

export default Heading;
