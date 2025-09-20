import React from 'react';
import './FeaturesCards.css';

const FeaturesCards = () => {
  const features = [
    {
      id: 1,
      color: '#3b82f6',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9.5 2A2.5 2.5 0 0 0 7 4.5v15A2.5 2.5 0 0 0 9.5 22h5a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 14.5 2h-5z"/>
          <path d="M9 6h6"/>
          <path d="M9 10h6"/>
          <path d="M9 14h4"/>
        </svg>
      ),
      title: "Sifatli ta'lim",
      description: "Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim berishadi."
    },
    {
      id: 2,
      color: '#ec4899',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: "Qulay manzil",
      description: "Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim berishadi."
    },
    {
      id: 3,
      color: '#f59e0b',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
          <path d="M16 11l2 2 4-4"/>
        </svg>
      ),
      title: "Tajibali ustozlar",
      description: "Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim berishadi."
    },
    {
      id: 4,
      color: '#10b981',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
          <path d="M16 4l4 4-4 4"/>
        </svg>
      ),
      title: "Zamonaviylik",
      description: "Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim berishadi."
    }
  ];

  return (
    <div className="features-cards">
      <div className="features-container">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-top-line" style={{ backgroundColor: feature.color }}></div>
            <div className="feature-icon" style={{ backgroundColor: feature.color }}>
              {feature.icon}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesCards;
