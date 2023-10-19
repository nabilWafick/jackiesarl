import { FC } from "react";
import {
  FaCheck,
  FaCheckCircle,
  FaEdit,
  FaFile,
  FaTrash,
} from "react-icons/fa";
import Depenses from "../../../../models/depenses/depenses.model";
import useInterfacesStore from "../../../../store/interfaces/useInfacesStore";
import ExpenseUpdate from "../../../form/forms/expense_update/ExpenseUpdate";
import { toggleModal } from "../widgets/ToggleModal";
import DepensesAPI from "../../../../api/depenses/depenses.api";
import useDepensesStore from "../../../../store/depenses/useDepenses.store";

interface ExpensesValidationTableProps {
  expensesList: Depenses[];
}

const ExpensesValidationTable: FC<ExpensesValidationTableProps> = ({
  expensesList,
}) => {
  const openSlipFile = (file: string) => {
    try {
      window.open(file, "_blank");
    } catch (error) {
      console.log(error);
    }
  };
  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );

  const fetchAllDepenses = useDepensesStore((state) => state.fetchAllDepenses);

  const updateExpenseValidationStatus = async (expense: Depenses) => {
    const response = await DepensesAPI.update(
      expense.id!,
      new Depenses(
        expense.description,
        expense.montant,
        expense.piece,
        expense.est_validee == 1 ? 0 : 1
      )
    );

    if (response!.status == 200) {
      fetchAllDepenses();
      setActionResultMessage("La dépense a été modifiée avec succès");
      console.log("Added successfuly");
      toggleModal("action-result-message");
    } else if (response!.status == 404) {
      setActionResultMessage("La dépense n'a pas été trouvée");
      toggleModal("action-result-message");
    } else {
      setActionResultMessage("Erreur lors de la mise à jour de la dépense");
      toggleModal("action-result-message");
    }
  };

  return (
    <div className="flex flex-col justify-start w-full ">
      {/* <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p> */}
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped">
          <tbody>
            <tr>
              {/* <td className="font-medium">Date</td> */}
              <td className="font-medium">Description</td>
              <td className="font-medium">Montant</td>
              <td className="font-medium">Pièce</td>
              <td className="font-medium"></td>
              <td className="font-medium"></td>
              <td className="font-medium"></td>
            </tr>

            {expensesList.map((expense) => (
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
                    <FaFile
                      className="text-secondary"
                      onClick={() => openSlipFile(expense.piece.toString())}
                    />
                  )}
                </td>
                <td>
                  <i className="flex justify-end">
                    {expense.est_validee == 1 ? (
                      <FaCheckCircle
                        className="text-secondary"
                        onClick={() => updateExpenseValidationStatus(expense)}
                        size={20}
                      />
                    ) : (
                      <FaCheck
                        className="text-secondary"
                        onClick={() => updateExpenseValidationStatus(expense)}
                        size={20}
                      />
                    )}
                  </i>
                </td>

                <td>
                  <div>
                    <ExpenseUpdate
                      id={expense.id!}
                      description={expense.description}
                      amount={expense.montant.toString()}
                      piece={expense.piece}
                      est_validee={expense.est_validee}
                      modalLabel={`expense-update-form-${expense.id}`}
                    />
                    <i className="flex justify-end">
                      <FaEdit
                        color="green"
                        onClick={() =>
                          toggleModal(`expense-update-form-${expense.id}`)
                        }
                      />
                    </i>
                  </div>
                </td>
                <td>
                  <i className="flex justify-end">
                    <FaTrash
                      color="red"
                      onClick={async () => {
                        const response = await DepensesAPI.delete(expense.id!);

                        if (response!.status == 204) {
                          setActionResultMessage(
                            "La dépense a été supprimée avec succès"
                          );
                          fetchAllDepenses();
                          toggleModal("action-result-message");
                        } else if (response!.status == 404) {
                          setActionResultMessage(
                            "La dépense n'a pas été trouvée"
                          );
                          toggleModal("action-result-message");
                        } else {
                          setActionResultMessage(
                            "Erreur lors de la suppression de dépense"
                          );
                          toggleModal("action-result-message");
                        }
                      }}
                    />
                  </i>
                </td>
              </tr>
            ))}
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

export default ExpensesValidationTable;
