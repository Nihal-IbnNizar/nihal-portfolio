import { PORTFOLIO_DATA } from "../data/portfolioData";
import { getIcon } from "../icons/icons";

/**
 * Render Daily Drivers in Hero section
 */
export function renderDailyDrivers(): void {
  const container = document.getElementById("daily-drivers-list");
  if (!container) return;

  const html = PORTFOLIO_DATA.dailyDrivers
    .map(
      (item) => `
    <span class="inline-flex items-center gap-2 text-[#E5E5E5]">
      <span class="text-gold flex items-center justify-center">${getIcon(item.icon, "h-4 w-4")}</span>
      <span>${item.name}</span>
    </span>
  `,
    )
    .join("");

  container.insertAdjacentHTML("beforeend", html);
}

/**
 * Render Project Cards
 */
export function renderProjects(): void {
  const container = document.getElementById("work-grid");
  if (!container) return;

  const html = PORTFOLIO_DATA.projects
    .map((proj) => {
      const isFeatured = proj.featured;
      const cardClass = isFeatured
        ? "card work-card featured"
        : "card work-card";

      const tagsHtml = proj.tags
        .map(
          (tag) => `
      <span class="pill">
        <span class="inline-flex text-gold items-center">${getIcon(tag.icon, "h-3.5 w-3.5")}</span>
        <span>${tag.name}</span>
      </span>
    `,
        )
        .join("");

      return `
      <article class="${cardClass}">
        <div>
          <h3>${proj.title}</h3>
          <p>${proj.description}</p>
        </div>
        <div class="work-tags">
          ${tagsHtml}
        </div>
      </article>
    `;
    })
    .join("");

  container.innerHTML = html;
}

/**
 * Render Expertise Categories and Skills
 */
export function renderExpertise(): void {
  const container = document.getElementById("expertise-grid");
  if (!container) return;

  const html = PORTFOLIO_DATA.expertise
    .map((group) => {
      const skillsHtml = group.skills
        .map(
          (s) => `
      <li class="expertise-item flex items-center gap-3">
        <span class="icon-box flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[#262626] text-gold">${getIcon(s.icon, "h-4 w-4")}</span>
        <span class="text-[#E5E5E5]">${s.name}</span>
      </li>
    `,
        )
        .join("");

      return `
      <div class="card ${group.colSpan} expertise-card">
        <h3>${group.title}</h3>
        <ul class="expertise-list">
          ${skillsHtml}
        </ul>
      </div>
    `;
    })
    .join("");

  container.innerHTML = html;
}

/**
 * Render Work Experience Timeline
 */
export function renderExperience(): void {
  const container = document.getElementById("experience-timeline");
  if (!container) return;

  const html = PORTFOLIO_DATA.experience
    .map(
      (item) => `
    <li class="timeline-item">
      <span class="timeline-dot ${item.isCurrent ? "active" : ""}"></span>
      <p class="timeline-date">${item.period}</p>
      <h3 class="timeline-title">${item.role} <span>@ ${item.company}</span></h3>
      <p class="timeline-description">${item.description}</p>
    </li>
  `,
    )
    .join("");

  container.innerHTML = html;
}

/**
 * Render Education & Certifications
 */
export function renderEducation(): void {
  const container = document.getElementById("education-list");
  if (!container) return;

  const html = PORTFOLIO_DATA.education
    .map(
      (item) => `
    <li class="education-item flex gap-3">
      <span class="mt-0.5 text-gold shrink-0 flex items-center">${getIcon("cap", "h-4 w-4")}</span>
      <div>
        <p class="education-title text-[#E5E5E5]">${item.title}</p>
        <p class="education-sub text-sm">${item.subtitle}</p>
      </div>
    </li>
  `,
    )
    .join("");

  container.innerHTML = html;
}

/**
 * Render Seminars & Workshops
 */
export function renderSeminars(): void {
  const container = document.getElementById("seminars-grid");
  if (!container) return;

  const html = PORTFOLIO_DATA.seminars
    .map(
      (item) => `
    <article class="card seminar-card">
      <span class="pill text-gold">${item.type}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `,
    )
    .join("");

  container.innerHTML = html;
}

/**
 * Render Contact Channels
 */
export function renderContactLinks(): void {
  const container = document.getElementById("contact-links");
  if (!container) return;

  const html = PORTFOLIO_DATA.contact
    .map((item) => {
      const isMail = item.icon === "mail";
      const targetAttr = item.external
        ? 'target="_blank" rel="noopener noreferrer"'
        : "";
      const copyBadge = isMail
        ? `<span class="copy-badge" data-email="${item.label}" title="Click to copy email">Copy</span>`
        : "";

      return `
      <li>
        <a href="${item.href}" ${targetAttr} class="contact-link group flex items-center gap-3 text-[#E5E5E5] transition-colors hover:text-[#CFA550]" ${isMail ? 'data-is-email="true"' : ""}>
          <span class="icon-box flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#262626] text-gold">${getIcon(item.icon, "h-4 w-4")}</span>
          <span>${item.label}</span>
          ${copyBadge}
        </a>
      </li>
    `;
    })
    .join("");

  container.innerHTML = html;
}
