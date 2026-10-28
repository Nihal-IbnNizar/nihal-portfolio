import { PORTFOLIO_DATA } from "../data/portfolioData";
import { showToast } from "./toast";

/**
 * Contact Form submission with mailto generator & toast notification
 */
export function initContactForm(): void {
  const form = document.getElementById(
    "contact-form",
  ) as HTMLFormElement | null;
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nSender Email: ${email}`);

    const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.contactEmail}?subject=${subject}&body=${body}`;

    showToast("Opening email client...");

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);
  });
}

/**
 * One-Click Copy Email Functionality
 */
export function initCopyEmail(): void {
  document.querySelectorAll<HTMLElement>(".copy-badge").forEach((badge) => {
    badge.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const email = badge.dataset.email || PORTFOLIO_DATA.profile.contactEmail;

      navigator.clipboard
        .writeText(email)
        .then(() => {
          badge.textContent = "Copied! ✨";
          showToast("Email copied to clipboard! 📋");

          setTimeout(() => {
            badge.textContent = "Copy";
          }, 2400);
        })
        .catch(() => {
          window.location.href = `mailto:${email}`;
        });
    });
  });
}
