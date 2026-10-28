/**
 * Toast Notification Service
 */
let toastTimeout: number | null = null;

export function showToast(message: string): void {
  const toast = document.getElementById("toast");
  if (!toast) return;

  const textEl = toast.querySelector(".toast-text");
  if (textEl) textEl.textContent = message;

  toast.classList.add("show");

  if (toastTimeout !== null) {
    window.clearTimeout(toastTimeout);
  }

  toastTimeout = window.setTimeout(() => {
    toast.classList.remove("show");
    toastTimeout = null;
  }, 4000);
}
