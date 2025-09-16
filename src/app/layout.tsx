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
  title: 'Conferencia de Estaca Ayacucho | Fortalece tu fe en Cristo',
  description:
    'Participa en la Conferencia de Estaca Ayacucho. Mensajes de fe, esperanza y respuestas en Jesucristo para ti y tu familia. Entrada libre.',
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
