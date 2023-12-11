import { FC } from "react";
import useExpenseUpdateForm from "../../../../hooks/forms/expense_update/useExpenseUpdateForm";
import Modal from "../../../ui/dashboard/widgets/Modal.widget";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input.widget";
import JsTextarea from "../../widgets/Textarea.widget";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";

interface ExpenseUpdateProps {
  id: number;
  description: string;
  amount: string;
  piece: File | string;
  est_validee: number;
  modalLabel: string;
}

const ExpenseUpdate: FC<ExpenseUpdateProps> = ({
  id,
  description,
  amount,
  piece,
  est_validee,
  modalLabel,
}) => {
  const {
    formData,
    formErrors,
    onInputDataChange,
    onFileInputChange,
    onTextareaChange,
    onFormClose,
    onFormSubmit,
  } = useExpenseUpdateForm(
    {
      id: id,
      description: description,
      amount: amount,
      piece: piece,
      est_validee: est_validee,
    },
    modalLabel
  );

  return (
    <Modal label={modalLabel}>
      <form onSubmit={onFormSubmit}>
        <div
          className="flex flex-col self-center justify-center items-center my-10' w-[300px] p-3 shadow-xl
        "
        >
          <div className="p-2 mt-1 mb-4 rounded-md shadow-md bg-secondary text-white">
            Dépense
          </div>

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JsTextarea
                onChange={onTextareaChange}
                value={formData.description}
                name="description"
                id="description"
                placeholder="Description"
              />
            </div>
            {formErrors.description && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.description}
              </p>
            )}
          </div>

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.amount}
                name="amount"
                id="amount"
                type="text"
                placeholder="Montant"
                autoComplete="off"
              />
            </div>
            {formErrors.amount && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.amount}
              </p>
            )}
          </div>

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onFileInputChange}
                name="piece"
                id="piece"
                type="file"
                placeholder="Pièce"
                autoComplete="off"
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
              name="Fermer"
              onClick={() => {
                onFormClose();
                toggleModal(modalLabel);
              }}
            />
            <JsButton type="submit" name="Valider" />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default ExpenseUpdate;
