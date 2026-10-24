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
- The original Work files (25 original photos plus 19 supplied photos) remain in `public/images/Work/`, with supplied captions in `libs/work-photos.js`. They are no longer displayed as a general-purpose feed. Saudade still uses its T-shirt photo on its project card. `node scripts/prepare-work-photos.cjs /path/to/extracted/photos` regenerates the supplied web copies.
- Life now contains Charity and Chess activity cards, each with four featured photos and a collapsed archive. Update the filename selections in `components/sections/Life.js` when the owner chooses which photos to exclude. The page explicitly selects these two albums from the gallery metadata; it no longer automatically publishes every image folder.
- Engineering photos are attached to the corresponding project in `libs/data.js`. Gustave Motors now has four carousel chapters: the prize, starting the club, building, and presenting at Projet X. The trophy and podium photographs supplied on 24 October 2026 explicitly document the inter-zone high-school prize. `libs/gustave-evidence-photos.js` holds seven new photos and their EN/FR captions; original Club photos remain unchanged. The slider has previous/next controls, numbered pagination, swipe, pause/play and a 14-second interval. Manual interaction stops rotation; hovering, leaving the viewport or hiding the page pauses it. Reduced-motion preferences disable automatic rotation. Inactive slides remain rendered with `aria-hidden`, `inert` and hidden visibility; a CSS grid keeps their shared height stable. A-BOT retains its native build-story disclosure.
- `libs/certificates.js` contains six supplied certificates and two 2024 score reports. The new club merit certificate records the 2022–2025 presidency. Four supplied certified English translations have separate "Sworn English translation" links; no other translation is described as sworn. Both test reports remain rasterized after masking identifying numbers and the IELTS birth date. Do not replace them with unredacted originals. Originals and translations describe the same achievements and do not create duplicate awards.
- `libs/references.js` and `components/sections/References.js` provide the compact Recommendations & Experience section after Certificates. Two recommendation letters and four experience records use native disclosures, readable previews and public PDF copies. The assistant principal's French excerpt retains the complete French text; the supplied English passages are separate and are not a sworn translation. Lili Land is employment, Agile Platforms and Medianet are internship certificates, and Easy Business is a planned observation-placement agreement, not proof of completion. Public copies in `public/references/` mask identity numbers, birth dates, private addresses and family contacts before rasterization.
- `libs/gallery-photos.js` provides descriptive English alt text and preview captions for the original Life photos. Keep these descriptions consistent with the actual photographs.
- On 23 October 2026, the owner selected Chess photos 2, 10, 1 and 4, in that order, as memories of his game against Karpov. The event date was not supplied. Their personal captions remain separate from neutral visual alt text; do not infer a game result or award.
- `public/resume.pdf` is the updated one-page English CV, with the supplied Swiss contact details, EPFL studies, portfolio link, client work, released products, and hackathons. The original supplied CV is preserved outside the repository.

## SEO and production

The Vercel project `landing-thehnh` builds this repository's `main` branch.
`thehnh.tech` permanently redirects to the canonical `https://www.thehnh.tech/`.
Update the public identity, metadata and genuine content modification date in
`libs/seo.js`. See [SEO notes](docs/SEO.md) for configuration and validation.

The Projects section starts with Highlights (3), followed by All projects (24),
Engineering Projects (2), Open source (1), Websites (15), Mobile apps (5),
Desktop apps (1), and Hackathons (2).
Highlights is selected initially: TunisianPass, WeLockIn, and Gustave Motors. Cipher
and A-BOT are explicitly excluded at the owner's request. Cipher remains in Mobile
apps and Open source; A-BOT remains in Engineering Projects. Use
`highlight: true` to include a project and `highlightDetails` for its additional
labelled paragraphs. Gold borders, a hover/focus glow, and a small Framer Motion
hover lift apply in the Highlights view. Reduced motion disables the lift.
All 24 entries (22 projects and 2 hackathons) remain in the server-rendered HTML.
Non-selected cards use `hidden`, including for assistive technology and keyboard
navigation. Category counts come from the data, and the selected filter announces
the number of results. The alternating layout uses each visible card's index.
Project priority follows the manual order in `projectsData`, and filtering preserves
that order. Keep the exact relative order of the 17 projects that preceded MathParty
and FinanceTracker. MathParty sits after Picture me by Saudade and before FocusGym;
FinanceTracker stays last as a prototype for a freelance opportunity that did not go ahead.
Gustave Motors and A-BOT sit after WeLockIn. Cipher sits after Saudade and before MathParty. The existing projects' relative
order is preserved in every filter.
Use `category: "website"`, `"mobile"`, `"desktop"`, or `"engineering"` in `libs/data.js`; hackathons
remain in `hackathonsData`, with optional `projectLink` and `previewLink` fields.
Projects can optionally provide a `categories` array instead of relying on their single
`category`. WeLockIn uses `category: "desktop"` and `categories: ["desktop", "mobile"]`,
so it appears in both relevant filters and only once in All projects. Filter counts
therefore overlap and should not be added together.
Cipher uses `categories: ["mobile", "opensource"]` so one card appears in both
categories and only once in All projects. `sourceLinks` adds the separate backend
repository button. `availability` describes its development build without an App
Store or Android release claim. `previewStack` displays a labelled architecture
illustration; it is not a screenshot of the app.
Mobile cards link directly to their iOS App Store pages and state that Android is not
available yet. Development status still appears on projects that are in progress.
The optional `appStoreLabel` changes the App Store button text; WeLockIn uses
`"See on App Store"`, while other apps retain the default `"App Store (iOS)"`.
FinanceTracker uses `linkLabel: "Try demo"` and includes a `demoCredentials` object.
The owner explicitly authorised publishing this shared demo account for fictional
data. Keep its credentials in the demo block displayed on the project card.
The floating navigation remains Home, About, Projects, Skills, Life, Contact.
Certificates & Awards appears after Skills, with a direct link in About.
`story` provides labelled build details, and `gallery` supplies associated photos.
When `caseStudy` is present, all story paragraphs appear once in its illustrated
carousel chapters, without a disclosure in any filter. For other projects, the first story
block becomes the Highlights overview without duplicating it in the disclosure;
Engineering Projects opens the remaining native build story by default.
ImageGallery's optional `showCaptions` displays personal context beneath the
thumbnails; `imageSizes` matches the actual rendered image width.

## Languages

English is the default route `/`; French is `/fr`. Two root layout groups render
the correct HTML language, shared `SiteShell`, metadata and locale provider. Page
content lives in `app/PortfolioPage.js`. The EN/FR switch preserves the section
hash without redirecting visitors based on browser settings. Canonical, hreflang,
OpenGraph, structured data and sitemap include both versions.

`useLocale()` supplies `locale` and `t()` to client components. Exact-string French
dictionaries live in `libs/fr.js`, `fr-journey.js`, `fr-photos.js` and
`fr-documents.js`; `localizeRecord()` preserves IDs, URLs and technical tags.
Update both languages when changing English source copy. Photo descriptions stay
grounded in visible details and owner-confirmed context, without face-based
identification of participants.

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
The FinanceTracker dashboard preview was supplied by the owner on 22 October 2026.
It is an authentic screenshot showing fictional demo transactions and budgets,
stored in `public/previews/finance-tracker.webp`.
The MathParty guest lobby preview was added on 22 October 2026 from
`https://mathparty.thehnh.tech/` and lives in `public/previews/mathparty.webp`.
It shows room creation and multiplayer rooms at 1495 × 799. The static image import
preserves its actual aspect ratio in the project card.

| Preview | Source |
| --- | --- |
| TunisianPass | https://tunisian-pass.tn/ |
| FinanceTracker | https://finance.thehnh.tech/ |
| MathParty | https://mathparty.thehnh.tech/ |
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
FinanceTracker is a Codex-assisted prototype for a freelance opportunity that did
not go ahead. It is retained as a working demo with transaction tracking, budgets,
CSV imports, and report exports, as described by the owner.
MathParty is still in development and is not yet fully functional, as clarified by
the owner on 22 October 2026. Its concept is a live, turn-based maths game for
students, with problems from France's Course aux nombres to solve before a bomb
explodes. Keep its status and copy explicit about the work in progress; the
"Preview project" button opens the current site.
Cipher's description and technical details were checked against the public
READMEs at `thehnh-tech/mobile-cypher` and `thehnh-tech/backend-cypher` on 23 October
2026. The README calls the project Cipher. The mobile code is MIT-licensed; do not
imply a license for the separate backend repository. It is experimental, with a
custom cryptographic protocol that has not been independently audited. Optional
AI chats are processed in plaintext by the backend and Groq. Do not describe it
as an audited secure messenger or claim a public app-store release.
The owner identified Gustave Motors as the solar car awarded the Projet X 2023
high-school prize, and A-BOT as the Projet X 2024 high-school prize project. The
club's LinkedIn articles corroborate both results and Hedi's co-founder/president
roles. The owner's subsequent account takes precedence for personal responsibilities
and the full presidency, from 2022 to the end of 2025. Both engineering stories now
include his coordination, budget, purchasing, school liaison and practical work,
alongside the team and mentors. The copy is a condensed personal narrative, not a
full transcription. It uses rear-wheel drive for the car's driven rear wheels.
A-BOT's proposed air-quality and Wi-Fi contact alerts are described as extensions,
separately from the prototype's environmental sensing and interaction work.
Sources:
- https://www.linkedin.com/pulse/la-r%C3%A9volution-%C3%A9tudiante-de-linvention-dun-v%C3%A9hicule-21hxc/
- https://www.linkedin.com/pulse/a-bot-linnovation-%C3%A9tudiante-contre-le-burn-out-club-ing%C3%A9nieur-lgf-koz2e/
Gustave Motors uses Club photo 21 as its cover, with 18, 25, 27 and 22 in the build
chapters plus the seven supplied trophy, presentation, team and podium photos.
A-BOT uses 6, 28 and 30. Original files are unchanged.
The A-BOT selections match images in the article.
Keep the robot described as an experimental student prototype without medical
effectiveness claims. The 2025 article publication dates are not the project years.

The supplied French Projet X 2024 diploma explicitly states "Prix lycéen" and
21 May 2024; use that date rather than the date previously quoted from the article.
The 2023 document is participation only. Gustave Motors' prize claim is supported
separately by the owner's account and the club article. At the owner's request,
the 2023 card and case study explicitly say that the team won the high-school
prize with Gustave Motors; the scan and its alt text retain the actual document type.
The supplied recommendation
letter supports the exact attributed English quotation by Alexandre Picaud,
Assistant Principal at Lycée Gustave Flaubert. Its original contact details and
unfinished template footer are not published. The Interact certificate is undated;
Nuit du Code 2024 confirms participation in Python, without a ranking. GOMYCODE's
course ran 3 March–30 June 2023. IELTS (7.0, CEFR C1 as printed) and SAT (1330,
Mathematics 700, Reading and Writing 630) remain dated 2024 results.
