import React from 'react'
import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import {useTranslation} from "react-i18next";
import ReactCountryFlag from "react-country-flag"

import "../style/nav.css"

function HeaderComponent()
{
    const {i18n} = useTranslation('common');
    return <div className="flags">
        <button className="frenchy" onClick={() => i18n.changeLanguage('fr')}><ReactCountryFlag
                className="emojiFlag"
                countryCode="FR"
                style={{
                    fontSize: '2em',
                    lineHeight: '2em',
                }}
                aria-label="France"
            />
        </button>
        <button className="english" onClick={() => i18n.changeLanguage('en')}><ReactCountryFlag
                className="emojiFlag"
                countryCode="GB"
                style={{
                    fontSize: '2em',
                    lineHeight: '2em',
                }}
                aria-label="United Kingdom"
            />
          </button>
    </div>
}

function Nav() {

  const {t} = useTranslation('common');
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
          <a href="#home" className="hover-underline-animation">{t('navigation.home')}</a>
          <a href="#about" className="hover-underline-animation">{t('navigation.aboutUs')}</a>
          <a href="#contact" className="hover-underline-animation">{t('navigation.contactUs')}</a>
        </nav>
        <HeaderComponent/>


        <button onClick={showNavbar} className="nav-btn">
          <FaBars size={30} style={{ color: 'red' }} className="nav__icon" />
        </button>
      </header>

    </div>
  )
}

export default Nav