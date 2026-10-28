import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-linked 3D QA keyboard assembly with GSAP ScrollTrigger.
 * Keys start scattered in 3D space and settle precisely into the keyboard tray.
 */
export function initKeyboardAssembly(): void {
  const section = document.querySelector<HTMLElement>(".keyboard-section");
  const pin = section?.querySelector<HTMLElement>(".keyboard-pin");
  const keys = section
    ? Array.from(section.querySelectorAll<HTMLElement>("[data-key]"))
    : [];

  if (!section || !pin || !keys.length) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (reduceMotion) {
    keys.forEach((key) => {
      key.style.opacity = "1";
      key.style.transform = "none";
    });
    section.classList.add("keyboard-assembled");
    return;
  }

  // Set initial scattered positions from data attributes
  keys.forEach((key) => {
    const x = Number(key.dataset.x || 0);
    const y = Number(key.dataset.y || 0);
    const rotate = Number(key.dataset.rotate || 0);

    gsap.set(key, {
      x,
      y,
      rotation: rotate,
      opacity: 0.18,
      transformPerspective: 1000,
    });
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "+=120%",
      pin: pin,
      scrub: 0.8,
      onUpdate: (self) => {
        section.classList.toggle("keyboard-assembled", self.progress >= 0.96);
      },
    },
  });

  // Stagger each key into its assembled seated slot
  tl.to(keys, {
    x: 0,
    y: 0,
    rotation: 0,
    opacity: 1,
    ease: "power2.out",
    stagger: {
      each: 0.04,
      from: "start",
    },
    duration: 1,
  });
}
