import type { Metadata, Viewport } from "next";
import "./globals.css";
import IconSprite from "@/components/IconSprite";

export const metadata: Metadata = {
  metadataBase: new URL("https://norien.live"),
  title: "Norien — Build a Living World",
  description:
    "Norien is a persistent strategy world where kingdoms rise, trade shapes power, and every decision leaves a lasting legacy.",
  openGraph: {
    title: "Norien — Build a Living World",
    description:
      "Norien is a persistent strategy world where kingdoms rise, trade shapes power, and every decision leaves a lasting legacy.",
    url: "https://norien.live",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#05101f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <IconSprite />
        {children}
      </body>
    </html>
  );
}
