import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const danfo = localFont({
  src: '../../public/fonts/Danfo-Regular-VariableFont_ELSH.ttf',
  variable: '--font-danfo',
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Creative developer & designer portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${danfo.variable} antialiased`}>{children}</body>
    </html>
  );
}