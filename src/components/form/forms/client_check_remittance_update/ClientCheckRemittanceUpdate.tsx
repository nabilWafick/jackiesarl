import { FC } from "react";
import useClientCheckRemittanceUpdateForm from "../../../../hooks/forms/client_check_remittance_update/useClientCheckRemittanceUpdateForm";
import Modal from "../../../ui/dashboard/widgets/Modal.widget";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input.widget";
import JsTextarea from "../../widgets/Textarea.widget";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";

interface ClientCheckRemittanceUpdateProps {
  id: number;
  description: string;
  bank: string;
  amount: string;
  rest: string;
  est_validee: number;
  modalLabel: string;
}

const ClientCheckRemittanceUpdate: FC<ClientCheckRemittanceUpdateProps> = ({
  id,
  description,
  bank,
  amount,
  rest,
  est_validee,
  modalLabel,
}) => {
  const {
    formData,
    formErrors,
    onInputDataChange,
    onTextareaChange,
    onFormClose,
    onFormSubmit,
  } = useClientCheckRemittanceUpdateForm(
    {
      id: id,
      description: description,
      bank: bank,
      amount: amount,
      rest: rest,
      est_validee: est_validee,
    },
    modalLabel
  );
  return (
    <Modal label={modalLabel}>
      <form onSubmit={onFormSubmit}>
        <div
          className="flex flex-col self-center justify-center bg-white items-center my-10' w-[300px] p-3 shadow-xl
        "
        >
          <div className="p-2 mt-1 mb-4 rounded-md shadow-md bg-secondary text-white">
            Remise de chèque
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
                value={formData.bank}
                name="bank"
                id="bank"
                type="text"
                placeholder="Banque"
                autoComplete="bank"
              />
            </div>
            {formErrors.bank && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.bank}
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
                type="text"
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
                onChange={onInputDataChange}
                value={formData.rest.toString()}
                name="rest"
                id="rest"
                type="text"
                placeholder="Reste"
                autoComplete="rest"
              />
            </div>
            {formErrors.rest && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.rest}
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

export default ClientCheckRemittanceUpdate;
