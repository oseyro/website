import { ArrowRight, BrainCircuit, CalendarDays, Check, Inbox, Layers3, ListChecks, ShieldCheck, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Language, siteContent } from '@/content/site';

export function LandingPage({ language }: { language: Language }) {
  const content = siteContent[language];
  const productId = language === 'de' ? 'produkt' : 'product';
  return (
    <main lang={language}>
      <section className="hero-shell">
        <header className="site-header">
          <a className="brand" href={language === 'de' ? '/' : '/en'} aria-label="Oseyro">
            <Image src="/brand/oseyro-logo-white.svg" alt="Oseyro" width={150} height={31} priority />
          </a>
          <nav className="desktop-nav" aria-label={language === 'de' ? 'Hauptnavigation' : 'Main navigation'}>
            {content.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <a className="language-link" href={content.alternateHref} lang={language === 'de' ? 'en' : 'de'}>{content.alternateLabel}</a>
        </header>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span />{content.eyebrow}</p>
            <h1>{content.headline}</h1>
            <p className="intro">{content.intro}</p>
            <div className="hero-actions">
              <a className="primary-button" href={`#${productId}`}>{content.primaryAction}<ArrowRight size={18} /></a>
              <a className="secondary-button" href="mailto:info@xsigns.de">{content.secondaryAction}</a>
            </div>
            <ul className="trust-list">{content.trust.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>
          </div>
          <div className="product-stage" aria-label={content.workspaceLabel}>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="workspace-card">
              <div className="workspace-topbar"><div className="window-dots"><span /><span /><span /></div><span>{content.workspaceLabel}</span><span className="online-dot" /></div>
              <div className="workspace-body">
                <aside className="workspace-sidebar" aria-hidden="true"><div className="mini-logo"><Image src="/brand/oseyro-app-symbol.svg" alt="" width={30} height={30} /></div><span className="side-active" /><span /><span /><span /><span /></aside>
                <div className="ticket-card">
                  <div className="ticket-heading"><div><p>{content.ticketLabel}</p><h2>{content.ticketTitle}</h2></div><span className="status-pill">Open</span></div>
                  <p className="ticket-meta">{content.ticketMeta}</p><p className="ticket-copy">{content.ticketCopy}</p>
                  <div className="assistant-card"><div className="assistant-icon"><Sparkles size={17} /></div><div><strong>{content.assistantLabel}</strong><p>{content.assistantCopy}</p></div></div>
                  <button type="button" className="review-button">{content.actionLabel}<ArrowRight size={16} /></button>
                </div>
              </div>
            </div>
            <div className="privacy-chip"><ShieldCheck size={18} /><span>Privacy by design</span></div>
          </div>
        </div>
      </section>
      <section className="principles" id={productId} aria-label={content.primaryAction}>
        {content.stats.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{copy}</p></article>)}
      </section>
      <section className="content-section" id={language === 'de' ? 'funktionen' : 'features'}>
        <div className="flow-intro">
          <figure className="flow-visual">
            <Image
              src="/oseyro-calm-flow.jpg"
              alt={language === 'de'
                ? 'Nachrichten, Aufgaben, Wissen und Termine fließen in einem geordneten Serviceprozess zusammen.'
                : 'Messages, tasks, knowledge and schedules flow into one organized service process.'}
              width={1536}
              height={1024}
              sizes="(max-width: 900px) calc(100vw - 48px), 520px"
            />
          </figure>
          <div className="flow-copy"><p className="section-kicker">{content.sectionEyebrow}</p><h2>{content.sectionTitle}</h2><span>{content.sectionIntro}</span></div>
        </div>
        <div className="feature-grid">
          {content.features.map(([title, copy], index) => {
            const icons = [Inbox, ListChecks, CalendarDays, Layers3, BrainCircuit, ShieldCheck];
            const Icon = icons[index];
            return <article key={title}><div className="feature-icon"><Icon size={21} /></div><h3>{title}</h3><p>{copy}</p></article>;
          })}
        </div>
      </section>
      <section className="security-section" id={language === 'de' ? 'sicherheit' : 'security'}>
        <div className="security-copy"><p className="section-kicker">{content.securityEyebrow}</p><h2>{content.securityTitle}</h2><span>{content.securityCopy}</span><ul>{content.securityPoints.map((point) => <li key={point}><Check size={16} />{point}</li>)}</ul></div>
        <div className="google-card"><div className="calendar-symbol"><CalendarDays size={28} /></div><h3>{content.googleTitle}</h3><p>{content.googleCopy}</p><div className="availability"><span /><span /><span /><span /></div></div>
      </section>
      <section className="closing-section"><p>{content.closingTitle}</p><span>{content.closingCopy}</span><a href="mailto:info@xsigns.de">{content.secondaryAction}<ArrowRight size={18} /></a></section>
      <footer className="site-footer">
        <a className="brand footer-brand" href={language === 'de' ? '/' : '/en'}><Image src="/brand/oseyro-logo-color.svg" alt="Oseyro" width={145} height={30} /></a>
        <nav aria-label="Footer">
          <a href={`#${productId}`}>{content.footer.product}</a>
          <a href={language === 'de' ? '/datenschutz' : '/en/privacy'}>{content.footer.privacy}</a>
          <a href={language === 'de' ? '/impressum' : '/en/imprint'}>{content.footer.imprint}</a>
          <a href={language === 'de' ? '/nutzungsbedingungen' : '/en/terms'}>{content.footer.terms}</a>
          <a href={language === 'de' ? '/support' : '/en/support'}>{content.footer.support}</a>
          <a href={language === 'de' ? '/datenloeschung' : '/en/data-deletion'}>{content.footer.deletion}</a>
        </nav>
        <p>© {new Date().getFullYear()} Xsigns GmbH &amp; Co. KG</p>
      </footer>
    </main>
  );
}
