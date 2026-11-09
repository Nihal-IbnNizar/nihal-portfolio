/**
 * Site Header Controller
 * Inspired by Alcove Tasks (alcovetasks.com)
 * - Letter-roll text animation on [data-roll] elements
 * - Dynamic scroll state toggling (.scrolled when scrollY > 100)
 * - Accessible circular menu button and floating sheet drawer
 */

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function initLetterRoll(): void {
  const elements = document.querySelectorAll<HTMLElement>("[data-roll]");

  elements.forEach((el) => {
    // Prevent duplicate initialization
    if (el.querySelector(".roll")) return;

    const text = el.textContent?.trim() || "";
    if (!text) return;

    el.setAttribute("aria-label", text);

    // Keep non-Latin characters static to prevent tearing script ligatures
    if (/[^\u0000-\u024F\u2000-\u206F\u2190-\u23FF]/.test(text)) return;

    const letters = [...text];
    el.innerHTML = `<span class="roll" aria-hidden="true">${letters
      .map((c, i) => {
        const char = c === " " ? "\u00A0" : escapeHtml(c);
        return `<span data-c="${char}" style="transition-delay:${i * 18}ms"><i>${char}</i></span>`;
      })
      .join("")}</span>`;
  });
}

export function initHeader(): void {
  initLetterRoll();

  const header = document.getElementById("siteHeader");
  const menuBtn = document.getElementById("menuBtn");
  const sheet = document.getElementById("navSheet");

  // Toggle .scrolled when scrolled past 100px
  const onScroll = (): void => {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 100);
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (menuBtn && sheet) {
    const toggleSheet = (open?: boolean): void => {
      const willOpen = open !== undefined ? open : sheet.hidden;
      sheet.hidden = !willOpen;
      menuBtn.setAttribute("aria-expanded", String(willOpen));
    };

    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleSheet();
    });

    // Close sheet when any link inside is clicked
    sheet.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggleSheet(false);
      });
    });

    // Close when clicking outside of the sheet and menu button
    document.addEventListener("click", (e) => {
      if (
        !sheet.hidden &&
        !sheet.contains(e.target as Node) &&
        !menuBtn.contains(e.target as Node)
      ) {
        toggleSheet(false);
      }
    });

    // Close on Escape key press
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !sheet.hidden) {
        toggleSheet(false);
        menuBtn.focus();
      }
    });
  }
}
