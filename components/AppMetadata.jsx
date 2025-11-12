const author = "Lavish Thakur";
const description =
  "VFX artist and creative designer who brings cinematic visuals to life through motion, compositing, and storytelling. Experienced in blending art and technology to craft compelling digital experiences.";
const url = "https://loveishvfx.in";

export const AppMetadata = {
  metadataBase: new URL("https://loveishvfx.in/"),
  title: {
    default: `Portfolio | ${author}`,
    template: `%s | ${author}`,
  },
  description: description,
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "Lavish Thakur",
    "Lavish Thakur - VFX Artist",
    "Motion Designer",
    "Cinematic Visual Effects",
    "VFX Portfolio",
    "Visual Artist Portfolio",
  ],
  creator: author,
  authors: [{ name: author, url: url }],
  openGraph: {
    title: `${author} | Portfolio`,
    description: description,
    url: url,
    siteName: `${author} | Portfolio`,
    images: [
      {
        url: "https://loveishvfx.in/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Lavish Thakur Portfolio Preview",
      },
      {
        url: "https://loveishvfx.in/og-image.jpg",
        width: 1800,
        height: 1600,
        alt: "Lavish Thakur Portfolio Preview",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};
