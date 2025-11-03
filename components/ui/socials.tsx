import Button from "./button";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa6";

export default function Socials() {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {socials.map((social, i) => (
        <Button key={i} link={social.link} isIcon>
          <span className="w-7 h-7 grid place-items-center">{social.icon}</span>
        </Button>
      ))}
    </div>
  );
}

const socials = [
  {
    icon: <FaGithub className="w-5 h-5" />,
    link: "https://github.com/Abhishek-Punhani",
    username: "Abhishek-Punhani",
  },
  {
    icon: <FaLinkedinIn className="w-5 h-5" />,
    link: "https://www.linkedin.com/in/abhishek-punhani/",
    username: "Abhishek-Punhani",
  },
  {
    icon: <FaInstagram className="w-5 h-5" />,
    link: "https://www.instagram.com/manavpunhani/",
    username: "Abhishek-Punhani",
  },
];
