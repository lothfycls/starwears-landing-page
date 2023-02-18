import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
//import logo
import logo from '../src/assets/img'
import "./navbar.css"
export const NavBar = () => {

  const navRef = useRef();
  const [show, setshow] = useState(true);
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    if (show) {
      setshow(false)
    }
    if (show) {
      setshow(true)
    }
  };


  return (
    <div className="">
      <header>
        <nav ref={navRef}>
          <a href="/#" className="hover-underline-animation">Home</a>
          <a href="#about" className="hover-underline-animation">About Us</a>
          <a href="#services" className="hover-underline-animation">Our Services</a>
          <a href="#contact" className="hover-underline-animation">Contact</a>
        </nav>
        <button onClick={showNavbar} className="nav-btn">
          <FaBars size={30} style={{ color: 'red' }} className="nav__icon" />
        </button>
        <h3 className="logo"><img src={logo} /></h3>
      </header>
    </div>
  )
}
