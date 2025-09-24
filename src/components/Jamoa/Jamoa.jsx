import React from 'react'
import Header from '../../all/header/header.jsx'

const Jamoa = () => {
  return (
    <>
      {/* <Header /> */}
      <section>
        <div className="section_befor container" id="jamo">
          <div className="section_ong">
            <div className="section_btn4"><button>Bizning jamoa</button></div>
            <div className="section_h111">
              <h1>Tajribali va mehribon o'qituvchilardan iborat jamoamiz bor</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
            </div>
            <div className="section_ong_btn"><button>Batafsil</button></div>
          </div>
          <div className="teachers-container">
            <div className="mass">
              <div className="teacher-card yellow">
                <img src="/image 13.svg" alt="Azimova Laylo" />
                <div className="teacher-info"><p>Azimova Laylo</p><span>O'qituvchi</span></div>
              </div>
              <div className="teacher-card blue">
                <img src="/image 14.svg" alt="Teacher" />
              </div>
              <div className="teacher-card yellow">
                <img src="/image 15.svg" alt="Teacher" />
              </div>
              <div className="teacher-card blue">
                <img src="/Group 1000015325.svg" alt="Teacher" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Jamoa


