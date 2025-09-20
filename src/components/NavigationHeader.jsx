import React from 'react';
import './NavigationHeader.css';

const NavigationHeader = () => {
  return (
    <div className="navigation-header">
      <div className="nav-container">
        <div className="logo-section">
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
        
        <nav className="nav-menu">
          <a href="#home" className="nav-link">Bosh sahifa</a>
          <a href="#about" className="nav-link">Biz haqimizda</a>
          <a href="#team" className="nav-link">Jamoa</a>
          <a href="#advantages" className="nav-link">Afzalliklar</a>
          <a href="#news" className="nav-link">Yangiliklar</a>
          <a href="#contact" className="nav-link">Aloqa</a>
        </nav>
        
        <div className="nav-actions">
          <div className="action-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
          <div className="action-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <button className="login-btn">
            Tizimga kirish
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationHeader;
