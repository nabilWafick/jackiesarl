import { FC } from "react";
import JSDateIntervalDateTimePicker from "../../../form/widgets/DateIntervalDateTimePicker.widget";
import { Moment } from "moment";

import { FaHistory } from "react-icons/fa";

interface DatesIntervallProps {
  selectedStartDate: Date | Moment | undefined;
  selectedEndDate: Date | Moment | undefined;
  onStartDateChange: (date: Date | Moment) => void;
  onEndDateChange: (date: Date | Moment) => void;
  resetDatesInterval: () => void;
}

const DatesIntervall: FC<DatesIntervallProps> = ({
  selectedStartDate,
  selectedEndDate,
  onStartDateChange,
  onEndDateChange,
  resetDatesInterval,
}) => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="w-max my-3 flex px-2 py-1.5 border-2 border-secondary justify-between items-center rounded-md  shadow-sm  date-config">
        <p className="text-secondary">Période allant </p>
        <p className="mx-2 text-secondary">du</p>

        <JSDateIntervalDateTimePicker
          id="startDate"
          name="startDate"
          placeholder="Date de début"
          selectedDateTime={selectedStartDate}
          onDateChange={onStartDateChange}
        />

        <p className="mx-2 text-secondary">au</p>

        <JSDateIntervalDateTimePicker
          id="endDate"
          name="endDate"
          placeholder="Date de fin"
          selectedDateTime={selectedEndDate}
          onDateChange={onEndDateChange}
        />
        <FaHistory
          className="text-secondary ml-3 mr-2 "
          onClick={() => {
            //    forceUpdate()
            resetDatesInterval();
          }}
        />
      </div>
    </div>
  );
};

export default DatesIntervall;
