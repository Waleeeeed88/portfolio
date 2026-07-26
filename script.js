/* ============================================================
   Portfolio — theme, nav rail state, ripple
   (No scroll animations; 3D depth is CSS-only via hover)
   ============================================================ */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Theme toggle ---------- */
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector(".material-symbols-rounded");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeIcon.textContent = theme === "dark" ? "light_mode" : "dark_mode";
  localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme || (systemDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
});

/* ---------- Top bar hairline on scroll ---------- */
const topbar = document.getElementById("topbar");
window.addEventListener(
  "scroll",
  () => topbar.classList.toggle("scrolled", window.scrollY > 8),
  { passive: true }
);

/* ---------- Active rail item based on section in view ---------- */
const railLinks = [...document.querySelectorAll(".rail-items .rail-item")];
const sectionIds = ["top", "experience", "education", "projects", "stack", "contact"];
const sections = sectionIds
  .map((id) => document.getElementById(id) || (id === "top" ? document.querySelector(".shell") : null))
  .filter(Boolean);

const railObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id || "top";
      railLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((s) => railObserver.observe(s));

/* ---------- Material ripple ---------- */
document.querySelectorAll(".ripple").forEach((btn) => {
  btn.addEventListener("pointerdown", (e) => {
    const rect = btn.getBoundingClientRect();
    const ink = document.createElement("span");
    const size = Math.max(rect.width, rect.height);
    ink.className = "ripple-ink";
    ink.style.width = ink.style.height = `${size}px`;
    ink.style.left = `${e.clientX - rect.left - size / 2}px`;
    ink.style.top = `${e.clientY - rect.top - size / 2}px`;
    btn.appendChild(ink);
    ink.addEventListener("animationend", () => ink.remove());
  });
});

/* ---------- Smooth anchors ---------- */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
});
