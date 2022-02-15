import { use } from "express/lib/application";
import React, { useEffect, useState } from "react";
import smallFlower from './small_flower.png'
import "./main.css"
let date = new Date();
const Main = (props) => {
    
    // const viewMonth = props.viewMonth;
    // const setViewMonth = props.setViewMonth;
    // const smtdates = props.smtdates;
    // const setSmtDates = props.setSmtDates;
    // const wtfsdates = props.wtfsdates;
    // const setWtfsDates = props.setWtfsDates;
    const [plans,setPlans] = useState([]);
    const [viewMonth,setViewMonth] = useState(date.getMonth());
    const [smtdates,setSmtDates] = useState([]);
    const [wtfsdates,setWtfsDates] = useState([]);
    let viewYear = date.getFullYear();
const renderCalendar = () =>{
    viewYear = date.getFullYear();
    console.log(date.getMonth());
    setSmtDates([]);
    setWtfsDates([]);
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
    const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(TLDate);
  dates.forEach((date, i) => {
    const condition = i >= firstDateIndex && i < lastDateIndex + 1
                      ? 'this'
                      : 'other';
                      dates[i] = <div className={condition}>{date}</div>;
  })
    // dates.forEach((date, i) => {
    // dates[i] = `${date}`;
    // })
    var temp = 0;
    for(let i = 0; i<dates.length;i++){
        if(temp<3){
            setSmtDates(smtdates => [...smtdates,dates[i]]);
            // smtdates.push(dates[i]);
        }
        else{
            setWtfsDates(wtfsdates => [...wtfsdates,dates[i]]);
            // wtfsdates.push(dates[i])
        }
        if(temp == 6) temp = 0;
        else temp++;
    }
    showToday();
}
function showToday(){
    const today = new Date();
    console.log(viewMonth);
    console.log(today.getMonth());
  if (viewMonth == today.getMonth() && viewYear == today.getFullYear()) {
      console.log("hi");
      console.log(document.querySelectorAll(".this"));
    for (let thismonth of document.querySelectorAll(".this")) {
        console.log("hi");
        thismonth.classList.remove('today');
      if (thismonth.textContent == today.getDate()) {
        thismonth.classList.add('today');
      }
    }
  }
  else{
    for (let thismonth of document.querySelectorAll(".this")) {
        thismonth.classList.remove('today');
  }
}
}
const prevMonth = () => {
    console.log("prevmonth");
    date.setDate(1);
    date.setMonth(date.getMonth() - 1);
    setViewMonth(date.getMonth());
    console.log(viewMonth);
  }
  
  const nextMonth = () => {
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    setViewMonth(date.getMonth());
    console.log(viewMonth);
  }
  
  const goToday = () => {
    date = new Date();
    renderCalendar();
  }
  function addPlan(){
      console.log(document.getElementById("newPlan").value);
      var el = document.getElementById("newPlan").value;
      if((window.event.keyCode==13) && (el!="")) 
      {
          setPlans([...plans,el]);
          document.getElementById("newPlan").value = null;

    }
  }
  useEffect(() => { 
      renderCalendar();
    }, [viewMonth]);
    useEffect(()=>{
        showToday();
    },[document.querySelectorAll(".this")]);
    return (
        <div>
        <div className="header">
            
            <div className="month" id = "month">{viewMonth+1}</div>
            <div className="search">
                <input type="text" className="searchbox" placeholder="search for.."></input>
            </div>
        </div>
        <div className="main">
            <div className = "left">
                <div className = "monthlyPlan">
                    <div id="monthly">monthly plan</div>
                    <div className="allPlans">
                    {
                        plans.map((element, index) => (
                            <div className='plans'>
                            <img src = {smallFlower} width = "25px" height="25px"/>
                            <div className="plan">{element}<p/>
                            <br/>
                            </div>
                            </div>
                        ))
                    }
                    <div className='plans'>
                            <img src = {smallFlower} width = "25px" height="25px"/>
                            <div className="plan">
                                <input type="text" id = "newPlan" onKeyDown={addPlan}></input>
                            </div>
                    </div>
                    </div>
                </div>
                <div className = "SMT">
                    <div className = "days">
                        <div className = "day">SUN</div>
                        <div className = "day">MON</div>
                        <div className = "day">TUE</div>
                    </div>
                    <div className = "dates" id="dates1">
                    {
                        smtdates.map((element, index) => (
                            <div className='date'>{element}<p/>
                            <br/>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
            <div className = "rings"></div>
            <div className = "WTFS">
                <div className = "days">
                    <div className = "day">WED</div>
                    <div className = "day">THU</div>
                    <div className = "day">FRI</div>
                    <div className = "day">SAT</div>
                </div>
                <div className = "dates" id="dates2">
                {
                            wtfsdates.map((element, index) => (
                                <div className='date'>{element}<p/>
                                <br/>
                                </div>
                            ))
                        }
                </div>
            </div>
        </div>
        <div className="buttonAction">
          <div className="triangle" id = "leftT" onClick={prevMonth}></div>
          <div className="triangle" id = "rightT" onClick={nextMonth}></div>
        </div>
        </div>
    );
    
  };
export default Main
