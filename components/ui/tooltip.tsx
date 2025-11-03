import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC, useState, ReactElement } from "react";

interface TooltipProps {
  title: string;
  image: string | StaticImport | ReactElement;
  bgColor?: string;
}

const Tooltip: FC<TooltipProps> = ({ title, image, bgColor }) => {
  const [active, setActive] = useState<boolean>(false);

  // Get display text for items without images
  const getDisplayText = (title: string) => {
    const fundamentalsMap: { [key: string]: string } = {
      "Data Structures & Algorithms": "DSA",
      "Operating Systems": "OS",
      "Computer Networks": "NET",
      "Object Oriented Programming": "OOP",
      "System Design": "ARCH",
    };

    return fundamentalsMap[title] || title.charAt(0).toUpperCase();
  };

  return (
    <div
      className={cn(
        "link relative bg-[#2D2C33] w-10 h-10 transform cursor-pointer grid place-items-center",
        "border border-border rounded-xl",
        "hover:scale-110 transition-all duration-200"
      )}
      style={{ background: `${bgColor || "#2D2C33"}` }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="w-[27px] h-[27px] flex items-center justify-center">
        {image && image !== "" ? (
          typeof image === "string" || (image as any)?.src ? (
            <Image
              src={image as string | StaticImport}
              alt={title}
              className="w-full h-full overflow-clip object-contain"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              {image as ReactElement}
            </div>
          )
        ) : (
          <span className="text-white font-bold text-xs">
            {getDisplayText(title)}
          </span>
        )}
      </div>
      {/*Title*/}
      {active ? (
        <div className="absolute -top-6 bg-black/[0.2] py-0.5 px-1.5 rounded-2xl backdrop-blur-[6px] transition-all duration-200">
          <p className="font-pixel text-[10px] whitespace-nowrap">{title}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Tooltip;
