import { FC } from "react";
//import { fr } from "date-fns/locale";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
interface JSDateTimePickerProps {
  id: string;
  name: string;
  placeholder: string;
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
}

const JSDateTimePicker: FC<JSDateTimePickerProps> = ({
  id,
  name,
  placeholder,
  selectedDate,
  onChange,
}) => {
  return (
    <DatePicker
      id={id}
      name={name}
      selected={selectedDate}
      placeholder={placeholder}
      onChange={onChange}
      // locale={fr}
      showTimeSelect
      dateFormat="Pp"
      timeIntervals={15}
      timeCaption="Time"
      className={` w-full text-black text-md rounded-md bg-transparent py-1.5 px-2 border-2  border-gray-200 focus:outline-none focus:border-2 focus:border-secondary`}
    />
  );
};

export default JSDateTimePicker;
