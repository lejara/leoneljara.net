import * as React from "react";
import { Link } from "gatsby";
import MenuIcon from "../images/svg/menu.svg";

const Header = () => {
  return (
    <header className="block-component header m-0 p-2">
      <div className="menu float-right mr-4">
        <Link href="link" aria-label="Menu">
          <MenuIcon />
        </Link>
      </div>
    </header>
  );
};
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/
export default Header;
