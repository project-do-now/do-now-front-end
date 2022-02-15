import "react-datepicker/dist/react-datepicker.css"; // css import 
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
import "./App.css"
import React, { useEffect, useState } from "react";
import Main from "./components/main/main";
import Schedule from "./components/schedule/schedule";
import Diary from "./components/diary/diary"
let date = new Date();
function App() {
  const [viewMonth,setViewMonth] = useState(date.getMonth());
    const [smtdates,setSmtDates] = useState([]);
    const [wtfsdates,setWtfsDates] = useState([]);
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path = "/" element = {<Main/>} viewMonth = {viewMonth} setViewMonth = {setViewMonth} smtdates = {smtdates} setSmtDates = {setSmtDates} wtfsdates = {wtfsdates} setWtfsDates = {setWtfsDates}/>
      <Route path = "/schedule" element = {<Schedule/>} ></Route>
      <Route path = "/diary" element = {<Diary/>} ></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;