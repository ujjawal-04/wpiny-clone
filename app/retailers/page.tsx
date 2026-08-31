import Image from 'next/image';

export default function Retailers() {
  const steps = [
    { num: '1.', title: 'Apply', desc: 'Tell us about your retail needs and our business teams will get in touch about you.', img: '/images/apply-img.jpg' },
    { num: '2.', title: 'Get Approved', desc: 'We\'ll onboard you as an authorized partner and get you access to the most dynamic products and brands.', img: '/images/get-approved-img.jpg' },
    { num: '3.', title: 'Start Selling', desc: 'Once approved, we will work with your retail team to get orders placed and fill your shelves.', img: '/images/start-selling-img.jpg' }
  ];

  const benefits = [
    { title: 'Innovation', desc: 'Stay ahead of the competition with products that meet evolving consumer demand.', img: '/images/innovation-img.jpg' },
    { title: 'Efficiency', desc: 'Product partners that prioritize speed-to-market without sacrificing quality.', img: '/images/efficiency-img.jpg' },
    { title: 'Global Reach', desc: 'Our extensive supply chain and operational capabilities ensure reliable delivery.', img: '/images/global-reach-img.jpg' }
  ];

  const types = [
    { title: 'Mass Market', img: '/images/mass-market-img.jpg' },
    { title: 'Luxury', img: '/images/luxury-img.jpg' },
    { title: 'Online', img: '/images/online-img.jpg' },
    { title: 'Boutique', img: '/images/boutique-img.jpg' },
    { title: 'Department Store', img: '/images/department-store-img.jpg' },
    { title: 'Specialty Store', img: '/images/specialty-store-img.jpg' }
  ];

  return (
    <main style={{ backgroundColor: 'var(--bg-dark-navy)' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative', height: '60vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <Image src="/images/retailers-hero-img.jpg" alt="Hero background" fill style={{ objectFit: 'cover' }} priority />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(25, 36, 52, 0.95) 0%, rgba(25, 36, 52, 0.5) 100%)' }}></div>
        </div>
        
        {/* Vertical WIESNER text */}
        <div style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'left center', zIndex: 2, display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <span style={{ fontSize: '0.8rem', letterSpacing: '0.5em', opacity: 0.5 }}>WIESNER</span>
          <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(255,255,255,0.3)' }}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2, paddingLeft: '8rem' }}>
          <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', fontWeight: 600, marginBottom: '1.5rem', maxWidth: '600px' }}>
            Partner with a Trusted Supplier<br/>for Retail Success
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '2rem' }}>
            Whatever the channel, Wiesner provides retail solutions. From department stores to e-commerce, boutique to mass-market—we keep your shelves full with products consumers love.
          </p>
          <button className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>Apply To Be A Partner</button>
        </div>
      </section>

      {/* Grid Section */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark-navy)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '4rem' }}>
          <div style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>PARTNERS</div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 600, maxWidth: '400px' }}>Retail Solutions Designed for Growth</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '400px' }}>We empower retailers by offering tailored programs focused on flexibility and scale across diverse channels.</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
              {types.map((type, i) => (
                <div key={i}>
                  <div style={{ position: 'relative', height: '120px', marginBottom: '0.5rem' }}>
                    <Image src={type.img} alt={type.title} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{type.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Simple Steps */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--bg-dark-navy)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '4rem' }}>
          <div style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>OUR PROCESS</div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 600 }}>Simple Steps to Retail Success</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '300px' }}>Let&apos;s map out a customized plan for your stores and your margins.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {steps.map((step, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '100px 1fr 200px', gap: '2rem', alignItems: 'center', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>{step.num} {step.title}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', paddingRight: '2rem' }}>{step.desc}</div>
                  <div style={{ position: 'relative', height: '100px', width: '100%' }}>
                    <Image src={step.img} alt={step.title} fill style={{ objectFit: 'cover' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark-navy)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '4rem' }}>
          <div style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>CONTACT FORM</div>
          <div>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>First Name *</label>
                  <input type="text" style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: 'none', color: '#fff' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Last Name *</label>
                  <input type="text" style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: 'none', color: '#fff' }} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Email *</label>
                  <input type="email" style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: 'none', color: '#fff' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Phone Number *</label>
                  <input type="tel" style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: 'none', color: '#fff' }} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Company Name *</label>
                  <input type="text" style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: 'none', color: '#fff' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Store URL *</label>
                  <input type="text" style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: 'none', color: '#fff' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>What service are you interested in?</label>
                <select style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: 'none', color: 'var(--text-muted)', WebkitAppearance: 'none' }}>
                  <option>General</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Message *</label>
                <textarea rows={4} style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: 'none', color: '#fff' }}></textarea>
              </div>
              <div>
                <button type="button" className="btn-primary" style={{ padding: '0.8rem 2rem', border: 'none', cursor: 'pointer' }}>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: '4rem 0 6rem', backgroundColor: 'var(--bg-dark-navy)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '4rem' }}>
          <div style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>LEADING EXPERTISE</div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 600 }}>Why Leading Retailers Choose Us</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {benefits.map((b, i) => (
                <div key={i}>
                  <div style={{ position: 'relative', height: '180px', marginBottom: '1rem' }}>
                    <Image src={b.img} alt={b.title} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{b.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA image */}
      <section style={{ position: 'relative', height: '400px', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <Image src="/images/apply-img.jpg" alt="Background" fill style={{ objectFit: 'cover', objectPosition: 'center 30%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(25, 36, 52, 0.9) 0%, rgba(25, 36, 52, 0.6) 100%)' }}></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', maxWidth: '600px', lineHeight: '1.1', fontWeight: 600 }}>Ready To Stock Your Shelves With Winning Products?</h2>
          <button className="btn-primary" style={{ padding: '0.8rem 2rem', border: 'none', cursor: 'pointer' }}>Apply To Be A Partner</button>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section style={{ padding: '6rem 0', backgroundColor: '#e7e8eb', color: 'var(--bg-dark-navy)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '4rem' }}>
          <div style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>FAQ</div>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '3rem', fontWeight: 600, maxWidth: '400px' }}>Curious About How We Work? Check Out What Retailers Typically Ask</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                <div style={{ padding: '1.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: 600 }}>
                  <span>Are there minimum ordering requirements?</span>
                  <span>−</span>
                </div>
                <div style={{ paddingBottom: '1.5rem', color: '#666', fontSize: '0.9rem', lineHeight: '1.8' }}>
                  Wiesner focuses on large scale rollout, but we also offer flexibility. Requirements will vary by brand and item.
                </div>
              </div>
              <div style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '1.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: 600 }}>
                <span>Can you handle both small production runs?</span>
                <span>+</span>
              </div>
              <div style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '1.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: 600 }}>
                <span>How involved can I be in the design process?</span>
                <span>+</span>
              </div>
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