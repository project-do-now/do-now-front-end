import React, { useState } from "react";
import "./header.css"
const Header = () => {
    const date = new Date();

    const viewYear = date.getFullYear();
    var viewMonth = date.getMonth();
    viewMonth++;
    if(viewMonth<10){
        viewMonth = new Array(2).join('0')+viewMonth;
    }
    // document.querySelector('.month').textContent = `${viewMonth + 1}`;
    return (
        <div className="header">
            
            <div className="month" id = "month">{viewMonth}</div>
            <div className="search">
                <input type="text" className="searchbox" placeholder="search for.."></input>
            </div>
        </div>
    );
    
  };
export default Header
