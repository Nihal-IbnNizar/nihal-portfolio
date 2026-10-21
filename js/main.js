/**
 * Application Main Controller
 * Handles rendering, scrollspy navigation, doodles, interactive test terminal,
 * bug easter egg, and micro-interactions
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
  initSpotlightGlow();
  initScrollReveal();
  initScrollDoodles();
  initTestRunnerTerminal();
  initBugEasterEgg();
  initCopyEmail();
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
 * Render Contact Channels with One-Click Copy Tooltip for Email
 */
function renderContactLinks() {
  const container = document.getElementById('contact-links');
  if (!container) return;

  const html = PORTFOLIO_DATA.contact.map(item => {
    const isMail = item.icon === 'mail';
    const targetAttr = item.external ? 'target="_blank" rel="noopener noreferrer"' : '';
    const copyBadge = isMail ? `<span class="copy-badge" data-email="${item.label}" title="Click to copy email">Copy</span>` : '';

    return `
      <li>
        <a href="${item.href}" ${targetAttr} class="contact-link group flex items-center gap-3 text-[#E5E5E5] transition-colors hover:text-[#CFA550]" ${isMail ? 'data-is-email="true"' : ''}>
          <span class="icon-box flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#262626] text-gold">${getIcon(item.icon, 'h-4 w-4')}</span>
          <span>${item.label}</span>
          ${copyBadge}
        </a>
      </li>
    `;
  }).join('');

  container.innerHTML = html;
}

/**
 * One-Click Copy Email Functionality
 */
function initCopyEmail() {
  document.querySelectorAll('.copy-badge').forEach(badge => {
    badge.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const email = badge.dataset.email || PORTFOLIO_DATA.profile.contactEmail;
      navigator.clipboard.writeText(email).then(() => {
        badge.textContent = 'Copied! ✨';
        showToast('Email copied to clipboard! 📋');
        setTimeout(() => { badge.textContent = 'Copy'; }, 2400);
      }).catch(() => {
        window.location.href = `mailto:${email}`;
      });
    });
  });
}

/**
 * Card Spotlight Glow Effect (Follows cursor on hover)
 */
function initSpotlightGlow() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/**
 * Staggered Scroll-Triggered Reveal Animation
 */
function initScrollReveal() {
  const targets = document.querySelectorAll('.card, .timeline-item, .seminar-card, .education-item');
  targets.forEach(el => el.classList.add('reveal-item'));

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px'
  });

  targets.forEach(el => observer.observe(el));
}

/**
 * Scroll-Triggered Doodle Pen-Stroke Drawing
 */
function initScrollDoodles() {
  const doodles = document.querySelectorAll('.dd:not(.hero-section .dd)');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('drawn');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  doodles.forEach(d => observer.observe(d));
}

/**
 * Interactive Test Runner Terminal Simulation
 */
function initTestRunnerTerminal() {
  const runBtn = document.getElementById('run-tests-btn');
  const terminalBody = document.getElementById('terminal-output');
  if (!runBtn || !terminalBody) return;

  const testSteps = [
    { file: 'tests/analytics_engine.spec.ts', time: '0.42s' },
    { file: 'tests/mobile_appium_suite.py', time: '0.31s' },
    { file: 'tests/ai_agent_validation.spec.ts', time: '0.18s' }
  ];

  runBtn.addEventListener('click', () => {
    if (runBtn.classList.contains('running')) return;
    runBtn.classList.add('running');
    runBtn.innerHTML = `
      <svg class="h-3.5 w-3.5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="0.9"/></svg>
      <span>Running...</span>
    `;

    terminalBody.innerHTML = `
      <div class="terminal-cmd">$ pytest -v --parallel-threads=4</div>
      <div class="terminal-cmd text-gold" style="font-size:0.75rem;">Initializing parallel test runners...</div>
    `;

    let stepIndex = 0;
    const interval = setInterval(() => {
      if (stepIndex < testSteps.length) {
        const step = testSteps[stepIndex];
        const row = document.createElement('div');
        row.className = 'terminal-row';
        row.innerHTML = `
          <span class="terminal-badge">✔ PASS</span>
          <span class="terminal-file">${step.file}</span>
          <span class="terminal-time">${step.time}</span>
        `;
        terminalBody.appendChild(row);
        stepIndex++;
      } else {
        clearInterval(interval);
        const summary = document.createElement('div');
        summary.className = 'terminal-summary';
        summary.innerHTML = `
          <span>✨ All 3 test suites passed</span>
          <span>100% reliability (0.91s)</span>
        `;
        terminalBody.appendChild(summary);

        runBtn.classList.remove('running');
        runBtn.innerHTML = `
          <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>
          <span>Run Suite</span>
        `;
        showToast('All 3 test suites passed with 100% reliability! ✨');
      }
    }, 280);
  });
}

/**
 * Bug Hunter Easter Egg: Shows only once the user reaches the "Professionally suspicious since 2025" section
 */
function initBugEasterEgg() {
  const bugBtn = document.getElementById('bug-btn');
  const bugDetector = document.querySelector('.bug-detector');
  const experienceSection = document.getElementById('experience');

  if (!bugBtn || !bugDetector) return;

  if (experienceSection) {
    const handleScroll = () => {
      const rect = experienceSection.getBoundingClientRect();
      // Reveal when the top of the experience section enters the viewport (within 85% of screen height)
      if (rect.top <= window.innerHeight * 0.85) {
        bugDetector.classList.add('visible');
      } else {
        bugDetector.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on load in case the user reloaded already scrolled down
    handleScroll();
  }

  bugBtn.addEventListener('click', () => {
    showToast('🐞 0 bugs detected! All suites passing. Found one? Message me!');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        const nameInput = document.querySelector('input[name="name"]');
        if (nameInput) setTimeout(() => nameInput.focus(), 600);
      }
    }, 1200);
  });
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
