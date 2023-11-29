import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import ModificationsTable from "../../../../components/ui/dashboard/modifications/ModificationsTable";
import "../../../../assets/css/table.css";
import { FC, useEffect } from "react";
import useModificationsStore from "../../../../store/modifications/useModifications.store";

const ModificationsPage: FC = () => {
  // const employees = useEmployesStore((state) => state.employees);
  // const fetchAllEmployes = useEmployesStore((state) => state.fetchAllEmployes);
  const modifications = useModificationsStore((state) => state.modifications);
  const fetchAllModifications = useModificationsStore(
    (state) => state.fetchAllModifications
  );
  // const selectedSortOption = useModificationsStore(
  //   (state) => state.selectedSortOption
  // );
  const startDate = useModificationsStore((state) => state.startDate);
  const endDate = useModificationsStore((state) => state.endDate);
  // const onSelectedSetOptionChange = useModificationsStore(
  //   (state) => state.onSelectedSetOptionChange
  // );
  const onStartDateChange = useModificationsStore(
    (state) => state.onStartDateChange
  );
  const onEndDateChange = useModificationsStore(
    (state) => state.onEndDateChange
  );
  const resetDatesInterval = useModificationsStore(
    (state) => state.resetDatesInterval
  );

  useEffect(() => {
    fetchAllModifications();
  }, [fetchAllModifications]);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-col lg:flex-row justify-center items-center my-2 content-center">
        <DateIntervall
          selectedStartDate={startDate}
          selectedEndDate={endDate}
          onStartDateChange={onStartDateChange}
          onEndDateChange={onEndDateChange}
          resetDatesInterval={resetDatesInterval}
        />
      </div>
      <ModificationsTable modifications={modifications} />
    </div>
  );
};

export default ModificationsPage;
