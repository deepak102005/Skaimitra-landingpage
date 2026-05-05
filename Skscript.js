// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("open");
}

// Close menu on link click
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("open");
  });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// AOS (Animate On Scroll) - custom lightweight implementation
function checkAOS() {
  const elements = document.querySelectorAll("[data-aos]");
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add("aos-animate");
    }
  });
}

window.addEventListener("scroll", checkAOS);
window.addEventListener("load", checkAOS);
checkAOS();

// Progress bar animation
function animateProgressBars() {
  const fills = document.querySelectorAll(".prog-fill");
  fills.forEach(fill => {
    const rect = fill.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      const width = fill.style.width;
      fill.style.width = "0%";
      setTimeout(() => {
        fill.style.width = width;
      }, 100);
    }
  });
}

const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fills = entry.target.querySelectorAll(".prog-fill");
      fills.forEach(fill => {
        const targetWidth = fill.getAttribute("data-width") || fill.style.width;
        fill.setAttribute("data-width", targetWidth);
        fill.style.width = "0%";
        requestAnimationFrame(() => {
          setTimeout(() => { fill.style.width = targetWidth; }, 100);
        });
      });
    }
  });
}, { threshold: 0.3 });

const miniDash = document.querySelector(".mini-dashboard");
if (miniDash) progressObserver.observe(miniDash);

// Chart bars animation
function animateBars() {
  const bars = document.querySelectorAll(".bar");
  bars.forEach((bar, i) => {
    const targetH = bar.style.height;
    bar.style.height = "0%";
    bar.style.transition = "height 0.8s ease " + (i * 0.1) + "s";
    setTimeout(() => { bar.style.height = targetH; }, 200);
  });
}

const chartObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bars = entry.target.querySelectorAll(".bar");
      bars.forEach((bar, i) => {
        const targetH = bar.getAttribute("data-height") || bar.style.height;
        bar.setAttribute("data-height", targetH);
        bar.style.height = "0%";
        bar.style.transition = "height 0.8s ease " + (i * 0.1) + "s";
        setTimeout(() => { bar.style.height = targetH; }, 100);
      });
    }
  });
}, { threshold: 0.3 });

const chartBox = document.querySelector(".chart-box");
if (chartBox) chartObserver.observe(chartBox);

// Counter animation for stats
function animateCounter(el, target, suffix = "") {
  let start = 0;
  const duration = 1500;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const val = Math.floor(progress * target);
    el.textContent = val + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// Hover effects on cards
document.querySelectorAll(".feature-card, .platform-card, .feat-card, .improve-card, .benefit-card, .trust-card, .step-card").forEach(card => {
  card.addEventListener("mouseenter", function() {
    this.style.transition = "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)";
  });
});

// Active nav link highlighting on scroll
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute("id");
    }
  });
  document.querySelectorAll(".nav-links a").forEach(a => {
    a.style.background = "";
    a.style.color = "";
    if (a.getAttribute("href") === "#" + current) {
      a.style.background = "rgba(247,147,30,0.2)";
      a.style.color = "#F7931E";
    }
  });
});

console.log("SkaiMitra - Digital Learning Platform Loaded Successfully");
