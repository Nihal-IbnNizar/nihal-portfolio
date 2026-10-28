/**
 * Card & Navbar Spotlight Glow Effect.
 * Gold radial glow follows cursor position inside elements.
 */
export function initSpotlightGlow(): void {
  const elements = document.querySelectorAll<HTMLElement>(
    ".card, .site-header .header-container, .qa-key",
  );

  elements.forEach((element) => {
    element.addEventListener("mousemove", (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      element.style.setProperty("--mouse-x", `${x}px`);
      element.style.setProperty("--mouse-y", `${y}px`);
    });

    element.addEventListener("mouseleave", () => {
      element.style.setProperty("--mouse-x", "-999px");
      element.style.setProperty("--mouse-y", "-999px");
    });
  });
}
