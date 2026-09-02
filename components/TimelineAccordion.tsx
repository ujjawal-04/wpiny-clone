'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function TimelineAccordion() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const panels = [
    {
      num: '01',
      title: 'From Two Rooms to 20 Countries:',
      subtitle: 'Our Story',
      shortText: 'Starting with a few second-hand sewing machines, two rooms, and a dream to make affordable footwear for people..',
      fullText: 'Starting with a few second-hand sewing machines, two rooms, and a dream to make affordable footwear for people, Jack Mizrahi founded Wiesner Products in 1971. By 1988, his products were on shelves in stores all over America. Bringing his son Charles on board in 1987, the impact grew further. What started as a local effort became a global presence. ',
      img: '/images/about/panel-1.jpg',
      align: 'right' // Text on right, gradient on right
    },
    {
      num: '02',
      title: 'Major Acquisitions',
      subtitle: '',
      shortText: 'We specialize in acquiring key brands that align with our values and expand our capabilities. The goal? Strengthening our global presence and serving the diverse needs of our..',
      fullText: 'We specialize in acquiring key brands that align with our values and expand our capabilities. The goal? Strengthening our global presence and serving the diverse needs of our customers. ',
      img: '/images/about/panel-2.jpg',
      align: 'left' // Text on left, gradient on left
    },
    {
      num: '03',
      title: 'International Expansion',
      subtitle: '',
      shortText: 'From a small workshop, our journey has taken us to over 20 countries around the world, a team of 1,000+ dedicated employees, and a growing base of loyal customers.',
      fullText: 'From a small workshop, our journey has taken us to over 20 countries around the world, a team of 1,000+ dedicated employees, and a growing base of loyal customers.',
      img: '/images/about/panel-3.jpg',
      align: 'right' // Text on right, gradient on right
    }
  ];

  return (
    <section style={{ background: 'linear-gradient(to bottom, transparent 0%, var(--bg-dark-navy) 12rem, var(--bg-dark-navy) 100%)', color: '#fff', marginTop: '-1px' }}>
      
      {/* Top Header Section */}
      <div className="container" style={{ padding: '10rem 4rem 0', maxWidth: '1440px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.8rem' }}>Decades of Innovation at Wiesner</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', marginBottom: '2rem' }}>
          We improve product performance, build new processes, and help our partners bring high-quality solutions to life.
        </p>
        
        {/* Down Arrow - overlapping into the first panel */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '0.5rem', marginBottom: '-50px' }}>
          <div style={{ width: '1px', height: '100px', backgroundColor: 'rgba(255,255,255,0.5)' }}></div>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateX(-5.5px)' }}>
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Accordion Panels */}
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', position: 'relative' }}>

        {panels.map((panel, i) => {
          const isHovered = hoveredIndex === i;
          
          // Gradients designed to fade heavily from the side where the text is
          const gradient = panel.align === 'right'
            ? 'linear-gradient(to left, rgba(24,39,58,1) 0%, rgba(24,39,58,0.8) 40%, rgba(24,39,58,0) 100%)'
            : 'linear-gradient(to right, rgba(24,39,58,1) 0%, rgba(24,39,58,0.8) 40%, rgba(24,39,58,0) 100%)';

          return (
            <div 
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                position: 'relative',
                width: '100%',
                height: isHovered ? '550px' : '200px',
                transition: 'height 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                overflow: 'visible', // allow arrow to overflow
                cursor: 'pointer',
                borderBottom: i < panels.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                zIndex: isHovered ? 2 : 1
              }}
            >
              {/* Background Image Wrapper (needs hidden overflow so scale doesn't break out) */}
              <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                <Image 
                  src={panel.img} 
                  alt={panel.title} 
                  fill 
                  style={{ 
                    objectFit: 'cover',
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 6s ease-out' // Slow subtle zoom when hovered
                  }} 
                />
                
                {/* Vanishing Side Gradient */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: gradient,
                  opacity: isHovered ? 0 : 1,
                  transition: 'opacity 0.6s ease'
                }}></div>

                {/* Persistent base tint */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(15, 23, 34, 0.4)',
                  opacity: isHovered ? 1 : 0,
                  transition: 'opacity 0.6s ease'
                }}></div>
              </div>

              {/* Huge Background Number */}
              <div style={{
                position: 'absolute',
                left: panel.align === 'right' ? '4rem' : 'auto',
                right: panel.align === 'left' ? '4rem' : 'auto',
                bottom: '-3rem', 
                fontSize: '12rem',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.95)',
                lineHeight: 1,
                zIndex: 2,
                transition: 'all 0.6s ease'
              }}>
                {panel.num}
              </div>

              {/* Content Box */}
              <div className="container" style={{ 
                position: 'relative', 
                zIndex: 3, 
                height: '100%',
                maxWidth: '1440px',
                margin: '0 auto',
                padding: '0 4rem',
                display: 'flex',
                alignItems: isHovered ? 'center' : 'center',
                justifyContent: panel.align === 'right' ? 'flex-end' : 'flex-start'
              }}>
                <div style={{ 
                  position: 'relative',
                  maxWidth: '500px', 
                  transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'transform 0.6s ease'
                }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: panel.subtitle ? '0.2rem' : '1rem' }}>
                    {panel.title}
                  </h3>
                  {panel.subtitle && (
                    <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginBottom: '0.8rem' }}>
                      {panel.subtitle}
                    </div>
                  )}
                  
                  <p style={{ 
                    color: 'rgba(255,255,255,0.85)', 
                    fontSize: '0.95rem', 
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {isHovered ? panel.fullText : panel.shortText}
                  </p>

                  {/* Arrow for 2nd panel (Major Acquisitions) - Overlaps into 3rd panel */}
                  {i === 1 && (
                    <div style={{ 
                      position: 'absolute', 
                      bottom: '-70px', 
                      left: '0.5rem', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'flex-start',
                      zIndex: 10,
                      opacity: isHovered ? 0 : 1, // hide arrow when expanded to prevent mess
                      transition: 'opacity 0.3s ease'
                    }}>
                      <div style={{ width: '1px', height: '100px', backgroundColor: 'rgba(255,255,255,0.5)' }}></div>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateX(-5.5px)' }}>
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                      </svg>
                    </div>
                  )}

                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
