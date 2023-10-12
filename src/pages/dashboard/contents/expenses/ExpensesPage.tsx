import ExpensesTable from "../../../../components/ui/dashboard/expenses/ExpensesTable";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton.widget";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import "../../../../assets/css/table.css";
import ExpenseAdding from "../../../../components/form/forms/expense_adding/ExpenseAdding";
import { FC, useEffect } from "react";
import useDepensesStore from "../../../../store/depenses/useDepenses.store";

const ExpensesPage: FC = () => {
  const depenses = useDepensesStore((state) => state.depenses);
  const fetchAllDepenses = useDepensesStore((state) => state.fetchAllDepenses);

  useEffect(() => {
    fetchAllDepenses();
  }, [fetchAllDepenses]);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        {/* <JSCategorySelect
          id="categoty"
          name="category"
          options={[
            { value: "increasing", label: "Ordre croissant" },
            { value: "decreasing", label: "Ordre décroissant" },
          ]}
        /> */}
        <AddingButton
          option="Ajouter une dépense"
          onClick={() => {
            toggleModal("expense-adding-form");
          }}
        />

        <ExpenseAdding description="" amount="" piece="" />
      </div>
      <ExpensesTable expensesList={depenses} />
    </div>
  );
};

export default ExpensesPage;
