'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function CoreValuesSection() {
  const [activeTab, setActiveTab] = useState('quality');

  // Content for each tab
  const tabContent = {
    quality: {
      image: '/images/about/tabs-bg.jpg',
      desc: 'Our in-house teams oversee every\nstage, from fabric and material\ntesting to quality audits, ensuring\nevery product meets brand\nexpectations before it hits the\nshelves.',
    },
    integrity: {
      image: '/images/about/tabs-bg-2.jpg',
      desc: 'We do what we say, providing top-quality products and services on time based on transparency and ethical practices across our global supply chain. ',
    },
    innovation: {
      image: '/images/about/Rectangle-156.jpg',
      desc: 'Our teams bring fresh ideas, turning market shifts into opportunities and doing what we do best: serving real-world needs.',
    }
  };

  const current = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section style={{ position: 'relative', zIndex: 10, padding: '8rem 0', backgroundColor: 'var(--bg-dark-navy)', color: '#fff' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 4rem' }}>
        
        {/* Top Header Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 2fr 1fr', gap: '2rem', alignItems: 'flex-start', marginBottom: '4rem' }}>
          <div style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#fff', fontWeight: 600 }}>
            OUR CORE VALUES
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: '1.3', color: '#fff', maxWidth: '800px' }}>
            Our Foundation: Quality, Integrity<br/>& Innovation
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: '1.6', maxWidth: '400px' }}>
            We believe strong partnerships start with trust. When we promise delivery, we mean it, keeping an on-time rate above 98% and always looking for smarter ways to bring value.
          </p>
          <div style={{ textAlign: 'right' }}>
            <Link href="/contact">
              <button className="btn-primary" style={{ padding: '12px 1.5em', fontSize: '1rem', fontWeight: 400, border: 'none', cursor: 'pointer', backgroundColor: 'var(--accent-blue)', color: '#fff' }}>
                Get in Touch
              </button>
            </Link>
          </div>
        </div>

        {/* Tabs and Image Container */}
        <div style={{ position: 'relative', width: '100%', height: '600px', backgroundColor: 'transparent', overflow: 'hidden' }}>
          
          {/* Background Image */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <Image 
              src={current.image} 
              alt="Core Values" 
              fill 
              style={{ objectFit: 'cover' }} 
            />
          </div>
          
          {/* Tabs overlay top left */}
          <div style={{ position: 'absolute', top: '4rem', left: '4rem', display: 'flex', zIndex: 11 }}>
            <div 
              onClick={() => setActiveTab('quality')}
              style={{ borderRight: '1px solid rgba(255,255,255,0.3)', padding: '0.5rem 2rem', backgroundColor: activeTab === 'quality' ? '#fff' : 'rgba(255,255,255,0.2)', color: activeTab === 'quality' ? '#000' : '#fff', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s' }}>
              Quality
            </div>
            <div 
              onClick={() => setActiveTab('integrity')}
              style={{ borderRight: '1px solid rgba(255,255,255,0.3)', padding: '0.5rem 2rem', backgroundColor: activeTab === 'integrity' ? '#fff' : 'rgba(255,255,255,0.2)', color: activeTab === 'integrity' ? '#000' : '#fff', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s' }}>
              Integrity
            </div>
            <div 
              onClick={() => setActiveTab('innovation')}
              style={{ padding: '0.5rem 2rem', backgroundColor: activeTab === 'innovation' ? '#fff' : 'rgba(255,255,255,0.2)', color: activeTab === 'innovation' ? '#000' : '#fff', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s' }}>
              Innovation
            </div>
          </div>

          {/* Text overlay bottom left */}
          <div style={{ position: 'absolute', bottom: '4rem', left: '4rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#fff', zIndex: 11 }}>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.95)', maxWidth: '350px', lineHeight: '1.6' }}>
              {current.desc.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
