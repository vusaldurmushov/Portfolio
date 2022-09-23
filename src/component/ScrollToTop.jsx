import React, { useState, useEffect } from 'react'
import '../style/style.css'



function ScrollToTop() {

    const [showScrollButton, setScrollButton] = useState(false)

    useEffect(() => {

        window.addEventListener('scroll', () => {

            if (window.scrollY > 300) {
                setScrollButton(true)
            }
            else {
                setScrollButton(false)
            }
        })

        if(showScrollButton === true){
            window.scrollTo = 200
        }



    }, []);




    // const scrollTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     })
    // }

    return (
        <div>
            {
                showScrollButton && <a href="#" className='top' ><i className="fa-solid fa-caret-up"></i></a>
            }

        </div>
    )


}

export default ScrollToTop