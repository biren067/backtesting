import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDate = ({title}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Function to check if a date is enabled
  const isDateEnabled = (date) => {
    // Example: Disable weekends
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return (<>
  <div className='flex border-2 items-center'>
    <label>{title}</label>
  <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      className='custom_date px-2    m-2'
      filterDate={isDateEnabled} // Use filterDate to enable/disable specific dates
    />
  </div>
  </>
  
  );
};

export default CustomDate;
