import { FC } from "react";
import useClientPurchaseAddingForm from "../../../../hooks/form/client_purchase_adding/useClientPurchaseAddingForm";
import Modal from "../../../ui/dashboard/widgets/Modal.widget";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input.widget";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";

interface ClientPurchaseAddingProps {
  quantity: string;
  category: string;
  amount: string;
  ctpNumber: string;
  slip: File;
  bcNumber: string;
}

const ClientPurchaseAdding: FC<ClientPurchaseAddingProps> = ({
  quantity,
  category,
  amount,
  ctpNumber,
  slip,
  bcNumber,
}) => {
  const {
    formData,
    formErrors,
    onInputDataChange,
    onFileInputChange,
    onFormSubmit,
  } = useClientPurchaseAddingForm({
    quantity: quantity,
    category: category,
    amount: amount,
    ctpNumber: ctpNumber,
    slip: slip,
    bcNumber: bcNumber,
  });
  return (
    <Modal label="client-purchase-adding-form">
      <form onSubmit={onFormSubmit}>
        <div
          className="flex flex-col self-center justify-center bg-white items-center my-10' w-[300px] p-3 shadow-xl
        "
        >
          <div className="p-2 mt-1 mb-4 rounded-md shadow-md bg-secondary text-white">
            Achat
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.quantity.toString()}
                name="quantity"
                id="quantity"
                type="number"
                placeholder="Quantité"
                autoComplete="quantity"
              />
            </div>
            {formErrors.quantity && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.quantity}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.quantity.toString()}
                name="quantity"
                id="quantity"
                type="number"
                placeholder="Quantité"
                autoComplete="quantity"
              />
            </div>
            {formErrors.quantity && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.quantity}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.quantity.toString()}
                name="category"
                id="category"
                type="text"
                placeholder="Catégorie"
                autoComplete="category"
              />
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
                value={formData.ctpNumber.toString()}
                name="ctpNumber"
                id="ctpNumber"
                type="number"
                placeholder="Numéro CTP"
                autoComplete="ctpNumber"
              />
            </div>
            {formErrors.ctpNumber && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.ctpNumber}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onFileInputChange}
                //     value={formData.slip}
                name="slip" // slip === bordereau
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

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.bcNumber.toString()}
                name="bcNumber"
                id="bcNumber"
                type="number"
                placeholder="Numéro BC"
                autoComplete="bcNumber"
              />
            </div>
            {formErrors.bcNumber && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.bcNumber}
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

export default ClientPurchaseAdding;
