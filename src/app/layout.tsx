import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono,
  Lato,
  DM_Serif_Display,
  Great_Vibes,
} from 'next/font/google';
// import 'animate.css';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const lato = Lato({
  variable: '--font-lato',
  weight: ['400', '700', '900'],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: '--font-dm-serif-display',
  weight: ['400'],
});
const greatVibes = Great_Vibes({
  variable: '--font-great-vibes',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Conferencia de Estaca Ayacucho 2025 | Fortalece tu fe en Cristo',
  description:
    'Participa en la Conferencia de Estaca Ayacucho. Mensajes de fe, esperanza y respuestas en Jesucristo para ti y tu familia.',
  keywords: [
    'Conferencia de Estaca',
    'Jesucristo',
    'Iglesia de Jesucristo de los Santos de los Últimos Días',
    'fe',
    'esperanza',
    'Ayacucho',
    'peru',
    'invitacion',
  ],
  openGraph: {
    title: 'Conferencia de Estaca Ayacucho 2025',
    description:
      'Fortalece tu fe y encuentra respuestas en Cristo en la Conferencia de Estaca Ayacucho. Descubre mensajes inspiradores, testimonios y mucho más.',
    url: 'https://conferencia-estaca-ayacucho.vercel.app/',
    siteName: 'Conferencia de Estaca Ayacucho 2025',
    images: [
      {
        url: '/images/conference-image.png',
        width: 980,
        height: 641,
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${lato.variable} ${dmSerifDisplay.variable} ${greatVibes.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
