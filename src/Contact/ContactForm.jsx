import { useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Footer } from "../Footer";
import Spacer from "../Spacer";

export function ContactForm() {
  const form = useRef();
  const [errors, setErrors] = useState([]);
  const [errorShow, setErrorShow] = useState(true);
  const [successMessageShow, setSuccessMessageShow] = useState(true);
  const [successMessage, setSuccessMessage] = useState([]);

  const sendEmail = (e) => {
    e.preventDefault();
    const params = new FormData(e.target);
    setErrors([]);

    emailjs
      .sendForm("service_8n7cbdl", "template_q4tdypn", form.current, {
        publicKey: "yllTUPIWKi2ZgJtsa",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          setSuccessMessage(["E-mail sent successfully!"]);
          setSuccessMessageShow(false);
          setErrorShow(true);
          setErrors([]);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccessMessage([]);
          setErrorShow(false);
          setSuccessMessageShow(true);
          setErrors(["Error, please try again."]);
        }
      );
  };

  return (
    <div className="email-main">
      <div id="login">
        <form ref={form} onSubmit={sendEmail}>
          <div className="container">
            <div className="row">
              <div className="email-outsides">
                <h2 id="contact" className="headertitle">
                  Ready To Get Started?
                </h2>
                <h2 className="connector">Let's Connect!</h2>
                <br></br>
              </div>
            </div>
            <div className="break2"> </div>
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <input name="name" className="form-control" type="string" placeholder="First Name" required />
              </div>
              <div className="col-lg-4 col-sm-12">
                <input name="last_name" className="form-control" type="string" placeholder="Last Name" />
              </div>
              <div className="col-lg-4 col-sm-12">
                <input name="user_email" className="form-control" type="email" placeholder="E-mail" required />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <textarea name="message" type="text" className="textarea" placeholder="Message" required></textarea>

                {/* <input name="message" className="textarea form-control" type="text" /> */}
              </div>
            </div>
            <ul hidden={successMessageShow} className="success">
              {successMessage.map((successMessage) => (
                <li key={successMessage}>{successMessage}</li>
              ))}
            </ul>
            <ul hidden={errorShow} className="errors">
              {errors.map((error) => (
                <li key={error}> {error}</li>
              ))}
            </ul>
            <br></br>
            <button id="button-gen-solid" className="submitbutton btn btn-secondary mt-3 submit ">
              SEND
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
