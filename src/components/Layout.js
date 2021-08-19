import * as React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <title>Leonel Jara</title>
      </Helmet>
      <div className="page-container">
        <Header />
        <main className="content-wrap">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
