import * as React from "react";
import "../styles/style.css";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
};

export default IndexPage;
