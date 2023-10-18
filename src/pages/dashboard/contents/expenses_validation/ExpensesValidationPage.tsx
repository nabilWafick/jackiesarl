import ExpensesValidationTable from "../../../../components/ui/dashboard/expenses_validation/ExpensesValidationTable";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import "../../../../assets/css/table.css";
import { FC, useEffect } from "react";
import useDepensesStore from "../../../../store/depenses/useDepenses.store";
import ActionResult from "../../../../components/ui/dashboard/widgets/ActionResult";

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

        {/* <AddingButton option="Ajouter une activité" onClick={() => {}} /> */}
        <ActionResult />
      </div>
      <ExpensesValidationTable expensesList={depenses} />
    </div>
  );
};

export default ExpensesValidationsPage;
