/* =========================================================
   Kritika Mohan — Portfolio Scripts
   Modern, Interactive, Pill-themed UI Controller
   ========================================================= */

const projects = [
  {
    id: "proj-1",
    title: "Healthcare Predictive Analytics & Mortality Forecasting",
    category: "analytics",
    categoryLabel: "Time Series & GeoSpatial AI",
    status: "Validated Model",
    description:
      "Engineered an end-to-end predictive forecasting pipeline to project cardiovascular mortality rates through 2030 across 3,142 U.S. counties using Meta Prophet. Solved temporal lag dependencies and spatial heterogeneity across distinct age demographics.",
    insight:
      "Achieved sub-5% forecast error across all age brackets and isolated high-risk regional clusters to assist proactive healthcare allocation.",
    tags: ["Meta Prophet", "Time Series", "Python", "GeoPandas", "Healthcare AI", "Folium"],
    metrics: ["3,142 Counties", "<5% Error Rate", "Horizon 2030"],
    github: "https://github.com/kritikaamohan/cardiovascular-disease-forecasting",
    demo: "",
  },
  {
    id: "proj-2",
    title: "Spatio-Temporal Ocean Parameter Forecasting at ISRO SAC",
    category: "deep-learning",
    categoryLabel: "Satellite AI & Deep Learning",
    status: "Research Benchmark",
    description:
      "Benchmarked five state-of-the-art spatio-temporal architectures (Attention-ConvLSTM, GCN-LSTM, CNN-LSTM) over 5+ years of multi-sensor satellite telemetry to forecast ocean dynamics in the Northern Indian Ocean. Architected scalable PyTorch tensor pipelines for high-dimensional satellite grid arrays.",
    insight:
      "Attention-ConvLSTM outperformed all models on Parameter A by capturing spatial attention weights, while GCN-LSTM excelled on Parameter B through graph-based oceanic mesh connectivity.",
    tags: ["Attention-ConvLSTM", "GCN-LSTM", "PyTorch", "TensorFlow", "Remote Sensing", "Satellite Telemetry"],
    metrics: ["5+ Architectures", "5+ Yrs Telemetry", "Dual Parameter"],
    github: "https://github.com/kritikaamohan",
    demo: "",
  },
  {
    id: "proj-3",
    title: "Customer Lifetime Value (CLV) & Multi-Channel Attribution",
    category: "analytics",
    categoryLabel: "Predictive Analytics & Modeling",
    status: "Analytics Framework",
    description:
      "Conducted rigorous cohort analysis and econometric modeling across multi-touch marketing acquisition channels using Python and Pandas. Calculated channel-level CAC, ROI, and long-term Customer Lifetime Value to eliminate vanity metrics.",
    insight:
      "Discovered that email marketing yielded peak ROI at the lowest customer acquisition cost, while social media channels generated the highest overall customer retention and long-term lifetime value.",
    tags: ["Pandas", "Marketing Analytics", "ROI Modeling", "Predictive Modeling", "Power BI", "Data Viz"],
    metrics: ["Multi-Channel ROI", "Cohort Retention", "LTV Forecasting"],
    github: "https://github.com/kritikaamohan/clv-marketing-channel-analysis",
    demo: "",
  }
];

let activeFilter = "all";

// Render projects based on selected filter with smooth transitions
function renderProjects(filter = "all", isTransition = false) {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const updateDOM = () => {
    grid.innerHTML = filtered
      .map((p, idx) => {
        const tagPills = p.tags
          ? `<div class="project-tags-row">${p.tags.map((t) => `<span class="tag-pill-modern">${t}</span>`).join("")}</div>`
          : "";

        const metricChips = p.metrics
          ? `<div class="project-metric-chips">${p.metrics.map((m) => `<span class="metric-chip-pill"><span class="chip-dot"></span>${m}</span>`).join("")}</div>`
          : "";

        const insightBox = p.insight
          ? `
            <div class="project-insight-box">
              <span class="insight-label">
                <svg class="icon-svg-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="16" x2="12" y2="12"/>
                  <line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
                Key Breakthrough / Finding
              </span>
              <p>${p.insight}</p>
            </div>
          `
          : "";

        const links = [];
        if (p.github) {
          links.push(`
            <a href="${p.github}" target="_blank" rel="noopener" class="btn-pill-small btn-pill-outline">
              <svg class="icon-svg-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
              <span>Source Code</span>
            </a>
          `);
        }
        if (p.demo) {
          links.push(`
            <a href="${p.demo}" target="_blank" rel="noopener" class="btn-pill-small btn-pill-primary">
              <svg class="icon-svg-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              <span>Live Demo</span>
            </a>
          `);
        }

        return `
          <article class="project-card-pro card-enter" style="animation-delay: ${idx * 60}ms" data-category="${p.category}">
            <div class="project-card-topbar">
              <span class="proj-cat-pill">${p.categoryLabel}</span>
              <span class="proj-status-pill">
                <span class="proj-status-dot"></span>
                ${p.status}
              </span>
            </div>

            <div class="project-card-inner">
              <h3 class="project-title">${p.title}</h3>
              ${metricChips}
              <p class="project-description">${p.description}</p>
              ${insightBox}
              ${tagPills}
            </div>

            <div class="project-card-footer">
              <span class="tech-tag-pill" style="font-size: 0.76rem;">Python / ML</span>
              <div style="display: flex; gap: 0.5rem;">
                ${links.join("")}
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    if (isTransition) {
      requestAnimationFrame(() => {
        grid.style.opacity = "1";
        grid.style.transform = "translateY(0)";
      });
    }
  };

  if (isTransition) {
    grid.style.opacity = "0";
    grid.style.transform = "translateY(8px)";
    setTimeout(updateDOM, 160);
  } else {
    updateDOM();
  }
}

// Setup Project Filter Pills
function setupProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-pill");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      if (filter === activeFilter) return;

      filterButtons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      activeFilter = filter;
      renderProjects(filter, true);
    });
  });
}

// Setup Active Nav Tracking
function setupActiveNav() {
  const links = document.querySelectorAll(".nav-pill-item");
  const sections = Array.from(links)
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!("IntersectionObserver" in window) || sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach((l) => {
            const href = l.getAttribute("href");
            if (href === `#${id}`) {
              l.classList.add("active");
            } else {
              l.classList.remove("active");
            }
          });
        }
      });
    },
    { rootMargin: "-25% 0px -60% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

// Setup Smooth Scrolling for All Anchor Links
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        closeMobileDrawer();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}

// Mobile Navigation Toggle
function setupMobileMenu() {
  const toggleBtn = document.getElementById("mobile-toggle");
  const drawer = document.getElementById("mobile-drawer");
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = drawer.classList.contains("open");
    if (isOpen) {
      closeMobileDrawer();
    } else {
      drawer.classList.add("open");
      toggleBtn.classList.add("active");
      toggleBtn.setAttribute("aria-expanded", "true");
    }
  });

  document.addEventListener("click", (e) => {
    if (!drawer.contains(e.target) && !toggleBtn.contains(e.target) && drawer.classList.contains("open")) {
      closeMobileDrawer();
    }
  });
}

function closeMobileDrawer() {
  const toggleBtn = document.getElementById("mobile-toggle");
  const drawer = document.getElementById("mobile-drawer");
  if (drawer) drawer.classList.remove("open");
  if (toggleBtn) {
    toggleBtn.classList.remove("active");
    toggleBtn.setAttribute("aria-expanded", "false");
  }
}

// Toast notification helper
function showToast(message = "Copied to clipboard!") {
  const toast = document.getElementById("toast-message");
  const toastText = document.getElementById("toast-text");
  if (!toast) return;

  if (toastText) toastText.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

// Copy Email Button Functionality
function setupEmailCopy() {
  const copyBtn = document.getElementById("copy-email-btn");
  const emailBox = document.getElementById("email-copy-box");
  const email = "kritikamohan0202@gmail.com";

  const handleCopy = (e) => {
    e.preventDefault();
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(() => {
        showToast("Email copied to clipboard!");
        animateCopyButton();
      }).catch(() => {
        fallbackCopy(email);
      });
    } else {
      fallbackCopy(email);
    }
  };

  if (copyBtn) copyBtn.addEventListener("click", handleCopy);
  if (emailBox) {
    emailBox.addEventListener("click", (e) => {
      if (!copyBtn.contains(e.target)) {
        handleCopy(e);
      }
    });
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    document.execCommand("copy");
    showToast("Email copied to clipboard!");
    animateCopyButton();
  } catch (err) {
    showToast("Email: " + text);
  }
  document.body.removeChild(textarea);
}

function animateCopyButton() {
  const copyBtn = document.getElementById("copy-email-btn");
  if (!copyBtn) return;
  const originalHtml = copyBtn.innerHTML;
  copyBtn.innerHTML = `
    <svg class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
    <span class="copy-text">Copied!</span>
  `;
  copyBtn.classList.add("copied");

  setTimeout(() => {
    copyBtn.innerHTML = originalHtml;
    copyBtn.classList.remove("copied");
  }, 2200);
}

// Back to Top Button
function setupBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Setup Navbar Scroll Elevation & Compression
function setupNavbarScroll() {
  const wrapper = document.querySelector(".navbar-wrapper");
  if (!wrapper) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      wrapper.classList.add("nav-scrolled");
    } else {
      wrapper.classList.remove("nav-scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

// Setup Silky Scroll Reveals
function setupScrollReveals() {
  const targets = document.querySelectorAll(
    ".section-header, .section-header-flex, .hero-content-card, .hero-visual-card, " +
    ".stat-pill-card, .about-main-card, .about-side-card, .experience-card-showcase, " +
    ".skill-bento-card, .edu-card, .credential-card, .contact-banner"
  );

  targets.forEach((el) => {
    el.classList.add("reveal-on-scroll");
  });

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.05,
    }
  );

  targets.forEach((el) => observer.observe(el));
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderProjects("all");
  setupProjectFilters();
  setupActiveNav();
  setupSmoothScrolling();
  setupMobileMenu();
  setupEmailCopy();
  setupBackToTop();
  setupNavbarScroll();
  setupScrollReveals();
});
