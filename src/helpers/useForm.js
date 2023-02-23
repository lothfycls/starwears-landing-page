import { useState } from "react";
import { omit } from "lodash";

const useForm = (callback) => {
  const [values, setValues] = useState({});

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validateValues = (event, name, value) => {
    switch (name) {
      case "user_email":
        if (!validateEmail(value)) {
          setErrors({
            ...errors,
            user_email: "Please insert a valid email address.",
          });
        } else {
          let newObj = omit(errors, "user_email");
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (event) => {
    event.persist();

    // console.log("Input", event.target.name);
    // console.log("Value", event.target.value);
    let name = event.target.name;
    let val = event.target.value;

    validateValues(event, name, val);

    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length === 1) {
      callback();
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
