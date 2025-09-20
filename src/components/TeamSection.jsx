import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Azimova Loylo",
      position: "O'qituvchi",
      color: "yellow"
    },
    {
      id: 2,
      name: "Rahimov Bobur",
      position: "O'qituvchi",
      color: "blue"
    },
    {
      id: 3,
      name: "Karimov Alisher",
      position: "O'qituvchi",
      color: "yellow"
    },
    {
      id: 4,
      name: "Toshmatova Malika",
      position: "O'qituvchi",
      color: "blue"
    }
  ];

  return (
    <div className="team-section">
      <div className="team-container">
        <div className="team-content">
          <div className="team-text">
            <div className="team-badge">
              Bizning jamoa
            </div>
            <h2 className="team-title">
              Tajribali va mehribon o'qituvchilardan iborat jamoamiz bor
              <span className="highlighted-word">Tajribali</span>
            </h2>
            <p className="team-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 
              Lorem Ipsum is simply dummy.
            </p>
            <button className="team-button">
              Batafsil
            </button>
          </div>
          
          <div className="team-images">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className={`team-member ${member.color} ${index === 0 ? 'first' : index === 1 ? 'second' : index === 2 ? 'third' : 'fourth'}`}
              >
                <div className="member-avatar">
                  <div className="member-face">
                    <div className="member-eyes">
                      <div className="member-eye left"></div>
                      <div className="member-eye right"></div>
                    </div>
                    <div className="member-smile"></div>
                  </div>
                </div>
                <div className="member-info">
                  <h4 className="member-name">{member.name}</h4>
                  <p className="member-position">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
