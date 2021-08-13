import * as React from "react";

const Contact = () => {
  return (
    <div className="block-component">
      <h2 className="text-title">Contact Me</h2>
      <h2 className="text-subtitle">
        Want to have a chat? Tell me, hows your day or what you ate last night!
      </h2>
      <form className="contact mt-16 mx-auto">
        <label for="name">Name</label>
        <input id="name" className="contact__name" />
        <label for="email">Email</label>
        <input id="email" className="contact__email" />
        <label for="message">Message</label>
        <input id="message" className="contact__message" />
        <button className="contact__button">Send Message!</button>
      </form>
      <div>contact content</div>
    </div>
  );
};

export default Contact;
