"use client";
import { useRef, useState, useEffect } from "react";

export default function IntroSection() {
  const videoRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative w-screen h-screen mt-0"
      style={{ fontFamily: "Avenir, sans-serif" }}
    >
      <video
        ref={videoRef}
        src="/MainVideo.mp4"
        className="w-full h-full object-cover"
        controls={false}
        autoPlay
        muted
        playsInline
      />

      {showButton && (
        <a
          href="/CV_LAVISH_NEW_2.pdf"
          download
          className="absolute bottom-20 left-[32%] transform -translate-x-1/2 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition z-50"
          style={{ fontFamily: "Avenir, sans-serif" }}
        >
          DOWNLOAD RESUME
        </a>
      )}
    </section>
  );
}
