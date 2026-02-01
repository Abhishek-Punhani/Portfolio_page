import Image from "next/image";
import MyImage from "@/public/assets/images/me/me.jpg";
export default function Profile() {
  return (
    <div className="flex items-center gap-x-2 transition-colors duration-75 text-primary-foreground">
      {/*Photo*/}
      <div className="relative w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] rounded-full flex items-center justify-center bg-gradient-to-r from-blue-joust to-green-benzol">
        <Image
          src={MyImage}
          alt="Mohamed hajji photo"
          className="w-[55px] h-[55px] sm:w-[75px] sm:h-[75px] md:w-[95px] md:h-[95px] border-[0.2vw] border-blue-cosmos rounded-full object-cover"
        />
        {/*Online*/}
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-benzol border border-blue-cosmos absolute right-0 bottom-3 sm:bottom-5"></div>
      </div>
      {/*Name*/}
      <div className="text-xl sm:text-2xl md:text-3xl font-medium">
        ABHISHEK
      </div>
    </div>
  );
}
