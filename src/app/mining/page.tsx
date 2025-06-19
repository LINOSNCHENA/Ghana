import React from "react";

interface VideoPlayerProps {
  src: string; // video source URL
  type?: string; // e.g., "video/mp4"
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  width?: string;
  height?: string;
  poster?: string; // thumbnail before play
  className?: string; // optional custom class
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
    <video
      className={className}
      width={width}
      height={height}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      poster={poster}
    >
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
