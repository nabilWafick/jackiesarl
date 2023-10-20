import { FaEdit, FaFile, FaTrash } from "react-icons/fa";
import AchatClient from "../../../../models/achat_client/achat_client.model";
import { FC } from "react";
import { toggleModal } from "../widgets/ToggleModal";
import ClientPurchaseUpdate from "../../../form/forms/client_purchase_update/ClientPurchaseUpdate";
import AchatClientAPI from "../../../../api/achat_client/achat_client.api";
import useInterfacesStore from "../../../../store/interfaces/useInfacesStore";
import useClientPurchasesStore from "../../../../store/achat_client/useAchatClient.store";

interface ClientPurchasesTableProps {
  clientPurchases: AchatClient[];
}

const ClientPurchasesTable: FC<ClientPurchasesTableProps> = ({
  clientPurchases,
}) => {
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
  const fetchAllClientPurchases = useClientPurchasesStore(
    (state) => state.fetchAllClientPurchases
  );
  return (
    <div className="flex flex-col justify-start w-full ">
      {/* <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p> */}
      <div className="flex flex-col justify-start w-full my-3 border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="font-medium">Quantité</td>
              <td className="font-medium">Catégorie</td>
              <td className="font-medium">Bon de Commande</td>
              <td className="font-medium">Montant</td>
              <td className="font-medium">Numéro CTP</td>
              <td className="font-medium">Bordereau </td>

              <td className="font-medium"></td>
              <td className="font-medium"></td>
            </tr>

            {clientPurchases.map((clientPurchase) => {
              return (
                <tr key={clientPurchase.id!}>
                  <td>
                    {clientPurchase.quantite_achetee}
                    <b> t</b>
                  </td>
                  <td>{clientPurchase.categorie}</td>
                  <td>{clientPurchase.numero_bc}</td>
                  <td>
                    {clientPurchase.montant}
                    <i> fcfa</i>
                  </td>
                  <td>{clientPurchase.numero_ctp}</td>
                  <td>
                    {clientPurchase.bordereau == "" ? (
                      ""
                    ) : (
                      <FaFile
                        className="text-secondary"
                        onClick={() =>
                          openSlipFile(clientPurchase.bordereau.toString())
                        }
                      />
                    )}
                  </td>

                  <td>
                    <div>
                      <ClientPurchaseUpdate
                        key={clientPurchase.id!}
                        id={clientPurchase.id!}
                        quantity={clientPurchase.quantite_achetee.toString()}
                        category={clientPurchase.categorie}
                        amount={clientPurchase.montant.toString()}
                        ctpNumber={clientPurchase.numero_ctp}
                        slip={clientPurchase.bordereau}
                        bcNumber={clientPurchase.numero_bc.toString()}
                        modalLabel={`client-purchase-update-form-${clientPurchase.id}`}
                      />
                      <center>
                        <FaEdit
                          color="green"
                          onClick={() => {
                            toggleModal(
                              `client-purchase-update-form-${clientPurchase.id}`
                            );
                          }}
                        />
                      </center>
                    </div>
                  </td>
                  <td>
                    <center>
                      <FaTrash
                        color="red"
                        onClick={async () => {
                          const response = await AchatClientAPI.delete(
                            clientPurchase.id!
                          );
                          if (response!.status == 204) {
                            setActionResultMessage(
                              "L'achat du client a été supprimé avec succès"
                            );
                            fetchAllClientPurchases(clientPurchase.id_client);
                            toggleModal("action-result-message");
                          } else if (response!.status == 404) {
                            setActionResultMessage(
                              "L'achat du client n'a pas été trouvé"
                            );
                            toggleModal("action-result-message");
                          } else {
                            setActionResultMessage(
                              "Erreur lors de la suppression de l'achat du client"
                            );
                            toggleModal("action-result-message");
                          }
                        }}
                      />
                    </center>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* 
      <div className="flex flex-row items-center content-center">
        <span className=" text-md my-3 font-medium text-gray-700">
          Total Achat CIM Benin de la periode
        </span>
        <span className="ml-20 text-md">30t</span>
      </div>
      <div className="flex flex-row items-center content-center">
        <span className=" text-md font-medium text-gray-700">
          Total Achat NOCIBE de la periode
        </span>
        <span className="ml-24 text-md">30t</span>
      </div> */}
    </div>
  );
};

export default ClientPurchasesTable;
