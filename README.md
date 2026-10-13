# Good & Glad

An inquiry-led luxury storefront for Good & Glad, built with Next.js App Router, React, TypeScript, and custom CSS. It has no account, checkout, database, or environment variables; orders and questions are directed to WhatsApp or email.

## Run locally

Use Node.js 20.9 or newer. In PowerShell, use the `.cmd` npm shim if script execution policy blocks `npm.ps1`:

```powershell
npm.cmd install
npm.cmd run dev
```

Open <http://localhost:3000>. For a production build and local production server:

```powershell
npm.cmd run build
npm.cmd start
```

In Command Prompt or a shell where npm is enabled, the same scripts can be run as `npm install`, `npm run dev`, `npm run build`, and `npm start`.

## Update the storefront

- Edit the four category descriptions and contact links in `content/site.ts`.
- Replace the files in `public/media/` with approved product photos and update `public/media/SOURCES.md` with each image/video source and license.
- The gallery labels photos as representative because the current local assets are licensed stock imagery, not verified Good & Glad inventory. Replace them with the business's own approved product photos before advertising specific items.
- Keep gallery paths unique so the same photo does not appear more than once.
- The optional video section is driven by the `videos` list in `content/site.ts`; set it to an empty array to omit the section.
- The WhatsApp number and email are stored in `content/site.ts`; update them there if the business contact details change.

## Deploy

Push this standalone project to a Git provider, import that repository into Vercel, and keep the project root set to `GoodAndGlad` if the repository also contains other folders. Vercel detects Next.js automatically; no environment variables are currently needed. Review the real product imagery, contact details, and final domain before publishing.

## Project scripts

- `npm run dev` — development server
- `npm run lint` — ESLint
- `npm run build` — production build
- `npm start` — production server (after a build)
