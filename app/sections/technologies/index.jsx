"use client"; 
import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, fadeInDown } from "./technologies-animation.js";

const techLogos = [
  { name: "Adobe After Effects", src: "/logos/Adobe After Effects.png" },
  { name: "Adobe Illustrator", src: "/logos/Adobe Ai.png" },
  { name: "Adobe Photoshop", src: "/logos/Adobe photoShop.png" },
  { name: "Adobe Premiere Pro", src: "/logos/Adobe Premiere pro.png" },
  { name: "DaVinci Resolve", src: "/logos/DaVinchi ReSolve.png" },
  { name: "FL Studio", src: "/logos/Fl Studio.png" },
  { name: "MidJourney", src: "/logos/MIdJourney.png" },
  { name: "Runway", src: "/logos/RunWay.png" },
  { name: "Vegas Pro", src: "/logos/Vegas Pro.png" },
];

export default function TechnologiesSection() {
  return (
    <motion.section
      className="py-20 bg-[#fbfcee] text-[#3971b8] font-[avenir]"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        variants={fadeInDown}
      >
        SOFTWARE's I'M SKILLED AT
      </motion.h2>

      <motion.div
        className="flex justify-center gap-4 flex-wrap"
        variants={containerVariants}
      >
        {techLogos.map((tech, index) => (
          <motion.div
            key={index}
            className="flex-1 min-w-[80px] max-w-[120px] h-32 flex flex-col items-center justify-center bg-[#fbfcee] text-[#3971b8] rounded-xl shadow-[6px_6px_15px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform font-[avenir]"
            variants={itemVariants}
          >
            <Image
              src={tech.src}
              alt={tech.name}
              width={60}
              height={60}
              className="object-contain"
            />
            <p className="mt-2 text-xs font-medium text-center">{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
