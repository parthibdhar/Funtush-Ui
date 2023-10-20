import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollOnTop = (props) => {
    // eslint-disable-next-line
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return <>{props.children}</>;
};

export default ScrollOnTop;
