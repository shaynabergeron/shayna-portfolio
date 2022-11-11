import React from "react";
import "./Preloader.css";
import "../style.css";

function Preloader(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Preloader;
