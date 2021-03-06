import * as React from "react";

const Footer = ({ innerStyle }) => {
  return (
    <footer className={` ${innerStyle} py-4 px-3`}>
      <p>&copy;{new Date().getFullYear()} Leonel Jara</p>
      <p>
        <a href="https://github.com/lejara/leoneljara.net">Source Code</a>
      </p>
    </footer>
  );
};

export default Footer;
