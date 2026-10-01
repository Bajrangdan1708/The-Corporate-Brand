# AI Development Prompts

> **Disclaimer**: AI was used as a development assistant during the creation of this project. All generated code has been reviewed, tested, and understood by the developer. The AI served as a productivity tool — the developer retains full responsibility for the final code quality, structure, and correctness.

---

## Prompt 1 — Project Architecture

**Goal**: Generate the initial project structure and file organization.

**Prompt Summary**:
> Create a complete project structure for a professional landing page for "Prodesk IT" — a Digital Marketing / IT Services company. The project should use HTML5, CSS3, and vanilla JavaScript with no CSS frameworks. Include index.html, style.css, script.js, README.md, Prompts.md, and an assets/ folder for logo.png and hero-image.jpg.

**Outcome**: The initial directory layout was created with all required files and the `assets/` folder structure.

---

## Prompt 2 — Responsive Navbar

**Goal**: Build a sticky, responsive navbar with glassmorphism effect and mobile hamburger menu.

**Prompt Summary**:
> Create a responsive sticky navigation bar with glassmorphism (backdrop-filter blur) for "Prodesk IT". Desktop: logo + company name on left, nav links (Home, About, Services, Contact) + dark/light toggle on right. Mobile: hamburger menu that toggles a slide-in nav panel. Include smooth scrolling to sections, ARIA attributes for accessibility, and active link highlighting on scroll.

**Outcome**: A fully functional navbar with frosted-glass effect, smooth transitions, accessible hamburger menu with Escape key support, and scroll-based active link highlighting.

---

## Prompt 3 — Hero Section

**Goal**: Create a high-conversion hero section with dual CTAs and decorative elements.

**Prompt Summary**:
> Build a hero section with headline "We Build Digital Experiences That Drive Growth", supporting paragraph, two CTA buttons (Get Started → Contact, Explore Services → Services), professional hero image, and decorative background elements (gradient blobs, grid pattern). Desktop: two-column layout. Mobile: stacked vertically.

**Outcome**: A visually impactful hero section with gradient text, decorative blurred blobs, a subtle grid pattern, responsive layout, and smooth entrance animations.

---

## Prompt 4 — Services Section

**Goal**: Create service cards with CSS Grid and hover effects.

**Prompt Summary**:
> Create a Services section with 3 cards (SEO Optimization, Web Development, Digital Marketing). Each card has an icon, title, description, and "Learn More" link. Use CSS Grid: 3 columns on desktop, 2 on tablet, 1 on mobile. Add hover effects with translateY, scale, and shadow enhancement for z-axis lifting.

**Outcome**: Three service cards with inline SVG icons, gradient icon backgrounds, responsive grid layout, and polished hover lift animations with staggered reveal timing.

---

## Prompt 5 — Dark Mode

**Goal**: Implement a fully functional dark/light mode toggle.

**Prompt Summary**:
> Implement dark/light mode using vanilla JavaScript. Toggle a data-theme attribute on the HTML element. Use CSS custom properties to define all theme colors. Store preference in localStorage. Restore on page reload. Respect prefers-color-scheme as default. Use accessible aria-label text that updates dynamically. Add smooth color transitions.

**Outcome**: A complete theming system with CSS custom properties for both light and dark palettes, localStorage persistence, system preference detection, and smooth transitions between themes.

---

## Prompt 6 — Responsive Design

**Goal**: Ensure the website is fully responsive across all target breakpoints.

**Prompt Summary**:
> Make the landing page fully responsive for 320px, 375px, 425px, 768px, 1024px, and 1440px. No horizontal scrolling, no overlapping. Images must scale. Text must remain readable. Navigation must work on mobile. Cards must stack correctly. Use CSS media queries with mobile-friendly adjustments for spacing, typography, and grid columns.

**Outcome**: Media queries at 1024px, 768px, 480px, and 320px breakpoints. Dynamic CSS custom property overrides for typography scale, spacing, and grid column counts. Tested stacking behavior for all card grids and the hero layout.

---

## Prompt 7 — Accessibility and Performance

**Goal**: Improve accessibility compliance and Lighthouse performance.

**Prompt Summary**:
> Audit the landing page for accessibility: semantic HTML, proper heading hierarchy (single h1), alt text for all images, labels for all form fields, keyboard-accessible buttons, visible focus states, sufficient color contrast, ARIA attributes, accessible navigation. Also optimize for performance: lazy-load non-critical images, minimize JS, avoid unnecessary animations, use prefers-reduced-motion to disable animations for users who prefer it.

**Outcome**: Skip-to-content link, proper ARIA roles and labels, form error alerts with role="alert", aria-live regions, focus-visible outlines, prefers-reduced-motion media query that disables all animations, lazy-loading on footer logo, and optimized passive scroll listeners.

---

## Prompt 8 — Final QA

**Goal**: Conduct a final quality assurance review of the complete project.

**Prompt Summary**:
> Review the complete Prodesk IT landing page project. Verify: navbar works, hamburger works, nav links work, smooth scrolling works, dark/light mode works and persists, hero CTAs work, services display and hover correctly, contact form validates and shows success message, footer works, responsive design has no horizontal scrolling, all images have alt text, buttons are keyboard-accessible, glassmorphism works, reduced-motion is respected, no console errors, all asset paths are correct, README.md and Prompts.md exist.

**Outcome**: All checklist items verified. Minor adjustments made to ensure complete coverage of all requirements, consistent code formatting, and proper file references.

---

## Tools & Environment

- **AI Assistant**: Used as a coding assistant for scaffolding, component generation, and code review
- **Editor**: VS Code with Live Server extension for local development
- **Testing**: Manual testing across multiple viewport sizes using browser DevTools

---

> **Note**: The developer is responsible for personally reviewing all generated code, testing the deployed site, adding actual screenshots to the README, pushing the project to GitHub, and deploying to Vercel or Netlify.
