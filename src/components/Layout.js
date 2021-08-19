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
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
