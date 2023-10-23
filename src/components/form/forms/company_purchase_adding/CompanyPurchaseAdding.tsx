import { FC } from "react";
import useCompanyPurchaseForm from "../../../../hooks/form/company_purchase_adding/useCompanyPurchaseAddingForm";
import Modal from "../../../ui/dashboard/widgets/Modal.widget";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input.widget";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";
import JSFormSelect from "../../widgets/FormSelect.widget";

interface CompanyPurchasseAddingProps {
  bcNumber: string;
  category: string;
  purchasedQuantity: string;
  amount: string;
  bank: string;
  check: string;
  slip: File | string;
}

const CompanyPurchasseAdding: FC<CompanyPurchasseAddingProps> = ({
  bcNumber,
  category,
  purchasedQuantity,
  amount,
  bank,
  check,
  slip,
}) => {
  const {
    formData,
    formErrors,
    onInputDataChange,
    onFileInputChange,
    onCategorieSelectChange,
    onFormClose,
    onFormSubmit,
  } = useCompanyPurchaseForm({
    bcNumber: bcNumber,
    category: category,
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
                value={formData.bcNumber}
                name="bcNumber"
                id="bcNumber"
                type="text"
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
              <JSFormSelect
                id="category"
                name="category"
                options={[
                  { value: "CIM BENIN", label: "CIM BENIN" },
                  { value: "NOCIBE", label: "NOCIBE" },
                ]}
                selectedOption={formData.category}
                onChange={onCategorieSelectChange}
              />
              {/* <JSInput
                onChange={onInputDataChange}
                value={formData.category}
                name="category"
                id="category"
                type="text"
                placeholder="Catégorie"
                autoComplete="category"
              /> */}
            </div>
            {formErrors.category && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.category}
              </p>
            )}
          </div>
          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.purchasedQuantity}
                name="purchasedQuantity"
                id="purchasedQuantity"
                type="text"
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
                value={formData.amount}
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
                value={formData.check}
                name="check"
                id="check"
                type="text"
                placeholder="Chèque"
                autoComplete="check"
              />
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
                onChange={onFileInputChange}
                //    value={formData.slip}
                name="slip"
                id="slip"
                type="file"
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
              name="Fermer"
              onClick={() => {
                onFormClose();
                toggleModal("company-purchase-adding-form");
              }}
            />
            <JsButton type="submit" name="Valider" />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default CompanyPurchasseAdding;
