import React from 'react';
import './AdvantagesSection.css';

const AdvantagesSection = () => {
  const advantages = [
    {
      id: 1,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          <path d="M8 12l2 2 4-4"/>
        </svg>
      ),
      title: "Innovatsion va sifatli o'qitish uslublari"
    },
    {
      id: 2,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
          <path d="M16 4l4 4-4 4"/>
        </svg>
      ),
      title: "Innovatsion ta'lim texnologiyalari"
    },
    {
      id: 3,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <path d="M9 9h6v6H9z"/>
          <path d="M9 1v6"/>
          <path d="M15 1v6"/>
          <path d="M9 17v6"/>
          <path d="M15 17v6"/>
          <path d="M1 9h6"/>
          <path d="M17 9h6"/>
          <path d="M1 15h6"/>
          <path d="M17 15h6"/>
        </svg>
      ),
      title: "Bilim sifati monitoringi"
    },
    {
      id: 4,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18"/>
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
          <path d="M16 4l4 4-4 4"/>
        </svg>
      ),
      title: "Muntazam nazorat"
    },
    {
      id: 5,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
          <path d="M16 11l2 2 4-4"/>
          <path d="M12 2v4"/>
          <path d="M12 18v4"/>
        </svg>
      ),
      title: "Tajribali va talabchan uztozlar"
    },
    {
      id: 6,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          <path d="M8 7h8"/>
          <path d="M8 11h8"/>
          <path d="M8 15h6"/>
        </svg>
      ),
      title: "Zamonaviy darslik va kitoblar"
    }
  ];

  return (
    <div className="advantages-section">
      <div className="advantages-container">
        <div className="advantages-header">
          <div className="advantages-badge">
            Nega bizni tanladingiz
          </div>
          <h2 className="advantages-title">
            Bizning markazimiz innovatsion va interaktiv ta'lim metodikalariga ega
            <span className="highlighted-text">ta'lim metodikalariga ega</span>
          </h2>
        </div>
        
        <div className="advantages-grid">
          {advantages.map((advantage) => (
            <div key={advantage.id} className="advantage-card">
              <div className="advantage-triangle"></div>
              <div className="advantage-icon">
                {advantage.icon}
              </div>
              <h3 className="advantage-title">{advantage.title}</h3>
              <p className="advantage-description">
                Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim berishadi.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;
