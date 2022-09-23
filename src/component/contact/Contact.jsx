import React, { useEffect, useState, useRef } from 'react'
import "../contact/contact.css"
import emailjs from 'emailjs-com';
import Aos from "aos"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {

  const [view, setView] = useState(false);

  const skill = useRef();
  const [allow, setAllow] = useState(true)

  useEffect(() => {
    if (view === true && allow) {
        setAllow(false)//Birden artiq email mesaji
      toast.info(' You can send message here !', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  });





  useEffect(() => {
    Aos.init({ duration: 1000, delay: 200 })
  }, [])


  let width = window.innerWidth;

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_0crmx3o', 'template_o3pzm2q', e.target, 'YLLPXLlqt4hijSswO')
      .then((result) => {
        console.log(result.text);

        toast.success('your message sent successfully !', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        let inputs = e.target.querySelectorAll("input");
        inputs.forEach((e) => {
          e.value = ''
        })


      }, (error) => {
        console.log(error.text);
        toast.warn('Wow so easy!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });



      });


  };


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
      // console.log('gorsenir')


    } else {
      setView(false)
      // console.log('itdi');
    };
  };


  window.addEventListener('scroll', function () {
    Visible();
  });


  return (
    <div className='contact' id='contact'>
      <div className="container">
        <div className="row">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {/* Same as */}
          <ToastContainer />
          <div data-aos='fade-right' className="col-6 contact1 col-md-12 col-xs-12">
            <ul>
              <li>Contact</li>
              <li>Let's discuss your</li>
              <li>project</li>

              <li><i className="fa-solid fa-phone"></i><a target="_blank" href="tel:+994775673290">+994 77-567-32-90</a></li>
              <li><i className="fa-solid fa-envelope"></i><a target="_blank" href="mailto:vusal.durmushov06@gmail.com">vusal.durmushov06@gmail.com</a></li>
              <li><i className="fa-brands fa-github"></i><a target="_blank" href="https://github.com/vusaldurmushov">vusaldurmushov</a></li>
              <li><i className="fa-brands fa-instagram"></i><a target="_blank" href="https://www.instagram.com/vusal_99__/">vusal_99__</a></li>
              <li><i className="fa-solid fa-location-dot"></i>Azerbaijan Baku</li>
            </ul>
          </div>

          <div ref={skill} data-aos={width > 1592 ? "fade-left" : "zoom-in"} className="col-6 contact2 col-md-12 col-xs-12">
            <p>I'm always open to discussing offer.</p>
            <p>work or partnerships.</p>
            <form onSubmit={sendEmail} >
              <input type="text" placeholder='Name *' name="name" />
              <input type="email" placeholder='Email *' name='email' />
              <input type="text" placeholder='Subject *' name='subject' />
              <input type="text-area" placeholder='Message *' name='message' />
              <button type='submit' className='con-btn'>Submit</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact