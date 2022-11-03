import React, { useState, useRef } from 'react'
import { NavLink } from "react-router-dom"



function Header() {
    const addClass = useRef()

    const [length, setLength] = useState(false)


    function changeBars() {
        setLength(!length)
        addClass.current.classList.toggle("change")
    }


    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    <a href="#home"> <h1><span>P</span>ortfolio</h1></a>
                </div>

                <div className={`menu ${length ? '' : 'length'}`}>
                    <ul onClick={() => changeBars()} >
                        <li><a className="a-hover" href="#home">Home</a></li>
                        <li><a className="a-hover" href="#about">About</a></li>
                        <li><a className="a-hover" href="#experince">Experince</a></li>
                        <li><a className="a-hover" href="#portfolio">Portfolio</a></li>
                        <li><a className="a-hover" href="#contact">Contact</a></li>
                    </ul>

                </div>

                {/* <div onClick={() => setLength(!length)} className="navBars"> */}
                <div ref={addClass} onClick={() => changeBars()} className="navBars">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>


        </div>
    )
}

export default Header