import { useState, useEffect } from "react";

const isBrowser = typeof window !== "undefined";

function getWindowDimensions() {
  if (isBrowser) {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  } else {
    return { innerWidth: 0, innerHeight: 0 };
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    let handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    handleResize();
    if (isBrowser) {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowDimensions;
}
