"use client";

import moment from "moment-timezone";
import { FC, useEffect, useState } from "react";

interface LiveClockProps {
  timeZone: string;
}
// Asia/Kolkata
const LiveClock: FC<LiveClockProps> = ({ timeZone }) => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const currentTime = moment().tz(timeZone).format("HH:mm");
      setTime(currentTime);
    };

    const intervalId = setInterval(updateClock, 1000);
    //cleanup interval after use
    return () => clearInterval(intervalId);
  }, [timeZone]);
  return (
    <div className=" flex items-center justify-center gap-[0.5vw] text-3xl text-secondary-background font-semibold">
      {time ? (
        <div className="flex items-center justify-center gap-[0.5vw]">
          <span>{timeZone.split("/")[1]}</span>
          <span>{time}</span>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};
