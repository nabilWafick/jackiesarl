import useFogAddingForm from "../../../../hooks/form/fog_adding/useFogAddingForm";
import Modal from "../../../ui/dashboard/widgets/Modal";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input";

const ClientAdding = () => {
  const { formData, formErrors, onInputDataChange, onFormSubmit } =
    useFogAddingForm();
  return (
    <Modal label="fog-adding-form">
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
              {" "}
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
              <p className="erreur ml-1.5 text-[11px] text-gray-700">
                {formErrors.deposit}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              {" "}
              <JSInput
                onChange={onInputDataChange}
                value={formData.currentStock.toString()}
                name="currentStock"
                id="currentStock"
                type="number"
                placeholder="Stock Actuel"
                autoComplete="currentStock"
              />
              ,
            </div>
            {formErrors.currentStock && (
              <p className="erreur ml-1.5 text-[11px] text-gray-700">
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
              <p className="erreur ml-1.5 text-[11px] text-gray-700">
                {formErrors.managerName}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              {" "}
              <JSInput
                onChange={onInputDataChange}
                value={formData.managerNumber.toString()}
                name="managerNumber"
                id="managerNumber"
                type="number"
                placeholder="Num Gérant"
                autoComplete="managerNumber"
              />
            </div>
            {formErrors.managerNumber && (
              <p className="erreur ml-1.5 text-[11px] text-gray-700">
                {formErrors.managerNumber}
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
