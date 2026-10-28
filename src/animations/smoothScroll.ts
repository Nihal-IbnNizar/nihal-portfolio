import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

export function initSmoothScroll(): Lenis | null {
  // Respect user preference for reduced motion
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (prefersReduced) {
    return null;
  }

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    touchMultiplier: 1.5,
  });

  lenisInstance = lenis;

  // Synchronize Lenis scroll updates with GSAP ScrollTrigger
  lenis.on("scroll", ScrollTrigger.update);

  // Drive Lenis RAF loop through GSAP's internal high-precision ticker
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  // Smooth scroll interception for internal anchor links (#work, #expertise, etc.)
  document
    .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    .forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const href = anchor.getAttribute("href");
        if (!href || href === "#") return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerOffset = 70;
          lenis.scrollTo(target as HTMLElement, {
            offset: -headerOffset,
            duration: 1.2,
          });
        }
      });
    });

  return lenis;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function scrollToTarget(
  target: string | HTMLElement,
  offset = -70,
): void {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset, duration: 1.2 });
  } else {
    const el =
      typeof target === "string" ? document.querySelector(target) : target;
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}
