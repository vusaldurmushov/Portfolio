import React, { useEffect, useState, useRef } from 'react'
import "../experience/experience.css"
import Aos from 'aos'

function Experince() {

  const [progress, setProgress] = useState(0)

  const [view, setView] = useState(false);

  const skill = useRef();


  useEffect(() => {
    Aos.init({ duration: 1000, delay: 200 })
  }, [])



  var Visible = function () {
    var targetPosition = {
      top: window.pageYOffset + skill.current.getBoundingClientRect().top,
      left: window.pageXOffset + skill.current.getBoundingClientRect().left,
      right: window.pageXOffset + skill.current.getBoundingClientRect().right,
      bottom: window.pageYOffset + skill.current.getBoundingClientRect().bottom
    },
      windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
      targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
      targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
      targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
      setView(true)
      console.log('gorsenir')
    } else {
      setView(false)
      console.log('itdi');
    };
  };

  window.addEventListener('scroll', function () {
    Visible();
  });


  return (
    <div className='expe' id='experince' >
      <div className="container">
        <p className='edu'>Education & Skills </p>
        <div className="row">
          <div data-aos="flip-left" className="col-4 col-sm-12 col-xs-12">
            <div className="expe-box1">
              <div className="box1-letter">
                <p>Education</p>
              </div>
              <div className="edu-info">
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
          <div data-aos="flip-left" className="col-4 part2 col-sm-12 col-xs-12">
            <div className="expo-box2">
              <div className="box1-letter">
                <p>Skill</p>
              </div>

              <div ref={skill} className="box-skill " >
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
             
              </div>

            </div>
          </div>
          <div data-aos="flip-left" className="col-4 part3 col-sm-12 col-xs-12">
            <div className="expo-box3">
              <div className="box1-letter">
                <p>Add</p>
              </div>
              <div className="box-add">
                <ul>
                  <li>July-Octaber(2018)</li>
                  <li><span>Azerconnect</span> - Summer internship programme in Network Texnologies Division</li>
                  <li>February-August(2019)</li>
                  <li>General English Course</li>
                  <li>2020-2021</li>
                  <li>I have finished the Military Service</li>

                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Experince