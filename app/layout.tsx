import type { Metadata } from 'next';
import { DM_Sans, Instrument_Serif } from 'next/font/google';
import './globals.css';

const sans = DM_Sans({ variable: '--font-sans', subsets: ['latin'] });
const serif = Instrument_Serif({ variable: '--font-serif', subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Rithvik Pennepalli — Creator & Video Editor',
  description: 'Rithvik Pennepalli is a creator, freelance short-form video editor, and Uber brand partner making work that earns attention.',
  openGraph: {
    title: 'Rithvik Pennepalli — Creator & Video Editor',
    description: 'Creator instinct. Editor discipline. Meet Rithvik Pennepalli.',
    type: 'website',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'I make the scroll worth it. Creator and video editor.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rithvik Pennepalli — Creator & Video Editor',
    description: 'Creator instinct. Editor discipline. Meet Rithvik Pennepalli.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
