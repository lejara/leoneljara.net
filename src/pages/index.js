import * as React from "react";
import "../styles/style.css";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Background from "../components/Background";

const IndexPage = () => {
  return (
    <Layout>
      <Background />
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
