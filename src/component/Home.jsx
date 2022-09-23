import React, { useState } from 'react'
import homeimg from '../image/Home-image.png';

function Home() {


  const setConsol = () => {
      window.scrollTo(0,760)
  }

 


  return (
    <div>
      <div className="home" id='home'>


        <div className="container">
          <div className="row">
            <div className=" home.let col-7 col-xs-12 col-sm-12 col-md-12  ">
              <div className="home-letter1">
                <p>Hi I'm Vusal</p>
              </div>
              <div className="home-letter2">
                <p>Front End Developer.</p>
                <p>Baku Azerbaijan.</p>
              </div>
              <div className="home-letter3">
                <p>Innovative Front End Developer with 6+ month experience building and
                  maintaining responsive websites</p>
              </div>
              <div className="home-button">
                <button>
                  <a href="#portfolio"><p  className="a-hover" >See Portfolio</p></a>
                  
                </button>
              </div>
            </div>
            <div className=" home-img col-5 col-xs-12 col-sm-12 col-md-12 ">
              <div className="home-image">
                <img src={homeimg} alt="" />
              </div>
              <div className="social-media">
                <a target="_blank" href="https://github.com/vusaldurmushov"><i className="fa-brands fa-github"></i></a>
                <a target="_blank" href="https://www.instagram.com/vusal_99__/"><i className="fa-brands fa-instagram"></i></a>
                <a target="_blank" href="https://wa.me/+994077563290"><i className="fa-brands fa-whatsapp"></i></a>
              </div>
            </div>
            <div className="bottom-ani">
              <span ></span>
              <span></span>
              <span></span>
            </div>
            <div onClick={() => setConsol()} className="goAbout">
            </div>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Home