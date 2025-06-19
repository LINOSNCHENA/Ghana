// components/VideoPlayer.tsx
import React from "react";

interface VideoPlayerProps {
  src: string;
  type?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  width?: string;
  height?: string;
  poster?: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  type = "video/mp4",
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  width = "100%",
  height = "auto",
  poster,
  className = "",
}) => {
  return (
    <video className={className} width={width} height={height} controls={controls} autoPlay={autoPlay} loop={loop} muted={muted} poster={poster}>
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
