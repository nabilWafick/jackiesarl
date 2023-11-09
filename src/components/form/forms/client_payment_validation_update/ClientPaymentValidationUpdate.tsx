import { FC } from "react";
import Modal from "../../../ui/dashboard/widgets/Modal.widget";
import JsButton from "../../../ui/widgets/Button";
import JsOutlineButton from "../../../ui/widgets/OutlineButton";
import JSInput from "../../widgets/Input.widget";
import { toggleModal } from "../../../ui/dashboard/widgets/ToggleModal";
import useClientPaymentValidationUpdateForm from "../../../../hooks/forms/client_payment_validation_update/useClientPaymentValidationUpdateForm";
import useClientsStore from "../../../../store/clients/useClients.store";
import JSFormSelect from "../../widgets/FormSelect.widget";

interface ClientPaymentValidationUpdateProps {
  id: number;
  clientName: string;
  bcNumber: string;
  //  category: string;
  amount: string;
  bank: string;
  reference: string;
  slip: File | string;
  est_valide: number;
  modalLabel: string;
}

const ClientPaymentValidationUpdate: FC<ClientPaymentValidationUpdateProps> = ({
  id,
  clientName,
  bcNumber,
  // category,
  amount,
  bank,
  reference,
  slip,
  est_valide,
  modalLabel,
}) => {
  const {
    formData,
    formErrors,
    onInputDataChange,
    onClientNameInputDataChange,
    onCategorieSelectChange,
    updateClientNameFormData,
    onFileInputChange,
    onFormClose,
    onFormSubmit,
  } = useClientPaymentValidationUpdateForm(
    {
      id: id,
      clientName: clientName,
      bcNumber: bcNumber,
      //   category: category,
      amount: amount,
      bank: bank,
      reference: reference,
      slip: slip,
      est_valide: est_valide,
    },
    modalLabel
  );

  const setPaymentValidationClient = useClientsStore(
    (state) => state.setPaymentValidationClient
  );
  const searchedClients = useClientsStore((state) => state.searchedClients);
  const refreshSearchedClients = useClientsStore(
    (state) => state.refreshSearchedClients
  );

  return (
    <Modal label={modalLabel}>
      <form onSubmit={onFormSubmit}>
        <div
          className="flex flex-col self-center justify-center bg-white items-center my-10' w-[300px] p-3 shadow-xl
        "
        >
          <div className="p-2 mt-1 mb-4 rounded-md shadow-md bg-secondary text-white">
            Validation des paiements
          </div>

          <div className="pl-3 text-tableTextColor font-medium w-full block break-words">
            <ul>
              {searchedClients.map((searchedClient) => (
                <li
                  key={searchedClient.id!}
                  className=" cursor-pointer"
                  onClick={() => {
                    setPaymentValidationClient(searchedClient);
                    updateClientNameFormData(
                      `${searchedClient.prenoms} ${searchedClient.nom}`
                    );
                    refreshSearchedClients();
                  }}
                >
                  {searchedClient.prenoms} {searchedClient.nom}
                </li>
              ))}
            </ul>
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onClientNameInputDataChange}
                value={formData.clientName}
                name="clientName"
                id="clientName"
                type="text"
                placeholder="Nom du client"
                autoComplete="clientName"
              />
            </div>
            {formErrors.clientName && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.clientName}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.bcNumber}
                name="bcNumber"
                id="bcNumber"
                type="text"
                placeholder="Bon de Commande"
                autoComplete="bcNumber"
              />
            </div>
            {formErrors.bcNumber && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.bcNumber}
              </p>
            )}
          </div>

          {/* <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.category}
                name="category"
                id="category"
                type="text"
                placeholder="Catégorie"
                autoComplete="category"
              />
            </div>
            {formErrors.category && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.category}
              </p>
            )}
          </div> */}

          <div className="input-group">
            <div className="mt-3 msoldesb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.amount}
                name="amount"
                id="amount"
                type="text"
                placeholder="Montant"
                autoComplete="amount"
              />
            </div>
            {formErrors.amount && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.amount}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSFormSelect
                id="bank"
                name="bank"
                options={[
                  { value: "BOA", label: "BOA" },
                  { value: "UBA", label: "UBA" },
                  { value: "Ecobank", label: "Ecobank" },
                  { value: "NSIA", label: "NSIA" },
                  { value: "SGB", label: "SGB" },
                  { value: "BGFI", label: "BGFI" },
                ]}
                selectedOption={formData.bank}
                onChange={onCategorieSelectChange}
              />
            </div>
            {formErrors.bank && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.bank}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onInputDataChange}
                value={formData.reference}
                name="reference"
                id="reference"
                type="text"
                placeholder="Référence"
                autoComplete="reference"
              />
            </div>
            {formErrors.reference && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.reference}
              </p>
            )}
          </div>

          <div className="input-group">
            <div className="mt-3 mb-1 w-full">
              <JSInput
                onChange={onFileInputChange}
                //   value={formData.slip}
                name="slip" // slip === bordereau
                id="slip"
                type="file"
                placeholder="Bordereau"
                autoComplete="slip"
              />
            </div>
            {formErrors.slip && (
              <p className="erreur ml-1.5 text-[12px] font-medium text-secondary">
                {formErrors.slip}
              </p>
            )}
          </div>

          <div className="w-full flex flex-row justify-around items-center mt-4 mb-1">
            <JsOutlineButton
              type="button"
              name="Fermer"
              onClick={() => {
                onFormClose();
                setPaymentValidationClient(undefined);
                refreshSearchedClients();
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

export default ClientPaymentValidationUpdate;
