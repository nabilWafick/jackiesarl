import { FC } from "react";
import useCompanyPurchaseForm from "../../../../hooks/form/company_purchase_adding/useCompanyPurchaseAddingForm";
import Modal from "../../../ui/dashboard/widgets/Modal";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";

interface CompanyPurchasseAddingProps {
  bcNumber: string;
  purchasedQuantity: string;
  amount: string;
  bank: string;
  check: string;
  slip: string;
}

const CompanyPurchasseAdding: FC<CompanyPurchasseAddingProps> = ({
  bcNumber,
  purchasedQuantity,
  amount,
  bank,
  check,
  slip,
}) => {
  const { formData, formErrors, onInputDataChange, onFormSubmit } =
    useCompanyPurchaseForm({
      bcNumber: bcNumber,
      purchasedQuantity: purchasedQuantity,
      amount: amount,
      bank: bank,
      check: check,
      slip: slip,
    });
  return (
    <Modal label="company-purchase-adding-form">
      <form onSubmit={onFormSubmit}>
        <div
          className="flex flex-col self-center justify-center bg-white items-center my-10' w-[300px] p-3 shadow-xl
        "
        >
          <div className="p-2 mt-1 mb-4 rounded-md shadow-md bg-secondary text-white">
            Achat Entreprise
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.bcNumber.toString()}
                name="bcNumber"
                id="bcNumber"
                type="number"
                placeholder="Bon de Commande"
                autoComplete="bcNumber"
              />
            </div>
            {formErrors.bcNumber && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.bcNumber}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.purchasedQuantity.toString()}
                name="purchasedQuantity"
                id="purchasedQuantity"
                type="number"
                placeholder="Quantité Achetée"
                autoComplete="purchasedQuantity"
              />
            </div>
            {formErrors.purchasedQuantity && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.purchasedQuantity}
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
                value={formData.check.toString()}
                name="check"
                id="check"
                type="number"
                placeholder="Chèque"
                autoComplete="check"
              />{" "}
            </div>
            {formErrors.check && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.check}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.slip}
                name="slip"
                id="slip"
                type="text"
                placeholder="Bordereau"
                autoComplete="slip"
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
              name="Annuler"
              onClick={() => toggleModal("company-purchase-adding-form")}
            />
            <JsButton type="submit" name="Valider" />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default CompanyPurchasseAdding;
