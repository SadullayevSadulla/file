import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <div className="about-badge">
              Biz haqimizda
            </div>
            <h2 className="about-title">
              Bolalarga ingliz tilini o'yin orqali o'rgatamiz.
              <span className="highlighted-word">o'yin</span>
            </h2>
            <p className="about-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 
              Lorem Ipsum is simply dummy.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                </div>
                <span className="stat-text">500+ eng yaxshi darslar</span>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                    <polygon points="5,3 19,12 5,21 5,3"/>
                  </svg>
                </div>
                <span className="stat-text">700+ Professional videolar</span>
              </div>
            </div>
          </div>
          
          <div className="about-images">
            <div className="image-stack">
              <div className="main-image">
                <div className="teacher-avatar">
                  <div className="teacher-face">
                    <div className="teacher-eyes">
                      <div className="teacher-eye left"></div>
                      <div className="teacher-eye right"></div>
                    </div>
                    <div className="teacher-smile"></div>
                  </div>
                </div>
                <div className="book-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                    <path d="M8 7h8"/>
                    <path d="M8 11h8"/>
                    <path d="M8 15h6"/>
                  </svg>
                </div>
              </div>
              
              <div className="overlay-image">
                <div className="children-avatar">
                  <div className="child-1">
                    <div className="child-face">
                      <div className="child-eyes">
                        <div className="child-eye left"></div>
                        <div className="child-eye right"></div>
                      </div>
                      <div className="child-smile"></div>
                    </div>
                  </div>
                  <div className="child-2">
                    <div className="child-face">
                      <div className="child-eyes">
                        <div className="child-eye left"></div>
                        <div className="child-eye right"></div>
                      </div>
                      <div className="child-smile"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="experience-banner">
                5 yillik tajriba
              </div>
              
              <div className="decorative-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
