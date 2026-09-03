import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import type { LegalPageContent } from '@/content/legal';

export function LegalPage({ content }: { content: LegalPageContent }) {
  const home = content.language === 'de' ? '/' : '/en';
  return <main className="legal-page" lang={content.language}>
    <header className="legal-header"><a className="brand footer-brand" href={home}><Image src="/brand/oseyro-logo-color.svg" alt="Oseyro" width={145} height={30} priority /></a><a className="language-link legal-language" href={content.alternateHref}>{content.alternateLabel}</a></header>
    <div className="legal-hero"><a className="back-link" href={home}><ArrowLeft size={16} />{content.language === 'de' ? 'Zur Startseite' : 'Back to home'}</a><p>{content.label}</p><h1>{content.title}</h1><span>{content.intro}</span><small>{content.updated}</small></div>
    <article className="legal-content">{content.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}</article>
    <footer className="legal-footer"><span>© {new Date().getFullYear()} Xsigns GmbH &amp; Co. KG</span><a href="mailto:info@xsigns.de">info@xsigns.de</a></footer>
  </main>;
}
