"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkStyle = (path: string) => {
    const isActive = pathname === path;
    return {
      color: isActive ? '#3b82f6' : '#fff',
      transition: 'color 0.2s',
      fontWeight: isActive ? 600 : 500,
    };
  };

  return (
    <header style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      zIndex: 100, 
      padding: isScrolled ? '0.5rem 2rem' : '2rem 2rem', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      color: '#fff',
      backgroundColor: isScrolled ? 'var(--bg-dark-navy)' : 'transparent',
      transition: 'all 0.3s ease',
      borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
        {/* Logo Placeholder */}
        <Link href="/">
          {/* Using a standard img tag here so you can easily swap the src later. Just drop your logo in public/images/ and change the src below! */}
          <div style={{ position: 'relative', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <img src="/images/about/image-9.png" alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
          </div>
        </Link>
        
        {/* Navigation Links */}
        <nav style={{ display: 'flex', gap: '2rem', fontSize: '1.1rem' }}>
          <Link href="/about" className="nav-link" style={getLinkStyle('/about')}>About</Link>
          <Link href="/divisions" className="nav-link" style={getLinkStyle('/divisions')}>Divisions</Link>
          <Link href="/brands" className="nav-link" style={getLinkStyle('/brands')}>Brands and Licenses</Link>
          <Link href="/retailers" className="nav-link" style={getLinkStyle('/retailers')}>Retailers</Link>
        </nav>
      </div>

      {/* CTA Button */}
      <div>
        <Link href="/contact" className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', backgroundColor: 'var(--accent-blue)', color: '#fff' }}>
          Get in Touch
        </Link>
      </div>
    </header>
  );
}