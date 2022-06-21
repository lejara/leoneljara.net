import * as React from "react";
import "../styles/style.css";

import { GameContextProvider } from "../context/gameContext";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Background from "../components/Background";
import Footer from "../components/Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const IndexPage = () => {
  const bg = React.useRef();

  return (
    <Layout>
      <GameContextProvider>
        <Background bg_containerRef={bg} />

        <Parallax pages={4}>
          <ParallaxLayer offset={0} speed={4}>
            <Hero bg={bg} />
            <hr className="hero-break" />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.3}>
            <About />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0.3}>
            <Projects />
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={0.5}>
            <Contact />
          </ParallaxLayer>
          <Footer />
        </Parallax>
      </GameContextProvider>
    </Layout>
  );
};

export default IndexPage;
