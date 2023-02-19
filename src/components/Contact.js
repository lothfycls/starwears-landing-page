import React,{useState , useRef} from 'react'
import "../style/contact.css"
import emailjs from '@emailjs/browser';

function Contact() {

  const [show, setShow] = useState(true);
  const form = useRef();

  function fun(params) {
    setShow(false)
  }

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
      .then((result) => {
        console.log(process.env)
          console.log(result.text);
      }, (error) => {
        console.log(process.env)
          console.log(error.text);
      });
  };

  return (
<div className='contact' id="contact">    
  <div className={show ? "contact__inner hideContactPage" : "contact__inner showMessageBar"} data-aos="fade-up" data-aos-duration="800">
      <h1>Your message has been sent ! <span> Congratulations !</span> </h1> 
  </div>

  <div className={show ? "contact__inner showMessageBar" : "contact__inner hideContactPage"} data-aos="fade-up" data-aos-duration="800">
      <h1>TO BE PART OF OUR CATALOG , LET US YOUR <span>EMAIL!</span> </h1>
      <div className="container" data-aos="fade-up" data-aos-duration="800">
        <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="fname"></label>
            <input type="text" id="user_email" name="user_email" placeholder="mickaeljackson@gmail.com........" />
            <label htmlFor="lname"></label>
            <input type="text" id="user_object" name="user_object" placeholder="Object : Collection “this is it” of Mickael Jackson" />
      
            <label htmlFor="subject"></label>
            <textarea id="subject" name="message" placeholder="Hello , i want to sell my clothes...." style={{height: '200px'}} defaultValue={""} />
            <input className='contact__button' type="submit" defaultValue="Send!" onClick={fun}/>
          </form>
        </div>
    </div>
</div>
  )
}

export default Contact