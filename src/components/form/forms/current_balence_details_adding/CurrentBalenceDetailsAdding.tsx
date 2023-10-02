import { FC } from "react";
import useCurrentBalenceDetailsAddingForm from "../../../../hooks/form/current_balence_details_adding/useCurrentBalenceDetailsAddingForm";
import Modal from "../../../ui/dashboard/widgets/Modal";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input";
import JsTextarea from "../../widgets/Textarea";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";

interface CurrentBalenceDetailsAddingProps {
  description: string;
  debit: string;
  credit: string;
  currentBalence: string;
}

const CurrentBalenceDetailsAdding: FC<CurrentBalenceDetailsAddingProps> = ({
  description,
  debit,
  credit,
  currentBalence,
}) => {
  const { formData, formErrors, onInputDataChange, onFormSubmit } =
    useCurrentBalenceDetailsAddingForm({
      description: description,
      debit: debit,
      credit: credit,
      currentBalence: currentBalence,
    });
  return (
    <Modal label="current-balence-details-adding-form">
      <form onSubmit={onFormSubmit}>
        <div
          className="flex flex-col self-center justify-center bg-white items-center my-10' w-[300px] p-3 shadow-xl
        "
        >
          <div className="p-2 mt-1 mb-4 rounded-md shadow-md bg-secondary text-white">
            option
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JsTextarea
                onChange={() => {}}
                value={formData.description}
                name="description"
                id="description"
                placeholder="Description"
              />
            </div>
            {formErrors.description && (
              <p className="erreur ml-1.5 text-[11px] text-gray-700">
                {formErrors.description}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.debit.toString()}
                name="debit"
                id="debit"
                type="number"
                placeholder="Débit"
                autoComplete="debit"
              />
            </div>
            {formErrors.debit && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.debit}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.description}
                name="credit"
                id="credit"
                type="number"
                placeholder="Crédit"
                autoComplete="credit"
              />
              ,
            </div>
            {formErrors.credit && (
              <p className="erreur ml-1.5 text-[11px] text-gray-700">
                {formErrors.credit}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.currentBalence.toString()}
                name="currentBalence"
                id="currentBalence"
                type="number"
                placeholder="Solde actuel"
                autoComplete="currentBalence"
              />
              ,
            </div>
            {formErrors.currentBalence && (
              <p className="erreur ml-1.5 text-[11px] text-gray-700">
                {formErrors.currentBalence}
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

export default CurrentBalenceDetailsAdding;
