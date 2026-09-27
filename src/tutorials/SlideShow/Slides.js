import React, { useState } from "react";

function Slides({ slides }) {
  const [isLast, setIsLast] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const [index, setIndex] = useState(0);
  const [current, setCurrent] = useState(slides[0]);

  const handleStat = (newIdx) => {
    setIndex(newIdx);
    setCurrent(slides[newIdx]);
    if (newIdx == 0) {
      setIsFirst(true);
      setIsLast(false);
    } else if (newIdx == slides.length - 1) {
      setIsLast(true);
      setIsFirst(false);
    } else {
      setIsLast(false);
      setIsFirst(false);
    }
  };

  const handleRestart = () => {
    const newIdx = 0;
    handleStat(newIdx);
  };

  const handlePrev = () => {
    const newIdx = index - 1;
    handleStat(newIdx);
  };

  const handleNext = () => {
    const newIdx = index + 1;
    handleStat(newIdx);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          disabled={isFirst}
          onClick={handleRestart}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          disabled={isFirst}
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          disabled={isLast}
          onClick={handleNext}
        >
          Next
        </button>
      </div>

      <div id="slide" className="card text-center" key={current.index}>
        <h1 data-testid="title">{current.title}</h1>
        <p data-testid="text">{current.text}</p>
      </div>
    </div>
  );
}

export default Slides;
