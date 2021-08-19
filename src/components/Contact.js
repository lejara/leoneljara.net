import * as React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitBtn, setSubmitBtn] = useState("Send Message!");
  const [hasError, setHasError] = useState(false);

  const Submit = (e) => {
    e.preventDefault();
    setSubmitBtn("Sending...");
    emailjs
      .sendForm(
        "service_u1jhj3g",
        "template_h88px7b",
        e.target,
        "user_i8U9IZg1PbcZVAOtLIelq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setHasError(false);
          setSubmitBtn("Sent");
        },
        (error) => {
          console.log(error.text);
          setHasError(true);
          setSubmitBtn("Not Sent!");
        }
      );
  };

  return (
    <div className="block-component contact">
      <h2 className="text-title">Contact Me</h2>
      <h2 className="text-subtitle">
        Want to have a chat? Tell me, hows your day or what you ate last night!
      </h2>
      <div className="contact__wrapper mt-8">
        <form id="contact-form" className="contact__form" onSubmit={Submit}>
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
          <label htmlFor="user_email ">Email</label>
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
            type="submit"
            value="Send"
            className={`contact__button ${
              hasError ? "connect__button--error" : ""
            }`}
          >
            {submitBtn}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
