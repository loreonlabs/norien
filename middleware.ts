import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Hostname-based routing for the Norien deployment.
 *
 *   norien.live        → Landing page            (app/page.tsx)  [default]
 *   docs.norien.live   → The Norien Codex         (app/docs)      [root rewritten to /docs]
 *   story.norien.live  → The Chronicles of Norien (app/story)     [root rewritten to /story]
 *   play.norien.live   → Coming Soon              (app/play)      [root rewritten to /play]
 *
 * Subdomains that map to a route inside THIS app are listed below. Each must
 * render its experience at its own root — never the landing page.
 */
const SUBDOMAIN_ROUTES: Record<string, string> = {
  docs: "/docs",
  story: "/story",
  play: "/play",
};

export function middleware(req: NextRequest) {
  const host = (req.headers.get("host") || "").split(":")[0].toLowerCase();
  const subdomain = host.split(".")[0];
  const segment = SUBDOMAIN_ROUTES[subdomain];

  // Not a routed subdomain (apex / www / localhost) → serve as-is (landing).
  if (!segment) return NextResponse.next();

  const url = req.nextUrl.clone();

  // Already inside the mapped segment → leave it alone (avoids rewrite loops).
  if (url.pathname === segment || url.pathname.startsWith(`${segment}/`)) {
    return NextResponse.next();
  }

  // Rewrite the request into the segment so the subdomain root serves it.
  url.pathname = url.pathname === "/" ? segment : `${segment}${url.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Run on page routes only — skip Next internals, API, and static files (any path with a ".").
  matcher: ["/((?!_next/|api/|.*\\.).*)"],
};
