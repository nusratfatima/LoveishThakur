"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function MoviesSection() {
  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true });

  // Bollywood movies (landscape)
  const bollywood = [
    { id: 1, src: "/movies/tereishqmein.PNG" },
    { id: 2, src: "/movies/Ik Kudi.png" },
    { id: 3, src: "/movies/homebound.jpg" },
    { id: 4, src: "/movies/SZP-16x9-Main-open-digital.jpg" },
    { id: 5, src: "/movies/RRPKR.jpg" },
    { id: 6, src: "/movies/tp.jpg" },
    { id: 7, src: "/movies/16-x-9_IB-71_Ensemble.jpg" },
    { id: 8, src: "/movies/Bheed.jpg" },
    { id: 9, src: "/movies/SV.png" }
  ];

  // Hollywood movies (portrait)
  const hollywood = [
    { id: 1, src: "/movies/Beetlejuice-Beetlejuice.jpg" },
    { id: 2, src: "/movies/Blink-Twice.jpg" },
    { id: 3, src: "/movies/Joker.jpg" },
    { id: 4, src: "/movies/Superman-2025.jpg" },
    { id: 5, src: "/movies/Trap.jpg" },
    { id: 6, src: "/movies/Twisters.jpg" },
    { id: 7, src: "/movies/The-Lord-of-the-Rings-The-War-of-the-Rohirrim.jpg" },
    { id: 8, src: "/movies/The-Watchers.jpg" }
  ];

  return (
    <section
      id="movies"
      className="section overflow-hidden py-16 font-[avenir-light]"
      style={{ backgroundColor: "#fbfcee" }}
    >
      <h2
        className="text-3xl font-bold text-center mb-8"
        style={{ color: "#3971b8" }}
      >
        MOVIES I HAVE CONTRIBUTED TO THROUGHOUT MY CAREER
      </h2>

      <p
        ref={textRef}
        tabIndex="0"
        className="my-4 text-2xl text-center"
        style={{
          color: "#3971b8",
          transform: isTextInView ? "none" : "translateX(-200px)",
          opacity: isTextInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      />

      {/* Bollywood Row (Ping-pong: Left ↔ Right) */}
      <div className="w-full py-2 overflow-hidden">
        <div
          className="flex whitespace-nowrap gap-2"
          style={{
            animation: "pingpong-ltr 40s ease-in-out infinite",
          }}
        >
          {bollywood.concat(bollywood).map((work, i) => (
            <div key={i} className="inline-block">
              <div className="w-72 h-40 rounded-xl overflow-hidden shadow-lg bg-white">
                <img
                  src={work.src}
                  alt=""
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hollywood Row (Ping-pong: Right ↔ Left) */}
      <div className="w-full py-2 overflow-hidden">
        <div
          className="flex whitespace-nowrap gap-2"
          style={{
            animation: "pingpong-rtl 40s ease-in-out infinite",
          }}
        >
          {hollywood.concat(hollywood).map((work, i) => (
            <div key={i} className="inline-block">
              <div className="w-40 h-60 rounded-xl overflow-hidden shadow-lg bg-white">
                <img
                  src={work.src}
                  alt=""
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ping-pong keyframes */}
      <style jsx>{`
        @keyframes pingpong-ltr {
          0% {
            transform: translateX(-50%);
          }
          50% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes pingpong-rtl {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}