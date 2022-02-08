import React, { useEffect, useState } from "react";

import "./main.css"

const Main = (props) => {
    let date = new Date();
    const viewMonth = props.viewMonth;
    const setViewMonth = props.setViewMonth;
    const smtdates = props.smtdates;
    const setSmtDates = props.setSmtDates;
    const wtfsdates = props.wtfsdates;
    const setWtfsDates = props.setWtfsDates;

    // const [viewMonth,setViewMonth] = useState(date.getMonth());
    // const [smtdates,setSmtDates] = useState([]);
    // const [wtfsdates,setWtfsDates] = useState([]);
    let showMonth;
const renderCalendar = () =>{
    const viewYear = date.getFullYear();
    setViewMonth(date.getMonth());
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
    // for(let i = 0; i<dates.length;i++){
    //     if(temp<3){
    //         setSmtDates(smtdates.concat(dates[i]));
    //         // smtdates.push(dates[i]);
    //     }
    //     else{
    //         setWtfsDates(wtfsdates.concat(dates[i]));
    //         // wtfsdates.push(dates[i])
    //     }
    //     if(temp == 6) temp = 0;
    //     else temp++;
    // }
    setViewMonth(viewMonth => viewMonth+1);
    if(viewMonth<10){
        showMonth = new Array(2).join('0')+viewMonth;
    }
}
const prevMonth = () => {
    console.log("prevmonth");
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
        <div>
        <div className="header">
            
            <div className="month" id = "month">{showMonth}</div>
            <div className="search">
                <input type="text" className="searchbox" placeholder="search for.."></input>
            </div>
        </div>
        <div className="main">
            <div className = "left">
                <div className = "monthlyPlan"></div>
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
          <div className="triangle" id = "leftT" onClick={()=>prevMonth}></div>
          <div className="triangle" id = "rightT" onClick={()=>nextMonth}></div>
        </div>
        </div>
    );
    
  };
export default Main
