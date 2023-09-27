import useClientAddingForm from "../../../../hooks/form/client_adding/useClientAddingForm";
import Modal from "../../../ui/dashboard/widgets/Modal";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input";

const ClientAdding = () => {
  const { formData, formErrors, onInputDataChange, onFormSubmit } =
    useClientAddingForm();
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
                value={formData.fullname}
                onChange={onInputDataChange}
                name="fullname"
                id="fullname"
                type="text"
                placeholder="Nom complet"
                autoComplete="fullname"
              />
            </div>
            {formErrors.fullname && (
              <p className="erreur ml-1.5 text-[11px] text-gray-700">
                {formErrors.fullname}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              {" "}
              <JSInput
                value={formData.ifuNumber.toString()}
                onChange={onInputDataChange}
                name="ifuNumber"
                id="ifuNumber"
                type="number"
                placeholder="Numéro matricule"
                autoComplete="ifuNumber"
              />
            </div>
            {formErrors.ifuNumber && (
              <p className="erreur ml-1.5 text-[11px] text-gray-700">
                {formErrors.ifuNumber}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              {" "}
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
              <p className="erreur ml-1.5 text-[11px] text-gray-700">
                {formErrors.email}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                value={formData.netValue.toString()}
                onChange={onInputDataChange}
                name="netValue"
                id="netValue"
                type="number"
                placeholder="Valeur net"
                autoComplete="netValue"
              />
            </div>
            {formErrors.netValue && (
              <p className="erreur ml-1.5 text-[11px] text-gray-700">
                {formErrors.netValue}
              </p>
            )}
          </div>

          <div className="w-full flex flex-row justify-around items-center mt-4 mb-1">
            <JsOutlineButton type="button" name="Annuler" onClick={() => {}} />
            <JsButton type="submit" name="Valider" />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default ClientAdding;
