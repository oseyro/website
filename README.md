# Oseyro website

Public bilingual product and legal website for `oseyro.com`.

## Editing content

- Product and navigation copy: `content/site.ts`
- Legal, privacy, support and deletion copy: `content/legal.ts`
- Shared presentation: `components/landing-page.tsx` and `components/legal-page.tsx`

Each language is kept in its own clearly named content block. Add another language by adding a new content block and route without changing the page design.

## Local development

Use `npm install` once, then `npm run dev`. Validate a production release with `npm run build`.

## Plesk deployment

The production build is a static export in `dist/client`. It requires Node.js
22.13 or newer during the build, but no permanently running Node.js application.

Configure the Plesk Git deployment for `main` with `httpdocs` as the deployment
path. Run these additional deployment actions with the Node.js 22 toolchain:

```sh
PATH=/opt/plesk/node/22/bin:$PATH /opt/plesk/node/22/bin/npm ci
PATH=/opt/plesk/node/22/bin:$PATH /opt/plesk/node/22/bin/npm run build
```

Set the domain document root to `httpdocs/dist/client`. If the selected Plesk
Node.js 22 installation uses a different directory, replace the two absolute
tool paths accordingly.

## Publishing note

The legal texts are tailored working drafts based on the current service description and the operator details published by Xsigns. They require a legal and factual review before the first public production release. Do not add analytics, advertising scripts, contact forms or third-party embeds without updating the privacy notice first.
