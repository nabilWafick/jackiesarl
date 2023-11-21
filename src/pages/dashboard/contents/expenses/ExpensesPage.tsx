import ExpensesTable from "../../../../components/ui/dashboard/expenses/ExpensesTable";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton.widget";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import ExpenseAdding from "../../../../components/form/forms/expense_adding/ExpenseAdding";
import { FC, useEffect } from "react";
import useDepensesStore from "../../../../store/depenses/useDepenses.store";
import ActionResult from "../../../../components/ui/dashboard/widgets/ActionResult";
import JSSelect from "../../../../components/form/widgets/Select.widget";

const ExpensesPage: FC = () => {
  const depenses = useDepensesStore((state) => state.depenses);
  const fetchAllDepenses = useDepensesStore((state) => state.fetchAllDepenses);

  const selectedSortOption = useDepensesStore(
    (state) => state.selectedSortOption
  );
  const startDate = useDepensesStore((state) => state.startDate);
  const endDate = useDepensesStore((state) => state.endDate);
  const onSelectedSetOptionChange = useDepensesStore(
    (state) => state.onSelectedSetOptionChange
  );
  const onStartDateChange = useDepensesStore(
    (state) => state.onStartDateChange
  );
  const onEndDateChange = useDepensesStore((state) => state.onEndDateChange);
  const resetDatesInterval = useDepensesStore(
    (state) => state.resetDatesInterval
  );

  useEffect(() => {
    fetchAllDepenses();
  }, [fetchAllDepenses]);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex  self-end items-center">
        <AddingButton
          option="Ajouter une dépense"
          onClick={() => {
            toggleModal("expense-adding-form");
          }}
        />
      </div>
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
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
            // { value: "unvalidated", label: "Non Validée" },
            // { value: "validated", label: "Validée" },
          ]}
          onChange={onSelectedSetOptionChange}
        />
        <ExpenseAdding description="" amount="" piece="" />
        <ActionResult />
      </div>
      <ExpensesTable expensesList={depenses} />
    </div>
  );
};

export default ExpensesPage;
