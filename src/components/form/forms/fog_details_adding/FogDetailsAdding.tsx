import { FC } from "react";
import useFogDetailsAddingForm from "../../../../hooks/form/fog_details_adding/useFogDetailsAddingForm";
import Modal from "../../../ui/dashboard/widgets/Modal.widget";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input.widget";
import JsTextarea from "../../widgets/Textarea.widget";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";

interface FogDetailsAddingProps {
  //quantityBeforeSelling: string;
  sale: string;
  // quantityAfterSelling: string;
  payment: string;
  expense: string;
  observation: string;
}

const FogDetailsAdding: FC<FogDetailsAddingProps> = ({
  // quantityBeforeSelling,
  sale,
  // quantityAfterSelling,
  payment,
  expense,
  observation,
}) => {
  const {
    formData,
    formErrors,
    onInputDataChange,
    onTextareaChange,
    onFormClose,
    onFormSubmit,
  } = useFogDetailsAddingForm({
    //   quantityBeforeSelling: quantityBeforeSelling,
    sale: sale,
    //   quantityAfterSelling: quantityAfterSelling,
    payment: payment,
    expense: expense,
    observation: observation,
  });
  return (
    <Modal label="fog-details-adding-form">
      <form onSubmit={onFormSubmit}>
        <div
          className="flex flex-col self-center justify-center bg-white items-center my-10' w-[300px] p-3 shadow-xl
        "
        >
          <div className="p-2 mt-1 mb-4 rounded-md shadow-md bg-secondary text-white">
            Vente
          </div>

          {/* <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.quantityBeforeSelling}
                name="quantityBeforeSelling"
                id="quantityBeforeSelling"
                type="text"
                placeholder="Quantité Avant Vente"
                autoComplete="quantityBeforeSelling"
              />
            </div>
            {formErrors.quantityBeforeSelling && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.quantityBeforeSelling}
              </p>
            )}
          </div> */}

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.sale}
                name="sale"
                id="sale"
                type="text"
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

          {/* <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.quantityAfterSelling}
                name="quantityAfterSelling"
                id="quantityAfterSelling"
                type="text"
                placeholder="Quantité Après Vente"
                autoComplete="quantityAfterSelling"
              />
            </div>
            {formErrors.quantityAfterSelling && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.quantityAfterSelling}
              </p>
            )}
          </div> */}

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.payment}
                name="payment"
                id="payment"
                type="text"
                placeholder="Versement"
                autoComplete="payment"
              />
            </div>
            {formErrors.payment && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.payment}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.expense}
                name="expense"
                id="expense"
                type="text"
                placeholder="Dépense"
                autoComplete="expense"
              />
            </div>
            {formErrors.expense && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.expense}
              </p>
            )}
          </div>

          <div className="input-group">
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
                toggleModal("fog-details-adding-form");
              }}
            />
            <JsButton type="submit" name="Valider" />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default FogDetailsAdding;
