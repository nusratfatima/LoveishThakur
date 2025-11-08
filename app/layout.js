import { Suspense } from "react";
import { AppHeader, AppFooter, AppMetadata } from "@/components";
import Loading from "@/app/loading";
import "@/styles/globals.css";
import { ThemeContext } from "@/context";
import Particles from "@/components/particles";
import { Analytics } from "@vercel/analytics/react";

// Use system Avenir instead of local font
const avenir = {
  className: "font-avenir",
};

// Destructure colorScheme out of AppMetadata so it won't be included in metadata
const { colorScheme, ...restMetadata } = AppMetadata;

export const metadata = {
  ...restMetadata,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 👇 Apply Avenir font globally */}
      <body className={`${avenir.className}`}>
        <ThemeContext>
          <AppHeader />
          {children}
          <Analytics />
          <AppFooter />
        </ThemeContext>
      </body>
    </html>
  );
}
