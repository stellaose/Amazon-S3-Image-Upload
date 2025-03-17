import BackgroundVideo from "../../../molecules/BackgroundVideo";
import { FC, useRef } from "react";

const LandingHero: FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  return (
    <>
      <BackgroundVideo videoRef={videoRef} />
    
    </>
  );
};

export default LandingHero;
