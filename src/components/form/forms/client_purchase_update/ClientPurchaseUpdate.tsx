import { FC } from "react";
import Modal from "../../../ui/dashboard/widgets/Modal.widget";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input.widget";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";
import useClientPurchaseUpdateForm from "../../../../hooks/form/client_purchase_update/useClientPurchaseUpdateForm";

interface ClientPurchaseUpdateProps {
  id: number;
  quantity: string;
  category: string;
  amount: string;
  ctpNumber: string;
  slip: File | string;
  bcNumber: string;
  modalLabel: string;
}

const ClientPurchaseUpdate: FC<ClientPurchaseUpdateProps> = ({
  id,
  quantity,
  category,
  amount,
  ctpNumber,
  slip,
  bcNumber,
  modalLabel,
}) => {
  const {
    formData,
    formErrors,
    onInputDataChange,
    onFileInputChange,
    onFormClose,
    onFormSubmit,
  } = useClientPurchaseUpdateForm(
    {
      id,
      quantity,
      category: category,
      amount: amount,
      ctpNumber: ctpNumber,
      slip: slip,
      bcNumber: bcNumber,
    },
    modalLabel
  );
  return (
    <Modal label={modalLabel}>
      <form onSubmit={onFormSubmit} encType="multipart/form-data">
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
                value={formData.quantity}
                name="quantity"
                id="quantity"
                type="text"
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
                value={formData.category}
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
                value={formData.ctpNumber}
                name="ctpNumber"
                id="ctpNumber"
                type="text"
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

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.bcNumber}
                name="bcNumber"
                id="bcNumber"
                type="text"
                placeholder="Bon de commande"
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

export default ClientPurchaseUpdate;
