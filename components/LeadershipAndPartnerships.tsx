'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function LeadershipAndPartnerships() {
  const [activeTab, setActiveTab] = useState('innovation');

  // Content for each tab
  const tabContent = {
    growth: {
      image: '/images/tabs-bg-2.jpg',
      desc: "We acquire great brands and team up with strong partners, entering new markets and bringing top quality to customers everywhere. ",
    },
    collaboration: {
      image: '/images/Rectangle-156.jpg',
      desc: "We believe strong partnerships start with strong values.\n \nThat’s why we lead with integrity, innovate \nfearlessly, and never compromise on quality.",
    },
    innovation: {
      image: '/images/tabs-bg.jpg',
      desc: "We believe strong partnerships start with strong values.\n \nThat’s why we lead with integrity, innovate \nfearlessly, and never compromise on quality.",
    }
  };

  const current = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section style={{ backgroundColor: '#eef0f2', color: 'var(--bg-dark-navy)', padding: '8rem 0' }}>
      
      {/* Leadership Team Section */}
      <div className="container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 4rem', marginBottom: '8rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '2rem', marginBottom: '4rem' }}>
          <div style={{ fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#6b7280', fontWeight: 600 }}>
            FOCUSED ON GROWTH
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: 'var(--bg-dark-navy)' }}>
            Meet the Leaders Behind<br/>Wiesner's Success
          </h2>
        </div>

        {/* The 3 boxes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', backgroundColor: 'rgba(0,0,0,0.06)' }}>
          <div style={{ padding: '2rem', borderRight: '1px solid rgba(255,255,255,0.4)' }}>
            <div style={{ fontWeight: 600, marginBottom: '0.2rem', color: 'var(--bg-dark-navy)', fontSize: '1.05rem' }}>Charles Mizrahi</div>
            <div style={{ fontSize: '0.85rem', color: '#4b5563' }}>President of Wiesner Products</div>
          </div>
          <div style={{ padding: '2rem', borderRight: '1px solid rgba(255,255,255,0.4)' }}>
            <div style={{ fontWeight: 600, marginBottom: '0.2rem', color: 'var(--bg-dark-navy)', fontSize: '1.05rem' }}>Jackie Mizrahi</div>
            <div style={{ fontSize: '0.85rem', color: '#4b5563' }}>CMO of Wiesner Products</div>
          </div>
          <div style={{ padding: '2rem' }}>
            <div style={{ fontWeight: 600, marginBottom: '0.2rem', color: 'var(--bg-dark-navy)', fontSize: '1.05rem' }}>Andy Jha</div>
            <div style={{ fontSize: '0.85rem', color: '#4b5563' }}>CFO of Wiesner Products</div>
          </div>
        </div>
      </div>


      {/* Strategic Partnerships Section */}
      <div className="container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 4rem' }}>
        
        {/* Top Header Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '2rem', alignItems: 'flex-start', marginBottom: '4rem' }}>
          <div style={{ fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#6b7280', fontWeight: 600 }}>
            BUILDING STRONG<br/>CONNECTIONS
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: '1.3', color: 'var(--bg-dark-navy)', maxWidth: '600px' }}>
            Expanding Our Reach Through Strategic<br/>Partnerships
          </h2>
          <div style={{ textAlign: 'right' }}>
            <Link href="/contact">
              <button className="btn-primary" style={{ padding: '12px 1.5em', fontSize: '1rem', fontWeight: 400, border: 'none', cursor: 'pointer', backgroundColor: '#3d6898', color: '#fff' }}>
                Partner with Wiesner
              </button>
            </Link>
          </div>
        </div>

        {/* Tabs and Image Container */}
        <div style={{ position: 'relative', width: '100%', height: '550px', backgroundColor: 'transparent', overflow: 'hidden' }}>
          
          {/* Background Image */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <Image 
              src={current.image} 
              alt="Strategic Partnerships" 
              fill 
              style={{ objectFit: 'cover' }} 
            />
          </div>
          
          {/* Tabs overlay top left */}
          <div style={{ position: 'absolute', top: '4rem', left: '4rem', display: 'flex', zIndex: 11 }}>
            <div 
              onClick={() => setActiveTab('growth')}
              style={{ borderRight: '1px solid rgba(255,255,255,0.3)', padding: '0.5rem 1rem', backgroundColor: activeTab === 'growth' ? '#fff' : 'rgba(255,255,255,0.2)', color: activeTab === 'growth' ? '#000' : '#fff', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s' }}>
              Strategic growth
            </div>
            <div 
              onClick={() => setActiveTab('collaboration')}
              style={{ borderRight: '1px solid rgba(255,255,255,0.3)',padding: '0.5rem 1rem', backgroundColor: activeTab === 'collaboration' ? '#fff' : 'rgba(255,255,255,0.2)', color: activeTab === 'collaboration' ? '#000' : '#fff', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s' }}>
              Collaboration
            </div>
            <div 
              onClick={() => setActiveTab('innovation')}
              style={{ padding: '0.5rem 1rem', backgroundColor: activeTab === 'innovation' ? '#fff' : 'rgba(255,255,255,0.2)', color: activeTab === 'innovation' ? '#000' : '#fff', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s' }}>
              Innovation
            </div>
          </div>

          {/* Text overlay bottom left */}
          <div style={{ position: 'absolute', bottom: '4rem', left: '4rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#fff', zIndex: 11 }}>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.95)', maxWidth: '450px', lineHeight: '1.6' }}>
              {current.desc.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
