import { FC } from "react";
import Depenses from "../../../../models/depenses/depenses.model";

interface ExpensesTableProps {
  expensesList: Depenses[];
}

const ExpensesTable: FC<ExpensesTableProps> = ({ expensesList }) => {
  return (
    <div className="flex flex-col justify-start w-full ">
      <h2 className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</h2>
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped">
          <tbody>
            <tr>
              {/* <td className="font-medium">Date</td> */}
              <td className="font-medium">Description</td>
              <td className="font-medium">Montant</td>
              <td className="font-medium">Pièce</td>
            </tr>

            {expensesList.map((expenses) => (
              <tr key={expenses.id}>
                {/* <td>01-04-2025</td> */}
                <td>{expenses.description}</td>
                <td>{expenses.montant}</td>
                <td>{expenses.piece}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row items-center content-center">
        <span className=" text-md my-3 font-medium text-gray-700">
          Total Dépenses
        </span>
        <span className="ml-72 text-md">30 000 000</span>
      </div>
    </div>
  );
};

export default ExpensesTable;
