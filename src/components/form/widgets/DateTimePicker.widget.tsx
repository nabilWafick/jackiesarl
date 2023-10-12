import { FC } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
interface JSDateTimePickerProps {
  id: string;
  name: string;
  selectedDate: Date | null;
  onChange: (name: string, date: Date | null) => void;
}

const JSDateTimePicker: FC<JSDateTimePickerProps> = ({
  id,
  name,
  selectedDate,
  onChange,
}) => {
  return (
    <DatePicker
      id={id}
      name={name}
      selected={selectedDate}
      onChange={onChange}
      showTimeSelect
      dateFormat="Pp"
      timeIntervals={15}
      timeCaption="Time"
      className={` w-full text-black text-md rounded-md bg-transparent py-1.5 px-2 border-2  border-gray-200 focus:outline-none focus:border-2 focus:border-secondary`}
    />
  );
};

export default JSDateTimePicker;
