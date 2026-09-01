'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function BrandLogosSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const logos = [
     { name: 'Express', img: '/images/brand/express.jpeg' },
    { name: 'Brookstone', img: '/images/brand/brookstone.jpeg' },
    { name: 'Billabong', img: '/images/brand/billbong.webp' },
    { name: 'MasterChef', img: '/images/brand/masterchef.webp' },
    { name: 'True Religion', img: '/images/brand/tr.webp' },
    { name: 'Quiksilver', img: '/images/brand/quicksilver.webp' },
    { name: 'Sharper Image', img: '/images/brand/sharper.webp' },
    { name: 'Tahari', img: '/images/brand/tahari.webp' },
  ];

  const itemsVisible = 3; // 3 items perfectly fit the container area, making the 4th one bleed!
  const maxIndex = logos.length > itemsVisible ? logos.length - itemsVisible : 0; 
  // With 7 items and 3 visible, maxIndex is 4. Gives 5 dots.

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section style={{ 
      position: 'relative', 
      zIndex: 10, 
      paddingTop: '8rem', 
      marginTop: '-4rem',
      background: 'linear-gradient(to bottom, transparent 0%, var(--bg-dark-navy) 200px, var(--bg-dark-navy) 100%)',
      paddingBottom: '4rem',
      '--container-w': 'min(1440px, 100%)',
      '--content-w': 'calc(var(--container-w) - 8rem)',
      '--gap': '0.2rem',
      '--item-w': 'calc((var(--content-w) - (2 * var(--gap))) / 3)',
      '--track-offset': 'max(4rem, calc((100% - 1440px) / 2 + 4rem))'
    } as React.CSSProperties}>
      <div style={{ 
        width: 'calc(100% - var(--track-offset))', 
        marginLeft: 'var(--track-offset)',
        overflow: 'hidden', 
        boxSizing: 'border-box'
      }}>
        
        {/* Slider Track */}
        <div style={{ 
          display: 'flex', 
          gap: 'var(--gap)',
          transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)', 
          transform: `translateX(calc(-1 * ${currentIndex} * (var(--item-w) + var(--gap))))`,
          width: '100%'
        }}>
          {logos.map((logo, i) => {
            const isHovered = hoveredIndex === i;

            return (
              <div 
                key={i} 
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ 
                  flex: '0 0 var(--item-w)', 
                  width: 'var(--item-w)',
                  height: '520px', 
                  backgroundColor: '#b5b5b5', 
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '2.5rem', 
                  cursor: 'pointer',
                  boxSizing: 'border-box'
                }}
              >
                {/* Hover Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(24, 39, 58, 0.4)', 
                  opacity: isHovered ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  zIndex: 1
                }}></div>

                {/* Top Left Text (Absolutely positioned so it doesn't push the image off-center) */}
                <div style={{ position: 'absolute', top: '2.5rem', left: '2.5rem', zIndex: 2 }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff' }}>
                    {logo.name}
                  </div>
                  {/* 3 small dots below text on hover */}
                  <div style={{ 
                    display: 'flex', 
                    gap: '4px', 
                    marginTop: '10px',
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                  }}>
                    <div style={{ width: '4px', height: '4px', backgroundColor: '#fff', borderRadius: '50%' }}></div>
                    <div style={{ width: '4px', height: '4px', backgroundColor: '#fff', borderRadius: '50%' }}></div>
                    <div style={{ width: '4px', height: '4px', backgroundColor: '#fff', borderRadius: '50%' }}></div>
                  </div>
                </div>

                {/* Center Logo */}
                <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', mixBlendMode: 'multiply' }}>
                  <Image 
                    src={logo.img} 
                    alt={logo.name} 
                    fill 
                    style={{ objectFit: 'contain' }} 
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation & Pagination */}
      <div className="container" style={{ 
        maxWidth: '1440px', 
        margin: '0 auto', 
        padding: '0 4rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginTop: '4rem' 
      }}>
        
        {/* Left Arrow */}
        <button 
          onClick={prevSlide} 
          disabled={currentIndex === 0}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: currentIndex === 0 ? 'rgba(255,255,255,0.2)' : '#fff', 
            cursor: currentIndex === 0 ? 'default' : 'pointer', 
            display: 'flex', 
            alignItems: 'center',
            transition: 'color 0.3s',
            padding: '1rem 0'
          }}
        >
          <svg width="80" height="12" viewBox="0 0 80 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6H80M0 6L6 0M0 6L6 12" stroke="currentColor" strokeWidth="1" />
          </svg>
        </button>

        {/* Dots */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentIndex(i)}
              style={{
                width: currentIndex === i ? '40px' : '6px', 
                height: '6px',
                backgroundColor: '#fff',
                borderRadius: currentIndex === i ? '3px' : '50%',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                opacity: currentIndex === i ? 1 : 0.4
              }}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextSlide} 
          disabled={currentIndex === maxIndex}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: currentIndex === maxIndex ? 'rgba(255,255,255,0.2)' : '#fff', 
            cursor: currentIndex === maxIndex ? 'default' : 'pointer', 
            display: 'flex', 
            alignItems: 'center',
            transition: 'color 0.3s',
            padding: '1rem 0'
          }}
        >
          <svg width="80" height="12" viewBox="0 0 80 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6H80M80 6L74 0M80 6L74 12" stroke="currentColor" strokeWidth="1" />
          </svg>
        </button>
      </div>
    </section>
  );
}
