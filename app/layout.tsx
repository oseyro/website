import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] });
export const metadata: Metadata = {
  metadataBase: new URL('https://oseyro.com'),
  title: 'Oseyro — Service, der sich selbst organisiert',
  description: 'Oseyro verbindet Kundenservice, Aufgaben, Wissen und Kalender in einem ruhigen, sicheren Arbeitsbereich.',
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }, { url: '/favicon.ico' }], apple: '/apple-touch-icon.png' },
  openGraph: {
    title: 'Oseyro — Service that organizes itself',
    description: 'Customer service, tasks, knowledge and calendars in one calm workspace.',
    url: 'https://oseyro.com', siteName: 'Oseyro', type: 'website',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Oseyro' }],
  },
  twitter: {
    card: 'summary_large_image', title: 'Oseyro — Service that organizes itself',
    description: 'Customer service, tasks, knowledge and calendars in one calm workspace.', images: ['/og.jpg'],
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body className={manrope.variable}>{children}</body></html>;
}
