"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, duration: 1.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: "easeOut" } },
};

const experiences = [
  {
    role: "Associate Lead - (Present)",
    company: "Motion Graphics Artist | The Small Big Idea",
    duration: "",
    description: `I have driven creative initiatives for leading brands such as AGL Tiles, Colors, Zee TV, Zee Cinema, Sony Pictures India, Disney India, Jio Cinema, Ajay Devgn Films, Chrome Pictures, Warner Bros India, Warner Bros., Sony LIV, and more.
I have successfully spearheaded the creative visuals for five Bollywood and eight Hollywood movie campaigns including Salaam Venky, Bheed, IB 71, Rocky Aur Rani Ki Prem Kahani, Trial Period, The Watchers, Twisters, Trap, Blink Twice, Joker: Folie à Deux, Beetlejuice Beetlejuice, The Lord of the Rings: The War of the Rohirrim, and Superman (2025), contributing to their visual success and market impact.`,
    tech: "Motion Graphics, Visual Design, Brand Campaigns, Film Marketing",
  },
  {
    role: "Sr. Graphic Designer & Video Editor",
    company: "FullStop Entertainment",
    duration: "2020 – 2022",
    description: `Created and edited videos, ads, promos, and brand videos for R Adda, Toy Room Mumbai, Diablo, LOTD, The Game Palacio, Dragonfly, Snow World, and more. Worked on 20 masterclass videos for the brand Bliss GenX, successfully delivering each video within 3-4 hours from scratch.`,
    tech: "Video Editing, Graphic Design, Brand Videos, Content Creation",
  },
  {
    role: "Sr. Video Editor",
    company: "Sumit Khetan Entertainment Co.",
    duration: "2018 – 2020",
    description: `Worked as a Social Media Designer, Console Manager, and Audio & Video Editor. Designed social media posts for the company's official page, shot behind-the-scenes content, edited wedding showreels, and created motion presentations for pitches.`,
    tech: "Social Media Design, Video Editing, Motion Graphics, Content Management",
  },
  {
    role: "Freelancer Video Editor",
    company: "Independent",
    duration: "2017 – 2018",
    description: `Created video and poster edits for dance companies and YouTubers including Lavee Singh Dance Company, Snacks Gaming, and more. Edited two cover songs for a Punjabi singer. Designed logo animations for brands such as Snacks Gaming, Kraken Gaming, and others.`,
    tech: "Video Editing, Logo Animation, Music Editing, Brand Design",
  },
];

export default function ExperianceSection() {
  return (
    <motion.section
      className="py-16 font-[avenir]"
      style={{ backgroundColor: "#3971b8" }}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-3xl font-semibold text-center mb-12"
        style={{ color: "#fbfcee" }}
        variants={fadeInUp}
      >
        EXPERIENCE
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        <div
          className="absolute left-1/2 top-0 h-full -translate-x-1/2"
          style={{ borderLeft: "2px solid #fbfcee" }}
        />

        {experiences.map((exp, index) => {
          const isLeftSide = index % 2 === 0;
          const isRightAlignedHeading =
            exp.company.includes("Small Big Idea") ||
            exp.company.includes("Sumit Khetan");

          return (
            <motion.div
              key={index}
              className="mb-12 flex justify-between items-start w-full"
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {isLeftSide ? (
                <>
                  <div
                    className="w-5/12 text-right pr-6 text-justify whitespace-pre-line"
                    style={{ color: "#fbfcee" }}
                  >
                    {/* Heading */}
                    <div
                      className={`${
                        isRightAlignedHeading
                          ? "text-right mr-0"
                          : "text-right mr-[-10px]"
                      }`}
                    >
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="italic opacity-80">{exp.company}</p>
                    </div>

                    {exp.duration && (
                      <p className="text-sm mb-2 opacity-90">{exp.duration}</p>
                    )}
                    <p className="opacity-90 leading-relaxed">{exp.description}</p>
                    <p className="mt-2 text-xs opacity-80 italic">{exp.tech}</p>
                  </div>

                  <motion.div
                    className="flex items-center justify-center w-10 h-10 rounded-full"
                    style={{ backgroundColor: "#fbfcee", color: "#3971b8" }}
                    variants={scaleIn}
                  >
                    <Star size={18} />
                  </motion.div>

                  <div className="w-5/12"></div>
                </>
              ) : (
                <>
                  <div className="w-5/12"></div>

                  <motion.div
                    className="flex items-center justify-center w-10 h-10 rounded-full"
                    style={{ backgroundColor: "#fbfcee", color: "#3971b8" }}
                    variants={scaleIn}
                  >
                    <Star size={18} />
                  </motion.div>

                  <div
                    className="w-5/12 pl-6 text-justify whitespace-pre-line"
                    style={{ color: "#fbfcee" }}
                  >
                    {/* Heading */}
                    <div
                      className={`${
                        isRightAlignedHeading
                          ? "text-right mr-0"
                          : "text-left ml-[-10px]"
                      }`}
                    >
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="italic opacity-80">{exp.company}</p>
                    </div>

                    {exp.duration && (
                      <p className="text-sm mb-2 opacity-90">{exp.duration}</p>
                    )}
                    <p className="opacity-90 leading-relaxed">{exp.description}</p>
                    <p className="mt-2 text-xs opacity-80 italic">{exp.tech}</p>
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
