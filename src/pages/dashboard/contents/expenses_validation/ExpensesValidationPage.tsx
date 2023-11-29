import ExpensesValidationTable from "../../../../components/ui/dashboard/expenses_validation/ExpensesValidationTable";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import "../../../../assets/css/table.css";
import { FC, useEffect } from "react";
import useDepensesValidationStore from "../../../../store/depenses_validation/useDepensesValidation.store";
import ActionResult from "../../../../components/ui/dashboard/widgets/ActionResult";
import JSSelect from "../../../../components/form/widgets/Select.widget";

const ExpensesValidationsPage: FC = () => {
  const depenses = useDepensesValidationStore((state) => state.depenses);
  const fetchAllDepenses = useDepensesValidationStore(
    (state) => state.fetchAllDepenses
  );
  const selectedSortOption = useDepensesValidationStore(
    (state) => state.selectedSortOption
  );
  const startDate = useDepensesValidationStore((state) => state.startDate);
  const endDate = useDepensesValidationStore((state) => state.endDate);
  const onSelectedSetOptionChange = useDepensesValidationStore(
    (state) => state.onSelectedSetOptionChange
  );
  const onStartDateChange = useDepensesValidationStore(
    (state) => state.onStartDateChange
  );
  const onEndDateChange = useDepensesValidationStore(
    (state) => state.onEndDateChange
  );
  const resetDatesInterval = useDepensesValidationStore(
    (state) => state.resetDatesInterval
  );

  useEffect(() => {
    fetchAllDepenses();
  }, [fetchAllDepenses]);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center my-2 content-center">
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
            { value: "new-to-old", label: "Nouveau à Ancien" },
            { value: "old-to-new", label: "Ancien à Nouveau" },
            { value: "more-important", label: "Plus Important" },
            { value: "less-important", label: "Moins Important" },
            { value: "unvalidated", label: "Non Validée" },
            { value: "validated", label: "Validée" },
          ]}
          onChange={onSelectedSetOptionChange}
        />

        <ActionResult />
      </div>
      <ExpensesValidationTable expensesList={depenses} />
    </div>
  );
};

export default ExpensesValidationsPage;
