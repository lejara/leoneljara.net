import * as React from "react";
import gameContext from "../context/gameContext";
import Game from "../components/Game";
import ScrollAnimation from "react-animate-on-scroll";

const Hero = ({ bg }) => {
  const { playing, won } = React.useContext(gameContext);
  return (
    <>
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <div className="py-16 hero mb-2">
          <div
            className={`hero__content mx-auto ${
              playing ? "opacity-0 invisible" : "opacity-100 visible"
            }`}
          >
            <div className="hero__title">
              <h1>Leonel</h1>
              <h1 className="hero__second">Jara</h1>
              <h2 className="hero__adword text-left">
                {won ? "Knows Your The Best" : "Loves putting fun into code"}
              </h2>
            </div>
          </div>

          <Game bg={bg} />
        </div>
      </ScrollAnimation>
    </>
  );
};

export default Hero;
