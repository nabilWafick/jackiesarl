import { FC } from "react";
import usePurchaseOrderStock from "../../../../hooks/forms/purchase_order_stock_adding/usePurchaseOrderStockAddingForm";
import Modal from "../../../ui/dashboard/widgets/Modal.widget";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input.widget";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";

interface PurchaseOrderStockAddingProps {
  bcNumber: string;
  //  category: string;
  //  purchasedQuantity: string;
  initialStock: string;
  //  sale: string;
  //  quantityAfterSelling: string;
}

const PurchaseOrderStockAdding: FC<PurchaseOrderStockAddingProps> = ({
  bcNumber,
  // category,
  // purchasedQuantity,
  initialStock,
  // sale,
  // quantityAfterSelling,
}) => {
  const { formData, formErrors, onInputDataChange, onFormClose, onFormSubmit } =
    usePurchaseOrderStock({
      bcNumber: bcNumber,
      //  category: category,
      //  purchasedQuantity: purchasedQuantity,
      initialStock: initialStock,
      //  sale: sale,
      //  quantityAfterSelling: quantityAfterSelling,
    });
  return (
    <Modal label="purchase-order-stock-adding-form">
      <form onSubmit={onFormSubmit}>
        <div
          className="flex flex-col self-center justify-center items-center my-10' w-[300px] p-3 shadow-xl
        "
        >
          <div className="p-2 mt-1 mb-4 rounded-md shadow-md bg-secondary text-white">
            Stock Bon de Commande
          </div>

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.bcNumber}
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

          {/* <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.category}
                name="category"
                id="category"
                type="text"
                placeholder="Catégorie"
               // autoComplete="category"
              />
            </div>
            {formErrors.category && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.category}
              </p>
            )}
          </div>

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.purchasedQuantity}
                name="purchasedQuantity"
                id="purchasedQuantity"
                type="text"
                placeholder="Quantité Achetée"
               // autoComplete="purchasedQuantity"
              />
            </div>
            {formErrors.purchasedQuantity && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.purchasedQuantity}
              </p>
            )}
          </div> */}

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.initialStock}
                name="initialStock"
                id="initialStock"
                type="text"
                placeholder="Stock Initial"
                autoComplete="off"
              />
            </div>
            {formErrors.initialStock && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.initialStock}
              </p>
            )}
          </div>

          {/* <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.sale}
                name="sale"
                id="sale"
                type="text"
                placeholder="Vente"
               // autoComplete="sale"
              />
            </div>
            {formErrors.sale && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.sale}
              </p>
            )}
          </div>

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.quantityAfterSelling}
                name="quantityAfterSelling"
                id="quantityAfterSelling"
                type="text"
                placeholder="Stock Après Vente"
               // autoComplete="quantityAfterSelling"
              />
            </div>
            {formErrors.quantityAfterSelling && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.quantityAfterSelling}
              </p>
            )}
          </div> */}

          <div className="w-full flex flex-row justify-around items-center mt-4 mb-1">
            <JsOutlineButton
              type="button"
              name="Fermer"
              onClick={() => {
                onFormClose();
                toggleModal("purchase-order-stock-adding-form");
              }}
            />
            <JsButton type="submit" name="Valider" />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default PurchaseOrderStockAdding;
