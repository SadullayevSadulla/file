// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode } from "swiper/modules";

// import './header.css';

// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// import CounterDemo from "../../kimbu/kimbu.jsx";
// import { useState } from "react";
// import BoshSahifa from "../../components/BoshSahifa/Boshsahifa.jsx";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const toggleMenu = () => {
//     setOpen(!open);
//   };

//   return (
//     <div className="wrap">
//       <div className="w">
//         <header className="header">
//           <div className="container">
//             <div className="header_top">
//               <div className="header_col">
//                 <div className="header_tol">
//                   <div className="header_link-box">
//                     <a href="tel:+998936630785">
//                       <img src="./public/phone_svgrepo.com.svg" alt="phone" className="phone" />
//                     </a>
//                     <div className="korr">
//                       <span className="manager">Manager:</span> <br />
//                       <span className="number">+998 93 663 0785</span>
//                     </div>
//                   </div>
//                   <span className="divider"></span>

//                   <div className="header_link-box">
//                     <a href="mailto:Bilton_@mail.ru">
//                       <img src="./public/mail_svgrepo.com.svg" alt="mail" />
//                     </a>
//                     <div className="kor">
//                       <span className="manager">Email:</span> <br />
//                       <span className="number">Bilton_@mail.ru</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="header_icon3">
//                   <a href="https://t.me/sadullayev_06_27">
//                     <img src="./public/telegram-alt_svgrepo.com.svg" alt="telegram" />
//                   </a>
//                   <a href="https://www.instagram.com/sadu.lla13/">
//                     <img src="./public/instagram_svgrepo.com.svg" alt="instagram" />
//                   </a>
//                   <a href="https://www.youtube.com/@SadullaSadullayev-d6h">
//                     <img src="./public/youtube_svgrepo.com.svg" alt="youtube" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <section>
//             <div className="section_header container" id="boshsahifa">
//               <div className='main container'>
//                 <div className="main_section">
//                   <div className="bit">
//                     <div className="main_section_logo">
//                       <a href="">
//                         <img src="./public/image 2.svg" alt="img" />
//                       </a>
//                       <h1 className='h1'>Bilton</h1>
//                     </div>
//                   </div>
//                   <div className="butoonn">
//                     <div className="section_menu">
//                       <nav className={open ? "navOpen" : "nav"}>
//                         <ul>
//                           <li style={{ "--i": "0.05s" }}><a href="#boshsahifa" onClick={() => setOpen(false)}>Bosh sahifa</a></li>
//                           <li style={{ "--i": "0.10s" }}><a href="#bizhaqimizda" onClick={() => setOpen(false)}>Biz haqimizda</a></li>
//                           <li style={{ "--i": "0.15s" }}><a href="#jamo" onClick={() => setOpen(false)}>Jamoa</a></li>
//                           <li style={{ "--i": "0.20s" }}><a href="#afzalliklar" onClick={() => setOpen(false)}>Afzalliklar</a></li>
//                           <li style={{ "--i": "0.25s" }}><a href="#yangiliklar" onClick={() => setOpen(false)}>Yangiliklar</a></li>
//                           <li style={{ "--i": "0.30s" }}><a href="#aloqa" onClick={() => setOpen(false)}>Aloqa</a></li>
//                         </ul>
//                       </nav>
//                       <button
//                         className={`burger ${open ? "open" : ""}`}
//                         aria-label="Toggle menu"
//                         aria-expanded={open}
//                         onClick={toggleMenu}
//                       >
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                       </button>
//                     </div>

//                     <div className="main_btn1">
//                       <a href="#">
//                         <img src="./public/icon.svg" alt="icon" />
//                         <img src="./public/Icon (1).svg" alt="icon" />
//                       </a>
//                     </div>
//                     <div className="main_button">
//                       <button>Tizimga kirish</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </header>
//         <main>
//           <section>
//             <div className="section_header container">
//               <div className="section_header_pol">
//                 <div className="section_header_h1">
//                   <h1>O'quv markazimizda bolalar ingliz tilini o'yin va amaliy mashg'ulotlar orqali o'rganadilar</h1>
//                 </div>
//                 <div className="main_btn">
//                   <button className="btn3">Biz bilan bog'lanish</button>
//                   <button className="btn2">
//                     <a href="">
//                       <img src="./public/Polygon 1.svg" alt="icon" />
//                     </a>
//                   </button>
//                 </div>
//               </div>
//               <div className="section_header_img">
//                 <img src="./public/Group 1000015320.png" alt="img" />
//                 <img src="./public/Group 1000015321.png" alt="img" />
//               </div>
//               <img className="img1" src="./public/Group (3).svg" alt="icon" />
//               <img className="img2" src="./public/Vector (5).svg" alt="img" />
//               <img className="img3" src="./public/Arrow 03.svg" alt="img" />
//               <img className="img4" src="./public/img4.svg" alt="lengDctinck" />
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   )
// }

// export default Header;  

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "./header.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import CounterDemo from "../../kimbu/kimbu.jsx";
import BoshSahifa from "../../components/BoshSahifa/Boshsahifa.jsx";

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
                      <img src="/phone_svgrepo.com.svg" alt="phone" className="phone" />
                    </a>
                    <div className="korr">
                      <span className="manager">Manager:</span> <br />
                      <span className="number">+998 93 663 0785</span>
                    </div>
                  </div>
                  <span className="divider"></span>

                  <div className="header_link-box">
                    <a href="mailto:Bilton_@mail.ru">
                      <img src="/mail_svgrepo.com.svg" alt="mail" />
                    </a>
                    <div className="kor">
                      <span className="manager">Email:</span> <br />
                      <span className="number">Bilton_@mail.ru</span>
                    </div>
                  </div>
                </div>

                <div className="header_icon3">
                  <a href="https://t.me/sadullayev_06_27">
                    <img src="/telegram-alt_svgrepo.com.svg" alt="telegram" />
                  </a>
                  <a href="https://www.instagram.com/sadu.lla13/">
                    <img src="/instagram_svgrepo.com.svg" alt="instagram" />
                  </a>
                  <a href="https://www.youtube.com/@SadullaSadullayev-d6h">
                    <img src="/youtube_svgrepo.com.svg" alt="youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <section>
            <div className="section_header container" id="boshsahifa">
              <div className="main container">
                <div className="main_section">
                  <div className="bit">
                    <div className="main_section_logo">
                      <a href="">
                        <img src="/image 2.svg" alt="logo" />
                      </a>
                      <h1 className="h1">Bilton</h1>
                    </div>
                  </div>
                  <div className="butoonn">
                    <div className="section_menu">
                      <nav className={open ? "navOpen" : "nav"}>
                        <ul>
                          <li style={{ "--i": "0.05s" }}>
                            <a href="#boshsahifa" onClick={() => setOpen(false)}>Bosh sahifa</a>
                          </li>
                          <li style={{ "--i": "0.10s" }}>
                            <a href="#bizhaqimizda" onClick={() => setOpen(false)}>Biz haqimizda</a>
                          </li>
                          <li style={{ "--i": "0.15s" }}>
                            <a href="#jamo" onClick={() => setOpen(false)}>Jamoa</a>
                          </li>
                          <li style={{ "--i": "0.20s" }}>
                            <a href="#afzalliklar" onClick={() => setOpen(false)}>Afzalliklar</a>
                          </li>
                          <li style={{ "--i": "0.25s" }}>
                            <a href="#yangiliklar" onClick={() => setOpen(false)}>Yangiliklar</a>
                          </li>
                          <li style={{ "--i": "0.30s" }}>
                            <a href="#aloqa" onClick={() => setOpen(false)}>Aloqa</a>
                          </li>
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
                        <img src="/icon.svg" alt="icon" />
                        <img src="/icon-1.svg" alt="icon" />
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
                      <img src="/polygon-1.svg" alt="icon" />
                    </a>
                  </button>
                </div>
              </div>
              <div className="section_header_img">
                <img src="/group-1000015320.png" alt="img" />
                <img src="/group-1000015321.png" alt="img" />
              </div>
              <img className="img1" src="/group-3.svg" alt="icon" />
              <img className="img2" src="/vector-5.svg" alt="img" />
              <img className="img3" src="/arrow-03.svg" alt="img" />
              <img className="img4" src="/img4.svg" alt="lengDctinck" />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Header;
