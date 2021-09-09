import * as React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import ScrollAnimation from "react-animate-on-scroll";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [submitBtn, setSubmitBtn] = useState("Send Message");
  const [hasError, setHasError] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const formShowCaptcha = (e) => {
    e.preventDefault();
    setSubmitBtn("Waiting...");
    setSending(true);
    setShowCaptcha(true);
  };

  const Submit = (captchaValue) => {
    setSubmitBtn("Sending...");
    var templateParams = {
      user_name: name,
      user_email: email,
      message: message,
      "g-recaptcha-response": captchaValue,
    };
    emailjs
      .send(
        "service_u1jhj3g",
        "template_h88px7b",
        templateParams,
        "user_i8U9IZg1PbcZVAOtLIelq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setHasError(false);
          setSending(false);
          setSubmitBtn("Sent!");
          window.grecaptcha.reset();
          setShowCaptcha(false);
        },
        (error) => {
          hasErrorFunc(error);
        }
      );
  };

  var hasErrorFunc = (error) => {
    console.log(error.text);
    setHasError(true);
    setSending(false);
    setSubmitBtn("Not Sent!");
    window.grecaptcha.reset();
    setShowCaptcha(false);
  };

  return (
    <>
      <div className="block-component contact">
        <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
          <h2 className="text-title">Contact Me</h2>
          <h2 className="text-subtitle">Want To have Chat? Sure!</h2>
          <div className="contact__wrapper mt-8">
            <form
              id="contact-form"
              className="contact__form"
              onSubmit={formShowCaptcha}
            >
              <input type="hidden" name="contact_number" />
              <label htmlFor="user_name">Name</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                className="mb-2"
                required
              />
              <label htmlFor="user_email">Email</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                className="mb-2"
                required
              />
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                value={message}
                className="contact__message mb-6"
                required
              />
              <button
                disabled={sending}
                type="submit"
                value="Send"
                className={`contact__button${
                  hasError ? "contact__button--error" : ""
                }`}
              >
                {submitBtn}
              </button>

              <ReCAPTCHA
                sitekey="6LfssEUcAAAAAAlKqSq8T0MqMKID3zT86W7XxjvG"
                onChange={Submit}
                theme="dark"
                className={`pt-4 ${showCaptcha ? "visible" : "invisible"}`}
                onErrored={hasErrorFunc}
              />
            </form>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default Contact;
