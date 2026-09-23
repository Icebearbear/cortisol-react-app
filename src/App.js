import React from "react";
import "./App.css";
import Button from "./components/CustomButton";
import ColorDropdown from "./components/ColourDropdown";
import LiveParagraph from "./components/LiveParagraph";
import ButtonToggle from "./components/ButtonToggle";
import SimpleCounter from "./components/SimpleCounter";
import ItemList from "./components/ItemList";
import LetterTiles from "./components/LetterTiles";
import CustomTable from "./components/CustomTable";

function App() {
  return (
    <div className="container">
      <div className="App-header">Todo</div>
      <div>
        {/* <Button />
        <ColorDropdown />
        <LiveParagraph />
        <ButtonToggle />
        <SimpleCounter />
        <ItemList /> */}
        <LetterTiles />
        <CustomTable />
      </div>
    </div>
  );
}

export default App;
