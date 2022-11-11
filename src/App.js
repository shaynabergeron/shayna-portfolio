import React, { useState, useEffect } from "react";
import Home from "./Components/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";

import "./style.css";
import TopScroll from "./Components/TopScroll";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  /** TODO: Add other elements (navbar, etc) */
  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <TopScroll />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
