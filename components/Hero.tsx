import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <video 
        className="hero-video"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/media/4937251-uhd_4096_2160_25fps-min.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      
      <div className="hero-content-brand">WIESNER</div>
      
      <div className="hero-content">
        <h1>From Factory Floor to Store Door —<br/>A Manufacturer You Can Trust</h1>
        <p>One partner for design, sourcing, and delivery — we convey on vision entirely</p>
        
        <div className="hero-actions">
          <Link href="/about" className="btn btn-primary">Start Your Journey</Link>
          <Link href="/divisions" className="btn btn-outline">Explore Our Categories</Link>
        </div>
      </div>
    </section>
  );
}
