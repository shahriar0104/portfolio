# Portfolio Revamp Plan (Next.js + GSAP + Lenis)

> Goal: Rebuild the portfolio to feel similar in smoothness and animation style to **stavrossymeonidis.dev**, using your existing **Next.js (app router)** setup plus **Tailwind v4**, **GSAP + ScrollTrigger**, and **Lenis**. No Framer Motion in new work unless absolutely necessary.

---

## 1. Tech Stack & Architecture

- **Framework**: Next.js (App Router) with React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + minimal custom CSS in `app/globals.css`
- **Animation**: GSAP core + ScrollTrigger
- **Smooth Scroll**: Lenis ( synced with ScrollTrigger )
- **3D / Visual**: Optional lightweight Spline embed or simple Three.js scene
- **Icons**: Existing Lucide icons where helpful

### 1.1 Directory layout (Next.js-adapted)

- `app/`
  - `layout.tsx` – document shell, fonts, global providers
  - `page.tsx` – single-page layout composing Hero → Footer
- `components/`
  - `Hero/`
  - `About/`
  - `Experience/`
  - `Projects/`
  - `Skills/`
  - `Testimonials/` (optional)
  - `Contact/`
  - `Footer/`
  - `ScrollEngine.tsx` (Lenis + ScrollTrigger sync)
- `animations/`
  - `fadeInUp.ts`
  - `staggerReveal.ts`
  - `parallaxScroll.ts`
  - `pinScrollSection.ts`
  - `lazySplineLoader.tsx`
  - `gsapConfig.ts` (shared registration/helpers)
- `hooks/`
  - `useIsomorphicLayoutEffect.ts` (safe GSAP use with Next)
  - `useScrollSection.ts` (optional helpers)
- `data/`
  - `experience.ts`
  - `projects.ts`
  - `skills.ts`
  - `testimonials.ts`
- `styles/`
  - (Kept mostly in `app/globals.css` + Tailwind v4 utilities)

---

## 2. Global Styling & Design System

- **Background**: `#0d0d0d` (or close to current `space-dark` palette)
- **Accent**: `#00f5ff` (cyan) and `#8b5cf6` (purple) – both already close to current theme
- **Text**: Neutral-50 / slate-100 range
- **Typography scale**:
  - Hero title: `text-6xl`–`text-8xl` (clamped for responsive)
  - Section titles: `text-4xl`–`text-5xl`
  - Body: `text-base`–`text-lg`
- **Layout**:
  - Full-bleed sections (`w-full`, large `py-24`–`py-32`)
  - Large whitespace and breathable line-heights
  - Minimal borders, subtle glows using accent colors

Tasks:
- [ ] Ensure Tailwind v4 configuration matches color tokens (bg, accent, text).
- [ ] Verify fonts and `font-display` mappings from `globals.css` align with the new typography scale.

---

## 3. Scroll Engine (Lenis + GSAP ScrollTrigger)

### 3.1 Implementation

- Create a client component `components/ScrollEngine.tsx` that:
  - Initializes **Lenis** once on mount.
  - Sets up a **RAF loop**:
    - `lenis.raf(time)`
    - `ScrollTrigger.update()` inside the animation frame.
  - Cleans up Lenis on unmount.
  - Wraps children in a `div` or directly returns `{children}` (no extra layout shifts).
- Use `useIsomorphicLayoutEffect` for any GSAP + DOM work.
- Register `ScrollTrigger` once in a shared `gsapConfig.ts`.

### 3.2 Integration

- Wrap page content with `ScrollEngine` from `app/layout.tsx` body or inside `page.tsx`:
  - Ensure **only one** Lenis instance.
  - All section-level ScrollTriggers should rely on default `window` scrolling (Lenis controls it under the hood).

Tasks:
- [ ] Add `gsap` and `@studio-freight/lenis` as dependencies.
- [ ] Implement `ScrollEngine` component.
- [ ] Implement `useIsomorphicLayoutEffect` hook.
- [ ] Verify ScrollTrigger updates correctly while scrolling.

---

## 4. Reusable Animation Utilities (`animations/`)

Each utility exposes a function that accepts refs/elements and returns a GSAP context/timeline, to keep sections clean.

- **`fadeInUp`**
  - Signature: `(target: Element | RefObject, options?)`
  - Behavior: `opacity: 0 → 1`, `y: 40 → 0`, ease-out, configurable delay/duration.

- **`staggerReveal`**
  - For lists/text lines.
  - Signature: `(targets: gsap.TweenTarget, options?)`
  - Behavior: `y: 20 → 0`, `opacity: 0 → 1`, stagger.

- **`parallaxScroll`**
  - ScrollTrigger-based parallax for backgrounds/title/tagline.
  - Different `yPercent` speeds per layer.

- **`pinScrollSection`**
  - For pinned sections (e.g., horizontal testmonials scroll).
  - Wraps a section with `ScrollTrigger` pinning + scrub.

- **`lazySplineLoader`**
  - Dynamically import Spline or a lightweight 3D component.
  - Only loads when the Hero is in/near viewport.

Tasks:
- [ ] Implement `gsapConfig.ts` with plugin registration.
- [ ] Implement `fadeInUp`, `staggerReveal`, `parallaxScroll`, `pinScrollSection` as pure helpers.
- [ ] Implement `lazySplineLoader` as a lazy client component for 3D content.

---

## 5. Sections & Animations

### 5.1 Hero Section

**Content**
- Name: **Shadman Shahriar**
- Role: **Software Engineer**
- Tagline: _"I build intuitive interfaces, AI-driven systems, and scalable products."_
- Short supporting paragraph (sample detailed bio-like sentence).
- CTA buttons:
  - Primary: "View Projects" (scroll to Projects)
  - Secondary: "Contact" (scroll to Contact)
- Decorative 3D: Spline or simple rotating Three.js object.

**Layout**
- Full viewport height (`min-h-screen`).
- Left: text + CTAs.
- Right: 3D object / visual.
- Background: subtle gradient with grid/noise like current design.

**Animations**
- On load (GSAP timeline):
  - Name: fade-in + `y: 40 → 0`.
  - Role / subtitle: staggered fade-in.
  - Tagline: `opacity: 0 → 1`.
  - CTAs: small delay, `y` and opacity.
- 3D object:
  - Slow continuous rotation loop (transform-only).
- Scroll-triggered parallax:
  - Hero text slightly moves upward as user scrolls.
  - Background moves at a different speed.
- CTA hover:
  - "Magnetic" hover effect using GSAP on `mousemove` within button bounds.

Tasks:
- [ ] Create `components/Hero/Hero.tsx` as a client component.
- [ ] Wire hero GSAP timeline (on mount) using `fadeInUp` and `staggerReveal`.
- [ ] Add parallax ScrollTrigger for background/title.
- [ ] Integrate `lazySplineLoader` for floating 3D object.
- [ ] Implement CTA hover magnet animation.

---

### 5.2 About Me Section

**Content**
- Left: portrait (static image) or simple 3D avatar.
- Right:
  - Short header ("About" / "Who I am").
  - Detailed bio paragraph (sample now, refine later).
  - Quick facts: years of experience, focus areas, core stacks.

**Animations**
- Use simple manual span splitting or line-based wrappers.
- Biography lines reveal with stagger (translateY + opacity).
- Portrait: fade-in + scale `0.9 → 1`.
- Background marker shapes: small accent shapes with `opacity` + `y` motion.

Tasks:
- [ ] Create `components/About/About.tsx`.
- [ ] Implement GSAP line/paragraph stagger.
- [ ] Animate portrait and marker shapes.

---

### 5.3 Experience Timeline

**Content**
- Vertical timeline of roles (can reuse existing `CareerTimeline` data, but re-skinned):
  - Company, role, period.
  - 3–5 bullet achievements.
  - Tech stack chips.

**Layout**
- Centered vertical line.
- Cards alternating or aligned on one side.

**Animations**
- For each entry via ScrollTrigger:
  - `y: 30 → 0`, `opacity: 0 → 1`.
  - Stagger children: title → subtitle → description.
- Timeline line:
  - Draw from bottom → top using GSAP (`scaleY` or `height`).

Tasks:
- [ ] Either adapt `components/CareerTimeline.tsx` or create `components/Experience/ExperienceTimeline.tsx` using GSAP instead of Framer Motion.
- [ ] Implement ScrollTrigger for each item and for the timeline line.

---

### 5.4 Featured Projects

**Content**
- 4–6 key projects (reuse from existing `ProjectsGrid` data).
- Each card: title, brief description, tech stack, status, and a "More details" affordance.

**Layout**
- Responsive grid:
  - 1 column on mobile.
  - 2 columns on tablet.
  - 3 columns on large desktop (when appropriate).

**Animations**
- On scroll:
  - Cards fade & lift in with stagger (`opacity 0 → 1`, `y: 30 → 0`).
- On hover:
  - Image or visual region: scale to ~1.05.
  - Text block: `translateY(-10px)`.
  - Subtle outline glow via GSAP tween (looping, very light).

Tasks:
- [ ] Create `components/Projects/ProjectsSection.tsx` (or adapt `ProjectsGrid`).
- [ ] Add GSAP ScrollTrigger-based entrance animations.
- [ ] Implement hover zoom/translate and glow tween per card.

---

### 5.5 Skills Section

**Content**
- Grid of skill icons/categories (can reuse `SkillsDashboard` data but simplify)
  - Frontend, Backend, Databases, DevOps, etc.

**Animations**
- Parallax float based on mouse position over the section.
- Fade-in stagger for icons/cards.
- On hover:
  - Icons rotate ±3 degrees left/right, subtle scale.

Tasks:
- [ ] Create `components/Skills/SkillsSection.tsx` or adapt `SkillsDashboard`.
- [ ] Implement mouse-based parallax over container using GSAP.
- [ ] Add hover tilt/rotation on icons.

---

### 5.6 Testimonials (Optional)

**Content**
- 3–5 testimonial cards (placeholder data in `data/testimonials.ts`).
- Name, role, company, quote.

**Layout**
- Wide horizontal strip.
- Cards arranged in a horizontal row that scrolls as the page scrolls.

**Animations**
- Section is **pinned** using ScrollTrigger.
- As the user scrolls, the cards translate horizontally (scrubbed timeline).
- Smooth GSAP interpolation for 60 FPS.

Tasks:
- [ ] Create `components/Testimonials/TestimonialsSection.tsx`.
- [ ] Implement pinning + horizontal scroll timeline.

---

### 5.7 Contact Section

**Content**
- Clear CTA header.
- Email: `swe.shadman@gmail.com` (click-to-copy / mailto).
- Social links: GitHub, LinkedIn, maybe X.

**Animations**
- Fade-in + staggered elements.
- Background gradient subtle shift as user scrolls through section.
- Social icons: scale + glow on hover (transform + box-shadow only).

Tasks:
- [ ] Create `components/Contact/ContactSection.tsx` (can refine existing one).
- [ ] Add GSAP entrance animations and gradient scroll effect.

---

### 5.8 Footer

**Content**
- Simple line with copyright + small note.

**Animations**
- Fade-in from bottom with `y: 20 → 0` when entering viewport.

Tasks:
- [ ] Create `components/Footer/Footer.tsx`.
- [ ] Add GSAP ScrollTrigger for entrance.

---

## 6. Data & Content

- Move timeline, projects, skills, testimonials into `data/*` modules.
- Keep components mostly presentational + animation, not data-heavy.

Tasks:
- [ ] Extract existing experience data into `data/experience.ts`.
- [ ] Extract project cards from `ProjectsGrid` into `data/projects.ts`.
- [ ] Extract skills from `SkillsDashboard` into `data/skills.ts`.
- [ ] Add placeholder testimonials to `data/testimonials.ts`.

---

## 7. Performance & Responsiveness

- Use **transform-based** animations only: `translate`, `scale`, `rotate`, `opacity`.
- Avoid expensive box-shadow animations except subtle static glows.
- Lazy-load heavy sections:
  - Hero 3D object via `lazySplineLoader`.
  - Globe/any non-critical 3D visuals.
- Ensure all sections work well on mobile (no overflow issues).

Tasks:
- [ ] Wrap 3D visual components in dynamic imports.
- [ ] Verify scroll performance (avoid overusing ScrollTriggers).
- [ ] Manually test breakpoints: mobile, tablet, desktop.

---

## 8. Implementation Phases

1. **Foundation**
   - [ ] Install GSAP + Lenis.
   - [ ] Implement `ScrollEngine` + `gsapConfig` + core animation utilities.
2. **Layout & Sections**
   - [ ] Implement Hero, About, Experience, Projects, Skills, Contact, Footer skeletons.
   - [ ] Wire up data from `data/*`.
3. **Animations**
   - [ ] Add GSAP timelines + ScrollTriggers per section as specified.
   - [ ] Integrate parallax, pins, and horizontal scroll sections.
4. **3D / Spline**
   - [ ] Add lazy-loaded Spline/3D to Hero.
5. **Polish**
   - [ ] Refine timings/easings to match the smooth, minimal style of stavrossymeonidis.dev.
   - [ ] Run performance checks and tweak for 60 FPS.
