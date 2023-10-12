import JSSelect from "../../../form/widgets/Select.widget";

function DateIntervall() {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="w-max my-3 flex p-2 border-2 border-secondary justify-between items-center rounded-md  shadow-md  date-config">
        <p className="text-secondary">Définissez votre intervalle : </p>
        <p className="mx-3 text-secondary">Du</p>
        <JSSelect
          name="first-date"
          id="first-date"
          options={[
            { value: "date1", label: "Date 1" },
            { value: "date2", label: "Date 2" },
            { value: "date3", label: "Date 3" },
          ]}
        />

        <p className="mx-3 text-secondary">au</p>

        <JSSelect
          name="second-date"
          id="second-date"
          options={[
            { value: "date4", label: "Date 4" },
            { value: "date5", label: "Date 5" },
            { value: "date6", label: "Date 6" },
          ]}
        />
      </div>
    </div>
  );
}

export default DateIntervall;
