import type { Metadata } from "next";
import DocsShell from "@/components/docs/DocsShell";

const DOCS_DESCRIPTION =
  "Knowledge, systems, strategy, and lore from the living world of Norien.";

export const metadata: Metadata = {
  title: "The Norien Codex — Documentation",
  description: DOCS_DESCRIPTION,
  openGraph: {
    title: "The Norien Codex",
    description: DOCS_DESCRIPTION,
    url: "https://docs.norien.live",
    type: "website",
    siteName: "Norien",
    images: [{ url: "/logo.png", width: 500, height: 500, alt: "Norien" }],
  },
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return <DocsShell>{children}</DocsShell>;
}
