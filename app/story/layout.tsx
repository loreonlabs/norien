import type { Metadata } from "next";
import StoryShell from "@/components/story/StoryShell";

const STORY_DESCRIPTION =
  "The lore and history of Norien — eleven ages of a living world, from the first untouched lands to the present, where every kingdom begins as a story.";

export const metadata: Metadata = {
  title: "The Chronicles of Norien — Lore & History",
  description: STORY_DESCRIPTION,
  alternates: { canonical: "https://story.norien.live" },
  openGraph: {
    title: "The Chronicles of Norien",
    description: STORY_DESCRIPTION,
    url: "https://story.norien.live",
    type: "website",
    siteName: "Norien",
    images: [{ url: "/logo.png", width: 500, height: 500, alt: "Norien" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Chronicles of Norien",
    description: STORY_DESCRIPTION,
    images: ["/logo.png"],
  },
};

export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return <StoryShell>{children}</StoryShell>;
}
