import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Metadata } from 'next';
import FooterBanner from '@/components/FooterBanner';

export const metadata: Metadata = {
  title: 'Wiesner Products | Private Label Manufacturer',
  description: 'From Factory Floor to Store Door — A Manufacturer You Can Trust',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <FooterBanner />
        <Footer />
      </body>
    </html>
  );
}
