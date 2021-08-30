import * as React from "react";
import "../styles/style.css";

import { GameContextProvider } from "../context/gameContext";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Background from "../components/Background";
import ScrollAnimation from "react-animate-on-scroll";

const IndexPage = () => {
  const bg = React.useRef();

  return (
    <Layout>
      <GameContextProvider>
        <Background bg_containerRef={bg} />

        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <Hero bg={bg} />
        </ScrollAnimation>

        <hr className="block-break" />

        <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
          <About />
        </ScrollAnimation>

        <hr className="block-break" />

        <Projects />

        <hr className="block-break" />

        <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
          <Contact />
        </ScrollAnimation>
      </GameContextProvider>
    </Layout>
  );
};

export default IndexPage;
