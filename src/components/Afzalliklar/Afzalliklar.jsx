import React from 'react'
import Header from '../../all/header/header.jsx'

const Afzalliklar = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="container">
        <div className="section_card" id="afzalliklar">
          <div className="card_h1">
            <div className="main_main_btn1">
              <button>Nega bizni tanladingiz</button>
            </div>
            <h1 className="h11">Bizning markazimiz innovatsion va interaktiv ta'lim metodikalariga ega</h1>
          </div>
          <div className="cards1">
            <div className="card">
              <div className="icon">
                <img src="/technology_svgrepo.com.svg" alt="Innovatsion texnologiyalar" />
              </div>
              <h2 className="title">Innovatsion va sifatli o'qitish uslublari</h2>
              <p className="text">Markazimizda innovatsion metodikalarga asoslangan sifatli ta'lim beriladi.</p>
            </div>
            <div className="card">
              <div className="icon">
                <img src="/Vector (8).svg" alt="Moslashuvchan dastur" />
              </div>
              <h2 className="title">Moslashuvchan o'quv dasturlari</h2>
              <p className="text">O'quvchilar darajasiga moslashtirilgan dasturlar bilan samarali ta'lim.</p>
            </div>
            <div className="card">
              <div className="icon">
                <img src="/control-multimedia-player_svgrepo.com.svg" alt="Interaktiv" />
              </div>
              <h2 className="title">Interaktiv va amaliy mashg'ulotlar</h2>
              <p className="text">Nazariya bilan birga amaliy mashg'ulotlar ham tashkil etiladi.</p>
            </div>
            <div className="card">
              <div className="icon">
                <img src="/control-discipline-moderation_svgrepo.com.svg" alt="Nazorat" />
              </div>
              <h2 className="title">Doimiy nazorat va qo'llab-quvvatlash</h2>
              <p className="text">O'quvchilar natijasi muntazam tahlil qilinadi va yo'naltiriladi.</p>
            </div>
            <div className="card">
              <div className="icon">
                <img src="/XMLID_129_.svg" alt="Sertifikat" />
              </div>
              <h2 className="title">Sertifikat va natijaga yo'naltirish</h2>
              <p className="text">Kurs yakunida bilimni tasdiqlovchi sertifikat beriladi.</p>
            </div>
            <div className="card">
              <div className="icon">
                <img src="/library-book_svgrepo.com.svg" alt="Kutubxona" />
              </div>
              <h2 className="title">Boy resurslar bazasi</h2>
              <p className="text">Elektron resurslar, videolar va kitoblar bilan to'liq ta'minot.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Afzalliklar


