"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "@/components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <LazyMotion features={domAnimation}>
            <section id="about" className="section">
                <TimeLine className="pt-10" />
                <div className="pt-20"></div> {/* Added space here */}
                <HeadingDivider title="About me" />
                <div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
                    <div
                        tabIndex="0"
                        ref={ref}
                        className="text-xl font-light leading-relaxed"
                        style={{
                            transform: isInView ? "none" : "translateX(-200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                    >
                        <p>
                            Hi, I'm Niranjan Patil — a passionate developer skilled in Next.js, Java, AI/ML, Cloud, and DevOps.
                        </p>
                        <p className="my-3.5">
                            I’m currently pursuing AIML Engineering at Mumbai University and hold a Diploma in Computer Engineering from Pune University.
                        </p>
                        <p>
                            With hands-on experience in software development, AI model building, MLOps, and cloud-native applications, I enjoy creating intelligent, scalable solutions that solve real-world problems.
                        </p>
                        <p className="my-3.5">
                            I've led projects that integrate Generative AI, personalized AI agents, and automation pipelines, merging technical skills with leadership.
                        </p>
                        <p>
                            Currently, I’m refining my expertise in Cloud & DevOps for AI workflows and exploring multi-modal AI technologies.
                        </p>
                        <p className="my-3.5">
                            I'm always open to collaborations on impactfull tech projects. Let’s innovate together!
                        </p>
                    </div>
                </div>
            </section>
        </LazyMotion>
    );
}
