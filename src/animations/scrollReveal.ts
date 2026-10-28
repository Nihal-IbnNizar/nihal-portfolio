/**
 * Scroll-triggered reveal animations for cards and doodle drawing paths.
 */
export function initScrollReveal(): void {
  const targets = document.querySelectorAll<HTMLElement>(
    ".card:not(.work-card), .timeline-item, .seminar-card, .education-item",
  );

  targets.forEach((el) => el.classList.add("reveal-item"));

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -30px 0px",
    },
  );

  targets.forEach((el) => observer.observe(el));
}

export function initScrollDoodles(): void {
  const doodles = document.querySelectorAll<HTMLElement>(
    ".dd:not(.hero-section .dd)",
  );

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("drawn");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  doodles.forEach((d) => observer.observe(d));
}
