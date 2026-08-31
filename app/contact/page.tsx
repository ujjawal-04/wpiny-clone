import Link from 'next/link';

export default function Contact() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{ height: '50vh' }}>
        <div className="hero-overlay" style={{ background: 'linear-gradient(rgba(21, 27, 39, 0.6), rgba(21, 27, 39, 0.9)), url("/images/contact-hero-bg.jpg") center/cover' }}></div>
        <div className="hero-content">
          <h1 style={{ fontSize: '4rem', lineHeight: '1.2' }}>Let's Build Something<br/>Great Together</h1>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>Get in touch with our team to discuss your next big idea.</p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section style={{ padding: '6rem 4rem', background: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
          
          {/* Contact Info */}
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Get In Touch</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
              Whether you're looking to launch a new product line, explore manufacturing capabilities, or just have a question, our experts are ready to assist.
            </p>
            
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--text-main)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Global Headquarters</h4>
              <p style={{ color: 'var(--text-muted)' }}>Wiesner Products Inc.<br/>New York, NY<br/>USA</p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--text-main)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Contact</h4>
              <p style={{ color: 'var(--text-muted)' }}>Phone: (555) 123-4567<br/>Email: info@wpiny.com</p>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              {/* Social placeholders */}
              <div style={{ width: '40px', height: '40px', background: 'var(--bg-secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>in</div>
              <div style={{ width: '40px', height: '40px', background: 'var(--bg-secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>ig</div>
              <div style={{ width: '40px', height: '40px', background: 'var(--bg-secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>fb</div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ background: 'var(--bg-secondary)', padding: '3rem', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Send Us a Message</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>First Name</label>
                  <input type="text" style={{ width: '100%', padding: '1rem', background: 'var(--bg-primary)', border: '1px solid #333', borderRadius: '4px', color: '#fff' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Last Name</label>
                  <input type="text" style={{ width: '100%', padding: '1rem', background: 'var(--bg-primary)', border: '1px solid #333', borderRadius: '4px', color: '#fff' }} />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Email</label>
                <input type="email" style={{ width: '100%', padding: '1rem', background: 'var(--bg-primary)', border: '1px solid #333', borderRadius: '4px', color: '#fff' }} />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Company</label>
                <input type="text" style={{ width: '100%', padding: '1rem', background: 'var(--bg-primary)', border: '1px solid #333', borderRadius: '4px', color: '#fff' }} />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Message</label>
                <textarea rows={5} style={{ width: '100%', padding: '1rem', background: 'var(--bg-primary)', border: '1px solid #333', borderRadius: '4px', color: '#fff' }}></textarea>
              </div>
              
              <button type="button" className="btn-primary" style={{ padding: '1rem', border: 'none', cursor: 'pointer', fontSize: '1.1rem', marginTop: '1rem' }}>
                Submit Form
              </button>
            </form>
          </div>
          
        </div>
      </section>
    </main>
  );
}