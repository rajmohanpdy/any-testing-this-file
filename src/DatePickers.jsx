import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickers = () => {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    console.log(startDate);
  });

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
    />
  );
};

export default DatePickers;
