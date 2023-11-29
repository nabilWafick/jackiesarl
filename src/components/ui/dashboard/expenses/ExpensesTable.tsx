import { FC } from "react";
import Depenses from "../../../../models/depenses/depenses.model";
import { FaFile } from "react-icons/fa";
import "../../../../assets/css/Sidebar.css";

interface ExpensesTableProps {
  expensesList: Depenses[];
}

const ExpensesTable: FC<ExpensesTableProps> = ({ expensesList }) => {
  return (
    <div className="flex flex-col justify-start w-full ">
      {/* <h2 className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</h2> */}
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md overflow-auto sidebar">
        <table className="table table-striped text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
          <tbody>
            <tr>
              {/* <td className="font-medium">Date</td> */}
              <td className="font-medium">Description</td>
              <td className="font-medium">Montant</td>
              <td className="font-medium">Pièce</td>
            </tr>

            {expensesList.map((expense) => {
              if (expense.est_validee == 1)
                return (
                  <tr key={expense.id}>
                    {/* <td>01-04-2025</td> */}
                    <td>{expense.description}</td>
                    <td>
                      {expense.montant} <i> fcfa</i>
                    </td>
                    <td>
                      {expense.piece == "" ? (
                        ""
                      ) : (
                        <a
                          href={expense.piece as string}
                          target="_blank"
                          download={true}
                        >
                          <FaFile className="text-secondary" />
                        </a>
                      )}
                    </td>
                  </tr>
                );
            })}
          </tbody>
        </table>
      </div>
      {/* <div className="flex flex-row items-center content-center">
        <span className=" text-md my-3 font-medium text-gray-700">
          Total Dépenses
        </span>
        <span className="ml-72 text-md">30 000 000</span>
      </div> */}
    </div>
  );
};

export default ExpensesTable;
