import "react-datepicker/dist/react-datepicker.css"; // css import 
import ButtonAction from "./components/buttonAction/buttonAction";
import "./App.css"
import React, { useEffect, useState } from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
let date = new Date();
function App() {
  const [viewMonth,setViewMonth] = useState(date.getMonth());
    const [smtdates,setSmtDates] = useState([]);
    const [wtfsdates,setWtfsDates] = useState([]);
  return (
    <div className="App">
      {/* <Header month = {month} setMonth = {setMonth}/> */}
      <Main viewMonth = {viewMonth} setViewMonth = {setViewMonth} smtdates = {smtdates} setSmtDates = {setSmtDates} wtfsdates = {wtfsdates} setWtfsDates = {setWtfsDates}/>
      {/* <ButtonAction month = {month} setMonth = {setMonth}/> */}
    </div>
  );
}

export default App;