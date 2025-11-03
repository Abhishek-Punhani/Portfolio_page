declare module "react-water-wave" {
  import { ComponentType, ReactNode } from "react";

  interface WaterWaveProps {
    children: ReactNode;
    imageUrl?: string;
    dropRadius?: number;
    perturbance?: number;
    resolution?: number;
    interactive?: boolean;
    crossOrigin?: string;
  }

  const WaterWave: ComponentType<WaterWaveProps>;
  export default WaterWave;
}
