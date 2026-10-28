import confetti from "canvas-confetti";
import { showToast } from "./toast";

/**
 * Interactive Pytest Runner Terminal Simulation.
 * Triggers a gold/white celebratory confetti burst when 100% reliability is achieved!
 */
export function initTestRunnerTerminal(): void {
  const runBtn = document.getElementById("run-tests-btn");
  const terminalBody = document.getElementById("terminal-output");

  if (!runBtn || !terminalBody) return;

  const testSteps = [
    { file: "tests/analytics_engine.spec.ts", time: "0.42s" },
    { file: "tests/mobile_appium_suite.py", time: "0.31s" },
    { file: "tests/ai_agent_validation.spec.ts", time: "0.18s" },
  ];

  runBtn.addEventListener("click", () => {
    if (runBtn.classList.contains("running")) return;

    runBtn.classList.add("running");

    runBtn.innerHTML = `
      <svg class="h-3.5 w-3.5 animate-spin" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
        <path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="0.9"/>
      </svg>
      <span>Running...</span>
    `;

    terminalBody.innerHTML = `
      <div class="terminal-cmd">$ pytest -v --parallel-threads=4</div>
      <div class="terminal-cmd text-gold" style="font-size:0.75rem;">
        Initializing parallel test runners...
      </div>
    `;

    let stepIndex = 0;

    const interval = setInterval(() => {
      if (stepIndex < testSteps.length) {
        const step = testSteps[stepIndex];
        const row = document.createElement("div");

        row.className = "terminal-row";
        row.innerHTML = `
          <span class="terminal-badge">✔ PASS</span>
          <span class="terminal-file">${step.file}</span>
          <span class="terminal-time">${step.time}</span>
        `;

        terminalBody.appendChild(row);
        stepIndex++;
      } else {
        clearInterval(interval);

        const summary = document.createElement("div");
        summary.className = "terminal-summary";
        summary.innerHTML = `
          <span>✨ All 3 test suites passed</span>
          <span>100% reliability (0.91s)</span>
        `;

        terminalBody.appendChild(summary);

        runBtn.classList.remove("running");
        runBtn.innerHTML = `
          <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="6 3 20 12 6 21 6 3"/>
          </svg>
          <span>Run Suite</span>
        `;

        // Confetti celebration
        confetti({
          particleCount: 45,
          spread: 60,
          origin: { y: 0.75 },
          colors: ["#CFA550", "#EBCB82", "#FFFFFF", "#A47B27"],
        });

        showToast("All 3 test suites passed with 100% reliability! ✨");
      }
    }, 280);
  });
}
