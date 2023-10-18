import {
  FaCheck,
  FaCheckCircle,
  FaEdit,
  FaFile,
  FaTrash,
} from "react-icons/fa";
import PaiementClientValidation from "../../../../models/paiement_client_validation/paiement_client_validation.model";
import { FC } from "react";
import useInterfacesStore from "../../../../store/interfaces/useInfacesStore";
import useClientsStore from "../../../../store/clients/useClients.store";
import { toggleModal } from "../widgets/ToggleModal";
import ClientPaymentValidationUpdate from "../../../form/forms/client_payment_validation_update/ClientPaymentValidationUpdate";
import PaiementClientAPI from "../../../../api/paiement_client/paiement_client.api";
import useClientsPaymentsValidationStore from "../../../../store/paiement_client_validation/usePaiementClientValidation.store";

interface ClientsPaymentsValidationsTableProps {
  clientsPaymentsValidations: PaiementClientValidation[];
}

const ClientsPaymentsValidationsTable: FC<
  ClientsPaymentsValidationsTableProps
> = ({ clientsPaymentsValidations }) => {
  const openSlipFile = (file: string) => {
    try {
      window.open(file, "_blank");
    } catch (error) {
      console.log(error);
    }
  };

  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );
  const setPaymentValidationClient = useClientsStore(
    (state) => state.setPaymentValidationClient
  );

  const fetchAllClientsPaymentsValidation = useClientsPaymentsValidationStore(
    (state) => state.fetchAllClientsPaymentsValidation
  );

  return (
    <div className="flex flex-col justify-start w-full ">
      {/* <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p> */}
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped ">
          <tbody>
            <tr>
              <td className="font-medium">Client</td>
              <td className="font-medium">Montant</td>
              <td className="font-medium">Banque</td>
              <td className="font-medium">Reference</td>
              <td className="font-medium">Categorie </td>
              <td className="font-medium">Bon de commande </td>
              <td className="font-medium">Bordereau</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            {clientsPaymentsValidations.map((clientsPaymentValidation) => (
              <tr key={clientsPaymentValidation.id}>
                <td>
                  {clientsPaymentValidation.client.prenoms}{" "}
                  {clientsPaymentValidation.client.nom}
                </td>
                <td>{clientsPaymentValidation.montant}</td>
                <td>{clientsPaymentValidation.banque}</td>
                <td>{clientsPaymentValidation.reference}</td>
                <td>{clientsPaymentValidation.categorie}</td>
                <td>{clientsPaymentValidation.numero_bc}</td>
                <td>
                  {clientsPaymentValidation.bordereau == "" ? (
                    ""
                  ) : (
                    <FaFile
                      className="text-secondary"
                      onClick={() =>
                        openSlipFile(
                          clientsPaymentValidation.bordereau.toString()
                        )
                      }
                    />
                  )}
                </td>
                <td className="w-min">
                  {clientsPaymentValidation.est_valide == 1 ? (
                    <center className="flex justify-end">
                      <FaCheckCircle className="text-secondary" size={20} />
                    </center>
                  ) : (
                    <center className="flex justify-end">
                      <FaCheck className="text-secondary" size={20} />
                    </center>
                  )}
                </td>
                <td>
                  <div>
                    <ClientPaymentValidationUpdate
                      id={clientsPaymentValidation.id!}
                      clientName={`${clientsPaymentValidation.client.prenoms} ${clientsPaymentValidation.client.nom}`}
                      bcNumber={clientsPaymentValidation.numero_bc.toString()}
                      category={clientsPaymentValidation.categorie}
                      amount={clientsPaymentValidation.montant.toString()}
                      bank={clientsPaymentValidation.banque}
                      reference={clientsPaymentValidation.reference}
                      slip={clientsPaymentValidation.bordereau}
                      est_valide={clientsPaymentValidation.est_valide}
                      modalLabel={`client-payment-validation-update-form-${clientsPaymentValidation.id}`}
                    />

                    <i className="flex justify-end">
                      <FaEdit
                        color="green"
                        onClick={() => {
                          setPaymentValidationClient(
                            clientsPaymentValidation.client
                          );
                          toggleModal(
                            `client-payment-validation-update-form-${clientsPaymentValidation.id}`
                          );
                        }}
                      />
                    </i>
                  </div>
                </td>
                <td>
                  <center className="flex justify-end">
                    <FaTrash
                      color="red"
                      onClick={async () => {
                        const response = await PaiementClientAPI.delete(
                          clientsPaymentValidation.id!
                        );
                        if (response!.status == 204) {
                          setActionResultMessage(
                            "Le paiement du client a été supprimé avec succès"
                          );
                          toggleModal("action-result-message");
                          //fetchAllClientPayments(clientPayment.id_client);
                          fetchAllClientsPaymentsValidation();
                        } else if (response!.status == 404) {
                          setActionResultMessage(
                            "Le paiement du client n'a pas été trouvé"
                          );
                          toggleModal("action-result-message");
                        } else {
                          setActionResultMessage(
                            "Erreur lors de la suppression du paiement du client"
                          );
                          toggleModal("action-result-message");
                        }
                      }}
                    />
                  </center>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row items-center content-center">
        <span className=" text-md my-3 font-medium">Total des paiements</span>
        <span className="ml-20 text-md  text-gray-700">10 000 000</span>
      </div>
    </div>
  );
};

export default ClientsPaymentsValidationsTable;
