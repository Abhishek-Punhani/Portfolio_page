"use client";
import { FC, ReactNode, useState, useEffect } from "react";
import dynamic from "next/dynamic";

interface WaterWaveProps {
  imageUrl: string;
  dropRadius: string;
  perturbance: string;
  resolution: string;
  children: () => ReactNode;
}

// Dynamically import WaterWave to avoid SSR issues
const WaterWave = dynamic(() => import("react-water-wave"), {
  ssr: false,
  loading: () => null,
}) as any;

const WaterWaveWrapper: FC<WaterWaveProps> = ({
  imageUrl,
  dropRadius,
  perturbance,
  resolution,
  children,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Render children directly during SSR and initial mount
  if (!isMounted) {
    return <>{children()}</>;
  }

  return (
    <WaterWave
      imageUrl={imageUrl}
      dropRadius={dropRadius}
      perturbance={perturbance}
      resolution={resolution}
    >
      {children}
    </WaterWave>
  );
};

export default WaterWaveWrapper;
