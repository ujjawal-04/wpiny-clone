'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function RetailSolutionsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const solutions = [
    { title: 'Enterprise Solutions', desc: 'Comprehensive business management tools designed for large-scale operations', img: '/images/brand/sol1.webp' },
    { title: 'Analytics Platform', desc: 'Advanced data analytics and reporting capabilities for informed decision-making', img: '/images/brand/sol2.webp' },
    { title: 'Integration Services', desc: 'Seamless connectivity with existing systems and third-party applications', img: '/images/brand/sol3.webp' }
  ];

  const itemsVisible = 2; // 2 items fit perfectly
  const maxIndex = solutions.length > itemsVisible ? solutions.length - itemsVisible : 0; 

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
      paddingTop: '6rem', 
      paddingBottom: '4rem',
      backgroundColor: 'var(--bg-dark-navy)',
      '--container-w': 'min(1440px, 100%)',
      '--content-w': 'calc(var(--container-w) - 8rem)',
      '--gap': '0.2rem',
      '--item-w': 'calc(var(--content-w) / 1.8)', // Ensures the final item fully fits in the screen after one scroll
      '--track-offset': 'max(4rem, calc((100% - 1440px) / 2 + 4rem))'
    } as React.CSSProperties}>
      
      {/* Section Header */}
      <div className="container" style={{ maxWidth: '1440px', padding: '0 4rem', margin: '0 auto', marginBottom: '2rem' }}>
        <div style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-main)', fontWeight: 600 }}>
          RETAIL SOLUTIONS
        </div>
      </div>

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
          {solutions.map((solution, i) => (
            <div 
              key={i} 
              style={{ 
                flex: '0 0 var(--item-w)', 
                width: 'var(--item-w)',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                boxSizing: 'border-box'
              }}
              className="solution-card"
            >
              {/* Image Container with hover zoom */}
              <div style={{ 
                position: 'relative', 
                width: '100%', 
                height: '320px', // Reduced height as requested
                overflow: 'hidden', // Contains the zoomed image
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
                >
                  <Image 
                    src={solution.img} 
                    alt={solution.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
              </div>

              {/* Text Below */}
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#fff', marginBottom: '0.8rem' }}>
                  {solution.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                  {solution.desc}
                </p>
              </div>
            </div>
          ))}
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
