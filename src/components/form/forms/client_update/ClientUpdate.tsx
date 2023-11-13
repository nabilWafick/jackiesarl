import { FC } from "react";
import useClientUpdateForm from "../../../../hooks/forms/client_update/useClientUpdateForm";
import Modal from "../../../ui/dashboard/widgets/Modal.widget";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input.widget";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";

interface ClientUpdateProps {
  id: number;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  ifuNumber: string;
  email: string | undefined;
  modalLabel: string;
}

const ClientUpdate: FC<ClientUpdateProps> = ({
  id,
  firstname,
  lastname,
  phoneNumber,
  ifuNumber,
  email,
  modalLabel,
}) => {
  const {
    formData,
    formErrors,
    onInputDataChange,
    //  isLoading,
    onFormSubmit,
    onFormClose,
  } = useClientUpdateForm(
    {
      id,
      firstname: firstname,
      lastname: lastname,
      phoneNumber: phoneNumber,
      ifuNumber: ifuNumber,
      email: email,
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
            Client
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                value={formData.firstname}
                onChange={onInputDataChange}
                name="firstname"
                id="firstname"
                type="text"
                placeholder="Prénoms"
                autoComplete="firstname"
              />
            </div>
            {formErrors.firstname && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.firstname}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                value={formData.lastname}
                onChange={onInputDataChange}
                name="lastname"
                id="lastname"
                type="text"
                placeholder="Nom"
                autoComplete="lastname"
              />
            </div>
            {formErrors.lastname && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.lastname}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                value={formData.ifuNumber}
                onChange={onInputDataChange}
                name="ifuNumber"
                id="ifuNumber"
                type="text"
                placeholder="Numéro IFU"
                autoComplete="ifuNumber"
              />
            </div>
            {formErrors.ifuNumber && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.ifuNumber}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                value={formData.phoneNumber}
                onChange={onInputDataChange}
                name="phoneNumber"
                id="phoneNumber"
                type="text"
                placeholder="Numéro de téléphone"
                autoComplete="phoneNumber"
              />
            </div>
            {formErrors.phoneNumber && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.phoneNumber}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                value={formData.email}
                onChange={onInputDataChange}
                name="email"
                id="email"
                type="email"
                placeholder="Adresse email"
                autoComplete="email"
              />
            </div>
            {formErrors.email && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.email}
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

export default ClientUpdate;
