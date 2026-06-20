import type { Metadata } from "next";

const PLAY_DESCRIPTION =
  "Explore a new world where adventure, discovery, and onchain gaming converge. Norien is an upcoming open-world adventure built on Base.";

const PLAY_OG_IMAGE = "https://play.norien.live/og/play-og.png";

export const metadata: Metadata = {
  title: "Norien — Coming Soon",
  description: PLAY_DESCRIPTION,
  alternates: { canonical: "https://play.norien.live" },
  openGraph: {
    title: "Norien — Coming Soon",
    description: PLAY_DESCRIPTION,
    url: "https://play.norien.live",
    type: "website",
    siteName: "Norien",
    images: [{ url: PLAY_OG_IMAGE, width: 1200, height: 675, alt: "Norien — Coming Soon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Norien — Coming Soon",
    description: PLAY_DESCRIPTION,
    images: [PLAY_OG_IMAGE],
  },
};

export default function PlayLayout({ children }: { children: React.ReactNode }) {
  return children;
}
