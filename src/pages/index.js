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
import ArrowDown from "../images/down-arrow.svg";
import useWindowDimensions from "../utils/useWindowDimensions";

const IndexPage = () => {
  const bg = React.useRef();
  const { width } = useWindowDimensions();

  return (
    <Layout>
      <GameContextProvider>
        <Background bg_containerRef={bg} />

        <Parallax pages={width < 1024 ? 5 : 4} key={`parallax ${width}`}>
          <ParallaxLayer offset={0} speed={4} className="relative">
            <Hero bg={bg} />
            <hr className="hero-break" />
            <span className="transform  absolute bottom-3 left-1/2 -translate-x-1/2">
              <img src={ArrowDown} className="w-12 h-12" />
            </span>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.3}>
            <About />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0.3}>
            <Projects />
          </ParallaxLayer>

          <ParallaxLayer offset={width < 1024 ? 4 : 3} speed={0.5}>
            <Contact />
          </ParallaxLayer>
          <Footer />
        </Parallax>
      </GameContextProvider>
    </Layout>
  );
};

export default IndexPage;
