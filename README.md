# Ashraf Premium Portfolio

A responsive React + Tailwind CSS portfolio inspired by the supplied reference image.

## Stack

- React 18
- Vite
- Tailwind CSS
- Lucide React icons
- Responsive mobile navigation
- IntersectionObserver reveal animations
- Semantic section anchors
- SEO-friendly basic metadata

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```

## Customize

Most content is intentionally centralized:

- `src/data.js` — ventures, travel items, community projects, strengths and social links.
- `src/App.jsx` — page layout and contact information.
- `src/index.css` — global colors, typography and Tailwind component helpers.

### Replace images

Change the `heroImage`, `educationImage`, and travel image URLs in `src/App.jsx` / `src/data.js`.

### Main brand colors

- Wine red: `#a20f18`
- Dark navy: `#111c2f`
- Paper: `#f7f8fa`

The design is responsive and follows the overall visual hierarchy of the supplied reference: compact header, strong hero, profile cards, ventures, travel portfolio, community, education, strengths, contact, social links, CTA and dark footer.
