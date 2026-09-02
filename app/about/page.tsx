import Image from 'next/image';
import Link from 'next/link';
import AboutHero from '../../components/AboutHero';
import TimelineAccordion from '../../components/TimelineAccordion';
import CoreValuesSection from '../../components/CoreValuesSection';
import LeadershipAndPartnerships from '../../components/LeadershipAndPartnerships';
import CareersImageBreak from '../../components/CareersImageBreak';
import AboutDivisionsGrid from '../../components/AboutDivisionsGrid';
import PartnerVideoBanner from '../../components/PartnerVideoBanner';

export default function About() {
  return (
    <main style={{ backgroundColor: 'var(--bg-dark-navy)' }}>
      {/* Hero Section */}
      <AboutHero />

      {/* Decades of Innovation Interactive Accordion */}
      <TimelineAccordion />

      {/* Core Values Section */}
      <CoreValuesSection />

       {/* Divisions Text Grid */}
      <AboutDivisionsGrid />

        {/* Partner Video Banner */}
      <PartnerVideoBanner />

      {/* Leadership & Partnerships Section */}
      <LeadershipAndPartnerships />

      {/* Careers Image Break */}
      <CareersImageBreak />
    
    </main>
  );
}