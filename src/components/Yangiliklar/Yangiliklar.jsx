import React from 'react'
import Header from '../../all/header/header.jsx'

const Yangiliklar = () => {
  return (
    <>
      {/* <Header /> */}
      <section>
        <div className="bool container" id="yangiliklar">
          <div className="hold">
            <button className="btn8">Yangiliklarimiz</button>
            <p className="luna">Yangiliklar bo'limida markazimizdagi so'nggi voqealar va e'lonlar bilan tanishing</p>
          </div>
          <div className="news-container">
            <div className="news-card">
              <div className="news-img">
                <img src="/Rectangle 4728.png" alt="News" />
                <div className="date-box">25 <br /> Iyul</div>
              </div>
              <div className="news-content">
                <div className="meta">
                  <img src="/Icon (2).svg" alt="Admin" />
                  <p>Admin</p>
                  <img src="/Group (7).svg" alt="Comments" />
                  <p>2ta habar</p>
                </div>
                <h3>Bilton o'quv markazining ochilish marosimi</h3>
                <a href="#" className="read-more">Batafsil →</a>
              </div>
            </div>
            <div className="news-card">
              <div className="news-img">
                <img src="/Rectangle 4728.png" alt="News" />
                <div className="date-box">25 <br /> Iyul</div>
              </div>
              <div className="news-content">
                <div className="meta">
                  <img src="/Icon (2).svg" alt="Admin" />
                  <p>Admin</p>
                  <img src="/Group (7).svg" alt="Comments" />
                  <p>2ta habar</p>
                </div>
                <h3>Bilton o'quv markazining ochilish marosimi</h3>
                <a href="#" className="read-more">Batafsil →</a>
              </div>
            </div>
            <div className="news-card">
              <div className="news-img">
                <img src="/Rectangle 4728.png" alt="News" />
                <div className="date-box">25 <br /> Iyul</div>
              </div>
              <div className="news-content">
                <div className="meta">
                  <img src="/Icon (2).svg" alt="Admin" />
                  <p>Admin</p>
                  <img src="/Group (7).svg" alt="Comments" />
                  <p>2ta habar</p>
                </div>
                <h3>Bilton o'quv markazining ochilish marosimi</h3>
                <a href="#" className="read-more">Batafsil →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Yangiliklar;


