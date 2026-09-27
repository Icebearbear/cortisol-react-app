import React, {useState} from "react";
import "./App.css";
import Button from "./tutorials/CustomButton";
import ColorDropdown from "./tutorials/ColourDropdown";
import LiveParagraph from "./tutorials/LiveParagraph";
import ButtonToggle from "./tutorials/ButtonToggle";
import SimpleCounter from "./tutorials/SimpleCounter";
import ItemList from "./tutorials/ItemList";
import LetterTiles from "./tutorials/LetterTiles";
import CustomTable from "./tutorials/CustomTable";
import TicTacToe from "./tutorials/TicTacToe";
import { ThemeProvider, ThemeToggler } from "./tutorials/DarkMode";
import { Dashboard } from "./page/Dashboards";
import SummaryCard from "./components/SummaryCard";
import ContactForm from "./tutorials/ContactForm";
import EmployeeValidation from "./tutorials/EmployeeValidation";
import Search from "./tutorials/Search";
import Records from "./tutorials/Records";
function App() {

  const [id, setId] = useState(null);
  const [record, setRecord] = useState(null);

  return (
    <div className="container">
      {/* <Dashboard>
        <SummaryCard/>
      </Dashboard> */}
      {/* <ContactForm/> */}
      {/* <EmployeeValidation/> */}

        <Search id={id} setId={setId} setRecord={setRecord}/>
        <Records />
    </div>
  );
}

export default App;
