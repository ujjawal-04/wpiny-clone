"use client";

import { useState } from 'react';

export default function DivisionsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first one by default

  const faqs = [
    {
      question: "What products can you help develop?",
      answer: "We have 15+ divisions that work with a wide variety of products to meet apparel, footwear, pet, home, and health & beauty needs. Tell us about your idea, and we can help you build it."
    },
    {
      question: "Can you handle both small production runs?",
      answer: "Yes, we have the flexibility and global network to accommodate various production scales, ensuring quality whether it's a specialized batch or a large-scale rollout."
    },
    {
      question: "How involved can I be in the design process?",
      answer: "As involved as you want to be! Our design teams collaborate closely with our partners, keeping you in the loop from initial sketches to final prototypes."
    },
    {
      question: "How do you ensure product quality?",
      answer: "We maintain strict quality control standards throughout the entire manufacturing process, with dedicated teams inspecting materials, production lines, and final goods before shipping."
    },
    {
      question: "What markets do you serve?",
      answer: "Our products reach retail stores, eCommerce platforms, and more to support your brand's recognition and growth."
    }
  ];

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close it if it's already open
    } else {
      setOpenIndex(index); // Open the clicked one
    }
  };

  return (
    <section style={{ position: 'relative', zIndex: 10, padding: '8rem 0', backgroundColor: '#e7e8eb', color: '#18273A' }}>
      <div className="container" style={{ maxWidth: '1600px', padding: '0 4rem', margin: '0 auto' }}>
        
        {/* Header Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '15% 85%', gap: '2rem', marginBottom: '4rem' }}>
          <div style={{ fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, color: '#666', marginTop: '0.2rem' }}>
            FAQ
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#18273A', margin: 0 }}>
            Have Questions? We Have Answers
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
                    fontSize: '1.2rem',
                    color: '#18273A'
                  }}
                >
                  <span>{faq.question}</span>
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
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
                  <div style={{ paddingBottom: '2rem', color: '#555', fontSize: '1rem', lineHeight: '1.6', maxWidth: '800px' }}>
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
