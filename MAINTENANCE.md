# Hedi Fourati — Portfolio

A personal portfolio built with Next.js, React, and Framer Motion. It presents
client websites, TunisianPass, student tools, iOS apps, hackathons, and personal photos.
WeLockIn is a desktop focus app; welock.in is its website. Its mobile version is
available on the iOS App Store. Both versions share one project card with the website
preview and an App Store link. WeLock (welock.app) is a separate web app for study rooms.
It preserves the original section order, floating navigation, centered introduction,
circular portrait in the hero, alternating project cards, and light/dark palette.
The hero has a static warm background; short foreground animations and interaction
feedback respect reduced motion. Cards stack on phones and tablets, with uncropped
website captures in linked browser frames.

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
- Add project photos to `public/projects/`, import them in `libs/data.js`, and set the relevant entry's `imageUrl`. Website captures live in `public/previews/` and use `previewType: "website"` with `previewDomain`. Entries without a supplied image use their names as visual cards.
- The existing Work album in Life now contains its 25 original photos plus 19 supplied photos in `public/images/Work/`. Captions for the supplied images live in `libs/work-photos.js` and appear in the preview. Saudade also uses its T-shirt photo on the project card. Web copies are resized, oriented and compressed; the supplied originals remain in the owner's archive. `node scripts/prepare-work-photos.cjs /path/to/extracted/photos` regenerates these copies.
- The Life gallery reads JPG, JPEG, PNG, and WebP photos from folders in `public/images/`.
- `libs/gallery-photos.js` provides descriptive English alt text and preview captions for the original Life photos. Keep these descriptions consistent with the actual photographs.
- `public/resume.pdf` is the updated one-page English CV, with the supplied Swiss contact details, EPFL studies, portfolio link, client work, released products, and hackathons. The original supplied CV is preserved outside the repository.

## SEO and production

The Vercel project `landing-thehnh` builds this repository's `main` branch.
`thehnh.tech` permanently redirects to the canonical `https://www.thehnh.tech/`.
Update the public identity, metadata and genuine content modification date in
`libs/seo.js`. See [SEO notes](docs/SEO.md) for configuration and validation.

The Projects section has category filters: All projects, Websites (13), Mobile apps (4),
Desktop apps (1), and Hackathons (2). All 19 entries (17 projects and 2 hackathons) are
rendered by default, preserving their server-rendered content and the original
alternating card layout. Category counts
come from the data, and the selected filter announces the number of results.
Use `category: "website"`, `"mobile"`, or `"desktop"` in `libs/data.js`; hackathons
remain in `hackathonsData`, with optional `projectLink` and `previewLink` fields.
Projects can optionally provide a `categories` array instead of relying on their single
`category`. WeLockIn uses `category: "desktop"` and `categories: ["desktop", "mobile"]`,
so it appears in both relevant filters and only once in All projects. Filter counts
therefore overlap and should not be added together.
Mobile cards link directly to their iOS App Store pages and state that Android is not
available yet. Development status still appears on projects that are in progress.
The optional `appStoreLabel` changes the App Store button text; WeLockIn uses
`"See on App Store"`, while other apps retain the default `"App Store (iOS)"`.
The navigation and section order remain Home, About, Projects, Skills, Life, Contact.

## Contact

The Contact section uses direct `mailto:` links to `hedi.fourati@epfl.ch`
and a `tel:` link for the supplied Swiss phone number.
There is no rendered contact form or email delivery service to configure.
The visible address remains available for visitors who prefer to copy it.

## Website previews

Nine authentic homepage captures were initially taken in the browser on 6 October 2026 at
1440 × 1000. They are static snapshots, not live embedded sites. Clicking a preview
opens the actual website. The local WebP copies avoid third-party requests on page load.
The WeLock (welock.app) preview was refreshed on 22 October 2026 after entering a
display name to reach the homepage. The other eight captures remain from 6 October 2026.

| Preview | Source |
| --- | --- |
| TunisianPass | https://tunisian-pass.tn/ |
| WeLockIn | https://welock.in/ |
| WeLock | https://welock.app/ |
| MyDiarySkills | https://mydiaryskills.thehnh.tech/ |
| MyGymSkills | https://mygymskills.thehnh.tech/ |
| FocusGym | https://focusgym.tn/ |
| CleanAir | https://www.cleanair.com.tn/ |
| Dieu et Cie | https://www.dieu-et-cie.fr/ |
| LiliDecoAI | https://lilidecoai-web.vercel.app/ |

To refresh them, save matching JPG browser captures outside `public/`, then run
`node scripts/prepare-site-previews.cjs /path/to/captures`. This compresses the files
without cropping their content. Keep the Saudade photograph and the single WeLockIn
project card's website preview unless the owner supplies a replacement.

## Content provenance

The owner supplied the project roles, sale outcomes, development status, and
audience figures. TunisianPass's figures are more than 500 monthly users and
more than 20 restaurants and shops. FocusGym's 100 potential buyers per month
is an estimate, not a completed-sales count. App Store links were checked when
the portfolio was updated. Screenshots retained from earlier work are not new
captures of the current public websites.
