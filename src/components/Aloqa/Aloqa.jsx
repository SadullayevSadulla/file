import React from 'react'
import Header from '../../all/header/header.jsx'

const Aloqa = () => {
  return (
    <>
      {/* <Header /> */}
      <section>
        <div className="aloqa container" id="aloqa">
          <div className="aloqa_hat container">
            <h1 className="aloqa_h1">Kurslarimizga yozilishni xohlaysizmi? Unda biz bilan bog'laning!</h1>
            <div className="aloqa_logo">
              <div className="aloqa_">
                <div className="aloqa_img"><img src="/phone-plus.svg" alt="Telefon raqami" /></div>
                <p>+998 93 663 0785</p>
              </div>
              <div className="aloqa_">
                <div className="aloqa_img2"><img src="/mail-01.svg" alt="Email" /></div>
                <p>Bilton@gmail.com</p>
              </div>
              <div className="aloqa_">
                <div className="aloqa_img3"><img src="/Icon (3).svg" alt="Manzil" /></div>
                <p>Urganch shahar IT park</p>
              </div>
            </div>
            <div className="aloqachi"><img src="/image 21.png" alt="Aloqa rasmi" /></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Aloqa


