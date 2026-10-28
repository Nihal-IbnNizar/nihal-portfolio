/**
 * ScrollSpy: Updates active navigation highlight as user scrolls through sections
 */
export function initScrollSpy(): void {
  const sections = document.querySelectorAll<HTMLElement>("section[id]");
  const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-link");

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");

          navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            link.classList.toggle("on", href === `#${id}`);
          });
        }
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px",
    },
  );

  sections.forEach((section) => observer.observe(section));
}
