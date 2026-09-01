"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function WholesaleSection() {
  const [activeTab, setActiveTab] = useState('design');

  // We can add different images or text for different tabs here later if needed
  const tabContent = {
    design: {
      image: '/images/hero-section/Rectangle-156-768x318.jpg',
      title: 'How Our Private Label\nWholesale Brings Brands to Life',
      desc: 'We turn concepts into best-selling products\nthrough strategic sourcing and innovation.',
    },
    manufacturing: {
      image: '/images/hero-section/Rectangle-156-768x318.jpg',
       title: 'How Our Private Label\nWholesale Brings Brands to Life',
      desc: 'We turn concepts into best-selling products\nthrough strategic sourcing and innovation.',
    },
    distribution: {
      image: '/images/hero-section/Rectangle-156-768x318.jpg',
      title: 'How Our Private Label\nWholesale Brings Brands to Life',
      desc: 'We turn concepts into best-selling products\nthrough strategic sourcing and innovation.',
    }
  };

  const current = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section style={{ position: 'relative', zIndex: 10, padding: '8rem 0', backgroundColor: '#eef0f2', color: 'var(--bg-dark-navy)' }}>
      <div className="container" style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 4rem' }}>
        
        {/* Top Header Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 2fr 1fr', gap: '1rem', alignItems: 'flex-start', marginBottom: '4rem' }}>
          <div style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#555', fontWeight: 600 }}>
            ADVANTAGES
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: '1.3', color: 'var(--bg-dark-navy)', maxWidth: '600px' }}>
            How Our Private Label Wholesale<br/>Brings Brands to Life
          </h2>
          <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '400px' }}>
            We turn concepts into best-selling products<br/>through strategic sourcing and innovation.
          </p>
          <div style={{ textAlign: 'right' }}>
            <button className="btn-primary" style={{ padding: '12px 1.5em', fontSize: '1rem', fontWeight: 400, border: 'none', cursor: 'pointer', backgroundColor: '#3d6898', color: '#fff' }}>
              Find Out More
            </button>
          </div>
        </div>

        {/* Tabs and Image Container */}
        <div style={{ position: 'relative', width: '100%', height: '600px', backgroundColor: '#fff', overflow: 'hidden' }}>
          
          {/* Background Image that remounts on tab change for animation */}
          <div key={activeTab + 'img'} className="animate-slide-down" style={{ position: 'absolute', inset: 0 }}>
            <Image 
              src={current.image} 
              alt="Wholesale" 
              fill 
              style={{ objectFit: 'cover' }} 
            />
          </div>
          
          {/* Tabs overlay top left */}
          <div style={{ position: 'absolute', top: '2rem', left: '2rem', display: 'flex', zIndex: 11 }}>
            <div 
              onClick={() => setActiveTab('design')}
              style={{ borderRight: '2px solid rgba(0,0,0,0.5)', padding: '1rem 2.5rem', backgroundColor: activeTab === 'design' ? '#fff' : 'rgba(255,255,255,0.2)', color: activeTab === 'design' ? '#000' : '#fff', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s' }}>
              Design reach
            </div>
            <div 
              onClick={() => setActiveTab('manufacturing')}
              style={{ borderRight: '2px solid rgba(0,0,0,0.5)', padding: '1rem 2.5rem', backgroundColor: activeTab === 'manufacturing' ? '#fff' : 'rgba(255,255,255,0.2)', color: activeTab === 'manufacturing' ? '#000' : '#fff', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s' }}>
              Manufacturing
            </div>
            <div 
              onClick={() => setActiveTab('distribution')}
              style={{ padding: '1rem 2.5rem', backgroundColor: activeTab === 'distribution' ? '#fff' : 'rgba(255,255,255,0.2)', color: activeTab === 'distribution' ? '#000' : '#fff', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s' }}>
              Distribution
            </div>
          </div>

          {/* Text overlay bottom left */}
          <div key={activeTab + 'text'} className="animate-slide-down" style={{ position: 'absolute', bottom: '3rem', left: '3rem', right: '3rem', display: 'flex', gap: '4rem', alignItems: 'flex-start', color: '#fff', zIndex: 11 }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 600, maxWidth: '400px', lineHeight: '1.2' }}>
              {current.title.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}
            </h3>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', maxWidth: '450px', lineHeight: '1.6', marginTop: '0.5rem' }}>
              {current.desc.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
