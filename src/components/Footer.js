import * as React from "react";

const Footer = () => {
  return (
    <div>
      <hr className="footer__line" />
      <footer class="py-4 px-3">
        <p>&copy;{new Date().getFullYear()} Leonel Jara</p>
        <p>
          <a href="https://github.com/lejara/leoneljara.me">Source Code</a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
