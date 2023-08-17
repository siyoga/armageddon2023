import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import icon from './favicon.ico';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Armageddon 2023',
  description: 'Закажи уничтожение астероида У НАС!',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="header">
          <h1>
            <Link href={'/'}>ARMAGEDDON 2023</Link>
          </h1>
          <>
            <p>{`ООО "Команда им Б. Уиллиса"`}</p>
            <p>Взрываем астероиды с 1988 года.</p>
          </>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
