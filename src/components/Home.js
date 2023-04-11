import React,{useEffect,useRef,useState} from 'react'
import "../style/home.css"
import logo1 from '../assets/img/STARWEARS.png'
import logo2 from '../assets/img/logo.png'
import mobile from '../assets/img/mobile.png'
import logo3 from '../assets/img/AppStore.png'
import logo4 from '../assets/img/Playstore.png'
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import {useTranslation} from "react-i18next";

function AllRight() {
  const {t} = useTranslation('common');

  // time counter
    const [days, setDays] = useState('00')
    const [hours, setHours] = useState('00')
    const [min, setMin] = useState('00')
    const [sec, setSec] = useState('00')
    let interval = useRef();
    const startTimer = () => {

        const countdownData = new Date('JULY 1, 2023 00:00:00').getTime()

        interval = setInterval(()=> {
            const now = new Date().getTime()
            const distance = countdownData - now;
            const timeday = Math.floor(distance / (1000 * 60 * 60 * 24))
            const timehours=Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const timemin=Math.floor((distance % (1000 * 60 * 60))/(1000 * 60))
            const timesec=Math.floor((distance % (1000 * 60))/ 1000)
            if (distance < 0){
                //now stop timer
                clearInterval(interval.current)
            } else {
                // update the timer
                setDays(timeday)
                setHours(timehours)
                setMin(timemin)
                setSec(timesec)
            }

        }, 1000)
    }

    useEffect(()=>{
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    })

  return (
    <div className='gym__home' id='home'>
    {/* grid */}
    <div className='gym__section'>
    {/* gym text side section */}
    <div className='gym__home__text' data-aos="fade-right" data-aos-duration="800">
    {/* top logo */}
    <div className='gym__top__logo'>
   <div className='im'><img src={logo1} className="" /></div><img src={logo2} />
    </div>
    {/* here is all home section text */}
    <div className='gym__paragraph__text'>
    <p><span>STARWEARS</span> {t('home.intro1')}</p>
    <p>{t('home.intro2')}</p>
    </div>
   

    {/* here count down will start */}
    <div className='gym__counter'>
    <h1>{t('home.availableSoon')} </h1>
    {/* counter box */}
    <div className='counter__box'>
    {/* counter single box */}
    <div className='count__single__box'><h2>{days}</h2><h5>{t('home.days')}</h5></div>
    <div className='count__single__box'><h2>:</h2></div>
    {/* counter single box */}
    <div className='count__single__box'><h2>{hours}</h2><h5>{t('home.hours')}</h5></div>
    <div className='count__single__box'><h2>:</h2></div>
    {/* counter single box */}
    <div className='count__single__box'><h2>{min}</h2><h5>{t('home.minutes')}</h5></div>
    <div className='count__single__box'><h2>:</h2></div>
    {/* counter single box */}
    <div className='count__single__box'><h2>{sec}</h2><h5>{t('home.secondes')}</h5></div>
    </div>
    </div>

    </div>
{/* right picture section */}
   <div className='gym__home__picture' data-aos="fade-left" data-aos-duration="800">
{/* picture and social icons */}
<div className='picture__and__social__icons'>
<div><img src={mobile} className="vert-move"/>
<div className='icons__under__picture'>
  <img src={logo3}/><img src={logo4}/>
</div>
</div>
<div className='social__icons'>
<div><BsFacebook size={27} className="icon__color"/> </div>
<div><a href="https://www.instagram.com/starwearsofficial/"><AiFillInstagram size={27} className="icon__color"/></a></div>
<div><AiFillTwitterCircle size={27} className="icon__color"/></div>
</div>
</div>

   </div>

    </div>
       
    </div>
  )
}

export default AllRight
