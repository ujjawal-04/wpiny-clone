import Image from 'next/image';
import Link from 'next/link';
import DivisionsHero from '../../components/DivisionsHero';
import DivisionsGrid from '../../components/DivisionsGrid';
import DivisionsVideoBanner from '../../components/DivisionsVideoBanner';
import DivisionsFAQ from '../../components/DivisionsFAQ';
import FooterBanner from '../../components/FooterBanner';

export default function Divisions() {
  return (
    <main style={{ backgroundColor: 'var(--bg-dark-navy)' }}>
      <DivisionsHero />

      {/* Grid Section - Extracted to component */}
      <DivisionsGrid />

      {/* Video Banner CTA Section */}
      <DivisionsVideoBanner />

      {/* FAQ Accordion */}
      <DivisionsFAQ />

    </main>
  );
}