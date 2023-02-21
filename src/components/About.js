import React from 'react'
import {useTranslation} from "react-i18next";

import "../style/about.css"
import star1 from '../assets/img/2.png'
import star2 from '../assets/img/1.png'
import star3 from '../assets/img/3.png'
import star4 from '../assets/img/4.png'
import star5 from '../assets/img/5.png'
import star6 from '../assets/img/6.png'
import star7 from '../assets/img/7.png'
import star8 from '../assets/img/8.png'
import star9 from '../assets/img/9.png'
import star10 from '../assets/img/10.png'
import star11 from '../assets/img/11.png'
import red from '../assets/img/red.jpg'
function About() {
  const {t} = useTranslation('common');

  return (
    <div className='about' id='about'>

    <div className='about__grid' data-aos="fade-up" data-aos-duration="800">
        <div className='about__picture'>
        
        {/* about starts picture */}

      


  <div className="container vert-move">
  <div className='aboutStarContainer'></div>
 
  <div className="centered1">
    <div><img src={star1}/></div>
  </div>

  <div className="centered2">
    <div><img src={star2}/></div>
  </div>

  <div className="centered3">
    <div><img src={star3}/></div>
  </div>

  <div className="centered4">
    <div><img src={star5}/></div>
  </div>

  <div className="centered5">
    <div><img src={star6}/></div>
  </div>

  <div className="centered6">
    <div><img src={star9}/></div>
  </div>

  <div className="centered7">
    <div><img src={star10}/></div>
  </div>

  <div className="centered8">
    <div><img src={star7}/></div>
  </div>

  <div className="centered9">
    <div><img src={star11}/></div>
  </div>

  <div className="centered10">
    <div><img src={star4}/></div>
  </div>

  <div className="centered11">
      <div><img src={star8}/></div> 
  </div>

</div>  
        </div>
        <div className='about__text'>

            <div className='text__box'>
            <div className='logo__and__heading'><div className=''><img src={red}/></div><div><h4>{t('aboutUs.fanZone')}</h4></div></div>
            <p>{t('aboutUs.fanZoneText')}</p>
            </div>

            <div className='text__box'>
            <div className='logo__and__heading'><div className=''><img src={red}/></div><div><h4>{t('aboutUs.starZone')}</h4></div></div>
            <p>{t('aboutUs.starZoneText')}</p>
            </div>

            <div className='text__box'>
            <div className='logo__and__heading'><div className=''><img src={red}/></div><div><h4>{t('aboutUs.foundation')}</h4></div></div>
            <p>{t('aboutUs.foundationText')}</p>
            </div>    
        </div>
    </div>
    </div>
  )
}

export default About