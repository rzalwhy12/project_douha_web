"use client";

import { useEffect, useRef, useState } from "react";

const VIDEOS = [
  "/foto-video/IMG_2273.mp4",
  "/foto-video/IMG_2272.mp4",
  "/foto-video/IMG_2107.mp4",
];

export default function HeroVideoBackground() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState([true, false, false]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([null, null, null]);

  const switchToNext = () => {
    const next = (current + 1) % VIDEOS.length;

    // Start playing next video
    const nextVideo = videoRefs.current[next];
    if (nextVideo) {
      nextVideo.currentTime = 0;
      nextVideo.play().catch(() => {});
    }

    // Fade: show next, fade out current
    setVisible(VIDEOS.map((_, i) => i === next || i === current));

    // After crossfade, hide the old one
    setTimeout(() => {
      setVisible(VIDEOS.map((_, i) => i === next));
      setCurrent(next);
    }, 1000);
  };

  useEffect(() => {
    // Auto-play first video
    const first = videoRefs.current[0];
    if (first) {
      first.play().catch(() => {});
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      {VIDEOS.map((src, i) => (
        <video
          key={src}
          ref={(el) => { videoRefs.current[i] = el; }}
          src={src}
          muted
          playsInline
          preload="auto"
          onEnded={i === current ? switchToNext : undefined}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: visible[i] ? 1 : 0 }}
        />
      ))}

      {/* Dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.82) 0%, rgba(10,0,0,0.75) 50%, rgba(0,0,0,0.88) 100%)",
        }}
      />
      {/* Red glow accent */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 50%, rgba(180,0,0,0.5) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
