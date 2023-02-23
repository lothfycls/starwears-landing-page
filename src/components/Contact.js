import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

import "../style/contact.css";
import emailjs from "@emailjs/browser";
import useForm from "../helpers/useForm";

function Contact() {
  const { t } = useTranslation("common");
  const [show, setShow] = useState(true);
  const form = useRef();

  const sendEmail = (e) => {
    if (e) e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setShow(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const { handleChange, values, errors, handleSubmit } = useForm(sendEmail);

  console.log("Form values : ", values);
  console.log("Form errors : ", errors);

  return (
    <div className="contact" id="contact">
      <div
        className={
          show
            ? "contact__inner hideContactPage"
            : "contact__inner showMessageBar"
        }
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h1>
          {t("contactUs.messageSent")}{" "}
          <span> {t("contactUs.congratulations")}</span>{" "}
        </h1>
      </div>

      <div
        className={
          show
            ? "contact__inner showMessageBar"
            : "contact__inner hideContactPage"
        }
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h1>
          {t("contactUs.letUsEmail")} <span>EMAIL!</span>{" "}
        </h1>
        <div className="container" data-aos="fade-up" data-aos-duration="800">
          <form ref={form} onSubmit={handleSubmit}>
            <label htmlFor="user_email"></label>
            <input
              type="text"
              id="user_email"
              name="user_email"
              required
              placeholder="mickaeljackson@gmail.com........"
              onChange={handleChange}
            />
            {errors.user_email && (
              <h3 className="formError">{errors.user_email}</h3>
            )}

            <label htmlFor="user_object"></label>
            <input
              type="text"
              id="user_object"
              name="user_object"
              minLength="8"
              required
              placeholder={t("contactUs.object")}
            />
            <label htmlFor="subject"></label>
            <textarea
              id="subject"
              name="message"
              placeholder={t("contactUs.body")}
              style={{ height: "200px" }}
              defaultValue={""}
              minLength="8"
              required
            />

            <input
              className="contact__button"
              type="submit"
              value={t("contactUs.send")}
              disabled={errors.length === 0}
            />
          </form>
        </div>
        <div className="copyrights">{t("contactUs.copyrights")}</div>
      </div>
    </div>
  );
}

export default Contact;
