import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import './header.css';

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import CounterDemo from "../../kimbu";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="wrap">
      <div className="w">
        <header className="header">
          <div className="container">
            <div className="header_top">
              <div className="header_col">
                <div className="header_tol">
                  <div className="header_link-box">
                    <a href="tel:+998936630785">
                      <img src="./public/phone_svgrepo.com.svg" alt="phone" className="phone" />
                    </a>
                    <div className="korr">
                      <span className="manager">Manager:</span> <br />
                      <span className="number">+998 93 663 0785</span>
                    </div>
                  </div>
                  <span className="divider"></span>

                  <div className="header_link-box">
                    <a href="mailto:Bilton_@mail.ru">
                      <img src="./public/mail_svgrepo.com.svg" alt="mail" />
                    </a>
                    <div className="kor">
                      <span className="manager">Email:</span> <br />
                      <span className="number">Bilton_@mail.ru</span>
                    </div>
                  </div>
                </div>

                <div className="header_icon3">
                  <a href="https://t.me/sadullayev_06_27">
                    <img src="./public/telegram-alt_svgrepo.com.svg" alt="telegram" />
                  </a>
                  <a href="https://www.instagram.com/sadu.lla13/">
                    <img src="./public/instagram_svgrepo.com.svg" alt="instagram" />
                  </a>
                  <a href="https://www.youtube.com/@SadullaSadullayev-d6h">
                    <img src="./public/youtube_svgrepo.com.svg" alt="youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <section>
            <div className="section_header container" id="boshsahifa">
              <div className='main container'>
                <div className="main_section">
                  <div className="bit">
                    <div className="main_section_logo">
                      <a href="">
                        <img src="./public/image 2.svg" alt="img" />
                      </a>
                      <h1 className='h1'>Bilton</h1>
                    </div>
                  </div>
                  <div className="butoonn">
                    <div className="section_menu">
                      <nav className={open ? "navOpen" : "nav"}>
                        <ul>
                          <li style={{ "--i": "0.05s" }}><a href="#boshsahifa" onClick={() => setOpen(false)}>Bosh sahifa</a></li>
                          <li style={{ "--i": "0.10s" }}><a href="#bizhaqimizda" onClick={() => setOpen(false)}>Biz haqimizda</a></li>
                          <li style={{ "--i": "0.15s" }}><a href="#jamo" onClick={() => setOpen(false)}>Jamoa</a></li>
                          <li style={{ "--i": "0.20s" }}><a href="#afzalliklar" onClick={() => setOpen(false)}>Afzalliklar</a></li>
                          <li style={{ "--i": "0.25s" }}><a href="#yangiliklar" onClick={() => setOpen(false)}>Yangiliklar</a></li>
                          <li style={{ "--i": "0.30s" }}><a href="#aloqa" onClick={() => setOpen(false)}>Aloqa</a></li>
                        </ul>
                      </nav>
                      <button
                        className={`burger ${open ? "open" : ""}`}
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        onClick={toggleMenu}
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>

                    <div className="main_btn1">
                      <a href="#">
                        <img src="./public/icon.svg" alt="icon" />
                        <img src="./public/Icon (1).svg" alt="icon" />
                      </a>
                    </div>
                    <div className="main_button">
                      <button>Tizimga kirish</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>
        <main>
          <section>
            <div className="section_header container">
              <div className="section_header_pol">
                <div className="section_header_h1">
                  <h1>O'quv markazimizda bolalar ingliz tilini o'yin va amaliy mashg'ulotlar orqali o'rganadilar</h1>
                </div>
                <div className="main_btn">
                  <button className="btn3">Biz bilan bog'lanish</button>
                  <button className="btn2">
                    <a href="">
                      <img src="./public/Polygon 1.svg" alt="icon" />
                    </a>
                  </button>
                </div>
              </div>
              <div className="section_header_img">
                <img src="./public/Group 1000015320.png" alt="img" />
                <img src="./public/Group 1000015321.png" alt="img" />
              </div>
              <img className="img1" src="./public/Group (3).svg" alt="icon" />
              <img className="img2" src="./public/Vector (5).svg" alt="img" />
              <img className="img3" src="./public/Arrow 03.svg" alt="img" />
              <img className="img4" src="./public/img4.svg" alt="lengDctinck" />
            </div>
          </section>
        </main>
      </div>

      <section className='slideSec'>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[FreeMode]}
          className="mySwiper">
          <SwiperSlide className="slide1">
            <img src="./public/Group (4).svg" alt="img" />
            <h1 className="muun">Sifatli ta'lim</h1>
            <p className="muun_p">Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim berishadi.</p>
          </SwiperSlide>
          <SwiperSlide className="slide2">
            <img src="./public/marker-pin-04.png" alt="img" />
            <h1 className="muun">Qulay manzil</h1>
            <p className="muun_p">Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim berishadi.</p>
          </SwiperSlide>
          <SwiperSlide className="slide3">
            <img src="./public/training-class_svgrepo.com.png" alt="img" />
            <h1 className="muun">Tajibali ustozlar</h1>
            <p className="muun_p">Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim berishadi.</p>
          </SwiperSlide>
          <SwiperSlide className="slide4">
            <img src="./public/atom-02.png" alt="img" />
            <h1 className="muun">Zamonaviylik</h1>
            <p className="muun_p">Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim berishadi.</p>
          </SwiperSlide>
          <SwiperSlide className="slide5">
            <img src="./public/Group (4).svg" alt="img" />
            <h1 className="muun">Sifatli ta'lim</h1>
            <p className="muun_p">Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim berishadi.</p>
          </SwiperSlide>
        </Swiper>
      </section>

      <section>
        <div className="main_main container" id="bizhaqimizda">
          <div className="main_main_run">
            <div className="main_main_img">
              <img src="./public/Rectangle 5.png" alt="img" />
              <img src="./public/Rectangle 6.png" alt="img" />
            </div>
            <img className="img5" src="./public/Vector 11.svg" alt="img" />
            <div className="main_main_btn">
              <button>5 yillik tajriba</button>
            </div>
          </div>
          <div className="main_main_bun">
            <div className="main_main_btn1">
              <button>Biz haqimizda</button>
            </div>
            <div className="main_main_har">
              <h1>Bolalarga ingliz tilini o'yin orqali o'rgatamiz.</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy </p>
            </div>
            <div className="main_main_son">
              <div className="main_main_son1">
                <div className="main_main_img1">
                  <img src="./public/Vector (6).svg" alt="img" />
                </div>
                <div className="main_main_har1">
                  <p>500+ eng yaxshi darslar</p>
                </div>
              </div>
              <div className="main_main_son1">
                <div className="main_main_img1">
                  <img src="./public/film 1.svg" alt="img" />
                </div>
                <div className="main_main_har1">
                  <p>700+ Professional videolar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <CounterDemo />
        </div>
      </section>

      <section>
        <div className="section_card container" id="afzalliklar">
          <div className="card_h1">
            <div className="main_main_btn1">
              <button>Nega bizni tanladingiz</button>
            </div>
            <h1 className="h11">
              Bizning markazimiz innovatsion va interaktiv ta'lim metodikalariga ega
            </h1>
            <img className="img7" src="/Vector 25 (1).svg" alt="img" />
          </div>

          <div className="cards1">
            <div className="card">
              <div className="icon">
                <img src="/technology_svgrepo.com.svg" alt="img" />
              </div>
              <h2 className="title">Innovatsion va sifatli o'qitish uslublari</h2>
              <p className="text">
                Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim beriladi.
              </p>
            </div>

            <div className="card">
              <div className="icon">
                <img src="/Vector (8).svg" alt="img" />
              </div>
              <h2 className="title">Innovatsion va sifatli o'qitish uslublari</h2>
              <p className="text">
                Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim beriladi.
              </p>
            </div>

            <div className="card">
              <div className="icon">
                <img src="/control-multimedia-player_svgrepo.com.svg" alt="img" />
              </div>
              <h2 className="title">Innovatsion va sifatli o'qitish uslublari</h2>
              <p className="text">
                Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim beriladi.
              </p>
            </div>

            <div className="card">
              <div className="icon">
                <img src="/control-discipline-moderation_svgrepo.com.svg" alt="img" />
              </div>
              <h2 className="title">Innovatsion va sifatli o'qitish uslublari</h2>
              <p className="text">
                Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim beriladi.
              </p>
            </div>

            <div className="card">
              <div className="icon">
                <img src="/XMLID_129_.svg" alt="img" />
              </div>
              <h2 className="title">Innovatsion va sifatli o'qitish uslublari</h2>
              <p className="text">
                Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim beriladi.
              </p>
            </div>

            <div className="card">
              <div className="icon">
                <img src="/library-book_svgrepo.com.svg" alt="img" />
              </div>
              <h2 className="title">Innovatsion va sifatli o'qitish uslublari</h2>
              <p className="text">
                Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim beriladi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section_befor container" id="jamo">
          <div className="section_ong">
            <div className="section_btn4">
              <button>Bizning jamoa</button>
            </div>
            <div className="section_h111">
              <h1>Tajribali va mehribon o'qituvchilardan iborat jamoamiz bor</h1>
              <img className="img8" src="./public/Vector 25 (1).svg" alt="img" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
            </div>
            <div className="section_ong_btn">
              <button>Batafsil</button>
            </div>
          </div>
          <div className="teachers-container">
            <div className="mass">
              <div className="teacher-card yellow">
                <img src="./public/image 13.svg" alt="img" />
                <div className="teacher-info">
                  <p>Azimova Laylo</p>
                  <span>O'qituvchi</span>
                </div>
              </div>

              <div className="teacher-card blue">
                <img src="./public/image 14.svg" alt="img" />
              </div>

              <div className="teacher-card yellow">
                <img src="./public/image 15.svg" alt="img" />
              </div>

              <div className="teacher-card blue">
                <img src="./public/Group 1000015325.svg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="silde0">
          <div className="container">
            <div className="silde_h1">
              <button className="btn8">O'quvchilarimiz fikri</button>
              <h1>O'quvchilarimiz fikri biz uchun juda muhim va ta'lim sifatini yaxshilashda asosiy rol o'ynaydi.</h1>
              <img className="img10" src="./public/Vector 25 (2).svg" alt="img" />
            </div>
            <div className="cardlar">
              <div className="kuu">
                <div className="cardlaa">
                  <p className="miii">"</p>
                  <img src="./public/Ellipse 17.png" alt="img" />
                  <p className="mii">"</p>
                </div>
                <div className="cardlaa_h1">
                  <p className="buu">Sobirov Azamat</p>
                  <p className="buuu">O'quvchimiz</p>
                  <p className="yul">⭐⭐⭐⭐⭐</p>
                  <p className="buuuu">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem text of the printing and typesetting industry. Lorem
                  </p>
                </div>
              </div>
              <div className="kuu">
                <div className="cardlaa">
                  <p className="miii">"</p>
                  <img src="./public/Ellipse 17.png" alt="img" />
                  <p className="mii">"</p>
                </div>
                <div className="cardlaa_h1">
                  <p className="buu">Sobirov Azamat</p>
                  <p className="buuu">O'quvchimiz</p>
                  <p className="yul">⭐⭐⭐⭐⭐</p>
                  <p className="buuuu">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem text of the printing and typesetting industry. Lorem
                  </p>
                </div>
              </div>
              <div className="kuu">
                <div className="cardlaa">
                  <p className="miii">"</p>
                  <img src="./public/Ellipse 17.png" alt="img" />
                  <p className="mii">"</p>
                </div>
                <div className="cardlaa_h1">
                  <p className="buu">Sobirov Azamat</p>
                  <p className="buuu">O'quvchimiz</p>
                  <p className="yul">⭐⭐⭐⭐⭐</p>
                  <p className="buuuu">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem text of the printing and typesetting industry. Lorem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bool container" id="yangiliklar">
          <div className="hold">
            <button className="btn8">Yangiliklarimiz</button>
            <p className="luna">Yangiliklar bo'limida markazimizdagi so'nggi voqealar va e'lonlar bilan tanishing</p>
          </div>
          <div className="news-container">
            <div className="news-card">
              <div className="news-img">
                <img src="./public/Rectangle 4728.png" alt="img" />
                <div className="date-box">25 <br /> Iyul</div>
              </div>
              <div className="news-content">
                <div className="meta">
                  <img src="./public/Icon (2).svg" alt="icon" />
                  <p>Admin</p>
                  <img src="./public/Group (7).svg" alt="img" />
                  <p>2ta habar</p>
                </div>
                <h3>Bilton o'quv markazining ochilish marosimi</h3>
                <a href="#" className="read-more">Batafsil →</a>
              </div>
            </div>

            <div className="news-card">
              <div className="news-img">
                <img src="./public/Rectangle 4728.png" alt="img" />
                <div className="date-box">25 <br /> Iyul</div>
              </div>
              <div className="news-content">
                <div className="meta">
                  <img src="./public/Icon (2).svg" alt="icon" />
                  <p>Admin</p>
                  <img src="./public/Group (7).svg" alt="img" />
                  <p>2ta habar</p>
                </div>
                <h3>Bilton o'quv markazining ochilish marosimi</h3>
                <a href="#" className="read-more">Batafsil →</a>
              </div>
            </div>

            <div className="news-card">
              <div className="news-img">
                <img src="./public/Rectangle 4728.png" alt="img" />
                <div className="date-box">25 <br /> Iyul</div>
              </div>
              <div className="news-content">
                <div className="meta">
                  <img src="./public/Icon (2).svg" alt="icon" />
                  <p>Admin</p>
                  <img src="./public/Group (7).svg" alt="img" />
                  <p>2ta habar</p>
                </div>
                <h3>Bilton o'quv markazining ochilish marosimi</h3>
                <a href="#" className="read-more">Batafsil →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="aloqa container" id="aloqa">
          <div className="aloqa_hat container">
            <h1 className="aloqa_h1">
              Kurslarimizga yozilishni xohlaysizmi? Unda biz bilan bog'laning!
            </h1>
            <div className="aloqa_logo">
              <div className="aloqa_">
                <div className="aloqa_img">
                  <img src="./public/phone-plus.svg" alt="Telefon raqami" />
                </div>
                <p>+998 93 663 0785</p>
              </div>
              <div className="aloqa_">
                <div className="aloqa_img2">
                  <img src="./public/mail-01.svg" alt="Email" />
                </div>
                <p>Bilton@gmail.com</p>
              </div>
              <div className="aloqa_">
                <div className="aloqa_img3">
                  <img src="./public/Icon (3).svg" alt="Manzil" />
                </div>
                <p>Urganch shahar IT park</p>
              </div>
            </div>
            <div className="aloqachi">
              <img src="./public/image 21.png" alt="Aloqa rasmi" />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer container">
          <div className="poi">
            <div className="footer_1">
              <div className="main_section">
                <div className="main_section_logo">
                  <a href="">
                    <img src="./public/image 2.svg" alt="img" />
                  </a>
                </div>
                <h1 className='hh1'>Bilton</h1>
              </div>
              <p className="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
              <div className="footer_logo">
                <h1>Obuna bo'ling</h1>
                <div className="foooter_l">
                  <a href="https://t.me/sadullayev_06_27">
                    <img src="./public/Group 25.svg" alt="icon" />
                  </a>
                  <a href="https://www.instagram.com/sadu.lla13/">
                    <img src="./public/Group 26 (2).svg" alt="icon" />
                  </a>
                  <a href="https://www.youtube.com/@SadullaSadullayev-d6h">
                    <img src="./public/Group 23.svg" alt="icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="foooter_2">
              <img className="img12" src="./public/Rectangle 68 (1).svg" alt="img" />
              <h1>Foydali havolalar</h1>
              <p>Bizning qadriyatlarimiz</p>
              <p>Bizning maslahat kengashimiz</p>
              <p>Bizning hamkorlarimiz</p>
              <p>Hamkor bo'ling</p>
            </div>
            <div className="foooter_2">
              <img className="img13" src="./public/Rectangle 68 (1).svg" alt="img" />
              <h1>Bizning kompaniyamiz</h1>
              <p>Biz bilan bog'lanish</p>
              <p>O'qituvchi bo'l</p>
              <p>Blog</p>
              <p>Instruktor</p>
              <p>Voqealar</p>
            </div>
            <div className="footer_3">
              <img className="img14" src="./public/Rectangle 68 (1).svg" alt="img" />
              <h1>Biz bilan bog'lanish</h1>
              <div className="foooter">
                <div className="contact-info">
                  <div className="contact-item">
                    <img src="./public/phone-plus (1).svg" alt="icon" />
                    <p>+998-93-663-0785</p>
                  </div>
                  <div className="contact-item">
                    <img src="./public/mail-01 (2).svg" alt="icon" />
                    <p>Bilton@gmail.com</p>
                  </div>
                  <div className="contact-item">
                    <img src="./public/marker-pin-01.svg" alt="icon" />
                    <p>Urganch shahar IT park</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Header;  
