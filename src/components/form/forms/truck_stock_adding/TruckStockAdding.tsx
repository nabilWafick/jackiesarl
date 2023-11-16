import { FC } from "react";
import useTruckStockAddingForm from "../../../../hooks/forms/truck_stock_adding/useTruckStockAddingForm";
import Modal from "../../../ui/dashboard/widgets/Modal.widget";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input.widget";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";
import JSFormSelect from "../../widgets/FormSelect.widget";

interface TruckStockAddingProps {
  truckNumber: string;
  category: string;
  driverNumber: string;
  bcNumber: string;
  quantity: string;
}

const TruckStockAdding: FC<TruckStockAddingProps> = ({
  truckNumber,
  category,
  driverNumber,
  bcNumber,
  quantity,
}) => {
  const {
    formData,
    formErrors,
    onInputDataChange,
    onCategorieSelectChange,
    onFormClose,
    onFormSubmit,
  } = useTruckStockAddingForm({
    truckNumber: truckNumber,
    category: category,
    driverNumber: driverNumber,
    bcNumber: bcNumber,
    quantity: quantity,
  });

  return (
    <Modal label="truck-stock-adding-form">
      <form onSubmit={onFormSubmit}>
        <div
          className="flex flex-col self-center justify-center bg-white items-center my-10' w-[300px] p-3 shadow-xl
        "
        >
          <div className="p-2 mt-1 mb-4 rounded-md shadow-md bg-secondary text-white">
            Stock Camion
          </div>

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.truckNumber}
                name="truckNumber"
                id="truckNumber"
                type="text"
                placeholder="Num Camiom"
                autoComplete="off"
              />
            </div>
            {formErrors.truckNumber && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.truckNumber}
              </p>
            )}
          </div>

          <div className="input-group w-full">
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
               autoComplete="off"        /> */}
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
                value={formData.driverNumber}
                name="driverNumber"
                id="driverNumber"
                type="text"
                placeholder="Num Chauffeur"
                autoComplete="off"
              />
            </div>
            {formErrors.driverNumber && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.driverNumber}
              </p>
            )}
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

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.quantity}
                name="quantity"
                id="quantity"
                type="text"
                placeholder="Quantité"
                autoComplete="off"
              />
            </div>
            {formErrors.quantity && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.quantity}
              </p>
            )}
          </div>

          <div className="w-full flex flex-row justify-around items-center mt-4 mb-1">
            <JsOutlineButton
              type="button"
              name="Fermer"
              onClick={() => {
                onFormClose();
                toggleModal("truck-stock-adding-form");
              }}
            />
            <JsButton type="submit" name="Valider" />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default TruckStockAdding;
