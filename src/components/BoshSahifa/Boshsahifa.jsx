import React from 'react'
import Header from '../../all/header/header.jsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

const Boshsahifa = () => {
  return (
    <>
      {/* <Header /> */}
      <section className='slideSec'>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          freeMode
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 30 }
          }}
          modules={[FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide className="slide1">
            <img src="/Group (4).svg" alt="Sifatli ta'lim" />
            <h1 className="muun">Sifatli ta'lim</h1>
            <p className="muun_p">Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim berishadi.</p>
          </SwiperSlide>
          <SwiperSlide className="slide2">
            <img src="/marker-pin-04.png" alt="Qulay manzil" />
            <h1 className="muun">Qulay manzil</h1>
            <p className="muun_p">Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim berishadi.</p>
          </SwiperSlide>
          <SwiperSlide className="slide3">
            <img src="/training-class_svgrepo.com.png" alt="Tajribali ustozlar" />
            <h1 className="muun">Tajibali ustozlar</h1>
            <p className="muun_p">Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim berishadi.</p>
          </SwiperSlide>
          <SwiperSlide className="slide4">
            <img src="/atom-02.png" alt="Zamonaviylik" />
            <h1 className="muun">Zamonaviylik</h1>
            <p className="muun_p">Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim berishadi.</p>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}

export default Boshsahifa;