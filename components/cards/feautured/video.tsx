import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const Video = ({
  video,
  active = false,
}: {
  video: string;
  active?: boolean;
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (active) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [active]);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 rounded-2xl overflow-hidden">
      <video
        src={video}
        ref={videoRef}
        loop={active}
        muted
        className={cn(
          "h-full w-full object-cover rounded-2xl transition-all duration-300 group-hover:scale-110",
          active ? "" : "grayscale group-hover:grayscale-0"
        )}
      />
    </div>
  );
};

export default Video;
