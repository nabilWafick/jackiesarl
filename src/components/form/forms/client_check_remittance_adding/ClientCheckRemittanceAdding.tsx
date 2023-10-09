import { FC } from "react";
import useClientCheckRemittanceAddingForm from "../../../../hooks/form/client_check_remittance/useClientCheckRemittance";
import Modal from "../../../ui/dashboard/widgets/Modal";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input";
import JsTextarea from "../../widgets/Textarea";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";

interface ClientCheckRemittanceAddingProps {
  description: string;
  bank: string;
  amount: string;
  rest: string;
}

const ClientCheckRemittanceAdding: FC<ClientCheckRemittanceAddingProps> = ({
  description,
  bank,
  amount,
  rest,
}) => {
  const { formData, formErrors, onInputDataChange, onFormSubmit } =
    useClientCheckRemittanceAddingForm({
      description: description,
      bank: bank,
      amount: amount,
      rest: rest,
    });
  return (
    <Modal label="client-check-remittance-adding-form">
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
                onChange={() => {}}
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
                onChange={onInputDataChange}
                value={formData.rest.toString()}
                name="rest"
                id="rest"
                type="number"
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
              name="Annuler"
              onClick={() => toggleModal("client-check-remittance-adding-form")}
            />
            <JsButton type="submit" name="Valider" />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default ClientCheckRemittanceAdding;
