import React, { useEffect, useState } from "react";
import '../Nav.css'

function Nav() {
    const [show, handleShow] = useState(false)
    const transitionNavBar = () => {
        window.scrollY > 100 ? handleShow(true) : handleShow(false)
    }

useEffect(() => {
    window.addEventListener('scroll', transitionNavBar)
    return () => window.removeEventListener('scroll', transitionNavBar)
}, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__content">
            </div>
            <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png" alt="" />
            <img className="nav__avatar" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpro2-bar-s3-cdn-cf.myportfolio.com%2Fdddb0c1b4ab622854dd81280840458d3%2F877ad1ce3a479ef9498e1efc_rw_600.png%3Fh%3D794db6a6ae01c539fdfb7ad5e5a89589&f=1&nofb=1" alt="" />
        </div>
    )
}

export default Nav