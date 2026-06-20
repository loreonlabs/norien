import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Hostname-based routing for the Norien deployment.
 *
 *   norien.live        → Landing page        (app/page.tsx)   [default]
 *   docs.norien.live   → The Norien Codex     (app/docs)       [root rewritten to /docs]
 *   story.norien.live  → Story site           (separate deployment)
 *   play.norien.live   → Play / game          (separate deployment)
 *
 * Subdomains that map to a route inside THIS app are listed below. The docs
 * subdomain must render the codex at its own root — never the landing page.
 * `story` and `play` live in their own deployments, so their domains should be
 * assigned to those projects in Vercel (they are intentionally not mapped here).
 */
const SUBDOMAIN_ROUTES: Record<string, string> = {
  docs: "/docs",
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
