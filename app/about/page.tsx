import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <main style={{ backgroundColor: 'var(--bg-dark-navy)' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <Image src="/images/tabs-bg.jpg" alt="Hero background" fill style={{ objectFit: 'cover' }} priority />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(25, 36, 52, 0.9) 0%, rgba(25, 36, 52, 0.4) 100%)' }}></div>
        </div>
        
        {/* Vertical WIESNER text */}
        <div style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'left center', zIndex: 2, display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <span style={{ fontSize: '0.8rem', letterSpacing: '0.5em', opacity: 0.5 }}>WIESNER</span>
          <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(255,255,255,0.3)' }}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2, paddingLeft: '8rem' }}>
          <h1 style={{ fontSize: '4.5rem', lineHeight: '1.1', fontWeight: 600, marginBottom: '1.5rem', maxWidth: '800px' }}>
            The Story Behind Wiesner Products Inc.
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
            A legacy of innovation, quality, and commitment to building brands that matter.
          </p>
        </div>
      </section>

      {/* Decades of Innovation */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-darker-navy)' }}>
        <div className="container" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Decades of Innovation at Wiesner</h2>
          <p style={{ color: 'var(--text-muted)' }}>From a humble hosiery business to an international private label powerhouse, the history of Wiesner is built on vision.</p>
        </div>

        {/* Timelines */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          
          {/* 01 */}
          <div style={{ position: 'relative', height: '300px', display: 'flex', alignItems: 'center' }}>
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '85%' }}>
              <Image src="/images/panel-1.jpg" alt="Timeline 1" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(19, 27, 38, 1) 0%, rgba(19, 27, 38, 0.7) 30%, transparent 100%)' }}></div>
            </div>
            <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', width: '100%', alignItems: 'center' }}>
              <div style={{ fontSize: '10rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)', lineHeight: 0.8, marginRight: '4rem', textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>01</div>
              <div style={{ maxWidth: '500px' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Early Days and Initial Expansion</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Founded in 1971, Wiesner Products started as a small hosiery company. By focusing on quality and understanding consumer needs, the company quickly built a reputation for excellence.</p>
              </div>
            </div>
          </div>

          {/* 02 */}
          <div style={{ position: 'relative', height: '300px', display: 'flex', alignItems: 'center' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '85%' }}>
              <Image src="/images/panel-2.jpg" alt="Timeline 2" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, rgba(19, 27, 38, 1) 0%, rgba(19, 27, 38, 0.7) 30%, transparent 100%)' }}></div>
            </div>
            <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'row-reverse', width: '100%', alignItems: 'center' }}>
              <div style={{ fontSize: '10rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)', lineHeight: 0.8, marginLeft: '4rem', textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>02</div>
              <div style={{ maxWidth: '500px', textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Major Brand Additions</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Strategic partnerships and licensing agreements allowed Wiesner to expand into new categories, including footwear, apparel, and accessories, partnering with globally recognized brands.</p>
              </div>
            </div>
          </div>

          {/* 03 */}
          <div style={{ position: 'relative', height: '300px', display: 'flex', alignItems: 'center' }}>
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '85%' }}>
              <Image src="/images/panel-3.jpg" alt="Timeline 3" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(19, 27, 38, 1) 0%, rgba(19, 27, 38, 0.7) 30%, transparent 100%)' }}></div>
            </div>
            <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', width: '100%', alignItems: 'center' }}>
              <div style={{ fontSize: '10rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)', lineHeight: 0.8, marginRight: '4rem', textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>03</div>
              <div style={{ maxWidth: '500px' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>International Expansion</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Today, Wiesner operates globally, with offices and manufacturing partners across multiple continents, delivering high-quality products to top retailers worldwide.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Foundation Section */}
      <section style={{ padding: '8rem 0', backgroundColor: 'var(--bg-dark-navy)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '3rem', marginBottom: '4rem', alignItems: 'start' }}>
            <div style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent-blue)' }}>WHO WE ARE</div>
            <h2 style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>Our Foundation: Quality, Integrity, & Innovation</h2>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>For over five decades, we have remained dedicated to producing exceptional products that resonate with consumers and drive retail success.</p>
              <Link href="/contact" className="btn-primary">Learn More</Link>
            </div>
          </div>

          {/* Nav pills placeholder to match image */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
            <div style={{ padding: '0.5rem 2rem', backgroundColor: '#fff', color: '#000', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 600 }}>Quality</div>
            <div style={{ padding: '0.5rem 2rem', backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px', fontSize: '0.9rem' }}>Integrity</div>
            <div style={{ padding: '0.5rem 2rem', backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px', fontSize: '0.9rem' }}>Innovation</div>
          </div>

          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/images/tabs-bg-2.jpg" alt="Foundation" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '3rem', left: '3rem', maxWidth: '400px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Uncompromising Quality</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.9)' }}>Every product we design and manufacture undergoes rigorous testing to ensure it meets our strict quality standards and exceeds consumer expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Placeholder matches image layout */}
      <section className="footer-transition">
        <h2>From Idea to Retail Shelves: We&apos;re With You at Every Step</h2>
      </section>
    </main>
  );
}