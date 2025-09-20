import React from 'react';
import './Website.css';

const Website = () => {
  return (
    <div className="website">
      {/* Contact Banner */}
      <div className="contact-banner">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <span className="contact-label">Manager:</span>
            <span className="contact-value">+998 55 601 0201</span>
          </div>
          <div className="contact-divider"></div>
          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <span className="contact-label">Email:</span>
            <span className="contact-value">Bilton_@mail.ru</span>
          </div>
        </div>
        <div className="social-media">
          <div className="social-icon">✈️</div>
          <div className="social-icon">📷</div>
          <div className="social-icon">▶️</div>
        </div>
      </div>

      {/* Navigation Header */}
      <div className="navigation-header">
        <div className="nav-container">
          <div className="logo-section">
            <div className="logo-icon">📚</div>
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
            <div className="action-icon">🌐</div>
            <div className="action-icon">👤</div>
            <button className="login-btn">Tizimga kirish</button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              O'quv markazimizda
              <br />
              bolalar ingliz tilini o'yin
              <br />
              va amaliy
              <br />
              mashg'ulotlar orqali
              <br />
              o'rganadilar
              <span className="highlighted-text">ingliz tilini</span>
            </h1>
            <div className="play-icon">▶️</div>
            <button className="cta-button">
              Biz bilan bog'lanish ▶️
            </button>
          </div>
          <div className="hero-images">
            <div className="child-image boy-image">👦</div>
            <div className="child-image girl-image">👧</div>
          </div>
        </div>
      </div>

      {/* Features Cards */}
      <div className="features-cards">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-top-line blue"></div>
            <div className="feature-icon blue">🧠</div>
            <h3 className="feature-title">Sifatli ta'lim</h3>
            <p className="feature-description">
              Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim berishadi.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-top-line pink"></div>
            <div className="feature-icon pink">📍</div>
            <h3 className="feature-title">Qulay manzil</h3>
            <p className="feature-description">
              Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim berishadi.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-top-line orange"></div>
            <div className="feature-icon orange">👨‍🏫</div>
            <h3 className="feature-title">Tajibali ustozlar</h3>
            <p className="feature-description">
              Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim berishadi.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-top-line green"></div>
            <div className="feature-icon green">⚛️</div>
            <h3 className="feature-title">Zamonaviylik</h3>
            <p className="feature-description">
              Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim berishadi.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <div className="about-badge">Biz haqimizda</div>
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
                  <div className="stat-icon">📄</div>
                  <span className="stat-text">500+ eng yaxshi darslar</span>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">📺</div>
                  <span className="stat-text">700+ Professional videolar</span>
                </div>
              </div>
            </div>
            <div className="about-images">
              <div className="main-image">👩‍🏫</div>
              <div className="overlay-image">👧👦</div>
              <div className="experience-banner">5 yillik tajriba</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">420+</div>
            <div className="stat-icon-wrapper">
              <div className="stat-icon">👥</div>
              <div className="stat-line"></div>
            </div>
            <div className="stat-label">Mamnun o'quvchilar</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">12+</div>
            <div className="stat-icon-wrapper">
              <div className="stat-icon">👨‍🏫</div>
              <div className="stat-line"></div>
            </div>
            <div className="stat-label">Tajribali ustozlar</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5+</div>
            <div className="stat-icon-wrapper">
              <div className="stat-icon">👨‍💼</div>
              <div className="stat-line"></div>
            </div>
            <div className="stat-label">Yordamchi ustozlar</div>
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="advantages-section">
        <div className="advantages-container">
          <div className="advantages-header">
            <div className="advantages-badge">Nega bizni tanladingiz</div>
            <h2 className="advantages-title">
              Bizning markazimiz innovatsion va interaktiv ta'lim metodikalariga ega
              <span className="highlighted-text">ta'lim metodikalariga ega</span>
            </h2>
          </div>
          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-triangle"></div>
              <div className="advantage-icon">🔄</div>
              <h3 className="advantage-title">Innovatsion va sifatli o'qitish uslublari</h3>
              <p className="advantage-description">
                Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim berishadi.
              </p>
            </div>
            <div className="advantage-card">
              <div className="advantage-triangle"></div>
              <div className="advantage-icon">⚙️</div>
              <h3 className="advantage-title">Innovatsion ta'lim texnologiyalari</h3>
              <p className="advantage-description">
                Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim berishadi.
              </p>
            </div>
            <div className="advantage-card">
              <div className="advantage-triangle"></div>
              <div className="advantage-icon">📊</div>
              <h3 className="advantage-title">Bilim sifati monitoringi</h3>
              <p className="advantage-description">
                Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim berishadi.
              </p>
            </div>
            <div className="advantage-card">
              <div className="advantage-triangle"></div>
              <div className="advantage-icon">📈</div>
              <h3 className="advantage-title">Muntazam nazorat</h3>
              <p className="advantage-description">
                Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim berishadi.
              </p>
            </div>
            <div className="advantage-card">
              <div className="advantage-triangle"></div>
              <div className="advantage-icon">👨‍🏫</div>
              <h3 className="advantage-title">Tajribali va talabchan uztozlar</h3>
              <p className="advantage-description">
                Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim berishadi.
              </p>
            </div>
            <div className="advantage-card">
              <div className="advantage-triangle"></div>
              <div className="advantage-icon">📚</div>
              <h3 className="advantage-title">Zamonaviy darslik va kitoblar</h3>
              <p className="advantage-description">
                Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim berishadi.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <div className="team-container">
          <div className="team-content">
            <div className="team-text">
              <div className="team-badge">Bizning jamoa</div>
              <h2 className="team-title">
                Tajribali va mehribon o'qituvchilardan iborat jamoamiz bor
                <span className="highlighted-word">Tajribali</span>
              </h2>
              <p className="team-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 
                Lorem Ipsum is simply dummy.
              </p>
              <button className="team-button">Batafsil</button>
            </div>
            <div className="team-images">
              <div className="team-member yellow">
                <div className="member-avatar">👩‍🏫</div>
                <div className="member-info">
                  <h4 className="member-name">Azimova Loylo</h4>
                  <p className="member-position">O'qituvchi</p>
                </div>
              </div>
              <div className="team-member blue">
                <div className="member-avatar">👨‍🏫</div>
                <div className="member-info">
                  <h4 className="member-name">Rahimov Bobur</h4>
                  <p className="member-position">O'qituvchi</p>
                </div>
              </div>
              <div className="team-member yellow">
                <div className="member-avatar">👨‍🏫</div>
                <div className="member-info">
                  <h4 className="member-name">Karimov Alisher</h4>
                  <p className="member-position">O'qituvchi</p>
                </div>
              </div>
              <div className="team-member blue">
                <div className="member-avatar">👩‍🏫</div>
                <div className="member-info">
                  <h4 className="member-name">Toshmatova Malika</h4>
                  <p className="member-position">O'qituvchi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="news-section">
        <div className="news-container">
          <div className="news-header">
            <div className="news-badge">Yangiliklarimiz</div>
            <h2 className="news-title">
              Yangiliklar bo'limida markazimizdagi so'nggi
              <span className="highlighted-text">markazimizdagi</span>
              <br />
              voqealar va e'lonlar bilan tanishing
            </h2>
          </div>
          <div className="news-grid">
            <div className="news-card">
              <div className="news-image">
                <div className="family-avatar">👨‍👩‍👧</div>
                <div className="news-date">25 lyul</div>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <div className="news-author">👤 Admin</div>
                  <div className="news-comments">💬 2ta izoh</div>
                </div>
                <h3 className="news-item-title">
                  Bilton o'quv markazining ochilish marosimi
                </h3>
                <button className="news-button">Batafsil →</button>
              </div>
            </div>
            <div className="news-card">
              <div className="news-image">
                <div className="family-avatar">👨‍👩‍👧</div>
                <div className="news-date">25 lyul</div>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <div className="news-author">👤 Admin</div>
                  <div className="news-comments">💬 2ta izoh</div>
                </div>
                <h3 className="news-item-title">
                  Bilton o'quv markazining ochilish marosimi
                </h3>
                <button className="news-button">Batafsil →</button>
              </div>
            </div>
            <div className="news-card">
              <div className="news-image">
                <div className="family-avatar">👨‍👩‍👧</div>
                <div className="news-date">25 lyul</div>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <div className="news-author">👤 Admin</div>
                  <div className="news-comments">💬 2ta izoh</div>
                </div>
                <h3 className="news-item-title">
                  Bilton o'quv markazining ochilish marosimi
                </h3>
                <button className="news-button">Batafsil →</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
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
                  <div className="contact-icon">📞</div>
                  <span className="contact-text">+998-99-123-4567</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <span className="contact-text">Bilton@gmail.com</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <span className="contact-text">Urganch shahar IT park</span>
                </div>
              </div>
            </div>
            <div className="cta-woman">👩‍💼</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section brand-section">
              <div className="footer-logo">
                <div className="logo-icon">📚</div>
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
                <div className="social-icon">✈️</div>
                <div className="social-icon">📷</div>
                <div className="social-icon">▶️</div>
                <div className="social-icon">🐦</div>
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
                  <div className="contact-icon">📞</div>
                  <span className="contact-text">+998-99-123-4567</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <span className="contact-text">Bilton@gmail.com</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <span className="contact-text">Urganch shahar IT park</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;
