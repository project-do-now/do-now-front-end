import "react-datepicker/dist/react-datepicker.css"; // css import 

import "./App.css"
import React, { useEffect, useState } from "react";

import Main from "./components/main/main";
let date = new Date();
function App() {
  const [viewMonth,setViewMonth] = useState(date.getMonth());
    const [smtdates,setSmtDates] = useState([]);
    const [wtfsdates,setWtfsDates] = useState([]);
  return (
    <div className="App">

      <Main viewMonth = {viewMonth} setViewMonth = {setViewMonth} smtdates = {smtdates} setSmtDates = {setSmtDates} wtfsdates = {wtfsdates} setWtfsDates = {setWtfsDates}/>

    </div>
  );
}

export default App;