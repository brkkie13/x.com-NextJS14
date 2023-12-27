import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'x.com 클론코딩',
  description: '231227 x.com 클론코딩 시작',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
