import React, { useEffect, useState, useRef } from "react";
import "../experience/experience.scss";
import Aos from "aos";
import html from "../../image/skills/HTML5.png";
import css from "../../image/skills/css_1.png";
import js from "../../image/skills/js.png";
import react from "../../image/skills/react.png";
import tailwind from "../../image/skills/tailwind.jpeg";
import typescipt from "../../image/skills/typescsript.png";
import git from "../../image/skills/git.png";
import redux from "../../image/skills/redux.png";
import hook_form from "../../image/skills/hook-form.png";
import abb_logo from "../../image/me/Abb.png";
import jest from "../../image/skills/jest.png";
import next_js from "../../image/skills/next js.png";
import chakra_ui from "../../image/skills/chakra_ui.png";

function Experince() {
  const [progress, setProgress] = useState(0);


  const skill = useRef();

  useEffect(() => {
    Aos.init({ duration: 1000, delay: 200 });
  }, []);

  var Visible = function () {
    var targetPosition = {
        top: window.pageYOffset + skill.current.getBoundingClientRect().top,
        left: window.pageXOffset + skill.current.getBoundingClientRect().left,
        right: window.pageXOffset + skill.current.getBoundingClientRect().right,
        bottom:
          window.pageYOffset + skill.current.getBoundingClientRect().bottom,
      },
      windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight,
      };

  };

  window.addEventListener("scroll", function () {
    Visible();
  });

  return (
    <div className='expe' id='experince'>
      <div className='container'>
        <p className='edu'>Education & Skills </p>
        <div className='row'>
          {/* work/internship */}
          <div data-aos='flip-left' className='col-4 part3 col-sm-12 col-xs-12'>
            <div className='expo-box3'>
              <div className='box1-letter'>
                <p>Work/Internship</p>
              </div>
              <div className='box-add'>
                <ul>
                  <li>April 2023 - Current </li>
                  <li>
                    <span>
                      {" "}
                      International Bank of Azerbaijan{" "}
                      <img src={abb_logo} alt='' />
                    </span>{" "}
                    Front-End developer
                  </li>
                  <li>November(2022)-April(2023)</li>
                  <li>ITB WORLD MMC</li>
                  <li>August-November(2022)</li>
                  <li>Soft & Solution</li>
                </ul>
              </div>
            </div>
          </div>

          {/*  */}
          <div data-aos='flip-left' className='col-4 part2 col-sm-12 col-xs-12'>
            <div className='expo-box2'>
              <div className='box1-letter'>
                <p>Skills</p>
              </div>

              {/* <div ref={skill} className="box-skill " >
                  <p  className='skill-name'>Html</p>
                  <div className="box-main">
                    <div className="box-bar"
                    style={{ width: `${view ? "70%" : progress}`}}
                    
                    ></div>
                  </div>
                  <p  className='skill-name'>Css(Bootstrap,Sass)</p>
                  <div className="box-main">
                    <div className="box-bar"
                    style={{ width: `${view ? "80%" : progress}`}}
                    >

                    </div>
                  </div>
                  <p  className='skill-name'>Javascript</p>
                  <div className="box-main">
                    <div className="box-bar"
                    style={{ width: `${view ? "65%" : progress}`}}>

                    </div>
                  </div>
                  <p  className='skill-name'>React</p>
                  <div className="box-main">
                    <div className="box-bar"
                    style={{ width: `${view ? "60%" : progress}`}}>

                    </div>
                  </div>
                  <p  className='skill-name'>Git</p>
                  <div className="box-main">
                    <div className="box-bar"
                    style={{ width: `${view ? "70%" : progress}`}}>

                    </div>
                  </div>
             
              </div> */}
              <div className='skills-grid'>
                <div class='grid-container'>
                  <div class='grid-item'>
                    <img src={html} alt='' />
                  </div>
                  <div class='grid-item'>
                    <img src={css} alt='' />
                  </div>
                  <div class='grid-item'>
                    <img src={js} alt='' />
                  </div>
                  <div class='grid-item'>
                    <img src={react} alt='' />
                  </div>
                  <div class='grid-item'>
                    <img src={typescipt} alt='' />
                  </div>
                  <div class='grid-item'>
                    <img src={next_js} alt='' />
                  </div>
                  <div class='grid-item'>
                    <img src={git} alt='' />
                  </div>
                  <div class='grid-item'>
                    <img src={jest} alt='' />
                  </div>

                  <div class='grid-item'>
                    <img src={redux} alt='' />
                  </div>
                  <div class='grid-item'>
                    <img src={hook_form} alt='' />
                  </div>
                  <div class='grid-item'>
                    <img src={tailwind} alt='' />
                  </div>
                  <div class='grid-item'>
                    <img src={chakra_ui} alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* education */}
          <div data-aos='flip-left' className='col-4 col-sm-12 col-xs-12'>
            <div className='expe-box1'>
              <div className='box1-letter'>
                <p>Education</p>
              </div>
              <div className='edu-info'>
                <ul>
                  <li>2016-2020</li>
                  <li>Azerbaijan Technical University(Bachelor)</li>
                  <li>Electronic, telecommunication and radio engineering</li>
                  <li>2021-2023</li>
                  <li>Azerbaijan Technical University(Master)</li>
                  <li>information security in telecommunication systems</li>
                  <li>2022(February)-2022(August)</li>
                  <li>Coders</li>
                  <li>Front-End Developer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experince;
