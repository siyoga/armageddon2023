import './globals.css';
import styles from './header.module.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
          <h1>ARMAGEDDON 2023</h1>
          <>
            <p>{`ООО "Команда им Б. Уиллиса"`}</p>
            <p>Взрываем астероиды с 1988 года.</p>
          </>
        </header>
        {children}
      </body>
    </html>
  );
}
