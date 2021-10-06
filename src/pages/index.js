import * as React from "react";
import "../styles/style.css";

import { GameContextProvider } from "../context/gameContext";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Background from "../components/Background";

const IndexPage = () => {
  const bg = React.useRef();

  return (
    <Layout>
      <GameContextProvider>
        <Background bg_containerRef={bg} />
        <Hero bg={bg} />
        <hr className="hero-break" />
        <About />
        <hr className="block-break" />
        <Projects />
        <hr className="block-break" />
        <Contact />
      </GameContextProvider>
    </Layout>
  );
};

export default IndexPage;
