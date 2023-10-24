import { FC } from "react";
import useFogUpdateForm from "../../../../hooks/form/fog_update/useFogUpdateForm.";
import Modal from "../../../ui/dashboard/widgets/Modal.widget";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input.widget";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";

interface FogUpdateProps {
  id: number;
  deposit: string;
  currentStock: string;
  managerName: string;
  managerNumber: string;
  modalLabel: string;
}

const FogUpdate: FC<FogUpdateProps> = ({
  id,
  deposit,
  currentStock,
  managerName,
  managerNumber,
  modalLabel,
}) => {
  const { formData, formErrors, onInputDataChange, onFormClose, onFormSubmit } =
    useFogUpdateForm(
      {
        id,
        deposit: deposit,
        currentStock: currentStock,
        managerName: managerName,
        managerNumber: managerNumber,
      },
      modalLabel
    );
  return (
    <Modal label={modalLabel}>
      <form onSubmit={onFormSubmit}>
        <div
          className="flex flex-col self-center justify-center bg-white items-center my-10' w-[300px] p-3 shadow-xl
        "
        >
          <div className="p-2 mt-1 mb-4 rounded-md shadow-md bg-secondary text-white">
            Brouillard
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.deposit}
                name="deposit"
                id="deposit"
                type="text"
                placeholder="Dépot"
                autoComplete="deposit"
              />
            </div>
            {formErrors.deposit && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.deposit}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.currentStock}
                name="currentStock"
                id="currentStock"
                type="text"
                placeholder="Stock Actuel"
                autoComplete="currentStock"
              />
            </div>
            {formErrors.currentStock && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.currentStock}
              </p>
            )}
          </div>
          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.managerName}
                name="managerName"
                id="managerName"
                type="text"
                placeholder="Nom Gérant"
                autoComplete="managerName"
              />
            </div>
            {formErrors.managerName && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.managerName}
              </p>
            )}
          </div>
          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.managerNumber}
                name="managerNumber"
                id="managerNumber"
                type="text"
                placeholder="Numero Gérant Ex: 00229|22954252525"
                autoComplete="managerNumber"
              />
            </div>
            {formErrors.managerNumber && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.managerNumber}
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

export default FogUpdate;
