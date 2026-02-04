import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import videoPoster from "../../../../assets/images/thumbnail_trepto.png";
import tradeVideo from "../../../../assets/videos/trading_video.mp4";

const VideoComponent = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Lazy load video only when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  // Show play button if not playing, show pause if playing AND hovered
  const showOverlayButton = !isPlaying || (isPlaying && isHovered);

  return (
    <section className="w-full bg-background pb-10 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-6">
        <div
          ref={containerRef}
          className="relative rounded-2xl overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Video */}
          {isVisible && (
            <video
              ref={videoRef}
              className="w-full h-[220px] sm:h-[360px] lg:h-[480px] object-cover"
              poster={videoPoster}
              preload="metadata"
              onEnded={() => setIsPlaying(false)}
              // Listen for Play and Pause events to track correct state
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={tradeVideo} type="video/mp4" />
            </video>
          )}

          {/* Overlay Play / Pause */}
          {showOverlayButton && (
            <button
              onClick={togglePlay}
              className="
                absolute inset-0
                flex items-center justify-center
                bg-black/30 hover:bg-black/40
                transition
              "
              aria-label={isPlaying ? "Pause video" : "Play video"}
              tabIndex={0}
              style={{
                transition: "background 0.2s",
                cursor: "pointer"
              }}
            >
              <div className="
                w-16 h-16 sm:w-18 sm:h-18
                flex items-center justify-center
                rounded-full
                bg-white
                shadow-lg
              ">
                {isPlaying ? (
                  <FaPause className="text-primary text-xl" />
                ) : (
                  <FaPlay className="text-primary text-xl ml-1" />
                )}
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoComponent;
