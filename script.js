const progress = document.querySelector(".progress");
const navLinks = Array.from(document.querySelectorAll(".rail-nav a"));
const sections = Array.from(document.querySelectorAll("main section"));
const typewriterTitle = document.querySelector("[data-typewriter]");
const animatedNodes = Array.from(document.querySelectorAll("[data-animate]"));

const renderTypedTitle = (target, text, cursor) => {
  target.textContent = "";

  text.split("\n").forEach((line, index) => {
    if (index > 0) {
      target.appendChild(document.createElement("br"));
    }

    target.appendChild(document.createTextNode(line));
  });

  target.appendChild(cursor);
};

const renderEmphasizedTitle = (target, text, cursor) => {
  const emphasizedPhrases = [
    "Walid",
    "fourth-year Software Engineering student",
    "York University's Lassonde School of Engineering",
  ];

  target.textContent = "";

  text.split("\n").forEach((line, index) => {
    if (index > 0) {
      target.appendChild(document.createElement("br"));
    }

    let remaining = line;

    while (remaining.length > 0) {
      const nextMatch = emphasizedPhrases
        .map((phrase) => ({ phrase, index: remaining.indexOf(phrase) }))
        .filter((match) => match.index >= 0)
        .sort((a, b) => a.index - b.index)[0];

      if (!nextMatch) {
        target.appendChild(document.createTextNode(remaining));
        break;
      }

      if (nextMatch.index > 0) {
        target.appendChild(document.createTextNode(remaining.slice(0, nextMatch.index)));
      }

      const strong = document.createElement("strong");
      strong.className = "hero-key";
      strong.textContent = nextMatch.phrase;
      target.appendChild(strong);
      remaining = remaining.slice(nextMatch.index + nextMatch.phrase.length);
    }
  });

  target.appendChild(cursor);
};

const runHeroTypewriter = () => {
  if (!typewriterTitle) return;

  const sourceText = typewriterTitle.innerText.trim();
  const cursor = document.createElement("span");
  cursor.className = "typing-caret";
  cursor.setAttribute("aria-hidden", "true");
  typewriterTitle.setAttribute("aria-label", sourceText.replace(/\n/g, " "));

  typewriterTitle.style.minHeight = `${typewriterTitle.offsetHeight}px`;

  renderTypedTitle(typewriterTitle, "", cursor);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    renderEmphasizedTitle(typewriterTitle, sourceText, cursor);
    return;
  }

  const startDelay = 220;
  const charDuration = 22;
  const linePause = 170;
  let startedAt;
  let renderedLength = 0;

  const pauseBefore = (length) =>
    sourceText.slice(0, length).split("").filter((char) => char === "\n").length * linePause;

  const step = (timestamp) => {
    if (!startedAt) startedAt = timestamp + startDelay;

    const elapsed = Math.max(0, timestamp - startedAt);
    let nextLength = renderedLength;

    while (
      nextLength < sourceText.length &&
      elapsed >= nextLength * charDuration + pauseBefore(nextLength)
    ) {
      nextLength += 1;
    }

    if (nextLength !== renderedLength) {
      renderedLength = nextLength;
      renderTypedTitle(typewriterTitle, sourceText.slice(0, renderedLength), cursor);
    }

    if (renderedLength < sourceText.length) {
      window.requestAnimationFrame(step);
    } else {
      renderEmphasizedTitle(typewriterTitle, sourceText, cursor);
    }
  };

  window.requestAnimationFrame(step);
};

const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progressValue = scrollable > 0 ? window.scrollY / scrollable : 0;
  progress.style.width = `${Math.min(progressValue * 100, 100)}%`;
};

const isInRevealRange = (node) => {
  const box = node.getBoundingClientRect();
  return box.top < window.innerHeight * 0.92 && box.bottom > window.innerHeight * 0.05;
};

const revealOnScroll = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    animatedNodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  document.body.classList.add("motion-ready");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const node = entry.target;
        const group = Array.from(
          node.parentElement?.querySelectorAll?.("[data-animate]") || []
        ).filter((item) => item.dataset.animate === node.dataset.animate);
        const index = Math.max(group.indexOf(node), 0);

        window.setTimeout(() => {
          node.classList.add("is-visible");
        }, Math.min(index * 80, 280));

        revealObserver.unobserve(node);
      });
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.01 }
  );

  animatedNodes.forEach((node) => {
    if (isInRevealRange(node)) {
      node.classList.add("is-visible");
      return;
    }

    revealObserver.observe(node);
  });

  window.setTimeout(() => {
    animatedNodes.forEach((node) => {
      if (isInRevealRange(node)) {
        node.classList.add("is-visible");
        revealObserver.unobserve(node);
      }
    });
  }, 500);
};

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      const isActive = link.hash === `#${visible.target.id}`;
      link.toggleAttribute("aria-current", isActive);
    });
  },
  { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.35, 0.6] }
);

sections.forEach((section) => sectionObserver.observe(section));
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();
runHeroTypewriter();
revealOnScroll();
