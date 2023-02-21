import React,{useState , useRef} from 'react'
import {useTranslation} from "react-i18next";

import "../style/contact.css"
import emailjs from '@emailjs/browser';

function Contact() {
  const {t} = useTranslation('common');
  const [show, setShow] = useState(true);
  const form = useRef();

  function fun(params) {
    setShow(false)
  }

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
<div className='contact' id="contact">    
  <div className={show ? "contact__inner hideContactPage" : "contact__inner showMessageBar"} data-aos="fade-up" data-aos-duration="800">
      <h1>{t('contactUs.messageSent')} <span> {t('contactUs.congratulations')}</span> </h1> 
  </div>

  <div className={show ? "contact__inner showMessageBar" : "contact__inner hideContactPage"} data-aos="fade-up" data-aos-duration="800">
      <h1>{t('contactUs.letUsEmail')} <span>EMAIL!</span> </h1>
      <div className="container" data-aos="fade-up" data-aos-duration="800">
        <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="fname"></label>
            <input type="text" id="user_email" name="user_email" placeholder="mickaeljackson@gmail.com........" />
            <label htmlFor="lname"></label>
            <input type="text" id="user_object" name="user_object" placeholder={t('contactUs.object')} />
      
            <label htmlFor="subject"></label>
            <textarea id="subject" name="message" placeholder={t('contactUs.body')} style={{height: '200px'}} defaultValue={""} />
            <input className='contact__button' type="submit" value={t('contactUs.send')} onClick={fun}/>
          </form>
        </div>
    </div>
</div>
  )
}

export default Contact