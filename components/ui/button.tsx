import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  link?: string;
  IsIcon?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = ({ link, children, IsIcon, className }) => {
  return (
    <>
      {link ? (
        <Link href={link} target="_blank" className="w-10 h-10 cursor-pointer">
          <ButtonBody className={className} IsIcon={IsIcon}>
            {children}
          </ButtonBody>
        </Link>
      ) : (
        <ButtonBody className={className} IsIcon={IsIcon}>
          {children}
        </ButtonBody>
      )}
    </>
  );
};

interface ButtonBodyProps {
  children: ReactNode;
  IsIcon?: boolean;
  className?: string;
}

const ButtonBody: FC<ButtonBodyProps> = ({ children, IsIcon, className }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2 bg-primary-background rounded-full select-none whitespace-nowrap text-primary-foreground text-sm font-medium hover:bg-white/[0.1] transition-colors duration-200",
        className,
        IsIcon ? "h-10 w-10" : "h-full w-max px-3 py-2"
      )}
    ></div>
  );
};
