import useBankAddingForm from "../../../../hooks/form/bank_adding/useBankAddingForm";
import Modal from "../../../ui/dashboard/widgets/Modal";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input";

const BankAdding = () => {
  const { formData, formErrors, onInputDataChange, onFormSubmit } =
    useBankAddingForm();
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
              <JSInput
                onChange={onInputDataChange}
                value={formData.bank}
                name="bank"
                id="bank"
                type="text"
                placeholder="Nom de la Banque"
                autoComplete="bank"
              />
            </div>
            {formErrors.bank && (
              <p className="erreur ml-1.5 text-[11px] text-gray-700">
                {formErrors.bank}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              {" "}
              <JSInput
                onChange={onInputDataChange}
                value={formData.accountNumber.toString()}
                name="accountNumber"
                id="accountNumber"
                type="number"
                placeholder="Numéro de compte"
                autoComplete="accountNumber"
              />
            </div>
            {formErrors.accountNumber && (
              <p className="erreur ml-1.5 text-[11px] text-gray-700">
                {formErrors.accountNumber}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              {" "}
              <JSInput
                onChange={onInputDataChange}
                value={formData.currentBalence.toString()}
                name="currentBalance"
                id="currentBalance"
                type="number"
                placeholder="Solde actuel"
                autoComplete="currentBalance"
              />
            </div>
            {formErrors.currentBalence && (
              <p className="erreur ml-1.5 text-[11px] text-gray-700">
                {formErrors.currentBalence}
              </p>
            )}
          </div>

          <div className="w-full flex flex-row justify-around items-center mt-4 mb-1">
            <JsOutlineButton type="button" name="Annuler" onClick={() => {}} />
            <JsButton type="submit" name="Valider" />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default BankAdding;
