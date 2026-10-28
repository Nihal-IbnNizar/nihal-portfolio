import { PORTFOLIO_DATA } from "../data/portfolioData";
import { showToast } from "./toast";

/**
 * Direct Web3Forms submission with honeypot spam protection and premium gold UI transitions
 */
export function initContactForm(): void {
  const form = document.getElementById(
    "contact-form",
  ) as HTMLFormElement | null;
  const submitBtn = document.getElementById(
    "contact-submit-btn",
  ) as HTMLButtonElement | null;

  if (!form) return;

  const defaultBtnHtml = `<span>Send message</span>`;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    // 1. Honeypot spam check: if filled by a bot, silently fake success
    if (formData.get("botcheck")) {
      form.reset();
      showToast("Thank you for reaching out! ✨");
      return;
    }

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      showToast("Please fill out all fields before sending.");
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey.trim() === "" || accessKey.includes("YOUR_")) {
      showToast(
        "Web3Forms Access Key is not configured yet. Check your .env file!",
      );
      console.warn(
        "Web3Forms Setup Required: Please set VITE_WEB3FORMS_ACCESS_KEY in your .env file.",
      );
      return;
    }

    // 2. Button state: Submitting (luxury gold gradient with rotating spinner)
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="h-4 w-4 animate-spin text-[#1A1304]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="0.9"></path>
        </svg>
        <span>Sending...</span>
      `;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name,
          email: email,
          message: message,
          subject: `Portfolio Inquiry from ${name}`,
          from_name: "Muhammed Nihal Portfolio",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // 3. Button state: Success (retains the site's signature gold aesthetic)
        if (submitBtn) {
          submitBtn.innerHTML = `
            <svg class="h-4 w-4 text-[#1A1304]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Message Sent ✨</span>
          `;
        }

        form.reset();
        showToast("Message sent! I'll be in touch shortly. ✨");

        // Revert button smoothly back to default after 3.5 seconds
        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = defaultBtnHtml;
          }
        }, 3500);
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Web3Forms submission error:", error);
      showToast(
        "Unable to send message right now. Please try again or email directly.",
      );

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = defaultBtnHtml;
      }
    }
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
