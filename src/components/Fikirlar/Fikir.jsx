import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const fikirlar = [
  {
    name: "Sobirov Azamat",
    role: "O'quvchimiz",
    img: "/Ellipse 17.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem text of the printing and typesetting industry. Lorem"
  },
  {
    name: "Sobirov Azamat",
    role: "O'quvchimiz",
    img: "/Ellipse 17.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem text of the printing and typesetting industry. Lorem"
  },
  {
    name: "Sobirov Azamat",
    role: "O'quvchimiz",
    img: "/Ellipse 17.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem text of the printing and typesetting industry. Lorem"
  }
];

const Fikir = () => {
  return (
    <section>
      <div className="silde0 fikir">
        <div className="container">
          <div className="silde_h1">
            <button className="btn8">O'quvchilarimiz fikri</button>
            <h1>O'quvchilarimiz fikri biz uchun juda muhim va ta'lim sifatini yaxshilashda asosiy rol o'ynaydi.</h1>
            <img className="img10" src="/Vector 25 (2).svg" alt="img" />
          </div>
          {/* Katta ekranlar uchun grid */}
          <div className="cardlar fikir-desktop">
            {fikirlar.map((fikir, idx) => (
              <div className="kuu" key={idx}>
                <div className="cardlaa">
                  <p className="miii">"</p>
                  <img src={fikir.img} alt="img" />
                  <p className="mii">"</p>
                </div>
                <div className="cardlaa_h1">
                  <p className="buu">{fikir.name}</p>
                  <p className="buuu">{fikir.role}</p>
                  <p className="yul">⭐⭐⭐⭐⭐</p>
                  <p className="buuuu">{fikir.text}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Kichik ekranlar uchun swiper */}
          <div className="fikir-mobile">
            <Swiper className="mySwiper" spaceBetween={20} slidesPerView={1}>
              {fikirlar.map((fikir, idx) => (
                <SwiperSlide key={idx}>
                  <div className="kuu">
                    <div className="cardlaa">
                      <p className="miii">"</p>
                      <img src={fikir.img} alt="img" />
                      <p className="mii">"</p>
                    </div>
                    <div className="cardlaa_h1">
                      <p className="buu">{fikir.name}</p>
                      <p className="buuu">{fikir.role}</p>
                      <p className="yul">⭐⭐⭐⭐⭐</p>
                      <p className="buuuu">{fikir.text}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      {/* Responsive CSS */}
      <style>{`
        .fikir-mobile { display: none; }
        .fikir-desktop { display: flex; gap: 40px; flex-wrap: wrap; justify-content: center;}
        @media (max-width: 768px) {
          .fikir-desktop { display: none; }
          .fikir-mobile { display: block; }
        }
      `}</style>
    </section>
  )
}

export default Fikir