import React from 'react'
import Header from '../../all/header/header.jsx'

const BizHaqimizda = () => {
  return (
    <>
      {/* <Header /> */}
      <section>
        <div className="main_main container" id="bizhaqimizda">
          <div className="main_main_run">
            <div className="main_main_img container">
              <img src="/Rectangle 5.png" alt="img" />
              <img src="/Rectangle 6.png" alt="img" />
            </div>
            <div className="main_main_btn">
              <button>5 yillik tajriba</button>
            </div>
          </div>
          <div className="main_main_bun container">
            <div className="main_main_btn1">
              <button>Biz haqimizda</button>
            </div>
            <div className="main_main_har">
              <h1>Bolalarga ingliz tilini o'yin orqali o'rgatamiz.</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy.</p>
            </div>
            <div className="main_main_son">
              <div className="main_main_son1">     
                <div className="main_main_img1">
                  <img src="/Vector (6).svg" alt="img" />
                </div>
                <div className="main_main_har1">
                  <p>500+ eng yaxshi darslar</p>
                </div>
              </div>
              <div className="main_main_son1">
                <div className="main_main_img1">
                  <img src="/film 1.svg" alt="img" />
                </div>
                <div className="main_main_har1">
                  <p>700+ Professional videolar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BizHaqimizda


