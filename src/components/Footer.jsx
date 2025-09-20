import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section brand-section">
            <div className="footer-logo">
              <div className="logo-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  <path d="M8 7h8"/>
                  <path d="M8 11h8"/>
                  <path d="M8 15h6"/>
                </svg>
              </div>
              <span className="logo-text">Bilton</span>
            </div>
            <p className="footer-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 
              Lorem Ipsum is simply dummy.
            </p>
            <div className="subscription">
              <span className="subscription-text">Obuna bo'lish</span>
            </div>
            <div className="social-media">
              <div className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5,3 19,12 5,21 5,3"/>
                </svg>
              </div>
              <div className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">
              Foydali havolalar
              <div className="title-underline"></div>
            </h3>
            <ul className="footer-links">
              <li><a href="#values" className="footer-link">Bizning qadriyatlarimiz</a></li>
              <li><a href="#council" className="footer-link">Bizning maslahat kengashimiz</a></li>
              <li><a href="#partners" className="footer-link">Bizning hamkorlarimiz</a></li>
              <li><a href="#become-partner" className="footer-link">Hamkor bo'ling</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">
              Bizning kompaniyamiz
              <div className="title-underline"></div>
            </h3>
            <ul className="footer-links">
              <li><a href="#contact" className="footer-link">Biz bilan bog'lanish</a></li>
              <li><a href="#teacher" className="footer-link">O'qituvchi bo'l</a></li>
              <li><a href="#blog" className="footer-link">Blog</a></li>
              <li><a href="#instructor" className="footer-link">Instruktor</a></li>
              <li><a href="#events" className="footer-link">Voqealar</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">
              Biz bilan bog'lanish
              <div className="title-underline"></div>
            </h3>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <span className="contact-text">+998-99-123-4567</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <span className="contact-text">Bilton@gmail.com</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <span className="contact-text">Urganch shahar IT park</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
