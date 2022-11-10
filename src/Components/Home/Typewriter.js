import React from "react";
import TypeWriter from "typewriter-effect";

/** This function will autotype the given strings
 * (Acts as a "typewriter")
 */
const Type = () => {
  return (
    <TypeWriter
      options={{
        strings: [
          "Full Stack Developer",
          "AWS Cloud Certified - Developer",
          "Database Architect",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
