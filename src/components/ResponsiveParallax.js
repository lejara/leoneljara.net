import * as React from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Footer from "./Footer";
import useWindowDimensions from "../utils/useWindowDimensions";

const ResponsiveParallax = ({ sections }) => {
  const { height } = useWindowDimensions();
  const [layerOffsets, setLayerOffsets] = React.useState([]);
  const [accHeight, setAccHeight] = React.useState(null);

  const sectionRef1 = React.useRef();
  const sectionRef2 = React.useRef();
  const sectionRef3 = React.useRef();
  const sectionRef4 = React.useRef();
  const sectionRef5 = React.useRef();
  const sectionRefs = [
    sectionRef1,
    sectionRef2,
    sectionRef3,
    sectionRef4,
    sectionRef5,
  ];

  const pagesFactor = 400;
  const sectionFactor = 7000;

  React.useEffect(() => {
    setTimeout(calcHeight, 50);
  }, []);

  React.useEffect(() => {
    calcHeight();
  }, [...sectionRefs.map((s) => s.current?.clientHeight), height]);

  const calcHeight = () => {
    let accHeight = 0;
    const layerOffsets = [];
    sectionRefs.map((s, i) => {
      if (!s.current) {
        return;
      }
      if (i === 0) {
        layerOffsets[i] = 0;
      } else {
        layerOffsets[i] = calcOffset(i, accHeight, height);
      }
      accHeight += s.current.clientHeight;
    });

    if (accHeight != 0) {
      setLayerOffsets([...layerOffsets]);
      setAccHeight(accHeight);
    }
  };

  const calcPages = () => {
    const paddingBottom = pagesFactor / height;
    return layerOffsets[layerOffsets.length - 1] + 1 + paddingBottom;
  };

  const calcOffset = (offset, heightState, viewport_height) => {
    const factor = sectionFactor - (sectionFactor / viewport_height) * 300;
    const offsetValue =
      (heightState * 3) / (factor < 0 ? 500 : factor) + offset;
    return offsetValue;
  };

  return (
    <Parallax
      pages={calcPages()}
      key={`para-${accHeight}}`}
      enabled={accHeight ? true : false}
    >
      {sections.map((section, index) => {
        return (
          <ParallaxLayer
            key={`layer-${index}`}
            offset={layerOffsets[index]}
            speed={index === 0 ? 0 : 0.3}
          >
            <div ref={sectionRefs[index]}>{section}</div>
          </ParallaxLayer>
        );
      })}
      <Footer />
    </Parallax>
  );
};

export default ResponsiveParallax;
