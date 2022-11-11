import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./TopScroll.css";
import "../style.css";

function TopScroll() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default TopScroll;
