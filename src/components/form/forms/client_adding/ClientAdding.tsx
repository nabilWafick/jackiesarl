import { FC } from "react";
import useClientAddingForm from "../../../../hooks/form/client_adding/useClientAddingForm";
import Modal from "../../../ui/dashboard/widgets/Modal";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";

interface ClientAddingProps {
  firstname: string;
  lastname: string;
  ifuNumber: string;
  email: string;
  netValue: string;
}

const ClientAdding: FC<ClientAddingProps> = ({
  firstname,
  lastname,
  ifuNumber,
  email,
  netValue,
}) => {
  const { formData, formErrors, onInputDataChange, onFormSubmit } =
    useClientAddingForm({
      firstname: firstname,
      lastname: lastname,
      ifuNumber: ifuNumber,
      email: email,
      netValue: netValue,
    });
  return (
    <Modal label="client-adding-form">
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
                name="fullname"
                id="fullname"
                type="text"
                placeholder="Nom complet"
                autoComplete="fullname"
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
                name="fullname"
                id="fullname"
                type="text"
                placeholder="Nom complet"
                autoComplete="fullname"
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
                placeholder="Numéro matricule"
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

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                value={formData.netValue}
                onChange={onInputDataChange}
                name="netValue"
                id="netValue"
                type="text"
                placeholder="Valeur net"
                autoComplete="netValue"
              />
            </div>
            {formErrors.netValue && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.netValue}
              </p>
            )}
          </div>

          <div className="w-full flex flex-row justify-around items-center mt-4 mb-1">
            <JsOutlineButton
              type="button"
              name="Annuler"
              onClick={() => toggleModal("client-adding-form")}
            />
            <JsButton type="submit" name="Valider" />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default ClientAdding;
