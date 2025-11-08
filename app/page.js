"use client";

import {
  IntroSection,
  ExperianceSection,
  TechnologiesSection,
  BrandSection,
  MoviesSection,
  VideoSection,
} from "./sections";

export default function Page() {
  return (
    <div className="container-md">
      <IntroSection />
      <ExperianceSection />
      <TechnologiesSection />
      <BrandSection />
      <VideoSection />
      <MoviesSection />
    </div>
  );
}
