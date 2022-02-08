import React, { useState } from "react";
import "./buttonAction.css"
const ButtonAction = () => {
  let date = new Date();
  let smtdates = [];
let wtfsdates = [];
const renderCalendar = ()=>{
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();
  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth + 1, 0);

  const PLDate = prevLast.getDate();
  const PLDay = prevLast.getDay();

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();
  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];
  if (PLDay !== 6) {
      for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
      }
  }
  
  for (let i = 1; i < 7 - TLDay; i++) {
      nextDates.push(i);
  }
  const dates = prevDates.concat(thisDates, nextDates);

  dates.forEach((date, i) => {
  dates[i] = `${date}`;
  })
  var temp = 0;
  for(let i = 0; i<dates.length;i++){
      if(temp<3){
          smtdates.push(dates[i]);
      }
      else{
          wtfsdates.push(dates[i])
      }
      if(temp == 6) temp = 0;
      else temp++;
      console.log(smtdates);
  }
}
const prevMonth = () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
}

const nextMonth = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
}

const goToday = () => {
  date = new Date();
  renderCalendar();
}

renderCalendar();
    return (
        <div className="buttonAction">
          <div className="triangle" id = "leftT" onClick={prevMonth}></div>
          <div className="triangle" id = "rightT" onClick={nextMonth}></div>
        </div>
    );
    
  };
export default ButtonAction
