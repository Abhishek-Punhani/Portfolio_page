import Image from "next/image";
import Card from "../ui/card";
import SignatureImg from "@/public/assets/images/me/signature.png";
import Button from "../ui/button";
import { FaDownload } from "react-icons/fa";
import Socials from "../ui/socials";
export default function ResumeCard() {
  return (
    <Card className="md:h-full ">
      <p className="text-lg xl:text-2xl font-medium text-gray-100">
        Passionate full-stack developer and tech enthusiast with expertise in
        modern web technologies, blockchain, and system design. Armed with a
        strong foundation in DSA, OS, and networks, I build scalable
        applications using MERN, Next.js, Flask, Django, and more. From
        algorithmic trading platforms to predictive models and on-chain games, I
        turn ideas into robust solutions. Let&apos;s innovate and build the
        future together! 🚀💻
      </p>
      {/*Signature*/}
      <div>
        <Image src={SignatureImg} alt="mohamed hajji" />
      </div>
      {/*Socials and resume btn*/}
      <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
        {/*Socials*/}
        <Socials />
        <a
          href="https://drive.google.com/file/d/12SFp5DKcm9XnHfJZMbfiYoFf1BjVRxH8/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <FaDownload />
            Resume
          </Button>
        </a>
      </div>
    </Card>
  );
}
