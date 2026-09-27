import React, { useState } from "react";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function LetterTiles() {
  const [output, setOutput] = useState("");

  const handleTileClick = (letter) => {
    // TODO: Append letter and apply 3-consecutive-letter replacement rule

    ///// BAD APPROACH /////////
    ///// cos var temp = output directly inside the function reads the state as it was when the function was created, not necessarily the current state
    ///// If multiple clicks happen quickly, temp won't reflect the newest output yet, causing duplicate letters to get added instead of triggering the _ replacement.
    // BAD SOLUTION :
    // var temp = output;
    // var l1 = temp.slice(-1);
    // var l2 = temp.slice(-2, -1);
    // console.log("1 ", l1);
    // console.log("2 ", l2);
    // if (l1 === l2 && l1 === letter) {
    //   setOutput((prev) => {
    //     return prev.slice(0, -2) + "_";
    //   });
    // } else setOutput((prev) => prev + letter);

    // GOOD SOLUTION:
    setOutput((prev) => {
      var l1 = prev.slice(-1);
      var l2 = prev.slice(-2, -1);
      if (l1 === l2 && l1 === letter) {
        return prev.slice(0, -2) + "_";
      } else return prev + letter;
    });
  };

  return (
    <div>
      {/* TODO: Display current output */}
      <div id="output-string">{output}</div>

      {/* TODO: Render letter tile buttons */}
      <div id="letter-tiles">
        {ALPHABET.map((letter) => (
          <button key={letter} onClick={() => handleTileClick(letter)}>
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}
