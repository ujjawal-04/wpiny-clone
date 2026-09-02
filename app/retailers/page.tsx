import Image from 'next/image';
import RetailHero from '../../components/RetailHero';
import RetailSolutions from '../../components/RetailSolutions';
import RetailProcess from '../../components/RetailProcess';
import ContactForm from '../../components/ContactForm';
import RetailBenefits from '../../components/RetailBenefits';
import RetailVideoBanner from '../../components/RetailVideoBanner';
import RetailFAQ from '../../components/RetailFAQ';

export default function Retailers() {
  return (
    <main style={{ backgroundColor: 'var(--bg-dark-navy)' }}>
      {/* Hero Section */}
      <RetailHero />

      {/* Retail Solutions Section */}
      <RetailSolutions />

      {/* Retail Process Section */}
      <RetailProcess />

      {/* Contact Form */}
      <ContactForm />

      {/* Retail Benefits Section */}
      <RetailBenefits />

      {/* Video CTA Banner */}
      <RetailVideoBanner />

      {/* FAQ Accordion */}
      <RetailFAQ />
    </main>
  );
}