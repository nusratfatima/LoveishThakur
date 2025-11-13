"use client";

import { useRef } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, useInView } from "framer-motion";

export default function VideoSection() {
  const videoRef = useRef(null);
  const isInView = useInView(videoRef, { once: true });

  const buttonStyle = {
    opacity: isInView ? 1 : 0,
    transform: isInView ? "none" : "translateY(-20px)",
    transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
  };

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={videoRef}
        className="relative w-full h-screen aspect-[2.34] overflow-hidden"
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/Video2.mp4"
          poster="/fallback.jpg"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent z-10" />

        <div
          style={buttonStyle}
          className="absolute top-1/2 left-1/2 transform -translate-y-1/2 z-20 ml-[-3rem] mt-[-2rem]"
        >
          <Link
            href="https://drive.google.com/drive/folders/1EerP0Y-SVGhSdfymOisKgSGdA6BWEaXT"
            className="px-6 py-3 bg-[#3971b8] text-[#fbfcee] font-bold rounded-lg shadow-lg hover:bg-[#2f5a92] transition-colors"
          >
            EXPLORE MY PORTFOLIO
          </Link>
        </div>
      </section>
    </LazyMotion>
  );
}
