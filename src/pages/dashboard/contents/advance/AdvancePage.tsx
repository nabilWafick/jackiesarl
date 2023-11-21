import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import AdvanceTable from "../../../../components/ui/dashboard/advance/AdvanceTable";
import "../../../../assets/css/table.css";
import { FC, useEffect } from "react";
import useAvanceStore from "../../../../store/avance/useAvance.store";
import JSSelect from "../../../../components/form/widgets/Select.widget";

const AdvancePage: FC = () => {
  const avances = useAvanceStore((state) => state.avances);
  const fetchAvances = useAvanceStore((state) => state.fetchAvances);

  const selectedSortOption = useAvanceStore(
    (state) => state.selectedSortOption
  );
  const startDate = useAvanceStore((state) => state.startDate);
  const endDate = useAvanceStore((state) => state.endDate);
  const onSelectedSetOptionChange = useAvanceStore(
    (state) => state.onSelectedSetOptionChange
  );
  const onStartDateChange = useAvanceStore((state) => state.onStartDateChange);
  const onEndDateChange = useAvanceStore((state) => state.onEndDateChange);
  const resetDatesInterval = useAvanceStore(
    (state) => state.resetDatesInterval
  );
  useEffect(() => {
    fetchAvances();
  }, [fetchAvances]);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-start items-center mt-2 my-3 content-center">
        <DateIntervall
          selectedStartDate={startDate}
          selectedEndDate={endDate}
          onStartDateChange={onStartDateChange}
          onEndDateChange={onEndDateChange}
          resetDatesInterval={resetDatesInterval}
        />

        <JSSelect
          id="clients-select"
          name="clients-select"
          selectedOption={selectedSortOption}
          options={[
            { value: "more-important", label: "Plus Important" },
            { value: "less-important", label: "Moins Important" },
          ]}
          onChange={onSelectedSetOptionChange}
        />
      </div>
      <AdvanceTable avances={avances} />
    </div>
  );
};

export default AdvancePage;
