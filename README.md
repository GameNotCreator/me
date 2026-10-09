# Hedi Fourati — Portfolio

Personal portfolio showcasing web projects, applications and experiments.

**[Visit the portfolio](https://www.thehnh.tech/)**

## Overview

The website brings together client websites, personal products, hackathons and a photo gallery. Project cards link to the relevant websites or App Store pages and indicate work that is still in development.

Built with **Next.js 15**, **React 19**, **Tailwind CSS** and **Framer Motion**. The layout adapts to smaller screens, supports light and dark themes, and respects reduced-motion preferences.

## Run locally

```bash
git clone https://github.com/GameNotCreator/me.git
cd me
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Project structure

| Path | Purpose |
| --- | --- |
| `app/` | Pages, layout and global styles |
| `components/sections/` | Portfolio sections |
| `libs/data.js` | Projects, links and hackathon entries |
| `libs/seo.js` | Public identity and search metadata |
| `public/projects/` | Project images |
| `public/previews/` | Static website captures |
| `public/images/` | Life gallery |
| `scripts/` | Image preparation utilities |

## Update the content

Edit project information in `libs/data.js` and the introduction in `components/sections/Hero.js` and `About.js`. Keep links, project status and image descriptions consistent with the actual work.

The contact section uses direct email and telephone links. No email delivery service is needed for the current page.

See [maintenance notes](MAINTENANCE.md) for photo processing, preview sources, content provenance and deployment details, and [SEO notes](docs/SEO.md) for metadata configuration.

## Deployment and provenance

The production site is deployed on Vercel from `main`. Its canonical address is **https://www.thehnh.tech/**.

This repository is a fork of [Hedi-Fourati/my](https://github.com/Hedi-Fourati/my).
