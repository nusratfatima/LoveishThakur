const author = "Niranjan Patil";
const description =
  "Software developer from Moldova, Republic of, who loves to develop beautiful websites, single page applications, customer relationship management or code from scratch using React and Next.js";
const url = "https://niranjann.tech";

export const AppMetadata = {
  metadataBase: new URL("https://niranjann.tech/"),
  title: {
    default: `Portfolio | ${author}`,  // author must be defined before use
    template: `%s | ${author}`,
  },
  description: description,
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "Niranjan Patil",
    "Niranjan Patil - software developer",
    "Frontend developer",
    "Flutter developer",
    "Portfolio website",
    "Frontend Developer Portfolio",
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
        url: "https://niranjann.tech",
        width: 800,
        height: 600,
        alt: "My personal portfolio website",
      },
      {
        url: "https://niranjann.tech",
        width: 1800,
        height: 1600,
        alt: "My personal portfolio website",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};
