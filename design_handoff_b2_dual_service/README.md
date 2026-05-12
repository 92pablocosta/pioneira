# Handoff: Pioneira — Hero B² (Dual-Service Pivot)

## Overview

The current Pioneira landing page sells **only autosserviço** (35% of revenue).
After learning that **Deixe e Retire** is actually the primary service (65% of revenue),
we pivoted the hero and added a new "Service Modes" section so the site reflects
the real business.

This handoff implements two changes to the existing `index.html`:

1. **Replace** the current `<section class="hero">` with the new dual-service hero (B²).
2. **Insert** a new `<section id="servicos">` ("Service Modes") between the
   features strip and "Como funciona".

Everything else on the site stays. Same palette, same fonts, same file structure.

---

## About the Design Files

The files in `reference/` are **design references created in HTML** — a pan/zoom
design canvas built in React/JSX so multiple variants could be compared
side-by-side. **They are not production code to copy directly.**

Pioneira's codebase is intentionally **vanilla HTML + CSS + JS in a single
`index.html`** (see `CLAUDE.md` at the repo root). Do **not** introduce React,
Babel, Tailwind, or any framework. Recreate the design by editing `index.html`
directly, following the existing conventions in that file.

The `vanilla/` folder contains the actual copy-paste-ready vanilla markup and
CSS for the two changes — use those, not the JSX.

## Fidelity

**High-fidelity.** Pixel-perfect colors, type, spacing. The CSS in
`vanilla/styles-additions.css` is final-quality; the markup in
`vanilla/hero-section.html` and `vanilla/modes-section.html` is the exact
DOM structure we want shipped. The dev should reproduce it 1:1.

---

## What's changing in `index.html`

### Change 1 — Replace the hero

**Find** in the existing `index.html`:

```html
<!-- HERO -->
<section class="hero">
  ... entire current hero, including .bubble divs, .hero-grid, .machine, .drum ...
</section>
```

**Replace with** the contents of `vanilla/hero-section.html`.

Notes:
- Drop the CSS-art machine entirely (`.machine`, `.drum`, `.machine-led`,
  `.machine-top`, `.machine-label`, `.bubble.*`). The new hero uses a real
  photo slot on the right.
- The hero now has **two CTA paths** — primary "Fazer orçamento" (WhatsApp)
  and secondary "Ver autosserviço" (anchor to `#autosservico`).
- Headline copy is the pivot: **"Deixa que a gente lava. Ou faz você mesmo."**

### Change 2 — Insert the Service Modes section

**Add** the contents of `vanilla/modes-section.html` immediately after the
existing `<div class="features-strip">` block and before
`<section id="como-funciona" class="how">`.

Notes:
- Section id is `#servicos`. Add a corresponding nav link in `<nav class="nav-links">`
  (label: "Serviços") and in the footer nav.
- The autosserviço card has `id="autosservico"` so the hero's secondary CTA
  scrolls into the right card.

### Change 3 — Merge the new CSS

Append the contents of `vanilla/styles-additions.css` into the existing
`<style>` block in `<head>`, right after the existing `/* HERO */` section
(replacing the old hero rules) and before `/* FEATURES STRIP */`.

The additions touch only:
- New hero rules (replacing the previous `.hero`, `.hero-grid`, `.machine`,
  `.bubble.*`, etc.)
- New `.path` card rules
- New `.modes` section rules
- New `.photo-slot` placeholder pattern (used in hero and reusable elsewhere)

No existing tokens (`:root` variables) change.

### Change 4 — Update copy in places that referenced "only autosserviço"

The existing **price hero** (`.price-hero`) and **final CTA** copy currently
imply the only thing the laundromat does is sell self-service cycles. Update:

- **Final CTA `<h2>`**: change `"Vem lavar com a Pioneira"` →
  `"Vem resolver sua roupa com a Pioneira"`.
- **Final CTA `<p>`**: prepend `"A gente lava pra você ou você usa as máquinas — você escolhe."`
  before the existing "R$ 15,90 por ciclo..." sentence.
- **Meta description** in `<head>`: change to:
  `"Pioneira — A 1ª lavanderia completa de Sousa-PB. Deixe e Retire (a gente lava) ou autosserviço por R$ 15,90 o ciclo. OMO, Comfort e Alvejante inclusos."`
- **OG title/description**: same pivot — lead with "lavanderia completa", mention both services.

Leave the `.price-hero` block as-is for now — it's the autosserviço pricing
showcase and still works in context (it lives under "Como funciona", which now
becomes the autosserviço flow specifically).

---

## ⚠️ Pending data from client (Pablo)

These values are placeholders in the markup, marked with `{TBD: ...}`.
**Do not invent them.** Either get them from Pablo before shipping or keep the
placeholders visible:

| Field | Where it appears | Current placeholder |
|---|---|---|
| Preço Deixe e Retire | `.path.primary .path-row b` (hero) AND `.modes .card.primary .specs` | `{TBD: por kg/peça}` |
| Prazo Deixe e Retire | `.path.primary .path-row .path-meta` (hero) AND `.modes .card.primary .specs` | `{TBD: 24h/48h}` |
| Retirada/entrega | `.modes .card.primary .flow` step 1 | currently says "passa na loja e deixa" — confirm if tem retirada |
| Horário de funcionamento | Not in markup yet; will need a footer line or info-item | n/a |

Tell Pablo: "Preciso do preço (modelo por kg ou por peça?), prazo padrão e se
tem retirada/entrega em casa antes de subir."

---

## Design Tokens (unchanged, for reference)

These already exist in `:root` in `index.html`. The new sections use them — no
new tokens were introduced.

```css
--teal-deep:    #1A5F6E;
--teal-mid:     #2D8B96;
--teal-bright:  #4FB8B5;
--teal-light:   #7DD3D0;
--teal-soft:    #C5EAE8;
--cream:        #FAFBFB;
--paper:        #F2F7F7;
--ink:          #0F2A30;
--ink-soft:     #2B4248;
--gray:         #5A6B70;
--line:         rgba(15, 42, 48, 0.08);
--brand-gradient: linear-gradient(95deg, #1A5F6E 0%, #2D8B96 35%, #4FB8B5 70%, #7DD3D0 100%);

--font-display: 'Bricolage Grotesque', 'Plus Jakarta Sans', system-ui, sans-serif;
--font-body:    'Plus Jakarta Sans', system-ui, sans-serif;

--radius-md: 18px;  /* path cards, photo-slot icon */
--radius-lg: 28px;  /* mode cards */
--radius-xl: 36px;  /* large rounded blocks */

--shadow-md: 0 4px 12px rgba(15, 42, 48, 0.06), 0 8px 24px rgba(15, 42, 48, 0.05);
--shadow-lg: 0 8px 24px rgba(15, 42, 48, 0.08), 0 24px 60px rgba(15, 42, 48, 0.08);
```

---

## Section breakdown — Hero B²

### Layout
- `.hero` is full-width with `padding: 80px 0 96px`.
- `.hero-grid` is a 2-column grid: `grid-template-columns: 1.05fr 1fr; gap: 56px; align-items: stretch;` (left content + right photo).
- Min-height on `.hero-photo` of `~520px` desktop so the photo slot feels substantial.

### Components

**`.hero-kicker`** — pre-headline label
- Font: Plus Jakarta Sans, 12px, 700, letter-spacing 0.22em, uppercase
- Color: `var(--teal-mid)`
- Prefixed by a 24px-wide 1.5px horizontal rule in the same color

**`h1`** — headline
- Font: Bricolage Grotesque, 76px, 800, letter-spacing -0.04em, line-height 0.96
- Color: `var(--ink)` for plain text
- `<em>` inside h1 → italic, 700 weight, `var(--brand-gradient)` clipped to text
- Copy: **"Deixa que `<em>`a gente lava`</em>`.<br>Ou faz você mesmo."**

**`.hero-sub`** — sub-headline paragraph
- Font: Plus Jakarta Sans, 18px, 400
- Color: `var(--ink-soft)`
- Max-width 480px
- `<b>` inside → 700 weight, color `var(--ink)`

**`.hero-paths`** — the two service-tier cards
- Grid: `grid-template-columns: 1fr 1fr; gap: 12px; max-width: 540px`
- Both cards: `border-radius: 18px; padding: 18px 20px; transition: transform .2s, box-shadow .2s`
- Hover: `transform: translateY(-2px); box-shadow: var(--shadow-md)`

**`.path.primary`** (Deixe e Retire)
- Background: `var(--ink)`, color `white`, border transparent
- Shadow: `var(--shadow-md)` at rest
- `.path-pri` ribbon ("Mais escolhido"): absolute top-right, 9px / 700 / uppercase / 0.18em letter-spacing, color `var(--teal-light)`
- `.path-pre` label: 10px, 700, uppercase, 0.18em letter-spacing, color `var(--teal-light)`
- `.path-name`: Bricolage 22px, 700, -0.02em
- `.path-desc`: 13px, color `rgba(255,255,255,0.7)`, line-height 1.5
- `.path-row` at bottom: top-border `1px solid rgba(255,255,255,0.10)`, padding-top 10px
  - `<b>` (price): Bricolage 18px, 700, gradient-text
  - `.path-meta`: 12px, `rgba(255,255,255,0.55)`

**`.path`** (Autosserviço, default)
- Background: `white`, border `1px solid var(--line)`
- `.path-pre` label color: `var(--teal-mid)`
- `<b>` (price): Bricolage 18px, 700, color `var(--ink)` (no gradient)
- `.path-meta`: color `var(--gray)`

**`.hero-ctas`** — button row (existing `.btn` styles work)
- Primary: `.btn .btn-whats` (#25D366 → text "Fazer orçamento") — links to WhatsApp URL with the pre-filled message.
- Secondary: `.btn .btn-secondary` (text "Ver autosserviço") — links to `#autosservico`.

**`.hero-photo`** — right column
- `.photo-slot`: aspect 4/5 or fills container height; `border-radius: 32px; overflow: hidden`
- Background: diagonal hatching over `var(--teal-soft)`:
  ```css
  background:
    repeating-linear-gradient(45deg, rgba(45,139,150,0.06) 0 12px, rgba(45,139,150,0.10) 12px 24px),
    var(--teal-soft);
  border: 2px dashed rgba(45,139,150,0.35);
  ```
- Subtle gradient overlay bottom-right via `::after`
- Centered icon (84px white rounded square with camera icon) + label "Foto da fachada<br><small>placeholder</small>"
- **Replace with real `<img>` when Pablo provides the photo.** Suggested src: `assets/fachada.jpg`. Add `loading="lazy"` and a descriptive `alt`.

### Responsive (matches existing breakpoints)
- At `max-width: 900px` → `.hero-grid` collapses to 1 column; photo slot caps at `380px` width and centers; min-height drops to ~360px.
- At `max-width: 820px` → h1 scales down to ~52px; paths grid stays 1fr 1fr (still side-by-side; they're narrow enough).
- At `max-width: 540px` → paths grid collapses to 1 column; CTAs go full-width.

---

## Section breakdown — Service Modes (`<section id="servicos">`)

### Layout
- Section: `background: var(--paper); padding: 110px 0`
- `.modes-head`: centered, max-width 720px, margin-bottom 56px
  - `.eyebrow` ("Duas formas de usar a Pioneira") — existing class
  - `<h2>`: Bricolage 52px, 700, -0.03em; `<em>` is italic gradient-text
  - `<p>`: 17px, `var(--gray)`, margin-top 16px
- `.modes-deck`: max-width 1120px, grid 1.15fr 1fr, gap 24px, align-items stretch

### Cards

**`.modes-card.primary`** — Deixe e Retire (bigger, dark)
- Background: `var(--ink)` with the same radial-gradient overlay used by `.price-hero`
- `border-radius: 28px; padding: 40px 36px; box-shadow: var(--shadow-lg)`
- `position: relative; overflow: hidden`
- Content above `::before` overlay via `z-index: 1` or `position: relative` on direct children

**`.modes-card.secondary`** — Autosserviço (white)
- Background: `white`; `border: 1px solid var(--line)`
- Same border-radius/padding

**Inside each card:**
- `.ribbon` pill — 11px / 700 / uppercase / 0.18em letter-spacing
  - primary: background `rgba(79,184,181,0.20)`, color `var(--teal-light)`
  - secondary: background `var(--teal-soft)`, color `var(--teal-deep)`
- `<h3>`: Bricolage 40px, 700, -0.03em, line-height 1
  - primary copy: "A gente lava, dobra<br>e embala pra você."
  - secondary copy: "Use as máquinas<br>quando quiser."
- `.lead`: 16px, max-width 420px, line-height 1.55
  - primary: color `rgba(255,255,255,0.78)`
  - secondary: color `var(--gray)`
- `.flow` (3 numbered steps): grid gap 14px, font-size 14px
  - `.step` row: `display: flex; gap: 14px; align-items: flex-start`
  - `.step .num`: 28×28px rounded 8px tile, Bricolage 13px / 700
    - primary: bg `rgba(79,184,181,0.18)`, color `var(--teal-light)`
    - secondary: bg `var(--teal-soft)`, color `var(--teal-deep)`
  - `<b>` inside step text → 700, color `white` (primary) or `var(--ink)` (secondary)
- `.specs` row at bottom of content: 3-col grid, gap 16px, padding-top 24px, border-top
  - `.l` label: 10px / 700 / uppercase / 0.18em
  - `.v` value: Bricolage 20px, 700, -0.02em
  - `.v.tbd` modifier: italic, JetBrains Mono (or fallback to `ui-monospace`), 14px, 500, dimmer color — used while pricing is unconfirmed
- `.cta-row`: margin-top auto, padding-top 28px, flex gap 10px
  - primary cta: `#25D366` background, white text, "Fazer orçamento" → WhatsApp URL
  - secondary cta: ink background, "Como funciona" → `#como-funciona`
  - secondary ghost cta: white bg, 1px line border, "Onde estamos" → `#local`

### TBD callout
Below the deck, a dotted-amber strip flagging the pending data — leave it
visible during dev/staging, **remove before production**:

```html
<div class="modes-tbd-note">
  <svg ... info icon .../>
  <span><b>Em definição:</b> preço por kg/peça do Deixe e Retire, prazo padrão (24h/48h) e horário de funcionamento.</span>
</div>
```

Strip styling: `padding: 16px 22px; border-radius: 14px; background: rgba(217,145,60,0.08); border: 1px dashed rgba(217,145,60,0.4); color: #8A5418; font-size: 13px`.

### Responsive
- At `max-width: 900px` → `.modes-deck` collapses to 1 column; primary card stacks on top, autosserviço below.
- At `max-width: 820px` → padding drops to `padding: 32px 28px`; `<h3>` to 30px; specs grid stays 3-col (numbers are small enough) but `.l` label can shrink to 9px.

---

## Interactions & Behavior

### Anchor scrolling
- Hero secondary CTA `"Ver autosserviço"` → `href="#autosservico"` → smooth-scrolls to the autosserviço card inside `.modes-deck` (which has `id="autosservico"`).
- Nav link "Serviços" → `href="#servicos"` → smooth-scrolls to the Service Modes section.
- Primary CTAs (both hero and primary mode card) → WhatsApp URL with the same pre-filled message that already exists in the site (4 places — add this as a 5th and consider extracting to a JS constant).

### Hover states
- `.path` cards: `transform: translateY(-2px); box-shadow: var(--shadow-md)` on hover (200ms ease)
- `.btn-whats`: existing hover (lifts + green-darker bg + green shadow) — no change
- `.btn-secondary`: existing hover (lifts + standard shadow) — no change
- `.modes-card .cta`: subtle `transform: translateY(-1px)` on hover

### Scroll reveal
Both new sections use the existing `.reveal` pattern. Add `class="reveal"` to:
- `.hero-content` (left column wrapper)
- `.hero-photo` (right column wrapper)
- `.modes-head`
- Each `.modes-card`
- The TBD callout

The existing IntersectionObserver in `<script>` already picks these up.

### Reduced motion
Existing `@media (prefers-reduced-motion: reduce)` rule already covers
everything — no new opt-outs needed.

---

## Copy reference (final, ready to paste)

### Hero
- **Kicker**: `Lavanderia completa · Sousa-PB`
- **H1**: `Deixa que a gente lava. Ou faz você mesmo.` (with "a gente lava" wrapped in `<em>`)
- **Sub**: `Sua roupa lavada, dobrada e embalada — ou as máquinas pra você usar no seu tempo. Duas formas de resolver a roupa suja em Sousa-PB.` ("Duas formas" in `<b>`)
- **Primary CTA**: `Fazer orçamento` (WhatsApp icon)
- **Secondary CTA**: `Ver autosserviço`

#### Path: Deixe e Retire (primary)
- Ribbon: `Mais escolhido`
- Pre: `Deixe e Retire`
- Name: `A gente lava pra você`
- Desc: `Traz, deixa, busca pronto. Lavada, dobrada e embalada.`
- Price: `{TBD: preço por kg/peça}`
- Meta: `{TBD: prazo}`

#### Path: Autosserviço (secondary)
- Pre: `Autosserviço`
- Name: `Você usa as máquinas`
- Desc: `Pra horário livre, fim de semana ou madrugada.`
- Price: `R$ 15,90`
- Meta: `75 min`

### Service Modes

- **Eyebrow**: `Duas formas de usar a Pioneira`
- **H2**: `Você escolhe — a gente faz, ou você faz.` ("a gente faz" in italic gradient `<em>`)
- **Lead p**: `Maioria dos nossos clientes deixa pra gente lavar. Quem prefere autonomia (ou chega fora do expediente) usa as máquinas no autosserviço.`

#### Card: Deixe e Retire (primary)
- Ribbon: `Deixe e Retire · Mais escolhido`
- H3: `A gente lava, dobra e embala pra você.`
- Lead: `Você traz a roupa suja dentro do nosso horário, a gente cuida de tudo, e você volta pra buscar pronta — embalada e separada.`
- Steps:
  1. `Você passa na loja e <b>deixa a sacola</b> com a roupa suja.`
  2. `A gente lava com <b>OMO + Comfort + Alvejante</b>, seca e dobra.`
  3. `Sua roupa fica <b>embalada em sacos</b>, separada e pronta pra buscar.`
- Specs:
  - Preço: `{TBD: por kg · ?}`
  - Prazo: `{TBD: ? horas}`
  - Inclusos: `OMO · Comfort`
- CTA: `Fazer orçamento` (WhatsApp)

#### Card: Autosserviço (secondary)
- Ribbon: `Autosserviço · 24h`
- H3: `Use as máquinas quando quiser.`
- Lead: `Pra quem prefere fazer no próprio ritmo — fim de semana, noite, ou madrugada. Você opera, paga R$ 15,90 e leva pronto.`
- Steps:
  1. `Chegue com a roupa. <b>Sabão já está incluso.</b>`
  2. `Pague <b>R$ 15,90</b> no display — PIX ou cartão na máquina.`
  3. `Lave e seque em <b>75 minutos</b>. Saia com tudo pronto.`
- Specs:
  - Por ciclo: `R$ 15,90`
  - Tempo total: `75 min`
  - Pagamento: `PIX · Cartão`
- CTA: `Como funciona` (anchor `#como-funciona`)
- CTA ghost: `Onde estamos` (anchor `#local`)

---

## Files in this bundle

```
design_handoff_b2_dual_service/
├── README.md                           ← this file
├── vanilla/
│   ├── hero-section.html               ← copy-paste markup for the new hero
│   ├── modes-section.html              ← copy-paste markup for Service Modes
│   └── styles-additions.css            ← CSS to merge into index.html <style>
└── reference/
    ├── index-variations.html           ← interactive design canvas (open in browser to see)
    ├── variations.jsx                  ← React source of the prototypes (reference only)
    └── design-canvas.jsx               ← the canvas wrapper (reference only, not for production)
```

The dev should:
1. Open `reference/index-variations.html` in a browser to **see the design live**.
2. Read this README.
3. Edit the project's `index.html` using `vanilla/*` as the source of truth.
4. Ignore `variations.jsx` / `design-canvas.jsx` — those exist only to make the
   canvas work. Production is single-file vanilla.

---

## QA checklist before shipping

- [ ] Hero h1 reads "Deixa que a gente lava. Ou faz você mesmo." with the
      gradient italic on "a gente lava"
- [ ] Both path cards render side-by-side desktop / stacked mobile
- [ ] Path "Deixe e Retire" has the "Mais escolhido" ribbon top-right
- [ ] Photo slot has the dashed border + hatching pattern (until real photo arrives)
- [ ] "Ver autosserviço" CTA scrolls to the autosserviço card in the new section
- [ ] Section Modes section appears between features-strip and "Como funciona"
- [ ] TBD-note is visible while pricing is unconfirmed
- [ ] Nav link "Serviços" added to navbar and footer; smooth-scroll works
- [ ] WhatsApp URL is the same pre-filled message used in the other 4 spots
- [ ] All `.reveal` elements fade in on scroll
- [ ] At 900px breakpoint, hero collapses to single column
- [ ] At 900px breakpoint, modes-deck collapses to single column (primary on top)
- [ ] `prefers-reduced-motion` still kills all animations
- [ ] Meta description and OG tags updated to mention "lavanderia completa" + both services
- [ ] **Verify with Pablo:** preço Deixe e Retire, prazo padrão, horário, retirada/entrega
- [ ] Remove `.modes-tbd-note` after the above is filled in
