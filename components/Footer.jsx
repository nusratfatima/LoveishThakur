"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { Mail, Linkedin, Instagram, Phone } from "lucide-react";

export function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <LazyMotion features={domAnimation}>
      <footer
        className="container-md py-10 relative font-[avenir] before:absolute before:top-0 before:left-4 before:w-[calc(100%-16px)] before:h-[1px] before:bg-gray-100 px-4 md:px-6"
        style={{
          backgroundColor: "#3971b8",
          color: "#fbfcee",
        }}
      >
        <div className="flex flex-col md:flex-row justify-start items-center gap-10 md:gap-5">
          <p className="font-light" style={{ color: "#fbfcee" }}>
            Copyright &copy; {year} Nusrat Fatima
          </p>
          <p className="font-light"
            style={{
            color: "#fbfcee",
            paddingRight: "25rem", // roughly 13 spaces worth
            }}
          ></p>
          <div className="flex flex-col md:flex-row items-center gap-5 text-sm">
            <a
              href="mailto:loveishvfx@gmail.com"
              className="flex items-center gap-2 hover:underline"
              style={{ color: "#fbfcee" }}
            >
              <Mail size={18} /> loveishvfx@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/loveishvfx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
              style={{ color: "#fbfcee" }}
            >
              <Linkedin size={18} /> Linkedin
            </a>

            <a
              href="https://www.instagram.com/loveishvfx/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
              style={{ color: "#fbfcee" }}
            >
              <Instagram size={18} /> Instagram
            </a>

            <a
              href="tel:+917669928801"
              className="flex items-center gap-2 hover:underline"
              style={{ color: "#fbfcee" }}
            >
              <Phone size={18} /> +91 76699 28801
            </a>
          </div>
        </div>
      </footer>
    </LazyMotion>
  );
}
