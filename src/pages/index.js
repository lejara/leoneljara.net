import * as React from "react";
import "../styles/style.css";

import gameContext from "../context/gameContext";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Background from "../components/Background";

const IndexPage = () => {
  const bg = React.useRef();
  // const [won, setWon] = React.useState(false);
  const [playing, setPlaying] = React.useState(false);
  return (
    <Layout>
      <gameContext.Provider value={{ playing, setPlaying }}>
        <Background bg_containerRef={bg} />
        <Hero />
        <hr className="block-break" />
        <About />
        <hr className="block-break" />
        <Projects />
        <hr className="block-break" />
        <Contact />
      </gameContext.Provider>
    </Layout>
  );
};

export default IndexPage;
