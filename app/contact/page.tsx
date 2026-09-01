import ContactHero from '../../components/ContactHero';
import ContactFormSection from '../../components/ContactFormSection';
import ContactMapSection from '../../components/ContactMapSection';

export default function Contact() {
  return (
    <main style={{ backgroundColor: 'var(--bg-dark-navy)' }}>
      <ContactHero />
      <ContactFormSection />
      <ContactMapSection />
    </main>
  );
}