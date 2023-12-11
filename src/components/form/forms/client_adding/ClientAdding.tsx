import { FC } from "react";
import useClientAddingForm from "../../../../hooks/forms/client_adding/useClientAddingForm";
import Modal from "../../../ui/dashboard/widgets/Modal.widget";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input.widget";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";

interface ClientAddingProps {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  ifuNumber: string;
  email: string | undefined;
}

const ClientAdding: FC<ClientAddingProps> = ({
  firstname,
  lastname,
  phoneNumber,
  ifuNumber,
  email,
}) => {
  const {
    formData,
    formErrors,
    onInputDataChange,
    //  isLoading,
    onFormSubmit,
    onFormClose,
  } = useClientAddingForm({
    firstname: firstname,
    lastname: lastname,
    phoneNumber: phoneNumber,
    ifuNumber: ifuNumber,
    email: email,
  });
  return (
    <Modal label="client-adding-form">
      <form onSubmit={onFormSubmit}>
        <div
          className="flex flex-col self-center justify-center items-center my-10' w-[300px] p-3 shadow-xl
        "
        >
          <div className="p-2 mt-1 mb-4 rounded-md shadow-md bg-secondary text-white">
            Client
          </div>

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                value={formData.firstname}
                onChange={onInputDataChange}
                name="firstname"
                id="firstname"
                type="text"
                placeholder="Prénoms"
                autoComplete="off"
              />
            </div>
            {formErrors.firstname && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.firstname}
              </p>
            )}
          </div>

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                value={formData.lastname}
                onChange={onInputDataChange}
                name="lastname"
                id="lastname"
                type="text"
                placeholder="Nom"
                autoComplete="off"
              />
            </div>
            {formErrors.lastname && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.lastname}
              </p>
            )}
          </div>

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                value={formData.ifuNumber}
                onChange={onInputDataChange}
                name="ifuNumber"
                id="ifuNumber"
                type="text"
                placeholder="Numéro IFU"
                autoComplete="off"
              />
            </div>
            {formErrors.ifuNumber && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.ifuNumber}
              </p>
            )}
          </div>

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                value={formData.phoneNumber}
                onChange={onInputDataChange}
                name="phoneNumber"
                id="phoneNumber"
                type="text"
                placeholder="Numéro de téléphone"
                autoComplete="off"
              />
            </div>
            {formErrors.phoneNumber && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.phoneNumber}
              </p>
            )}
          </div>

          <div className="input-group w-full">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                value={formData.email}
                onChange={onInputDataChange}
                name="email"
                id="email"
                type="email"
                placeholder="Adresse email"
                autoComplete="off"
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
                toggleModal("client-adding-form");
              }}
            />

            {/* {isLoading == true ? ( */}
            <JsButton type="submit" name="Valider" />
            {/* ) : (
              <div></div>
            )} */}
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default ClientAdding;
