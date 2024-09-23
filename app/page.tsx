"use client";
import FeaturedSection from "@/components/sections/FeauturedSection/Feautured";
import Landing from "@/components/sections/LandingSection/Landing";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      perturbance="3"
      dropRadius="3"
      resolution="2048"
    >
      {() => (
        <div className="p-5">
          <Landing />
          <FeaturedSection />
        </div>
      )}
    </WaterWaveWrapper>
  );
}
