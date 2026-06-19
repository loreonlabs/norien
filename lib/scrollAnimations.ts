/**
 * Scroll-reveal + stat counters — a faithful port of the original main.js.
 * Adds the `.in` class to `.reveal` elements as they enter the viewport, and
 * counts `[data-count]` numbers up from 0. Returns a cleanup function.
 */
export function initScrollAnimations(): () => void {
  const count = (el: HTMLElement) => {
    const target = Number(el.dataset.count ?? "0");
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / 1600);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        el.classList.add("in");
        if (el.dataset.count) count(el);
        io.unobserve(el);
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll<HTMLElement>(".reveal, [data-count]").forEach((el) => {
    io.observe(el);
  });

  return () => io.disconnect();
}
