import React from 'react';
import './NewsSection.css';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      date: "25 lyul",
      title: "Bilton o'quv markazining ochilish marosimi",
      author: "Admin",
      comments: "2ta izoh",
      image: "family-image"
    },
    {
      id: 2,
      date: "25 lyul",
      title: "Bilton o'quv markazining ochilish marosimi",
      author: "Admin",
      comments: "2ta izoh",
      image: "family-image"
    },
    {
      id: 3,
      date: "25 lyul",
      title: "Bilton o'quv markazining ochilish marosimi",
      author: "Admin",
      comments: "2ta izoh",
      image: "family-image"
    }
  ];

  return (
    <div className="news-section">
      <div className="news-container">
        <div className="news-header">
          <div className="news-badge">
            Yangiliklarimiz
          </div>
          <h2 className="news-title">
            Yangiliklar bo'limida markazimizdagi so'nggi
            <span className="highlighted-text">markazimizdagi</span>
            <br />
            voqealar va e'lonlar bilan tanishing
          </h2>
        </div>
        
        <div className="news-grid">
          {newsItems.map((item) => (
            <div key={item.id} className="news-card">
              <div className="news-image">
                <div className="family-avatar">
                  <div className="family-member man">
                    <div className="family-face">
                      <div className="family-eyes">
                        <div className="family-eye left"></div>
                        <div className="family-eye right"></div>
                      </div>
                      <div className="family-smile"></div>
                    </div>
                  </div>
                  <div className="family-member woman">
                    <div className="family-face">
                      <div className="family-eyes">
                        <div className="family-eye left"></div>
                        <div className="family-eye right"></div>
                      </div>
                      <div className="family-smile"></div>
                    </div>
                  </div>
                  <div className="family-member girl">
                    <div className="family-face">
                      <div className="family-eyes">
                        <div className="family-eye left"></div>
                        <div className="family-eye right"></div>
                      </div>
                      <div className="family-smile"></div>
                    </div>
                  </div>
                </div>
                <div className="news-date">
                  {item.date}
                </div>
              </div>
              
              <div className="news-content">
                <div className="news-meta">
                  <div className="news-author">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    {item.author}
                  </div>
                  <div className="news-comments">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    {item.comments}
                  </div>
                </div>
                
                <h3 className="news-item-title">
                  {item.title}
                </h3>
                
                <button className="news-button">
                  Batafsil →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
