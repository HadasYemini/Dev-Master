
interface VideoPlayerProps {
  src: string;
  width?: string;
  height?: string;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export default function VideoPlayer({
  src,
  width = "640px",
  height = "360px",
  autoPlay = false,
  controls = true,
  loop = false,
  muted = false,
}: VideoPlayerProps) {
  return (
    <div>
      <video
        width={width}
        height={height}
        src={src}
        autoPlay={autoPlay}
        controls={controls}
        loop={loop}
        muted={muted}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
