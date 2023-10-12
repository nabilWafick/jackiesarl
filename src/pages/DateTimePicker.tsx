import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTimePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>Date and Time Picker</h1>
      <div className="text-white bg-white w-2 first:input:bg-secondary ">
        <DatePicker
          className={` w-full text-black text-md rounded-md bg-transparent py-1.5 px-2 border-2  border-gray-200 focus:outline-none focus:border-2 focus:border-secondary`}
          selected={selectedDate}
          onChange={handleDateChange}
          showTimeSelect
          dateFormat="Pp"
          timeIntervals={15}
          timeCaption="Time"
        />
      </div>

      {selectedDate && <p>You selected: {selectedDate.toLocaleString()}</p>}
    </div>
  );
};

export default DateTimePicker;
