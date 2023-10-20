import { FC } from "react";
import { FaEdit, FaTrash, FaCheck, FaCheckCircle } from "react-icons/fa";
import RemiseChequeClient from "../../../../models/remise_cheque_client/remise_cheque_client.model";
import ClientCheckRemittanceUpdate from "../../../form/forms/client_check_remittance_update/ClientCheckRemittanceUpdate";
import { toggleModal } from "../widgets/ToggleModal";
import RemiseChequeClientAPI from "../../../../api/remise_cheque_client/remise_cheque_client.api";
import useClientChecksRemittanceStore from "../../../../store/remise_cheque_client/useRemiseChequeClient.store";
import useInterfacesStore from "../../../../store/interfaces/useInfacesStore";
import useClientsStore from "../../../../store/clients/useClients.store";

interface ClientChecksRemittanceTableProps {
  clientChecksRemittance: RemiseChequeClient[];
}

const ClientChecksRemittanceTable: FC<ClientChecksRemittanceTableProps> = ({
  clientChecksRemittance,
}) => {
  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );

  const fetchAllClientChecksRemittance = useClientChecksRemittanceStore(
    (state) => state.fetchAllClientChecksRemittance
  );

  const selectedClient = useClientsStore((state) => state.selectedClient);

  const updateCheckValidationStatus = async (check: RemiseChequeClient) => {
    const response = await RemiseChequeClientAPI.update(
      check.id!,
      new RemiseChequeClient(
        check.description,
        check.banque,
        check.montant,
        check.reste,
        check.est_validee == 1 ? 0 : 1,
        selectedClient!.id!
      )
    );

    if (response!.status == 200) {
      setActionResultMessage(
        "La remise de chèque du client a été mis à jour avec succès"
      );
      toggleModal("action-result-message");
      fetchAllClientChecksRemittance(selectedClient!.id!);
    } else if (response!.status == 404) {
      setActionResultMessage(
        "La remise de chèque du client n'a pas été trouvé"
      );
      toggleModal("action-result-message");
    } else {
      setActionResultMessage(
        "Erreur lors de la mise à jour de la remise de chèque du client"
      );
      toggleModal("action-result-message");
    }
  };

  return (
    <div className="flex flex-col justify-start w-full ">
      {/* <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p> */}
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped ">
          <tbody>
            <tr>
              <td className="font-medium">Description</td>
              <td className="font-medium">Banque</td>
              <td className="font-medium">Montant</td>
              <td className="font-medium">Reste</td>
              <td> </td>
              <td></td>
              <td></td>
            </tr>

            {clientChecksRemittance.map((clientCheckRemittance) => (
              <tr key={clientCheckRemittance.id!}>
                <td>{clientCheckRemittance.description}</td>
                <td>{clientCheckRemittance.banque}</td>
                <td>
                  {clientCheckRemittance.montant}
                  <i> fcfa</i>
                </td>
                <td>
                  {clientCheckRemittance.reste} <i> fcfa</i>
                </td>
                <td>
                  <i className="flex justify-end">
                    {clientCheckRemittance.est_validee == 1 ? (
                      <FaCheckCircle
                        className="text-secondary"
                        onClick={() =>
                          updateCheckValidationStatus(clientCheckRemittance)
                        }
                        size={20}
                      />
                    ) : (
                      <FaCheck
                        className="text-secondary"
                        onClick={() =>
                          updateCheckValidationStatus(clientCheckRemittance)
                        }
                        size={20}
                      />
                    )}
                  </i>
                </td>
                <td>
                  <div>
                    <ClientCheckRemittanceUpdate
                      id={clientCheckRemittance.id!}
                      description={clientCheckRemittance.description}
                      bank={clientCheckRemittance.banque}
                      amount={clientCheckRemittance.montant.toString()}
                      rest={clientCheckRemittance.reste.toString()}
                      est_validee={clientCheckRemittance.est_validee}
                      modalLabel={`client-check-remittance-update-form-${clientCheckRemittance.id}`}
                    />
                    <i className="flex justify-end">
                      <FaEdit
                        color="green"
                        onClick={() =>
                          toggleModal(
                            `client-check-remittance-update-form-${clientCheckRemittance.id}`
                          )
                        }
                      />
                    </i>
                  </div>
                </td>
                <td>
                  <i className="flex justify-end">
                    <FaTrash
                      color="red"
                      onClick={async () => {
                        const response = await RemiseChequeClientAPI.delete(
                          clientCheckRemittance.id!
                        );

                        if (response!.status == 204) {
                          setActionResultMessage(
                            "La remise de chèque a été supprimée avec succès"
                          );
                          toggleModal("action-result-message");
                          fetchAllClientChecksRemittance(
                            clientCheckRemittance.id_client
                          );
                        } else if (response!.status == 404) {
                          setActionResultMessage(
                            "La remise de chèque n'a pas été trouvé"
                          );
                          toggleModal("action-result-message");
                        } else {
                          setActionResultMessage(
                            "Erreur lors de la suppression de la remise de chèque"
                          );
                          toggleModal("action-result-message");
                        }
                      }}
                    />
                  </i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="flex flex-row items-center content-center">
        <span className=" text-md my-3 font-medium text-gray-700">
          Total des paiements
        </span>
        <span className="ml-20 text-md">10 000 000</span>
      </div> */}
    </div>
  );
};

export default ClientChecksRemittanceTable;
