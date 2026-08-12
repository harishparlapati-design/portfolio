# Parlapati Hareesh Kumar — Mechanical Designer Portfolio

This portfolio is a Next.js/React project adapted for Parlapati Hareesh Kumar from an existing visual portfolio template. Personal content is now stored primarily in `lib/site.ts`, `lib/i18n.tsx`, and the `content/` directory.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Main content files

- `lib/site.ts` — name, title, email, location, social links
- `lib/i18n.tsx` — hero/about/navigation text
- `content/experience.ts` — internships and CAD training
- `content/projects.ts` — projects and case studies
- `content/certifications.ts` — certificates
- `content/stack.ts` — CAD/engineering tools
- `content/journey.ts` — timeline
- `components/sections/Connect/Connect.tsx` — contact/social links

## Personal photo

The hero currently uses a neutral CAD placeholder. Replace `public/images/mechanical-placeholder.svg` with your own photo and update the image source in `components/sections/Hero/Hero.tsx` when you are ready.
