import Image from 'next/image';
import Link from 'next/link';
import Hero from '../components/Hero';
import BrandSection from '../components/BrandSection';
import VideoBanner from '../components/VideoBanner';
import WholesaleSection from '../components/WholesaleSection';
import FooterBanner from '../components/FooterBanner';

export default function Home() {
  return (
    <main style={{ backgroundColor: 'var(--bg-dark-navy)' }}>
      <Hero />

      <BrandSection />

      <VideoBanner />

      <WholesaleSection />

      <FooterBanner />
    </main>
  );
}