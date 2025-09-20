import React from 'react';
import './ContactCTA.css';

const ContactCTA = () => {
  return (
    <div className="contact-cta">
      <div className="cta-container">
        <div className="cta-banner">
          <div className="cta-content">
            <h2 className="cta-title">
              Kurslarimizga yozilishni xohlaysizmi? Unda
              <br />
              biz bilan bog'laning!
            </h2>
            
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <span className="contact-text">+998-99-123-4567</span>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <span className="contact-text">Bilton@gmail.com</span>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <span className="contact-text">Urganch shahar IT park</span>
              </div>
            </div>
          </div>
          
          <div className="cta-woman">
            <div className="woman-avatar">
              <div className="woman-face">
                <div className="woman-eyes">
                  <div className="woman-eye left"></div>
                  <div className="woman-eye right"></div>
                </div>
                <div className="woman-smile"></div>
              </div>
            </div>
            <div className="documents">
              <div className="document doc1"></div>
              <div className="document doc2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;
