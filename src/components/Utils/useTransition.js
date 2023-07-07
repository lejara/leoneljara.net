import { useEffect, useState, useRef } from "react";

const useTransition = (delay) => {
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);
  const timeoutRef = useRef();

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const start = () => {
    setHasTransitionedIn(true);
    timeoutRef.current = setTimeout(() => setHasTransitionedIn(false), delay);
  };

  return [hasTransitionedIn, start];
};

export default useTransition;
