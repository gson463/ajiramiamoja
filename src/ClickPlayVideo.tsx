import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  poster: string;
  title: string;
  activeId: string | null;
  id: string;
  onActivate: (id: string | null) => void;
};

export default function ClickPlayVideo({
  src,
  poster,
  title,
  activeId,
  id,
  onActivate,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const isActive = activeId === id;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!isActive) {
      video.pause();
    }
  }, [isActive]);

  async function play() {
    const video = videoRef.current;
    if (!video) return;
    onActivate(id);
    setStarted(true);
    try {
      await video.play();
    } catch {
      // Browser may block autoplay-with-sound until gesture; click is the gesture.
    }
  }

  function onPause() {
    if (activeId === id) onActivate(null);
  }

  return (
    <figure className="clip">
      <div className="clip__frame">
        <video
          ref={videoRef}
          className="clip__video"
          src={src}
          poster={poster}
          controls={started}
          playsInline
          preload="metadata"
          onPause={onPause}
          onEnded={() => onActivate(null)}
        />
        {!started && (
          <button
            type="button"
            className="clip__play"
            onClick={play}
            aria-label={`Cheza video: ${title}`}
          >
            <span className="clip__play-icon" aria-hidden="true" />
            <span className="clip__play-label">Bofya kucheza</span>
          </button>
        )}
      </div>
      <figcaption className="clip__caption">
        <strong>{title}</strong>
      </figcaption>
    </figure>
  );
}
