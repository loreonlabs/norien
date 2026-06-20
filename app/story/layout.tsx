import type { Metadata } from "next";
import StoryShell from "@/components/story/StoryShell";

const STORY_DESCRIPTION =
  "Explore the history, legends, ages, and world archive of Norien.";

const STORY_OG_IMAGE = "https://story.norien.live/og/chronicles-og.png";

export const metadata: Metadata = {
  title: "The Chronicles of Norien",
  description: STORY_DESCRIPTION,
  alternates: { canonical: "https://story.norien.live" },
  openGraph: {
    title: "The Chronicles of Norien",
    description: STORY_DESCRIPTION,
    url: "https://story.norien.live",
    type: "website",
    siteName: "Norien",
    images: [{ url: STORY_OG_IMAGE, width: 1200, height: 675, alt: "The Chronicles of Norien" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Chronicles of Norien",
    description: STORY_DESCRIPTION,
    images: [STORY_OG_IMAGE],
  },
};

export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return <StoryShell>{children}</StoryShell>;
}
