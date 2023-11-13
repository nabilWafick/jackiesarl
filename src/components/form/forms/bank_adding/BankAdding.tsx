import { FC } from "react";
import useBankAddingForm from "../../../../hooks/forms/bank_adding/useBankAddingForm";
import Modal from "../../../ui/dashboard/widgets/Modal.widget";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input.widget";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";
import JSFormSelect from "../../widgets/FormSelect.widget";

interface BankAddingProps {
  bank: string;
  accountNumber: string;
  currentBalence: string;
}

const BankAdding: FC<BankAddingProps> = ({
  bank,
  accountNumber,
  currentBalence,
}) => {
  const {
    formData,
    formErrors,
    onInputDataChange,
    onCategorieSelectChange,
    onFormClose,
    onFormSubmit,
  } = useBankAddingForm({
    bank: bank,
    accountNumber: accountNumber,
    currentBalence: currentBalence,
  });
  return (
    <Modal label="bank-adding-form">
      <form onSubmit={onFormSubmit}>
        <div
          className="flex flex-col self-center justify-center bg-white items-center my-10' w-[300px] p-3 shadow-xl
        "
        >
          <div className="p-2 mt-1 mb-4 rounded-md shadow-md bg-secondary text-white">
            Banque
          </div>

          <div className="input-group">
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

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.accountNumber}
                name="accountNumber"
                id="accountNumber"
                type="text"
                placeholder="Numéro de compte"
                autoComplete="accountNumber"
              />
            </div>
            {formErrors.accountNumber && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.accountNumber}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.currentBalence}
                name="currentBalence"
                id="currentBalence"
                type="text"
                placeholder="Solde actuel"
                autoComplete="currentBalence"
              />
            </div>
            {formErrors.currentBalence && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.currentBalence}
              </p>
            )}
          </div>

          <div className="w-full flex flex-row justify-around items-center mt-4 mb-1">
            <JsOutlineButton
              type="button"
              name="Fermer"
              onClick={() => {
                onFormClose();
                toggleModal("bank-adding-form");
              }}
            />
            <JsButton type="submit" name="Valider" />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default BankAdding;
