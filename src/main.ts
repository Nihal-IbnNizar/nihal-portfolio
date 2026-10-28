/**
 * Application Main Controller
 * Modularized Architecture with TypeScript, Lenis Smooth Scroll, and GSAP ScrollTrigger
 */

import "./styles/main.css";

import { initDoodles } from "./icons/icons";
import {
  renderDailyDrivers,
  renderProjects,
  renderExpertise,
  renderExperience,
  renderEducation,
  renderSeminars,
  renderContactLinks,
} from "./components/renderers";

import { initSmoothScroll } from "./animations/smoothScroll";
import { initWorkStackAnimation } from "./animations/workStack";
import { initKeyboardAssembly } from "./animations/keyboardAssembly";
import { initHeroGridGlow } from "./animations/heroCanvas";
import { initSpotlightGlow } from "./animations/spotlightGlow";
import { initScrollReveal, initScrollDoodles } from "./animations/scrollReveal";

import { initTestRunnerTerminal } from "./components/testTerminal";
import { initBugEasterEgg } from "./components/bugHunter";
import { initContactForm, initCopyEmail } from "./components/contactForm";
import { initScrollSpy } from "./components/scrollSpy";

function bootstrap(): void {
  // 1. Hand-drawn doodle stroke generation
  initDoodles();

  // 2. Render all dynamic content from typed schema
  renderDailyDrivers();
  renderProjects();
  renderExpertise();
  renderExperience();
  renderEducation();
  renderSeminars();
  renderContactLinks();

  // 3. User interactions & forms
  initCopyEmail();
  initContactForm();
  initScrollSpy();
  initSpotlightGlow();
  initTestRunnerTerminal();
  initBugEasterEgg();

  // 4. Visual effects & Canvas grid
  initScrollReveal();
  initScrollDoodles();
  initHeroGridGlow();

  // 5. High-performance scroll physics (Lenis + GSAP)
  initSmoothScroll();
  initWorkStackAnimation();
  initKeyboardAssembly();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap);
} else {
  bootstrap();
}
