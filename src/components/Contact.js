import * as React from "react";

const Contact = () => {
  const Submit = (e) => {
    e.preventDefault();
    console.log("lol");
  };

  return (
    <div className="block-component">
      <h2 className="text-title">Contact Me</h2>
      <h2 className="text-subtitle">
        Want to have a chat? Tell me, hows your day or what you ate last night!
      </h2>
      <div className="contact mt-8">
        <form className="contact__form" onSubmit={Submit}>
          <label htmlFor="name">Name</label>
          <input id="name" className="mb-2" />
          <label htmlFor="email">Email</label>
          <input id="email" className="mb-2" />
          <label htmlFor="message">Message</label>
          <input id="message" className="contact__message mb-6" />
          <button className="contact__button">Send Message!</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
