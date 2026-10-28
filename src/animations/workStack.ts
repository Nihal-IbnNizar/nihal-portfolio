import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-controlled project stack with GSAP ScrollTrigger.
 * The work section pins while cards enter and recede smoothly.
 */
export function initWorkStackAnimation(): void {
  const section = document.getElementById("work");
  const stage = section?.querySelector<HTMLElement>(".work-stage");
  const grid = section?.querySelector<HTMLElement>("#work-grid");
  const cards = grid
    ? Array.from(grid.querySelectorAll<HTMLElement>(".work-card"))
    : [];

  if (!section || !stage || !grid || !cards.length) return;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (reducedMotion) {
    section.classList.add("work-stack-static");
    return;
  }

  // Initial setup for cards
  cards.forEach((card, i) => {
    if (i === 0) {
      gsap.set(card, {
        y: 0,
        scale: 1,
        opacity: 1,
        transformOrigin: "top center",
      });
    } else {
      gsap.set(card, {
        y: () => window.innerHeight * 1.05,
        scale: 1,
        opacity: 0,
        transformOrigin: "top center",
      });
    }
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: () => `+=${cards.length * window.innerHeight * 0.9}`,
      pin: stage,
      scrub: 0.6,
      invalidateOnRefresh: true,
    },
  });

  // Stagger entry and exit of each card
  for (let i = 1; i < cards.length; i++) {
    const prevCard = cards[i - 1];
    const currentCard = cards[i];

    // Current card rises up smoothly
    tl.to(
      currentCard,
      {
        y: 0,
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
      },
      `step-${i}`,
    );

    // Previous card recedes subtly (scale down & slight fade)
    tl.to(
      prevCard,
      {
        scale: 0.965,
        opacity: 0.82,
        ease: "power2.inOut",
        duration: 1,
      },
      `step-${i}`,
    );
  }
}
