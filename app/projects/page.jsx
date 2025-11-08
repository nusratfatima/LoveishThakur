"use client";

import Link from "next/link";
import Image from "next/image";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS.",
    image: "/projects/portfolio.png",
    github: "https://github.com/yourusername/portfolio",
    link: "https://yourportfolio.com",
    video: "/videos/demo.mp4", // put file at /public/videos/demo.mp4 (or swap to a public mp4 URL)
    embed: false,
  },
  {
    name: "E-commerce App",
    description: "Full-stack e-commerce application with payments.",
    image: "/projects/ecommerce.png",
    github: "https://github.com/yourusername/ecommerce",
    link: "https://ecommerce-demo.com",
    video: "https://www.youtube.com/embed/gwUwMz0ffdA", // YouTube embed URL
    embed: true,
  },
  {
    name: "Weather App",
    description: "Weather app using OpenWeather API.",
    image: "/projects/weather.png",
    github: "https://github.com/yourusername/weather",
    link: "https://weather-demo.com",
  },
];

// Image / MP4 / YouTube
function ProjectMedia({ image, video, embed }) {
  if (video && embed) {
    return (
      <div className="relative h-36 md:h-44">
        <iframe
          src={video}
          title="YouTube Video"
          className="absolute inset-0 w-full h-full rounded-t-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
    );
  }

  if (video && !embed) {
    return (
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-36 md:h-44 object-cover rounded-t-lg"
      />
    );
  }

  return (
    <div className="relative h-36 md:h-44">
      <Image
        src={image || "https://via.placeholder.com/400x250.png?text=Project+Image"}
        alt="project image"
        fill
        style={{ objectFit: "cover" }}
        className="rounded-t-lg"
        sizes="(max-width: 768px) 100vw, 280px"
      />
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-10 px-4 md:px-10 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>

      {/* Horizontal scroll wrapper */}
      <div className="relative w-full overflow-x-auto">
        <div className="flex gap-4 snap-x snap-mandatory scroll-pl-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-none w-[250px] md:w-[280px] snap-center bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <Link href={project.link} target="_blank" className="block">
                <ProjectMedia
                  image={project.image}
                  video={project.video}
                  embed={project.embed}
                />
              </Link>

              <div className="p-3">
                <h5 className="mb-1 text-lg font-semibold text-gray-800">
                  {project.name}
                </h5>
                <p className="mb-3 text-gray-600 text-xs">{project.description}</p>
                <div className="flex items-center space-x-3">
                  <Link href={project.github} target="_blank" aria-label="GitHub">
                    <BsGithub size={18} className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                  </Link>
                  <Link href={project.link} target="_blank" aria-label="Open project">
                    <BsArrowUpRightSquare size={18} className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
