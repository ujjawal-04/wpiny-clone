import Image from 'next/image';
import Link from 'next/link';

export default function CareersImageBreak() {
  return (
    <section style={{ backgroundColor: '#eef0f2', padding: '8rem 0', color: 'var(--bg-dark-navy)' }}>
      <div className="container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 4rem' }}>
        
        {/* Top Header Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '2rem', alignItems: 'flex-start', marginBottom: '4rem' }}>
          <div style={{ fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#4b5563', fontWeight: 600 }}>
            BRING YOUR IDEAS
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 600, lineHeight: '1.3', color: 'var(--bg-dark-navy)', maxWidth: '500px' }}>
            Join a Team That Turns Ideas Into<br/>Action
          </h2>
          <div style={{ textAlign: 'right' }}>
            <Link href="/contact">
              <button className="btn-primary" style={{ padding: '12px 1.5em', fontSize: '1rem', fontWeight: 400, border: 'none', cursor: 'pointer', backgroundColor: '#3d6898', color: '#fff' }}>
                Explore Career Opportunities
              </button>
            </Link>
          </div>
        </div>

        {/* Large Image Break */}
        <div style={{ position: 'relative', width: '100%', height: '700px', overflow: 'hidden' }}>
          <Image 
            src="/images/about/image-break.jpg" 
            alt="Join our team" 
            fill 
            style={{ objectFit: 'cover' }} 
            sizes="(max-width: 1440px) 100vw, 1440px"
          />
        </div>

      </div>
    </section>
  );
}
