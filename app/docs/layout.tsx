import type { Metadata } from "next";
import DocsShell from "@/components/docs/DocsShell";

const DOCS_DESCRIPTION =
  "Official systems, strategy, and progression guide for the living world of Norien.";

const DOCS_OG_IMAGE = "https://docs.norien.live/og/codex-og.png";

export const metadata: Metadata = {
  title: "The Norien Codex",
  description: DOCS_DESCRIPTION,
  alternates: { canonical: "https://docs.norien.live" },
  openGraph: {
    title: "The Norien Codex",
    description: DOCS_DESCRIPTION,
    url: "https://docs.norien.live",
    type: "website",
    siteName: "Norien",
    images: [{ url: DOCS_OG_IMAGE, width: 1200, height: 675, alt: "The Norien Codex" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Norien Codex",
    description: DOCS_DESCRIPTION,
    images: [DOCS_OG_IMAGE],
  },
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return <DocsShell>{children}</DocsShell>;
}
