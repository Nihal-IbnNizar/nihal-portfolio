import { showToast } from "./toast";
import { scrollToTarget } from "../animations/smoothScroll";

/**
 * Bug Hunter Easter Egg Widget.
 * Appears when user scrolls to experience section; provides quick link to report issues.
 */
export function initBugEasterEgg(): void {
  const bugBtn = document.getElementById("bug-btn");
  const bugDetector = document.querySelector<HTMLElement>(".bug-detector");
  const experienceSection = document.getElementById("experience");

  if (!bugBtn || !bugDetector) return;

  if (experienceSection) {
    const handleScroll = () => {
      const rect = experienceSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.85) {
        bugDetector.classList.add("visible");
      } else {
        bugDetector.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }

  bugBtn.addEventListener("click", () => {
    showToast("🐞 0 bugs detected! All suites passing. Found one? Message me!");

    setTimeout(() => {
      scrollToTarget("#contact");

      const nameInput =
        document.querySelector<HTMLInputElement>('input[name="name"]');
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 600);
      }
    }, 1000);
  });
}
