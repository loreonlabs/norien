"use client";

import { useEffect } from "react";
import { initScrollAnimations } from "@/lib/scrollAnimations";

/** Mounts the scroll-reveal + counter behaviour once, client-side. Renders nothing. */
export default function ScrollAnimations() {
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return null;
}
