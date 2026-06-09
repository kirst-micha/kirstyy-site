import type { Metadata } from "next";
import "./globals.css";
import MouseGlow from "./MouseGlow";
import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kirsten Michaela",
  description: "A little bit of Kirsten",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ebGaramond.variable}>
      <body>
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}