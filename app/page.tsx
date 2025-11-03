"use client";
import AboutSection from "@/components/sections/AboutSection/about";
import ContactSection from "@/components/sections/ContactSection/contact";
import FeaturedSection from "@/components/sections/FeauturedSection/Feautured";
import Landing from "@/components/sections/LandingSection/Landing";

export default function Home() {
  return (
    <div className="p-5">
      <Landing />
      <FeaturedSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
