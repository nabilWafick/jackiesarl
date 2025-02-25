import {
  FaCheck,
  FaCheckCircle,
  FaEdit,
  FaFile,
  FaTrash,
} from "react-icons/fa";
import { FC } from "react";
import useInterfacesStore from "../../../../store/interfaces/useInfacesStore";
import useClientsStore from "../../../../store/clients/useClients.store";
import { toggleModal } from "../widgets/ToggleModal";
import ClientPaymentValidationUpdate from "../../../form/forms/client_payment_validation_update/ClientPaymentValidationUpdate";
import PaiementClientAPI from "../../../../api/paiement_client/paiement_client.api";
import PaiementClient from "../../../../models/paiement_client/paiement.model";
import usePaymentsValidationStore from "../../../../store/paiement_client_validation/usePaiementClientValidation.store";
import { authenticatedEmployee } from "../../../../data/GlobalData";
import "../../../../assets/css/Sidebar.css";

interface ClientsPaymentsValidationsTableProps {
  clientsPaymentsValidations: PaiementClient[];
}

const ClientsPaymentsValidationsTable: FC<
  ClientsPaymentsValidationsTableProps
> = ({ clientsPaymentsValidations }) => {
  const authenticatedEmploye = authenticatedEmployee.value;

  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );
  const setPaymentValidationClient = useClientsStore(
    (state) => state.setPaymentValidationClient
  );

  const fetchAllClientsPayments = usePaymentsValidationStore(
    (state) => state.fetchAllClientPayments
  );

  const updatePaymentValidationStatus = async (payment: PaiementClient) => {
    const response = await PaiementClientAPI.update(
      authenticatedEmploye!,
      payment.id!,
      new PaiementClient(
        payment.montant,
        payment.banque,
        payment.reference,
        payment.categorie,
        payment.numero_bc,
        payment.bordereau,
        payment.est_valide == 1 ? 0 : 1,
        payment.client!.id!
      )
    );
    if (response!.status == 200) {
      fetchAllClientsPayments();
      setActionResultMessage("Le paiement du client a été modifié avec succès");
      toggleModal("action-result-message");
    } else if (response!.status == 401) {
      setActionResultMessage(
        `Votre accès a expiré. \n Veuillez vous authentifier à nouveau`
      );
      toggleModal("action-result-message");
    } else if (response!.status == 403) {
      setActionResultMessage(response!.error);
      toggleModal("action-result-message");
    } else if (response!.status == 404) {
      setActionResultMessage("Le paiement du client n'a pas été trouvé");
      toggleModal("action-result-message");
    } else {
      setActionResultMessage(
        "Erreur lors de la modification du paiement du client"
      );
      toggleModal("action-result-message");
    }
  };

  return (
    <div className="flex flex-col justify-start w-full ">
      {/* <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p> */}
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md overflow-auto sidebar">
        <table className="table table-striped text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
          <tbody>
            <tr>
              <td className="font-medium">Client</td>
              <td className="font-medium">Montant</td>
              <td className="font-medium">Banque</td>
              <td className="font-medium">Reference</td>
              <td className="font-medium">Categorie </td>
              <td className="font-medium">Bon de commande </td>
              <td className="font-medium">Bordereau</td>
              <td className="font-medium">Date de paiement</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            {clientsPaymentsValidations.map((clientsPaymentValidation) => (
              <tr key={clientsPaymentValidation.id}>
                <td>
                  {clientsPaymentValidation.client!.prenoms}{" "}
                  {clientsPaymentValidation.client!.nom}
                </td>
                <td>
                  {clientsPaymentValidation.montant} <i> fcfa</i>
                </td>
                <td>{clientsPaymentValidation.banque}</td>
                <td>{clientsPaymentValidation.reference}</td>
                <td>{clientsPaymentValidation.categorie}</td>
                <td>{clientsPaymentValidation.numero_bc}</td>
                <td>
                  {clientsPaymentValidation.bordereau == "" ? (
                    ""
                  ) : (
                    <a
                      href={clientsPaymentValidation.bordereau as string}
                      target="_blank"
                      download={true}
                      className="flex justify-center self-center"
                    >
                      <FaFile className="text-secondary" onClick={() => {}} />
                    </a>
                  )}
                </td>
                <td>
                  {new Date(
                    clientsPaymentValidation.date_paiement!
                  )!.toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </td>
                <td className="w-min">
                  {clientsPaymentValidation.est_valide == 1 ? (
                    <center className="flex justify-end">
                      <FaCheckCircle
                        className="text-secondary"
                        onClick={() =>
                          updatePaymentValidationStatus(
                            clientsPaymentValidation
                          )
                        }
                        size={20}
                      />
                    </center>
                  ) : (
                    <center className="flex justify-end">
                      <FaCheck
                        className="text-secondary"
                        onClick={() =>
                          updatePaymentValidationStatus(
                            clientsPaymentValidation
                          )
                        }
                        size={20}
                      />
                    </center>
                  )}
                </td>
                <td>
                  <div>
                    <ClientPaymentValidationUpdate
                      key={Date.now() + clientsPaymentValidation.id!}
                      id={clientsPaymentValidation.id!}
                      clientName={`${
                        clientsPaymentValidation.client!.prenoms
                      } ${clientsPaymentValidation.client!.nom}`}
                      bcNumber={clientsPaymentValidation.numero_bc.toString()}
                      //   category={clientsPaymentValidation.categorie}
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
                          authenticatedEmploye!,
                          clientsPaymentValidation.id!
                        );
                        if (response!.status == 204) {
                          setActionResultMessage(
                            "Le paiement du client a été supprimé avec succès"
                          );
                          toggleModal("action-result-message");

                          fetchAllClientsPayments();
                        } else if (response!.status == 401) {
                          setActionResultMessage(
                            `Votre accès a expiré. \n Veuillez vous authentifier à nouveau`
                          );
                          toggleModal("action-result-message");
                        } else if (response!.status == 403) {
                          setActionResultMessage(response!.error);
                          toggleModal("action-result-message");
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
      {/* <div className="flex flex-row items-center content-center">
        <span className=" text-md my-3 font-medium">Total des paiements</span>
        <span className="ml-20 text-md  text-gray-700">10 000 000</span>
      </div> */}
    </div>
  );
};

export default ClientsPaymentsValidationsTable;
