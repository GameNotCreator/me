# Hedi Fourati — Portfolio

A personal portfolio built with Next.js, React, and Framer Motion. It presents
client websites, TunisianPass, student tools, iOS apps, hackathons, and personal photos.
It preserves the original section order, floating navigation, centered introduction,
circular portrait, alternating project cards, and light/dark palette. The background
is static; short foreground animations and interaction feedback respect reduced motion.

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:3000. To check the production version:

```bash
npm run build
npm start
```

The Next-scoped PostCSS override pins a patched compatible v8 release. Revisit
it when updating the framework.

## Update the portfolio

- `libs/data.js` contains the project descriptions, status labels, links, App Store links, and hackathon entries.
- `components/sections/Hero.js` and `About.js` contain the introduction and personal story.
- `app/globals.css` contains the visual design and responsive layout.
- Add project photos to `public/projects/`, import them in `libs/data.js`, and set the relevant entry's `imageUrl`. Entries without a supplied image use their names as visual cards.
- The existing Work album in Life now contains its 25 original photos plus 19 supplied photos in `public/images/Work/`. Captions for the supplied images live in `libs/work-photos.js` and appear in the preview. WeLockIn and Saudade also use these images on their project cards. Web copies are resized, oriented and compressed; the supplied originals remain in the owner's archive. `node scripts/prepare-work-photos.cjs /path/to/extracted/photos` regenerates these copies.
- The Life gallery reads JPG, JPEG, PNG, and WebP photos from folders in `public/images/`.
- The existing resume remains in `public/resume.pdf`.

All 18 projects remain in the original single-column Projects section, followed by
the two hackathon entries. Development status appears on the relevant card.
The navigation and section order remain Home, About, Projects, Skills, Life, Contact.

## Contact form

Configure `RESEND_API_KEY` in `.env.local` or the hosting environment to enable
email delivery. Messages go to the portfolio's existing contact address,
`hedi_fourati@icloud.com`. Without the key, the form provides the direct email
address instead of claiming the message was sent. The sender domain configured
in `actions/SendEmail.js` must also be permitted by the Resend account.

## Content provenance

The owner supplied the project roles, sale outcomes, development status, and
audience figures. TunisianPass's figures are more than 500 monthly users and
more than 20 restaurants and shops. FocusGym's 100 potential buyers per month
is an estimate, not a completed-sales count. App Store links were checked when
the portfolio was updated. Screenshots retained from earlier work are not new
captures of the current public websites.
