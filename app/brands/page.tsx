import Image from 'next/image';
import BrandHero from '../../components/BrandHero';
import BrandLogosSlider from '../../components/BrandLogosSlider';
import RetailSolutionsSlider from '../../components/RetailSolutionsSlider';
import IndustryCapabilities from '../../components/IndustryCapabilities';

export default function Brands() {
  return (
    <main style={{ backgroundColor: 'var(--bg-dark-navy)' }}>
      <BrandHero />

      {/* Logos Slider Section */}
      <BrandLogosSlider />

      {/* Brands Covering Every Industry */}
      <IndustryCapabilities />

      {/* Retail Solutions */}
      <RetailSolutionsSlider />
    </main>
  );
}