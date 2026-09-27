import React, { useState } from "react";

const OMITTED_WORDS = ["a", "the", "and", "or", "but"];

// problem link
// https://www.hackerrank.com/challenges/react-word-omitter/problem?isFullScreen=false

function WordOmitter() {
  const [inputText, setInputText] = useState("");
  const [omitWords, setOmitWords] = useState(true);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const toggleOmitWords = () => {
    setOmitWords(!omitWords);
  };

  const clearFields = () => {
    // TODO: Add your changes here
    setInputText("");
    setOutput("");
  };

  const getProcessedText = () => {
    // TODO: Add your changes here
    // let temp = inputText;
    // let i = 0;
    // let j = 0;
    // let outList = [];
    // while (j < temp.length) {
    //   let target = "";
    //   console.log("i ", i);
    //   console.log("j ", j);
    //   if (i === j) { target = temp[i]; }
    //   else { target = temp.slice(i, j + 1) }
    //   console.log("target ", target);
    //   if (OMITTED_WORDS.includes(target)) {
    //     outList.push([...temp.slice()])
    //     j++;
    //     i = j;
    //     continue;
    //   }
    //   if (j - i >= (maxWordLen - 1)) {
    //     i++;
    //     j = i;
    //   }
    //   j++;
    // }
    const words = inputText.split(" ");

    const filtered = words.filter((word) => !OMITTED_WORDS.includes(word));

    return filtered.join(" ");
    // setOutput(outList.join(""));
  };

  return (
    <div className="omitter-wrapper">
      <textarea
        placeholder="Type here..."
        value={inputText}
        onChange={handleInputChange}
        data-testid="input-area"
      />
      <div>
        <button onClick={toggleOmitWords} data-testid="action-btn">
          {omitWords ? "Show All Words" : "Omit Words"}
        </button>
        <button onClick={clearFields} data-testid="clear-btn">
          Clear
        </button>
      </div>
      <div>
        <h2>Output:</h2>
        <p data-testid="output-text">
          {omitWords ? getProcessedText() : inputText}
        </p>
      </div>
    </div>
  );
}

export { WordOmitter };
