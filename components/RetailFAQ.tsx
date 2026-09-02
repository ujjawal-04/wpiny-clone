"use client";

import { useState } from 'react';

export default function RetailFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first one by default

  const faqs = [
    {
      question: "Are there minimum order requirements?",
      answer: "Minimum order quantities vary by product category, but we offer flexible options to accommodate both emerging retailers and established brands."
    },
    {
      question: "Can you assist with regulatory certifications and testing?",
      answer: "Yes, all our products meet safety and compliance standards, including certifications required for your market."
    },
    {
      question: "Can you handle both small production runs?",
      answer: "Yes, we handle both mass and limited batch production, ensuring our manufacturing process fits your needs and delivers top quality."
    },
    {
      question: "How do you ensure product quality?",
      answer: "Our skilled teams supervise every step, from material sourcing to final inspection, to maintain high standards and consistent results."
    },
    {
      question: "How involved can I be in the design process?",
      answer: "We collaborate during each step of the process to ensure the products align with your brand and market goals, so you stay in control every step of the way."
    },
    {
      question: "What is the typical lead time for private label orders?",
      answer: "Lead times vary depending on product complexity and order size. However, our teams prioritize efficient production and communication to meet your schedule."
    }
  ];

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section style={{ position: 'relative', zIndex: 10, padding: '8rem 0', backgroundColor: '#eef0f2', color: 'var(--bg-dark-navy)' }}>
      <div className="container" style={{ maxWidth: '1600px', padding: '0 4rem', margin: '0 auto' }}>
        
        {/* Header Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '0rem', marginBottom: '6rem' }}>
          <div style={{ fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, color: 'var(--bg-dark-navy)' }}>
            FAQ
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 600, color: 'var(--bg-dark-navy)', margin: 0, lineHeight: '1.4', maxWidth: '500px' }}>
            Curious About How We Work? Check Out What Retailers Typically Ask
          </h2>
        </div>
        
        {/* Full-width FAQ List */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                <div 
                  onClick={() => toggleFAQ(i)}
                  style={{ 
                    padding: '2rem 0', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    cursor: 'pointer', 
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    color: 'var(--bg-dark-navy)'
                  }}
                >
                  <span>{faq.question}</span>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    style={{ 
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                      transition: 'transform 0.3s ease' 
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                {isOpen && (
                  <div style={{ paddingBottom: '2rem', color: '#555', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '800px' }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
