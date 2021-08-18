import * as React from "react";
import "../styles/style.css";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <hr className="block-break" />
      <About />
      <hr className="block-break" />
      <Projects />
      <hr className="block-break" />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
