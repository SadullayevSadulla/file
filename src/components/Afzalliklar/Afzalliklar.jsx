import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Afzalliklar = () => {
  return (
    <>
      <div className="container">
        <div className="section_card" id="afzalliklar">
          <div className="card_h1">
            <div className="main_main_btn1">
              <button>Nega bizni tanladingiz</button>
            </div>
            <h1 className="h11">
              Bizning markazimiz innovatsion va interaktiv ta'lim metodikalariga ega
            </h1>
            <img className="img7" src="/Vector 25 (1).svg" alt="img" />
          </div>
          <Swiper className="mySwiper mainSwiper">
            <SwiperSlide>
              <div className="card">
                <div className="icon">
                  <img src="/technology_svgrepo.com.svg" alt="img" />
                </div>
                <h2 className="title">Innovatsion va sifatli o'qitish uslublari</h2>
                <p className="text">
                  Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim beriladi.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="icon">
                  <img src="/Vector (8).svg" alt="img" />
                </div>
                <h2 className="title">Innovatsion va sifatli o'qitish uslublari</h2>
                <p className="text">
                  Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim beriladi.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="icon">
                  <img src="/control-multimedia-player_svgrepo.com.svg" alt="img" />
                </div>
                <h2 className="title">Innovatsion va sifatli o'qitish uslublari</h2>
                <p className="text">
                  Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim beriladi.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="icon">
                  <img src="/control-discipline-moderation_svgrepo.com.svg" alt="img" />
                </div>
                <h2 className="title">Innovatsion va sifatli o'qitish uslublari</h2>
                <p className="text">
                  Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim beriladi.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="icon">
                  <img src="/XMLID_129_.svg" alt="img" />
                </div>
                <h2 className="title">Innovatsion va sifatli o'qitish uslublari</h2>
                <p className="text">
                  Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim beriladi.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="icon">
                  <img src="/library-book_svgrepo.com.svg" alt="img" />
                </div>
                <h2 className="title">Innovatsion va sifatli o'qitish uslublari</h2>
                <p className="text">
                  Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim beriladi.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Afzalliklar