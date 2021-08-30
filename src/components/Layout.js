import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>Leonel Jara</title>
      </Helmet>
      <div className="page-container">
        <main className="content-wrap">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
