import * as React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import SectionTitle from "./SectionTitle";
import Button from "./Utils/Button";
import Footer from "./Footer";

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

  const textField = (text, name, id, onChange, value, type) => {
    return (
      <span>
        <label htmlFor={id} className="block text-2xl">
          {text}
        </label>
        <input
          className="mb-2 text-black text-2xl p-1 rounded-sm"
          type={type}
          id={id}
          name={name}
          onChange={onChange}
          value={value}
          required
        />
      </span>
    );
  };

  return (
    <div>
      <SectionTitle title="Contact Me" adword="Send an email" center={true} />
      <div className="mt-8">
        <form
          id="contact-form"
          className="flex flex-col items-center justify-center max-w-lg mx-auto"
          onSubmit={formShowCaptcha}
        >
          <input type="hidden" name="contact_number" />
          {textField(
            "Name",
            "user_name",
            "user_name",
            (e) => {
              setName(e.target.value);
            },
            name,
            "text"
          )}

          {textField(
            "Email",
            "user_email",
            "user_email",
            (e) => {
              setEmail(e.target.value);
            },
            email,
            "email"
          )}

          <span>
            <label htmlFor="message" className="block text-2xl">
              Message
            </label>
            <textarea
              className="mb-6 text-black text-lg resize p-1 rounded-sm"
              rows="8"
              cols="30"
              id="message"
              name="message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
              required
            />
          </span>

          <Button
            type="submit"
            value="Send"
            disabled={sending}
            selected={sending}
            hasError={hasError}
          >
            {submitBtn}
          </Button>
          <div className="text-center font-sans mt-5">
            <p>Or send directly</p>
            <a href="mailto:leoneljarame@gmail.com" className="underline">
              leoneljarame@gmail.com
            </a>
          </div>
          <ReCAPTCHA
            sitekey="6LfssEUcAAAAAAlKqSq8T0MqMKID3zT86W7XxjvG"
            onChange={Submit}
            theme="dark"
            className={`pt-4 ${showCaptcha ? "visible" : "invisible"}`}
            onErrored={hasErrorFunc}
          />
        </form>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
