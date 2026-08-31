import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ backgroundColor: 'var(--bg-dark-navy)' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src="/media/4937251-uhd_4096_2160_25fps-min.mp4" type="video/mp4" />
          </video>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(25, 36, 52, 0.95) 0%, rgba(25, 36, 52, 0.4) 100%)' }}></div>
        </div>
        
        {/* Vertical WIESNER text */}
        <div style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'left center', zIndex: 2, display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <span style={{ fontSize: '0.8rem', letterSpacing: '0.5em', opacity: 0.5 }}>WIESNER</span>
          <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(255,255,255,0.3)' }}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2, paddingLeft: '8rem' }}>
          <h1 style={{ fontSize: '4.5rem', lineHeight: '1.1', fontWeight: 600, marginBottom: '1.5rem', maxWidth: '800px' }}>
            From Factory Floor to Store Door — A Manufacturer You Can Trust
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '2.5rem' }}>
            One partner for design, sourcing, and delivery—We believe in a Vision of Unity.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <button className="btn-primary" style={{ border: 'none', cursor: 'pointer', padding: '0.8rem 2rem' }}>Start Your Journey</button>
            <button className="btn-primary" style={{ backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.5)', cursor: 'pointer', padding: '0.8rem 2rem' }}>Explore Our Categories</button>
          </div>
        </div>
      </section>

      {/* Company Stats Section */}
      <section style={{ padding: '8rem 0 4rem', backgroundColor: 'var(--bg-dark-navy)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 1fr', gap: '2rem', alignItems: 'flex-start', marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>COMPANY</div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 600, lineHeight: '1.2' }}>An Integrated Leader in Private<br/>Label Manufacturing</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>We design, source and distribute<br/>high-quality products for our retail partners.</p>
            <div style={{ textAlign: 'right' }}>
              <button className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem', border: 'none', cursor: 'pointer' }}>Explore more about us</button>
            </div>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '5rem', fontWeight: 700, color: '#000', lineHeight: 1 }}>15</div>
            <div style={{ fontSize: '5rem', fontWeight: 700, color: '#000', lineHeight: 1 }}>20</div>
            <div style={{ fontSize: '5rem', fontWeight: 700, color: '#000', lineHeight: 1 }}>100+</div>
          </div>
        </div>
      </section>

      {/* Licenses Section */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--bg-dark-navy)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 1fr', gap: '2rem', alignItems: 'center' }}>
          <div style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>LICENSES</div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: '1.2' }}>Exclusive Licensed Brands,<br/>Trusted by Major Retailers</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>We partner with top ready-to-wear net worths to bring licensed apparel, accessories and home goods to the masses.</p>
          <div style={{ textAlign: 'right' }}>
            <button className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem', border: 'none', cursor: 'pointer' }}>View Licensed Brands</button>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section style={{ padding: '4rem 0 8rem', backgroundColor: 'var(--bg-dark-navy)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 1fr', gap: '2rem', alignItems: 'center' }}>
          <div style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>BRANDS</div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: '1.2' }}>Our Portfolio of Brands Delivering<br/>Tailored Products & Solutions</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Dedicated covering multiple industries —<br/>unprecedented efficiency, speed, and scalability.</p>
          <div style={{ textAlign: 'right' }}>
            <button className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem', border: 'none', cursor: 'pointer' }}>Explore Our Divisions</button>
          </div>
        </div>
      </section>

      {/* Video Banner */}
      <section style={{ position: 'relative', height: '600px', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src="/media/4937472-uhd_4096_2160_25fps.mp4" type="video/mp4" />
          </video>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(25, 36, 52, 0.9) 0%, rgba(25, 36, 52, 0.4) 100%)' }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontSize: '3.5rem', lineHeight: '1.1', fontWeight: 600, marginBottom: '1.5rem', maxWidth: '600px' }}>
            From Idea to Retail Shelves<br/>– We&apos;re With You at Every Step
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '400px', marginBottom: '2rem' }}>
            Dedicated expertise bringing your vision<br/>to market faster and more efficiently.
          </p>
          <button className="btn-primary" style={{ border: 'none', cursor: 'pointer', padding: '0.8rem 2rem' }}>Let&apos;s Talk</button>
        </div>
      </section>

      {/* Wholesale Section */}
      <section style={{ padding: '8rem 0', backgroundColor: '#e7e8eb', color: 'var(--bg-dark-navy)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 1fr', gap: '2rem', alignItems: 'flex-start', marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#666' }}>WHOLESALE</div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: '1.2' }}>How Our Private Label Wholesale<br/>Brings Brands to Life</h2>
            <p style={{ color: '#666', fontSize: '0.85rem' }}>We turn concepts into full-scale production. Example: <br/>From conceptualization to mass distribution.</p>
            <div style={{ textAlign: 'right' }}>
              <button className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem', border: 'none', cursor: 'pointer' }}>Find Out How</button>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
            <div style={{ padding: '0.6rem 2rem', backgroundColor: '#fff', color: '#000', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>Design to match</div>
            <div style={{ padding: '0.6rem 2rem', backgroundColor: 'rgba(0,0,0,0.1)', color: '#000', fontSize: '0.85rem', cursor: 'pointer' }}>Manufacturing</div>
            <div style={{ padding: '0.6rem 2rem', backgroundColor: 'rgba(0,0,0,0.1)', color: '#000', fontSize: '0.85rem', cursor: 'pointer' }}>Distribution</div>
          </div>

          <div style={{ position: 'relative', height: '500px', width: '100%', overflow: 'hidden' }}>
            <Image src="/images/tabs-bg.jpg" alt="Wholesale" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '3rem', left: '3rem', right: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', color: '#fff' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, maxWidth: '300px' }}>How Our Private Label Wholesale Brings Brands to Life</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', maxWidth: '400px' }}>We have concepts and full branding support through styling, sourcing and innovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Placeholder */}
      <section className="footer-transition">
        <h2>From Idea to Retail Shelves: We&apos;re With You at Every Step</h2>
      </section>
    </main>
  );
}