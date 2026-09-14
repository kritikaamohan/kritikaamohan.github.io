# Kritika Mohan — AI/ML Researcher & Data Scientist Portfolio

A modern, high-performance personal portfolio and research showcase designed with an ultra-clean **light-mode aesthetic**, **floating glass pill navigation**, **modular bento grids**, and **custom vector SVG micro-icons**. Built with pure vanilla web technologies — no bundlers, frameworks, or dependencies required.

Live URL: [https://kritikaamohan.github.io](https://kritikaamohan.github.io)

---

## ✨ Features & Design Highlights

- **Floating Glass Pill Navbar**:
  - Glassmorphic backdrop blur with subtle border highlights.
  - Live scroll-spy active section indicator.
  - Responsive mobile drawer with smooth spring toggle animations.
  - Direct resume download action pill.

- **Hero Visual Bento Showcase**:
  - Dynamic status indicator (`Open to research & AI/ML opportunities`).
  - High-resolution profile avatar with glowing halo and animated ISRO research fellowship floating badges.
  - Quick-action buttons for project browsing and contact.
  - Specialization pill tags for Earth Observation, Ocean AI, and Time-Series Modeling.

- **Impact Stats Bento Grid**:
  - 4 high-impact metric cards with smooth Google Blog-style hover elevation (`5+ Years Satellite Grids`, `3,142 U.S. Counties Forecasted`, `<5% Error Rate`, `8.15 Master's CGPA`).

- **Research Experience Showcase (Space Applications Centre, ISRO)**:
  - High-end fellowship showcase with custom aerospace crest pill.
  - 2-column bento sub-cards covering **Architectural Benchmarking** and **High-Throughput Data Pipelines**.
  - Winner model badges (`Attention-ConvLSTM ★`, `GCN-LSTM ★`) with vector star accents.
  - Comprehensive technologies shelf.

- **Interactive Projects Grid with Dynamic Filters**:
  - Client-side category filtering (`All`, `Deep Learning`, `Data & Analytics`) with smooth cross-fades.
  - Project cards featuring key insight callout boxes, performance metric chips, and direct GitHub / Live Demo action links.

- **Curated Technical Skills Bento Grid**:
  - 6 themed category cards: Programming, AI & Machine Learning, Libraries & Frameworks, Visualization & BI, Tools & Environments, and Academic Coursework.
  - Distinct pastel tint backgrounds and matching vibrant vector SVG icons (`.icon-blue`, `.icon-indigo`, `.icon-cyan`, `.icon-purple`, `.icon-emerald`, `.icon-teal`).

- **Academic Journey & Credentials**:
  - Degree cards for **M.Sc. in Artificial Intelligence** (Central University of South Bihar) and **BCA** (Patliputra University).
  - Bento sub-cards for Professional Certifications (Dubai Future Foundation, IIT Patna) and Innovation Leadership.

- **Interactive Contact Hub & Instant Clipboard Copy**:
  - One-click email copy card with live status toggle (`✓ Copied!`) and animated toast notification.
  - Direct pill links for LinkedIn and GitHub profiles.

- **100% Vector SVG Icon System**:
  - Zero low-resolution system emojis.
  - Every icon is a hand-crafted, scalable vector SVG with optimal line weights and responsive sizing.

- **Fully Responsive Architecture**:
  - Tuned with CSS fluid clamp typography and flexible CSS grid/flex layouts across desktop (1920px), tablet (768px), and mobile (<480px, <360px).

---

## 📁 Repository Structure

```
kritikaamohan.github.io/
├── index.html              # Core semantic HTML structure and sections
├── favicon.svg             # Modern dual-ring neural gradient favicon
├── README.md               # Documentation and setup guide
├── css/
│   └── style.css           # Design tokens, bento grids, animations, and responsive media queries
├── js/
│   └── script.js           # Navigation scroll-spy, project data, category filters, and clipboard toast
└── assests/
    ├── img/
    │   ├── kritika.png     # High-resolution profile portrait image
    │   └── favicon.svg     # Favicon asset copy
    └── resume/
        └── Kritika_Mohan_Resume.pdf  # Downloadable PDF résumé
```

---

## 🚀 Local Development & Preview

No Node.js or build setup is required. You can preview the website immediately using any of the following methods:

### Method 1: Python HTTP Server (Recommended)
From the project root directory:

```bash
python -m http.server 8080
```
Then open [http://localhost:8080](http://localhost:8080) in your browser.

### Method 2: Node.js Serve
```bash
npx -y serve -p 8080 .
```

### Method 3: Direct Browser Launch
Double-click `index.html` to open it directly in any modern browser.

---

## 🛠️ Customization Guide

### 1. Updating Projects
All project data is stored in `js/script.js`. To add or edit projects, modify the `projects` array:

```javascript
{
  id: "your-project-id",
  title: "Project Title",
  category: "deep-learning", // 'deep-learning' or 'analytics'
  categoryLabel: "Deep Learning",
  status: "Completed",
  description: "Brief summary of the research or project.",
  keyInsight: "Key finding or empirical contribution.",
  metrics: ["Metric 1", "Metric 2"],
  tags: ["PyTorch", "Python"],
  github: "https://github.com/...",
  demo: "https://..."
}
```

### 2. Customizing Design Tokens & Colors
All visual styles, colors, and radii are declared at the top of `css/style.css` under `:root`:

- `--primary`: Main brand royal blue (`#2563eb`)
- `--primary-gradient`: Linear gradient for primary buttons and badges
- `--radius-pill`: 9999px for pill-shaped elements
- `--radius-card`: 32px for modern rounded bento cards
- `--radius-card-lg`: 38px for hero and flagship experience cards

### 3. Replacing Profile Image & Résumé
- **Profile Image**: Place your updated photo in `assests/img/` and ensure `src="assests/img/kritika.png"` in `index.html` references the correct path.
- **Résumé**: Update `assests/resume/Kritika_Mohan_Resume.pdf` with your latest CV.

---

## 🌐 Deploying to GitHub Pages

1. **Verify your repository name**: Ensure your repo is named `<username>.github.io` (e.g., `kritikaamohan.github.io`).
2. **Commit and push changes**:
   ```bash
   git add .
   git commit -m "Enhance portfolio with modern bento design and SVG icons"
   git push origin main
   ```
3. **Configure Pages Settings**:
   - Go to your repository on GitHub.
   - Navigate to **Settings → Pages**.
   - Under **Build and deployment**, set **Source** to **Deploy from a branch**.
   - Select branch **`main`** and folder **`/ (root)`**, then click **Save**.
4. Your site will automatically build and go live at:
   ```
   https://kritikaamohan.github.io/
   ```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🌟 Acknowledgements

Special thanks to **Manny** for contributing to the modern redesign, UI/UX enhancements, and architecture.
