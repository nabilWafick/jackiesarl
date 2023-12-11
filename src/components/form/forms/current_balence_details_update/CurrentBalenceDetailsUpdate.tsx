import { FC } from "react";
import useCurrentBalenceDetailsUpdateForm from "../../../../hooks/forms/current_balence_details_update/useCurrentBalenceDetailsUpdateForm";
import Modal from "../../../ui/dashboard/widgets/Modal.widget";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input.widget";
import JsTextarea from "../../widgets/Textarea.widget";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";

interface CurrentBalenceDetailsUpdateProps {
  id: number;
  id_banque: number;
  description: string;
  debit: string;
  credit: string;
  currentBalence: string;
  modalLabel: string;
}

const CurrentBalenceDetailsUpdate: FC<CurrentBalenceDetailsUpdateProps> = ({
  id,
  id_banque,
  description,
  debit,
  credit,
  currentBalence,
  modalLabel,
}) => {
  const {
    formData,
    formErrors,
    onInputDataChange,
    onTextareaChange,
    onFormClose,
    onFormSubmit,
  } = useCurrentBalenceDetailsUpdateForm(
    {
      id,
      id_banque,
      description: description,
      debit: debit,
      credit: credit,
      currentBalence: currentBalence,
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
            Activité
          </div>

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JsTextarea
                onChange={onTextareaChange}
                value={formData.description}
                name="description"
                id="description"
                placeholder="Description"
              />
            </div>
            {formErrors.description && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.description}
              </p>
            )}
          </div>

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.debit}
                name="debit"
                id="debit"
                type="text"
                placeholder="Débit"
                autoComplete="off"
              />
            </div>
            {formErrors.debit && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.debit}
              </p>
            )}
          </div>

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.credit}
                name="credit"
                id="credit"
                type="text"
                placeholder="Crédit"
                autoComplete="off"
              />
            </div>
            {formErrors.credit && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.credit}
              </p>
            )}
          </div>

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.currentBalence}
                name="currentBalence"
                id="currentBalence"
                type="text"
                placeholder="Solde actuel"
                autoComplete="off"
              />
            </div>
            {formErrors.currentBalence && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.currentBalence}
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

export default CurrentBalenceDetailsUpdate;
