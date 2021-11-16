import React, { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    console.log(startDate)
    return (
        <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        inline
      />
      <div>
          {startDate.toString()}
      </div>
      </div>
    );
    
  };
export default Calendar
