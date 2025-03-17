import React from "react";
import VideoControls from "../VideoControls";
import video from "../../../assets/videos/hero-video.mp4";

interface BackgroundVideoProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ videoRef }) => {
  console.log('Video source:', video);
  console.log('Video ref:', videoRef);
  return (
    <div>
      <div className="relative w-full h-[864px] overflow-hidden z-[-1]">
        <video autoPlay muted loop ref={videoRef} className="w-full">
          <source
            src={video}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute top-[20%] left-0 right-0 max-w-cappedWidth mx-auto mt-[220px]  z-70">
        <div className=" flex justify-between items-center mx-[72px]">
          <div>
            <div>Stella</div>
            <div>Stella</div>
            <div>Stella</div>
            <div>Stella</div>
            <div>Stella</div>
          </div>
          <VideoControls videoRef={videoRef} />
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
