import { FC } from "react";
import useClientPaymentAddingForm from "../../../../hooks/forms/client_payment_adding/useClientPaymentAddingForm";
import Modal from "../../../ui/dashboard/widgets/Modal.widget";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input.widget";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";
import JSFormSelect from "../../widgets/FormSelect.widget";

interface ClientPaymentAddingProps {
  bcNumber: string;
  // category: string;
  amount: string;
  bank: string;
  reference: string;
  slip: File | string;
}

const ClientPaymentAdding: FC<ClientPaymentAddingProps> = ({
  bcNumber,
  // category,
  amount,
  bank,
  reference,
  slip,
}) => {
  const {
    formData,
    formErrors,
    onInputDataChange,
    onCategorieSelectChange,
    onFileInputChange,
    onFormClose,
    onFormSubmit,
  } = useClientPaymentAddingForm({
    bcNumber: bcNumber,
    //  category: category,
    amount: amount,
    bank: bank,
    reference: reference,
    slip: slip,
  });

  return (
    <Modal label="client-payment-adding-form">
      <form onSubmit={onFormSubmit}>
        <div
          className="flex flex-col self-center justify-center  items-center my-10' w-[300px] p-3 shadow-xl
        "
        >
          <div className="p-2 mt-1 mb-4 rounded-md shadow-md bg-secondary text-white">
            Paiement
          </div>

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.bcNumber.toString()}
                name="bcNumber"
                id="bcNumber"
                type="text"
                placeholder="Bon de Commande"
                autoComplete="off"
              />
            </div>
            {formErrors.bcNumber && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.bcNumber}
              </p>
            )}
          </div>

          <div className="input-group w-full">
            <div className="mt-3 msoldesb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.amount.toString()}
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

          {/* <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.bank}
                name="bank"
                id="bank"
                type="text"
                placeholder="Banque"
               autoComplete="off"     />
            </div>
            {formErrors.bank && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.bank}
              </p>
            )}
          </div> */}

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSFormSelect
                id="bank"
                name="bank"
                options={[
                  { value: "BOA", label: "BOA" },
                  { value: "UBA", label: "UBA" },
                  { value: "Ecobank", label: "Ecobank" },
                  { value: "NSIA", label: "NSIA" },
                  { value: "SGB", label: "SGB" },
                  { value: "BGFI", label: "BGFI" },
                ]}
                selectedOption={formData.bank}
                onChange={onCategorieSelectChange}
              />
            </div>
            {formErrors.bank && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.bank}
              </p>
            )}
          </div>

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.reference.toString()}
                name="reference"
                id="reference"
                type="text"
                placeholder="Référence"
                autoComplete="off"
              />
            </div>
            {formErrors.reference && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.reference}
              </p>
            )}
          </div>

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onFileInputChange}
                //   value={formData.slip}
                name="slip" // slip === bordereau
                id="slip"
                type="file"
                placeholder="Bordereau"
                autoComplete="off"
              />
            </div>
            {formErrors.slip && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.slip}
              </p>
            )}
          </div>

          <div className="w-full flex flex-row justify-around items-center mt-4 mb-1">
            <JsOutlineButton
              type="button"
              name="Fermer"
              onClick={() => {
                onFormClose();
                toggleModal("client-payment-adding-form");
              }}
            />
            <JsButton type="submit" name="Valider" />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default ClientPaymentAdding;
