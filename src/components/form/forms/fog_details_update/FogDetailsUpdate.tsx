import { FC } from "react";
import useFogDetailsUpdateForm from "../../../../hooks/forms/fog_details_update/useFogDetailsUpdateForm";
import Modal from "../../../ui/dashboard/widgets/Modal.widget";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input.widget";
import JsTextarea from "../../widgets/Textarea.widget";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";

interface FogDetailsUpdateProps {
  id: number;
  quantityBeforeSelling: string;
  sale: string;
  quantityAfterSelling: string;
  payment: string;
  expense: string;
  observation: string;
  modalLabel: string;
}

const FogDetailsUpdate: FC<FogDetailsUpdateProps> = ({
  id,
  quantityBeforeSelling,
  sale,
  quantityAfterSelling,
  payment,
  expense,
  observation,
  modalLabel,
}) => {
  const {
    formData,
    formErrors,
    onInputDataChange,
    onTextareaChange,
    onFormClose,
    onFormSubmit,
  } = useFogDetailsUpdateForm(
    {
      id,
      quantityBeforeSelling: quantityBeforeSelling,
      sale: sale,
      quantityAfterSelling: quantityAfterSelling,
      payment: payment,
      expense: expense,
      observation: observation,
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
            Vente
          </div>

          {/* <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.quantityBeforeSelling}
                name="quantityBeforeSelling"
                id="quantityBeforeSelling"
                type="text"
                placeholder="Quantité Avant Vente"
              autoComplete="off"elling"
              />
            </div>
            {formErrors.quantityBeforeSelling && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.quantityBeforeSelling}
              </p>
            )}
          </div> */}

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.sale}
                name="sale"
                id="sale"
                type="text"
                placeholder="Vente"
                autoComplete="off"
              />
            </div>
            {formErrors.sale && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.sale}
              </p>
            )}
          </div>

          {/* <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.quantityAfterSelling}
                name="quantityAfterSelling"
                id="quantityAfterSelling"
                type="text"
                placeholder="Quantité Après Vente"
              autoComplete="off"lling"
              />
            </div>
            {formErrors.quantityAfterSelling && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.quantityAfterSelling}
              </p>
            )}
          </div> */}

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.payment}
                name="payment"
                id="payment"
                type="text"
                placeholder="Versement"
                autoComplete="off"
              />
            </div>
            {formErrors.payment && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.payment}
              </p>
            )}
          </div>

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.expense}
                name="expense"
                id="expense"
                type="text"
                placeholder="Dépense"
                autoComplete="off"
              />
            </div>
            {formErrors.expense && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.expense}
              </p>
            )}
          </div>

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JsTextarea
                onChange={onTextareaChange}
                value={formData.observation}
                name="observation"
                id="observation"
                placeholder="Observation"
              />
            </div>
            {formErrors.observation && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.observation}
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

export default FogDetailsUpdate;
