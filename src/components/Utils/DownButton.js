import React from "react";
import ArrowDown from "../../images/down-arrow.svg";

const DownButton = ({ sections }) => {
  let positions = [];
  const [next, setNext] = React.useState(0);
  const [center, setCenter] = React.useState(false);
  const [flip, setFlip] = React.useState(false);

  React.useEffect(() => {
    updatePositions();
    onScroll();
    window.addEventListener("resize", updatePositions);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updatePositions);
    };
  }, [sections]);

  const updatePositions = () => {
    positions = [];
    sections.map((section) => {
      let pos = section.ref.current.offsetTop;
      if (section.scrollOffset) {
        pos += section.scrollOffset;
      }
      positions.push(pos);
    });
  };

  const onScroll = () => {
    let nextPos = positions.find((pos) => pos > window.scrollY);
    nextPos =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight ||
      !nextPos
        ? 0
        : nextPos;

    setFlip(!nextPos);
    setNext(nextPos);
    if (window.scrollY === 0) {
      setCenter(true);
    } else {
      setCenter(false);
    }
  };

  const goNext = () => {
    window.scrollTo({
      top: next,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-1 z-50 transition-all duration-500 ease-out opacity-0 md:opacity-100 ${
        center ? " right-1/2 translate-x-1/2 transform" : "right-1"
      }`}
    >
      <button onClick={goNext}>
        <img
          src={ArrowDown}
          className={`${
            flip && "rotate-180 transform"
          } transition-all w-12 h-12 lg:w-16 md:h-16 hover:bg-gray-700 p-2 rounded-lg duration-300`}
        />
      </button>
    </div>
  );
};

export default DownButton;
