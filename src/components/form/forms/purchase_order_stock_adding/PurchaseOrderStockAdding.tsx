import { FC } from "react";
import usePurchaseOrderStock from "../../../../hooks/form/purchase_order_stock_adding/usePurchaseOrderStockAddingForm";
import Modal from "../../../ui/dashboard/widgets/Modal";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";

interface PurchaseOrderStockAddingProps {
  bcNumber: string;
  category: string;
  purchasedQuantity: string;
  initialStock: string;
  sale: string;
  currentStock: string;
}

const PurchaseOrderStockAdding: FC<PurchaseOrderStockAddingProps> = ({
  bcNumber,
  category,
  purchasedQuantity,
  initialStock,
  sale,
  currentStock,
}) => {
  const { formData, formErrors, onInputDataChange, onFormSubmit } =
    usePurchaseOrderStock({
      bcNumber: bcNumber,
      category: category,
      purchasedQuantity: purchasedQuantity,
      initialStock: initialStock,
      sale: sale,
      currentStock: currentStock,
    });
  return (
    <Modal label="purchase-order-stock-adding-form">
      <form onSubmit={onFormSubmit}>
        <div
          className="flex flex-col self-center justify-center bg-white items-center my-10' w-[300px] p-3 shadow-xl
        "
        >
          <div className="p-2 mt-1 mb-4 rounded-md shadow-md bg-secondary text-white">
            Stock Bon de Commande
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
                value={formData.initialStock.toString()}
                name="initialStock"
                id="initialStock"
                type="number"
                placeholder="Stock Initial"
                autoComplete="initialStock"
              />
            </div>
            {formErrors.initialStock && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.initialStock}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.sale.toString()}
                name="sale"
                id="sale"
                type="number"
                placeholder="Vente"
                autoComplete="sale"
              />
            </div>
            {formErrors.sale && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.sale}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.currentStock.toString()}
                name="currentstock"
                id="currentstock"
                type="number"
                placeholder="Stock Final"
                autoComplete="currentstock"
              />
            </div>
            {formErrors.currentStock && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.currentStock}
              </p>
            )}
          </div>

          <div className="w-full flex flex-row justify-around items-center mt-4 mb-1">
            <JsOutlineButton
              type="button"
              name="Annuler"
              onClick={() => toggleModal("purchase-order-stock-adding-form")}
            />
            <JsButton type="submit" name="Valider" />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default PurchaseOrderStockAdding;
