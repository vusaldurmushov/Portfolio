import React,{useEffect} from 'react'
import "../portfolio/portfolio.css"
import Aos from "aos"

function Portfolio() {



  return (
    <div className='portfolio' id='portfolio'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className='port'>
              <p>Portfolio</p>
              <p>My Portfolio</p>
              <p>You can see some of my projects on Github here(click the photo  and visit the demo version)</p>
            </div>

          </div>
        </div>
        <div className="row row-2">
          <div  data-aos="zoom-i  n-up" className="col-6 col-xs-12">
            <div className="browser">
              <div className="headers">
                <span></span>
              </div>
              <div className="content content5"><a target="_blank" href="https://vusal-react-e-commerce-project.netlify.app/"></a>
              </div>
            </div>
          </div>
          <div  data-aos="zoom-i  n-up" className="col-6 col-xs-12">
            <div className="browser">
              <div className="headers">
                <span></span>
              </div>
              <div className="content"><a target="_blank"  href="https://vusaldurmushov.github.io/project1/"></a>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in-up" className="col-6 col-xs-12">
            <div className="browser">
              <div className="headers">
                <span></span>
              </div>
              <div className="content content2"><a target="_blank" href="https://vusal-react.netlify.app/"></a>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in-up" className="col-6 col-xs-12">
            <div className="browser">
              <div className="headers">
                <span></span>
              </div>
              <div className="content content3"><a target="_blank" href="https://simple1-reg-form.netlify.app/"></a>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in-up" className="col-6 col-xs-12">
            <div className="browser">
              <div className="headers">
                <span></span>
              </div>
              <div className="content content4"><a target="_blank" href="https://simple1-todo-list.netlify.app/"></a>
              </div>
            </div>
          </div>





        </div>
      </div>
    </div>
  )
}

export default Portfolio