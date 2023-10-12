import { FC } from "react";
import useExpenseAddingForm from "../../../../hooks/form/expense_adding/useExpenseAddingForm";
import Modal from "../../../ui/dashboard/widgets/Modal.widget";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input.widget";
import JsTextarea from "../../widgets/Textarea.widget";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";

interface ExpenseAddingProps {
  description: string;
  amount: string;
  piece: File;
}

const ExpenseAdding: FC<ExpenseAddingProps> = ({
  description,
  amount,
  piece,
}) => {
  const {
    formData,
    formErrors,
    onInputDataChange,
    onFileInputChange,
    onTextareaChange,
    onFormSubmit,
  } = useExpenseAddingForm({
    description: description,
    amount: amount,
    piece: piece,
  });

  return (
    <Modal label="expense-adding-form">
      <form onSubmit={onFormSubmit}>
        <div
          className="flex flex-col self-center justify-center bg-white items-center my-10' w-[300px] p-3 shadow-xl
        "
        >
          <div className="p-2 mt-1 mb-4 rounded-md shadow-md bg-secondary text-white">
            Dépense
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JsTextarea
                onChange={onTextareaChange}
                value={formData.description}
                name="description"
                id="description"
                placeholder="Description"
              />
              ,
            </div>
            {formErrors.description && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.description}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.amount.toString()}
                name="amount"
                id="amount"
                type="number"
                placeholder="Montant"
                autoComplete="amount"
              />
            </div>
            {formErrors.amount && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.amount}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onFileInputChange}
                //   value={formData.piece}
                name="piece"
                id="piece"
                type="text"
                placeholder="Pièce"
                autoComplete="piece"
              />
            </div>
            {formErrors.piece && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.piece}
              </p>
            )}
          </div>

          <div className="w-full flex flex-row justify-around items-center mt-4 mb-1">
            <JsOutlineButton
              type="button"
              name="Annuler"
              onClick={() => toggleModal("client-purchase-adding-form")}
            />
            <JsButton type="submit" name="Valider" />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default ExpenseAdding;
