import React,{useState} from 'react'
import "../style/contact.css"
function Contact() {

  const [show, setShow] = useState(true);

  function fun(params) {
    setShow(false)
  }

  return (
    <div className='contact' id="contact">

    
<div className={show ? "contact__inner hideContactPage" : "contact__inner showMessageBar"} data-aos="fade-up" data-aos-duration="800">
    <h1>Your message has been sent ! <span> Congratulations !</span> </h1> </div>


    <div className={show ? "contact__inner showMessageBar" : "contact__inner hideContactPage"} data-aos="fade-up" data-aos-duration="800">
    <h1>TO BE PART OF OUR CATALOG , LET US YOUR <span>EMAIL!</span> </h1>
    <div className="container" data-aos="fade-up" data-aos-duration="800">
        <form>
          <label htmlFor="fname"></label>
          <input type="text" id="fname" name="firstname" placeholder="mickaeljackson@gmail.com........" />
          <label htmlFor="lname"></label>
          <input type="text" id="lname" name="lastname" placeholder="Object : Collection “this is it” of Mickael Jackson" />
    
          <label htmlFor="subject"></label>
          <textarea id="subject" name="subject" placeholder="Hello , i want to sell my clothes...." style={{height: '200px'}} defaultValue={""} />
          <input className='contact__button' type="button" defaultValue="Send!"onClick={fun}/>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contact