import ExpensesValidationTable from "../../../../components/ui/dashboard/expenses_validation/ExpensesValidationTable";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall";
import "../../../../assets/css/table.css";
import { FC, useEffect } from "react";
import useDepensesStore from "../../../../store/depenses/useDepenses.store";

const ExpensesValidationsPage: FC = () => {
  const depenses = useDepensesStore((state) => state.depenses);
  const fetchAllDepenses = useDepensesStore((state) => state.fetchAllDepenses);

  useEffect(() => {
    fetchAllDepenses();
  }, [fetchAllDepenses]);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        <AddingButton option="Ajouter une activité" onClick={() => {}} />
      </div>
      <ExpensesValidationTable expensesList={depenses} />
    </div>
  );
};

export default ExpensesValidationsPage;
