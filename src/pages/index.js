import * as React from "react";
import "../styles/style.css";

import { GameContextProvider } from "../context/gameContext";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Background from "../components/Background";
import Skils from "../components/Skills";
import ResponsiveParallax from "../components/ResponsiveParallax";

const IndexPage = () => {
  const bg = React.useRef();

  const sections = [
    <Hero bg={bg} />,
    <About />,
    <Projects />,
    <Skils />,
    <Contact />,
  ];

  return (
    <Layout>
      <GameContextProvider>
        <Background bg_containerRef={bg} />
        <ResponsiveParallax sections={sections} />
      </GameContextProvider>
    </Layout>
  );
};

export default IndexPage;
