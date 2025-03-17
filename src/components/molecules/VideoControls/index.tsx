import React, { FC, useState, useEffect } from "react";

interface VideoControlsProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
}

const VideoControls: FC<VideoControlsProps> = ({ videoRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    if (videoElement) {
      videoElement.addEventListener("play", handlePlay);
      videoElement.addEventListener("pause", handlePause);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("play", handlePlay);
        videoElement.removeEventListener("pause", handlePause);
      }
    };
  }, [videoRef]);

  const handlePlayPause = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }
  };

  return (
    <div className="bg-white z-[70] mb-8">
      <button onClick={handlePlayPause} className="bg-white">
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default VideoControls;
