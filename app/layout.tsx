import type { Metadata, Viewport } from "next";
import "./globals.css";
import IconSprite from "@/components/IconSprite";

const SITE_DESCRIPTION =
  "Norien is a persistent strategy world where kingdoms rise, trade shapes power, and every decision leaves a lasting legacy.";

export const metadata: Metadata = {
  metadataBase: new URL("https://norien.live"),
  title: "Norien — Build a Living World",
  description: SITE_DESCRIPTION,
  // app/favicon.ico is auto-injected by the file convention; these add the
  // PNG sizes, the full-res logo, and the Apple touch icon.
  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/logo.png", type: "image/png", sizes: "500x500" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Norien — Build a Living World",
    description: SITE_DESCRIPTION,
    url: "https://norien.live",
    type: "website",
    siteName: "Norien",
    images: [
      {
        url: "https://norien.live/og/norien-og.png",
        width: 1200,
        height: 675,
        alt: "Norien — Build Kingdoms. Shape Trade. Leave A Legacy.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Norien — Build a Living World",
    description: SITE_DESCRIPTION,
    images: ["https://norien.live/og/norien-og.png"],
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
