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
    <div className="w-max my-3 flex flex' px-2 py-1.5 border-2 border-secondary justify-between items-center rounded-md  shadow-sm  date-config md:mx-3 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
      {/* <p className=" font-medium text-secondary">Période allant</p> */}
      <div className="flex flex-col md:flex-row ">
        <div className="flex mb-0.5 md:mb-0">
          <p className="font-medium text-center flex items-center text-secondary mx-2">
            Du
          </p>
          <JSDateIntervalDateTimePicker
            id="startDate"
            name="startDate"
            placeholder="Date de début"
            selectedDateTime={selectedStartDate}
            onDateChange={onStartDateChange}
          />
        </div>
        <div className="flex mt-0.5 md:mt-0">
          <p className="font-medium text-center flex items-center mx-2 text-secondary">
            Au
          </p>
          <JSDateIntervalDateTimePicker
            id="endDate"
            name="endDate"
            placeholder="Date de fin"
            selectedDateTime={selectedEndDate}
            onDateChange={onEndDateChange}
          />
        </div>
      </div>
      <div className="mt-2">
        <FaHistory
          className="text-secondary ml-3 hover:cursor-pointer"
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
