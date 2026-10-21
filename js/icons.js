/**
 * SVG Icons & Doodles Repository
 */

const ICONS = {
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mob: '<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/>',
  gauge: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  git: '<line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
  bot: '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',
  cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  check: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  cap: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  gh: '!M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  li: '!M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
};

const TEXT_BADGES = { TS: 1, JS: 1, PY: 1 };

const DOODLES = {
  sp: ['0 0 24 24', 'M3 15c2-8 4-9 6-4s4 4 6-3M18 4l1.5-2.5M20 8.5l3-.5'],
  st: ['0 0 24 24', 'M12 3c.4 4 1.2 6.4 6 9-4.8 2.4-5.6 5-6 9-.4-4-1.2-6.6-6-9 4.8-2.6 5.6-5 6-9z'],
  ar: ['0 0 24 24', 'M3 18c5-1 11-5 14-12M17.5 6l-5.5.8M17.5 6l-.3 5.4'],
  br: ['0 0 24 24', 'M9 3C5.5 3 5 4.5 5 7v3c0 1.6-1.2 2-3 2 1.800 0 3 .4 3 2v3c0 2.500.500 4 4 4'],
  sq: ['0 0 24 24', 'M2 14c3-6 5 4 8-1s4-5 7 0 3 2 5-2']
};

/**
 * Determine pixel dimensions from class name tokens
 */
function getDimFromClass(cls) {
  if (!cls) return { w: 16, h: 16 };
  if (cls.includes('h-14') || cls.includes('w-14')) return { w: 56, h: 56 };
  if (cls.includes('h-9') || cls.includes('w-9')) return { w: 36, h: 36 };
  if (cls.includes('h-8') || cls.includes('w-8')) return { w: 32, h: 32 };
  if (cls.includes('h-7') || cls.includes('w-7')) return { w: 28, h: 28 };
  if (cls.includes('h-6') || cls.includes('w-6')) return { w: 24, h: 24 };
  if (cls.includes('h-3.5') || cls.includes('w-3.5')) return { w: 14, h: 14 };
  return { w: 16, h: 16 };
}

/**
 * Render an icon or text badge by key
 * @param {string} n - Icon key or text badge
 * @param {string} c - CSS class list
 */
function getIcon(n, c = 'h-4 w-4') {
  if (TEXT_BADGES[n]) {
    return `<span class="text-[10px] font-bold leading-none">${n}</span>`;
  }
  const svg = ICONS[n];
  if (!svg) return '';
  const { w, h } = getDimFromClass(c);
  if (svg[0] === '!') {
    return `<svg class="${c}" viewBox="0 0 24 24" width="${w}" height="${h}" fill="currentColor" aria-hidden="true"><path d="${svg.slice(1)}"/></svg>`;
  }
  return `<svg class="${c}" viewBox="0 0 24 24" width="${w}" height="${h}" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${svg}</svg>`;
}

/**
 * Render a hand-drawn doodle SVG by key
 * @param {string} k - Doodle key ('sp', 'st', 'ar', 'br', 'sq')
 * @param {string} c - CSS classes passed to the doodle
 */
function getDoodle(k, c = '') {
  const doodle = DOODLES[k];
  if (!doodle) return '';
  const { w, h } = getDimFromClass(c);
  return `<svg class="dd text-gold ${c}" viewBox="${doodle[0]}" width="${w}" height="${h}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path pathLength="1" d="${doodle[1]}"/></svg>`;
}
