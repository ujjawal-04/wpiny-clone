import Image from 'next/image';

export default function FooterBanner() {
  return (
    <section style={{ position: 'relative', height: '80vh', display: 'flex', alignItems: 'center', zIndex: 10 }}>
      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image 
          src="/images/hero-section/footer-bg.jpg" 
          alt="Footer Background" 
          fill 
          style={{ objectFit: 'cover' }} 
        />
        {/* Dark overlay gradient covering the full photo, darker on the left */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--bg-dark-navy) 0%, var(--bg-dark-navy) 20%, rgba(24, 39, 58, 0.4) 100%)' }}></div>
      </div>
      
      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2,  maxWidth: '1800px', width: '100%' }}>
        {/* Logo directly above the text */}
        <div style={{ marginBottom: '18rem' }}>
          <img 
            src="/images/about/image-9.png" 
            alt="Globe Logo" 
            style={{ width: '70px', height: 'auto', objectFit: 'contain' }} 
          />
        </div>
        
        <h2 style={{ fontSize: '3.7rem', lineHeight: '1.2', fontWeight: 600, maxWidth: '1000px', color: '#fff' }}>
          From Idea to Retail Shelves:<br/>We're With You at Every<br/>Step
        </h2>
      </div>
    </section>
  );
}
