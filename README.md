# Oseyro website

Public bilingual product and legal website for `oseyro.com`.

## Editing content

- Product and navigation copy: `content/site.ts`
- Legal, privacy, support and deletion copy: `content/legal.ts`
- Shared presentation: `components/landing-page.tsx` and `components/legal-page.tsx`

Each language is kept in its own clearly named content block. Add another language by adding a new content block and route without changing the page design.

## Local development

Use `npm install` once, then `npm run dev`. Validate a production release with `npm run build`.

## Publishing note

The legal texts are tailored working drafts based on the current service description and the operator details published by Xsigns. They require a legal and factual review before the first public production release. Do not add analytics, advertising scripts, contact forms or third-party embeds without updating the privacy notice first.
