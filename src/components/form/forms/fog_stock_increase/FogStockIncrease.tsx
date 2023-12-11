import { FC } from "react";
import useFogStockUpdateForm from "../../../../hooks/forms/fog_stock_increase/useFogStockIncreaseForm";
import Modal from "../../../ui/dashboard/widgets/Modal.widget";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input.widget";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";

interface FogStockUpdateProps {
  id: number;
  deposit: string;
  currentStock: string;
  managerName: string;
  managerNumber: string;
  modalLabel: string;
}

const FogStockUpdate: FC<FogStockUpdateProps> = ({
  id,
  deposit,
  currentStock,
  managerName,
  managerNumber,
  modalLabel,
}) => {
  const { formData, formErrors, onInputDataChange, onFormClose, onFormSubmit } =
    useFogStockUpdateForm(
      {
        id,
        deposit: deposit,
        currentStock: currentStock,
        newStock: "",
        managerName: managerName,
        managerNumber: managerNumber,
      },
      modalLabel
    );
  return (
    <Modal label={modalLabel}>
      <form onSubmit={onFormSubmit}>
        <div
          className="flex flex-col self-center justify-center items-center my-10' w-[300px] p-3 shadow-xl
        "
        >
          <div className="p-2 mt-1 mb-4 rounded-md shadow-md bg-secondary text-white">
            Brouillard
          </div>

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.newStock}
                name="newStock"
                id="newStock"
                type="text"
                placeholder="Stock à ajouter"
                autoComplete="off"
              />
            </div>
            {formErrors.newStock && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.newStock}
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

export default FogStockUpdate;
