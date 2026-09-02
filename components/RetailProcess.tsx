import Image from 'next/image';
import Link from 'next/link';

export default function RetailProcess() {
  const steps = [
    { 
      title: '1 – Apply', 
      desc: 'Submit your partnership request, listing your business, market reach, and retail objectives.', 
      img: '/images/retailer/apply-img.jpg' 
    },
    { 
      title: '2 – Get Approved', 
      desc: "We'll review your application and schedule a meeting to discuss opportunities, requirements, and mutual benefits.", 
      img: '/images/retailer/get-approved-img.jpg' 
    },
    { 
      title: '3 – Start Selling', 
      desc: 'Once approved, receive comprehensive onboarding, access to our retail support system, and ongoing partnership assistance.', 
      img: '/images/retailer/start-selling-img.jpg' 
    }
  ];

  return (
    <section style={{ backgroundColor: 'var(--bg-dark-navy)', color: '#fff', padding: '6rem 0' }}>
      <div className="container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 4rem' }}>
        
        {/* Top Header Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 2fr 1fr', gap: '2rem', alignItems: 'flex-start', marginBottom: '4rem' }}>
          <div style={{ fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#fff', fontWeight: 600 }}>
            OUR PROCESS
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 600, lineHeight: '1.3', color: '#fff' }}>
            Simple Steps to Retail Success
          </h2>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0, maxWidth: '400px' }}>
              We'll help you stock the right products for your shoppers and grow your margins.
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <Link href="/contact">
              <button className="btn-primary" style={{ padding: '10px 2em', fontSize: '0.95rem', fontWeight: 400, border: 'none', cursor: 'pointer', backgroundColor: '#3d6898', color: '#fff' }}>
                Apply
              </button>
            </Link>
          </div>
        </div>

        {/* Steps List */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {steps.map((step, i) => (
            <div key={i} style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 2fr 1fr', 
              gap: '2rem', 
              alignItems: 'center', 
              padding: '3.5rem 0', 
              borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.15)' 
            }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff' }}>
                {step.title}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: '1.5', paddingRight: '4rem' }}>
                {step.desc}
              </div>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/7', overflow: 'hidden' }}>
                <Image 
                  src={step.img} 
                  alt={step.title} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
