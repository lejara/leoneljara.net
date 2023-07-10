import * as React from "react";

const Footer = () => {
  return (
    <footer className={` text-lg flex flex-col w-full justify-between px-3`}>
      <p>&copy;{new Date().getFullYear()} Leonel Jara</p>
      <p>
        <a
          href="https://github.com/lejara/leoneljara.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      </p>
    </footer>
  );
};

export default Footer;
