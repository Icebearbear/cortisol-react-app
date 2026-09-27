import React from "react";
// import "h8k-components";

// problem link
// https://www.hackerrank.com/challenges/react-slideshow-1/problem?isFullScreen=false
import Slides from "./Slides";
// import { SLIDES_DATA } from "./constants";

import "./App.css";

function Home() {
  return (
    <>
      {/* <h8k-navbar header="Slideshow App"></h8k-navbar> */}
      <div className="App">
        <Slides slides={SLIDES_DATA} />
      </div>
    </>
  );
}

export default Home;
