import React, { useEffect } from "react";
import "../About/about.css";
import aboutimg from "../../image/me/about-image.png";
import Aos from "aos";

function About() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const myAge = new Date().getFullYear() - 1999;


  return (
    <div className='about-full' id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-8 col-xs-12'>
            <div className='ab-part1'>
              <p>About Me</p>
              <p>About Me</p>
            </div>
          </div>
        </div>
        <div className='row row-2'>
          <div data-aos='fade-right' className='col-6 col-sm-12 col-xs-12'>
            <div className='ab-img'>
              <img src={aboutimg} alt='' />
            </div>
          </div>
          <div className='col-6 col-xs-12 col-sm-12 ab-letter'>
            <div className='row'>
              <div className='col-12'>
                <p className='a-hover'>I'm Vusal Durmushov</p>
                <p>
                  I am developing myself day by day in the field of{" "}
                  <span>Front End Development</span>
                </p>
                <p>
                  I have increased my knowledge in this field both in the course
                  and at home. Check out my Portfolio
                </p>
              </div>
              <div className='col-12 personal'>
                <p className='info'>PERSONAL INFO</p>
                <div className='row'>
                  <div className='col-6 col-xs-12'>
                    <ul>
                      <li>
                        Name: <span>Vusal Durmushov</span>
                      </li>
                      <li>
                        Age: <span>{myAge}</span>
                      </li>
                      <li>
                        Nationality:<span> Azerbaijan</span>
                      </li>
                      <li>
                        Freelance:<span> Available</span>
                      </li>
                    </ul>
                  </div>
                  <div className='col-6 col-xs-12'>
                    <ul>
                      <li>
                        Address: <span> Baku</span>
                      </li>
                      <li>
                        Phone: <span> (+994) 77-567-32-90</span>
                      </li>
                      <li>
                        Email: <span>vusal.durmushov06@gmail.com</span>
                      </li>
                      <li>
                        Language:<span> English(Intermediate)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <button className='a-hover'>
              <a
                target='_blank'
                href='https://drive.google.com/drive/folders/1kMihk-cqIwCelMxiFdF8RTBuO_YnJpAF?usp=sharing'
              >
                <span>Download CV</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
