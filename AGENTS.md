# C-Eco Website Engineering Instructions

## Purpose

These instructions apply to the entire C-Eco website repository.

When modifying the website, preserve a simple, robust, maintainable and coherent architecture.

Do not treat requested changes as isolated patches. First understand how the requested change fits into the existing website.

Prefer the smallest clean implementation that preserves the existing architecture.

---

## Current architecture

This is currently a lightweight static website.

The main architecture is:

- `index.html` — page structure, semantic HTML and website content.
- `css/styles.css` — all website styling, layout, responsive behaviour and visual components.
- `js/main.js` — lightweight client-side behaviour and interactions.
- `assets/images/` — website imagery.
- `assets/icons/` — interface and content icons.
- `assets/logo/` — logo and branding assets.
- `robots.txt` — search-engine crawling configuration.
- `README.md` — project documentation.

There is currently no framework, package manager, build system or application server.

Do not introduce one unless a requested feature genuinely requires it.

---

## Core engineering principle

Preserve simplicity.

This website should not become more technically complicated than necessary.

Avoid introducing:

- React;
- Vue;
- Angular;
- npm packages;
- JavaScript frameworks;
- CSS frameworks;
- build systems;
- bundlers;
- component libraries;

unless the requested functionality genuinely justifies the additional complexity.

Native HTML, CSS and JavaScript are preferred whenever they can solve the problem cleanly.

---

## Before modifying code

Before making any change:

1. Inspect the relevant existing implementation.
2. Identify which layer owns the requested behaviour.
3. Reuse existing styles, classes, patterns and structures.
4. Check whether the change affects responsive behaviour.
5. Check whether the change affects accessibility.
6. Make the smallest coherent change required.

Do not immediately add new code before understanding the existing implementation.

---

## Separation of concerns

Maintain the existing architectural boundaries.

### HTML

Use `index.html` for:

- page structure;
- headings;
- text;
- links;
- forms;
- semantic elements;
- accessibility attributes;
- references to images and icons.

Do not add inline CSS.

Avoid inline JavaScript.

### CSS

Use `css/styles.css` for:

- visual appearance;
- layout;
- spacing;
- colours;
- typography;
- responsive behaviour;
- hover/focus states;
- reusable visual components.

Do not move presentation logic into JavaScript unless necessary.

### JavaScript

Use `js/main.js` only for behaviour that genuinely requires JavaScript.

Examples include:

- navigation interactions;
- form interactions;
- dynamic UI state;
- progressive enhancement.

Do not use JavaScript for things that can be handled cleanly with HTML or CSS.

---

## Design system

The CSS `:root` custom properties form the project's design system.

Before introducing a new:

- colour;
- border radius;
- shadow;
- typography value;
- major spacing convention;

check whether an existing CSS variable can be reused.

Prefer semantic variables such as:

- `--color-background`;
- `--color-surface`;
- `--color-primary`;
- `--color-accent`;
- `--color-text`;
- `--color-muted`;
- `--color-border`;
- `--font-heading`;
- `--font-body`;
- `--max-width`;
- `--radius`;
- `--radius-pill`;
- `--shadow`.

If a genuinely reusable design value is needed, consider adding a CSS custom property rather than scattering hard-coded values throughout the stylesheet.

Do not introduce arbitrary one-off colours when an existing design token is suitable.

---

## Existing reusable patterns

Before creating new UI patterns, inspect existing ones.

Prefer extending or reusing existing classes such as:

- `.page-width`;
- `.section`;
- `.section-heading`;
- `.section-label`;
- `.card-grid`;
- `.feature-card`;
- `.benefit-card`;
- `.process-grid`;
- `.process-step`;
- `.button`;
- `.button--primary`;
- `.button--secondary`;
- `.form-grid`;
- `.form-field`.

Do not duplicate styles under slightly different class names unless the new component genuinely requires different behaviour.

---

## HTML quality

Use semantic HTML whenever practical.

Maintain:

- logical heading hierarchy;
- meaningful section IDs;
- descriptive link text;
- appropriate form labels;
- descriptive image alt text;
- accessible buttons;
- valid HTML.

Do not use generic `<div>` elements when a more appropriate semantic element exists.

Preserve anchor IDs when possible because navigation links depend on them.

---

## CSS quality

Keep CSS organised and predictable.

Prefer:

- existing custom properties;
- reusable classes;
- clear selectors;
- mobile-friendly responsive rules;
- existing naming conventions.

Avoid:

- inline styles;
- excessive selector specificity;
- `!important` unless unavoidable;
- duplicate declarations;
- unexplained magic values;
- unnecessary positioning hacks.

When changing layout, check desktop and mobile behaviour.

Do not solve a responsive issue for one screen width while breaking another.

---

## JavaScript quality

Keep JavaScript minimal and dependency-free unless a feature requires otherwise.

Use:

- `const` and `let`;
- clear variable names;
- small focused event handlers;
- defensive DOM checks where appropriate;
- progressive enhancement.

Avoid:

- global mutable state;
- large functions;
- duplicated DOM queries;
- unnecessary dependencies;
- JavaScript-driven styling when CSS can handle it.

Do not introduce complex state management into this website.

---

## Accessibility

Preserve or improve accessibility with every relevant change.

Check:

- keyboard navigation;
- focus behaviour;
- form labels;
- ARIA attributes where genuinely required;
- image alt text;
- button semantics;
- heading hierarchy;
- navigation accessibility;
- readable content structure.

Do not remove existing accessibility attributes without a reason.

---

## Responsive design

The website must remain usable on:

- desktop;
- tablet;
- mobile.

Existing responsive breakpoints and patterns should be reused where practical.

When modifying:

- navigation;
- grids;
- images;
- forms;
- cards;
- typography;

check how the change behaves at narrow viewport widths.

---

## Content preservation

Unless explicitly instructed otherwise, preserve existing:

- copy;
- links;
- section order;
- IDs;
- images;
- contact details;
- SEO metadata;
- accessibility text.

Do not rewrite website copy merely because code around it is being modified.

---

## SEO

Preserve important SEO elements including:

- page title;
- meta description;
- semantic heading structure;
- crawlable content;
- internal anchor links;
- robots configuration.

Do not introduce client-side rendering for static page content without a strong reason.

---

## Dependencies

Before adding any dependency, determine whether the feature can be implemented clearly using the existing stack.

If native HTML, CSS or JavaScript can solve the problem cleanly, use that instead.

Do not add a dependency merely to save a few lines of code.

---

## Security and privacy

Never commit:

- passwords;
- API keys;
- private tokens;
- credentials;
- secrets.

Do not expose sensitive configuration in client-side JavaScript.

If external services are introduced, clearly separate public client-side configuration from private credentials.

---

## Contact form

The current contact form is client-side only.

Do not assume that displaying the success message means data has been submitted anywhere.

If real form submission is introduced:

1. clearly identify the receiving service or backend;
2. handle success and failure states;
3. preserve validation;
4. avoid exposing private credentials;
5. consider spam protection;
6. update documentation.

Do not silently convert the form to a third-party service.

---

## Scope control

Modify only what is necessary for the requested feature and any directly related cleanup.

Do not redesign or restructure unrelated areas of the website.

Avoid large refactors unless they are genuinely necessary.

If existing code can be improved safely while modifying the same area, make only proportional improvements.

---

## Refactoring rule

Do not layer hacks on top of hacks.

If implementing a change reveals unnecessary duplication or a structural issue in the affected area, clean up the smallest appropriate architectural boundary.

Do not perform repository-wide refactoring for a small feature.

---

## File creation

Do not create new files without a clear reason.

For small changes, prefer the existing:

- `index.html`;
- `css/styles.css`;
- `js/main.js`.

Create a new file only when doing so materially improves maintainability or is required by new functionality.

If the website grows significantly, reconsider the architecture deliberately rather than incrementally creating many unrelated files.

---

## Validation

After changes, check:

1. HTML still loads correctly.
2. CSS references remain valid.
3. JavaScript has no obvious console errors.
4. navigation still works;
5. mobile navigation still works;
6. internal links resolve correctly;
7. images load;
8. responsive layouts remain usable;
9. accessibility behaviour is preserved;
10. requested behaviour works.

If tools for formal validation are available, use them.

---

## Documentation

Update `README.md` when a change materially affects:

- project structure;
- deployment;
- setup;
- form configuration;
- architecture;
- external services;
- development workflow.

Do not let documentation become inconsistent with the actual project.

---

## Git discipline

Keep changes focused.

Do not modify unrelated files.

Do not generate unnecessary files.

Do not commit local configuration, temporary files or secrets.

Keep the repository suitable for GitHub Pages deployment unless the requested architecture explicitly changes that requirement.

---

## Final review

Before completing a task, review the modification as if reviewing a pull request.

Check for:

- duplicated code;
- unnecessary complexity;
- broken links;
- inconsistent styles;
- unused CSS;
- unnecessary JavaScript;
- accessibility regressions;
- responsive regressions;
- invalid HTML;
- architectural drift.

The affected area should remain at least as understandable and maintainable as it was before the change.