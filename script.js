const menuToggle = document.getElementById("menuToggle");
const primaryNav = document.getElementById("primaryNav");
const navLinks = [...primaryNav.querySelectorAll('a[href^="#"]')];

function closeMenu() {
  primaryNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
}

menuToggle.addEventListener("click", () => {
  const open = !primaryNav.classList.contains("open");
  primaryNav.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});
window.matchMedia("(min-width: 761px)").addEventListener("change", closeMenu);

const sectionIds = ["experience", "education", "projects", "stack", "contact"];
const sections = sectionIds.map((id) => document.getElementById(id));

function updateScrollState() {
  let current = "top";
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= 160) current = section.id;
  });
  navLinks.forEach((link) => {
    const active = link.getAttribute("href") === "#" + current;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}
window.addEventListener("scroll", updateScrollState, { passive: true });
updateScrollState();

const copyEmail = document.getElementById("copyEmail");
const snackbar = document.getElementById("snackbar");
let snackbarTimer;

copyEmail.addEventListener("click", async () => {
  const email = document.querySelector(".contact-email").textContent.trim();
  try {
    await navigator.clipboard.writeText(email);
    document.getElementById("snackbarText").textContent = email;
    snackbar.classList.add("show");
    clearTimeout(snackbarTimer);
    snackbarTimer = setTimeout(() => snackbar.classList.remove("show"), 2500);
  } catch {
    window.location.href = "mailto:" + email;
  }
});
