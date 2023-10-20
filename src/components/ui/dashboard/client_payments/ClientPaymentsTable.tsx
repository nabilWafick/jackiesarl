import { FC } from "react";
import { FaFile } from "react-icons/fa";
import PaiementClient from "../../../../models/paiement_client/paiement.model";
// import ClientPaymentUpdate from "../../../form/forms/client_payment_update/ClientPaymentUpdate";
// import { toggleModal } from "../widgets/ToggleModal";
// import useInterfacesStore from "../../../../store/interfaces/useInfacesStore";
// import PaiementClientAPI from "../../../../api/paiement_client/paiement_client.api";
// import useClientPaymentsStore from "../../../../store/paiement_client/usePaiementClient.store";

interface ClientPaymentsTableProps {
  clientPayments: PaiementClient[];
}

const ClientPaymentsTable: FC<ClientPaymentsTableProps> = ({
  clientPayments,
}) => {
  const openSlipFile = (file: string) => {
    try {
      window.open(file, "_blank");
    } catch (error) {
      console.log(error);
    }
  };
  // const setActionResultMessage = useInterfacesStore(
  //   (state) => state.setActionResultMessage
  // );
  // const fetchAllClientPayments = useClientPaymentsStore(
  //   (state) => state.fetchAllClientPayments
  // );
  return (
    <div className="flex flex-col justify-start w-full ">
      <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p>
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="font-medium">Bon de Commande</td>
              <td className="font-medium">Categorie </td>
              <td className="font-medium">Montant</td>
              <td className="font-medium">Banque</td>
              <td className="font-medium">Reference</td>
              <td className="font-medium">Bordereau</td>
              {/* <td className="font-medium"></td>
              <td className="font-medium"></td> */}
            </tr>

            {clientPayments.map((clientPayment) => {
              if (clientPayment.est_valide == 1) {
                return (
                  <tr key={clientPayment.id!}>
                    <td>{clientPayment.numero_bc}</td>
                    <td>{clientPayment.categorie}</td>
                    <td>
                      {clientPayment.montant} <i> fcfa</i>
                    </td>
                    <td>{clientPayment.banque}</td>
                    <td>{clientPayment.est_valide}</td>
                    <td>
                      {clientPayment.bordereau == "" ? (
                        ""
                      ) : (
                        <FaFile
                          className="text-secondary"
                          onClick={() =>
                            openSlipFile(clientPayment.bordereau.toString())
                          }
                        />
                      )}
                    </td>
                    {/* <td>
                    <center className="flex items-center justify-center">
                      {clientPayment.est_valide ? (
                        <FaCheckCircle className="text-secondary" size={20} />
                      ) : (
                        <FaCheck className="text-secondary" size={20} />
                      )}
                    </center>
                  </td> */}
                    {/* <td>
                    <div>
                      <ClientPaymentUpdate
                        id={clientPayment.id!}
                        bcNumber={clientPayment.numero_bc.toString()}
                        category={clientPayment.categorie}
                        amount={clientPayment.montant.toString()}
                        bank={clientPayment.banque}
                        reference={clientPayment.reference}
                        slip={clientPayment.bordereau}
                        est_valide={clientPayment.est_valide}
                        modalLabel={`client-payment-update-form-${clientPayment.id}`}
                      />
                      <center>
                        <FaEdit
                          color="green"
                          onClick={() =>
                            toggleModal(
                              `client-payment-update-form-${clientPayment.id}`
                            )
                          }
                        />
                      </center>
                    </div>
                  </td>
                  <td>
                    <center>
                      <FaTrash
                        color="red"
                        onClick={async () => {
                          const response = await PaiementClientAPI.delete(
                            clientPayment.id!
                          );
                          if (response!.status == 204) {
                            setActionResultMessage(
                              "Le paiement du client a été supprimé avec succès"
                            );
                            toggleModal("action-result-message");
                            fetchAllClientPayments(clientPayment.id_client);
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
                  </td> */}
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
      {/* <div className="flex flex-row items-center content-center">
        <span className=" text-md my-3 font-medium text-gray-700">
          Total paiement CIM Benin de la periode
        </span>
        <span className="ml-20 text-md">10 000 000</span>
      </div>
      <div className="flex flex-row items-center content-center">
        <span className=" text-md font-medium text-gray-700">
          Total paiement NOCIBE de la periode
        </span>
        <span className="ml-24 text-md">10 000 000</span>
      </div> */}
    </div>
  );
};

export default ClientPaymentsTable;
