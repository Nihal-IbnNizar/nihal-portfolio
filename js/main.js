/**
 * Application Main Controller
 * Handles rendering, scrollspy navigation, doodles, and contact form interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initDoodles();
  renderDailyDrivers();
  renderProjects();
  renderExpertise();
  renderExperience();
  renderEducation();
  renderSeminars();
  renderContactLinks();
  initScrollSpy();
  initContactForm();
});

/**
 * Replace placeholders with animated SVG doodles
 */
function initDoodles() {
  document.querySelectorAll('[data-d]').forEach(el => {
    const key = el.dataset.d;
    const classes = el.className || '';
    const svgHtml = getDoodle(key, classes);
    el.outerHTML = svgHtml;
  });
}

/**
 * Render Daily Drivers in Hero section
 */
function renderDailyDrivers() {
  const container = document.getElementById('daily-drivers-list');
  if (!container) return;

  const html = PORTFOLIO_DATA.dailyDrivers.map(item => `
    <span class="inline-flex items-center gap-2 text-[#E5E5E5]">
      <span class="text-gold flex items-center justify-center">${getIcon(item.icon, 'h-4 w-4')}</span>
      <span>${item.name}</span>
    </span>
  `).join('');

  container.insertAdjacentHTML('beforeend', html);
}

/**
 * Render Project Cards
 */
function renderProjects() {
  const container = document.getElementById('work-grid');
  if (!container) return;

  const html = PORTFOLIO_DATA.projects.map((proj, idx) => {
    const isFeatured = proj.featured;
    const cardClass = isFeatured ? 'card work-card featured' : 'card work-card';

    const tagsHtml = proj.tags.map(tag => `
      <span class="pill">
        <span class="inline-flex text-gold items-center">${getIcon(tag.icon, 'h-3.5 w-3.5')}</span>
        <span>${tag.name}</span>
      </span>
    `).join('');

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
  }).join('');

  container.innerHTML = html;
}

/**
 * Render Expertise Categories and Skills
 */
function renderExpertise() {
  const container = document.getElementById('expertise-grid');
  if (!container) return;

  const html = PORTFOLIO_DATA.expertise.map(group => {
    const skillsHtml = group.skills.map(s => `
      <li class="expertise-item flex items-center gap-3">
        <span class="icon-box flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[#262626] text-gold">${getIcon(s.icon, 'h-4 w-4')}</span>
        <span class="text-[#E5E5E5]">${s.name}</span>
      </li>
    `).join('');

    return `
      <div class="card ${group.colSpan} expertise-card">
        <h3>${group.title}</h3>
        <ul class="expertise-list">
          ${skillsHtml}
        </ul>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
}

/**
 * Render Work Experience Timeline
 */
function renderExperience() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  const html = PORTFOLIO_DATA.experience.map(item => `
    <li class="timeline-item">
      <span class="timeline-dot ${item.isCurrent ? 'active' : ''}"></span>
      <p class="timeline-date">${item.period}</p>
      <h3 class="timeline-title">${item.role} <span>@ ${item.company}</span></h3>
      <p class="timeline-description">${item.description}</p>
    </li>
  `).join('');

  container.innerHTML = html;
}

/**
 * Render Education & Certifications
 */
function renderEducation() {
  const container = document.getElementById('education-list');
  if (!container) return;

  const html = PORTFOLIO_DATA.education.map(item => `
    <li class="education-item flex gap-3">
      <span class="mt-0.5 text-gold shrink-0 flex items-center">${getIcon('cap', 'h-4 w-4')}</span>
      <div>
        <p class="education-title text-[#E5E5E5]">${item.title}</p>
        <p class="education-sub text-sm">${item.subtitle}</p>
      </div>
    </li>
  `).join('');

  container.innerHTML = html;
}

/**
 * Render Seminars & Workshops
 */
function renderSeminars() {
  const container = document.getElementById('seminars-grid');
  if (!container) return;

  const html = PORTFOLIO_DATA.seminars.map(item => `
    <article class="card seminar-card">
      <span class="pill text-gold">${item.type}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `).join('');

  container.innerHTML = html;
}

/**
 * Render Contact Channels
 */
function renderContactLinks() {
  const container = document.getElementById('contact-links');
  if (!container) return;

  const html = PORTFOLIO_DATA.contact.map(item => {
    const targetAttr = item.external ? 'target="_blank" rel="noopener noreferrer"' : '';
    return `
      <li>
        <a href="${item.href}" ${targetAttr} class="contact-link group flex items-center gap-3 text-[#E5E5E5] transition-colors hover:text-[#CFA550]">
          <span class="icon-box flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#262626] text-gold">${getIcon(item.icon, 'h-4 w-4')}</span>
          <span>${item.label}</span>
        </a>
      </li>
    `;
  }).join('');

  container.innerHTML = html;
}

/**
 * ScrollSpy: Updates active navigation highlight as user scrolls
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          link.classList.toggle('on', href === `#${id}`);
        });
      }
    });
  }, {
    rootMargin: '-35% 0px -55% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

/**
 * Contact Form submission with mailto generator & toast notification
 */
function initContactForm() {
  const form = document.getElementById('contact-form');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const message = formData.get('message') || '';

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nSender Email: ${email}`);
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.contactEmail}?subject=${subject}&body=${body}`;

    showToast('Opening email client...');
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  const textEl = toast.querySelector('.toast-text');
  if (textEl) textEl.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
