/* =========================================================
   ZÜRICH OPENAIR 2026 – Countdown + kleine Interaktionen
   ========================================================= */

// --- Countdown zum Festival-Start: 26.08.2026 16:00 ---
const TARGET_DATE = new Date("2026-08-26T16:00:00+02:00").getTime();

const daysEl    = document.getElementById("days");
const hoursEl   = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
  const now = Date.now();
  const diff = TARGET_DATE - now;

  if (diff <= 0) {
    daysEl.textContent = hoursEl.textContent = minutesEl.textContent = secondsEl.textContent = "00";
    const cd = document.getElementById("countdown");
    if (cd) cd.setAttribute("aria-label", "Das Festival hat begonnen!");
    return;
  }

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysEl.textContent    = String(days).padStart(2, "0");
  hoursEl.textContent   = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

// --- Navbar: Hintergrund intensiver beim Scrollen ---
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navbar.style.background = "rgba(255,255,255,0.35)";
    navbar.style.boxShadow = "0 6px 20px rgba(138,63,252,0.1)";
  } else {
    navbar.style.background = "rgba(255,255,255,0.18)";
    navbar.style.boxShadow = "none";
  }
});

// --- Fade-In beim Scrollen (für Day-Cards und Info-Items) ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".day-card, .info-item, .ticket-card").forEach((el, i) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s`;
  observer.observe(el);
});
