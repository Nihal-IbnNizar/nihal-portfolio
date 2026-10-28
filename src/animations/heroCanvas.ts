/**
 * High-performance Hero dot-grid with cursor-following glow & wave ripple.
 * Optimized with IntersectionObserver to pause rendering when hero is offscreen.
 */
export function initHeroGridGlow(): void {
  const grid = document.querySelector<HTMLElement>(".bg-grid");
  const hero = document.querySelector<HTMLElement>(".hero-section");

  if (!grid || !hero) return;

  if (grid.dataset.heroGridGlowInitialized === "true") return;
  grid.dataset.heroGridGlowInitialized = "true";

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    delete grid.dataset.heroGridGlowInitialized;
    return;
  }

  grid.replaceChildren(canvas);

  const goldSpacing = 32;
  const whiteSpacing = 16;
  const goldRadius = 1.5;
  const whiteRadius = 1;
  const goldBaseAlpha = 0.28;
  const whiteBaseAlpha = 0.1;

  const reach = 125;
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  let width = 0;
  let height = 0;
  let mouseX = -1000;
  let mouseY = -1000;
  let active = false;
  let isVisible = true;
  let frameId: number | null = null;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw(0);
  }

  function drawDot(
    x: number,
    y: number,
    radius: number,
    baseAlpha: number,
    isGold: boolean,
    elapsed: number,
  ) {
    if (!ctx) return;
    const dx = x - mouseX;
    const dy = y - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    let intensity = 0;
    let ripple = 0;

    if (active && distance < reach) {
      const falloff = Math.pow(1 - distance / reach, 1.7);
      const wave = Math.max(0, Math.cos(distance * 0.105 - elapsed * 5));
      intensity = falloff;
      ripple = wave * falloff;
    }

    const dotRadius = radius + intensity * 1.2 + ripple * 0.4;
    const alpha = Math.min(1, baseAlpha + intensity * 0.2 + ripple * 0.1);

    ctx.fillStyle = isGold
      ? `rgba(207, 165, 80, ${alpha})`
      : `rgba(255, 255, 255, ${alpha})`;

    if (intensity > 0.08) {
      ctx.shadowColor = isGold
        ? "rgba(255, 196, 82, 0.95)"
        : "rgba(255, 225, 160, 0.8)";
      ctx.shadowBlur = 3 + intensity * 10;
    } else {
      ctx.shadowBlur = 0;
    }

    ctx.beginPath();
    ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  function draw(time = 0) {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    const elapsed = time / 1000;

    // Gold layer (32px spacing)
    for (let y = 16; y <= height; y += goldSpacing) {
      for (let x = 16; x <= width; x += goldSpacing) {
        drawDot(x, y, goldRadius, goldBaseAlpha, true, elapsed);
      }
    }

    // White layer (16px spacing)
    for (let y = 8; y <= height; y += whiteSpacing) {
      for (let x = 8; x <= width; x += whiteSpacing) {
        drawDot(x, y, whiteRadius, whiteBaseAlpha, false, elapsed);
      }
    }
  }

  function animate(time: number) {
    if (!isVisible) {
      frameId = null;
      return;
    }

    draw(time);

    if (active && !reduceMotion) {
      frameId = requestAnimationFrame(animate);
    } else {
      frameId = null;
    }
  }

  function startAnimation() {
    if (reduceMotion || frameId !== null || !isVisible) {
      draw(0);
      return;
    }
    frameId = requestAnimationFrame(animate);
  }

  function onMouseMove(event: MouseEvent) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    if (reduceMotion) {
      draw(0);
      return;
    }
    startAnimation();
  }

  function onMouseEnter(event: MouseEvent) {
    active = true;
    mouseX = event.clientX;
    mouseY = event.clientY;
    startAnimation();
  }

  function onMouseLeave() {
    active = false;
    mouseX = -1000;
    mouseY = -1000;
    if (frameId !== null) {
      cancelAnimationFrame(frameId);
      frameId = null;
    }
    draw(0);
  }

  // IntersectionObserver to pause canvas animation when hero is scrolled out of view
  const visibilityObserver = new IntersectionObserver(
    ([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible && active) {
        startAnimation();
      } else if (!isVisible && frameId !== null) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
    },
    { threshold: 0.05 },
  );

  visibilityObserver.observe(hero);

  hero.addEventListener("mouseenter", onMouseEnter);
  hero.addEventListener("mousemove", onMouseMove);
  hero.addEventListener("mouseleave", onMouseLeave);
  window.addEventListener("resize", resize);

  resize();
}
