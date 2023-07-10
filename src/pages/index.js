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
import DownButton from "../components/Utils/DownButton";
import Footer from "../components/Footer";

const IndexPage = () => {
  const bg = React.useRef();

  const sections = [
    { comp: <Hero bg={bg} />, ref: React.createRef() },
    { comp: <About />, ref: React.createRef(), scrollOffset: -50 },
    { comp: <Projects />, ref: React.createRef() },
    { comp: <Skils />, ref: React.createRef() },
    { comp: <Contact />, ref: React.createRef() },
  ];

  return (
    <Layout>
      <GameContextProvider>
        <Background bg_containerRef={bg} />
        <DownButton sections={sections} />
        {sections.map((section, index) => (
          <div
            ref={section.ref}
            key={`section-${index}`}
            className={`${index !== 0 && " pt-12"}`}
          >
            {section.comp}
          </div>
        ))}
      </GameContextProvider>
    </Layout>
  );
};

export default IndexPage;
