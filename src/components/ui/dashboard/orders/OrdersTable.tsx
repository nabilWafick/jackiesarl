import { FC } from "react";
import { FaCheck, FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";
import OrderUpdate from "../../../form/forms/order_update/OrderUpdate";
import { toggleModal } from "../widgets/ToggleModal";
import useClientsStore from "../../../../store/clients/useClients.store";
import useInterfacesStore from "../../../../store/interfaces/useInfacesStore";
import useCommandesStore from "../../../../store/commandes/useCommandes.store";
import CommandesAPI from "../../../../api/commandes/commandes.api";
import Commandes from "../../../../models/commandes/commandes.model";
import { authenticatedEmployee } from "../../../../data/GlobalData";

interface OrdersTableProps {
  orders: Commandes[];
}

const OrdersTable: FC<OrdersTableProps> = ({ orders }) => {
  const authenticatedEmploye = authenticatedEmployee.value;

  const setOrderClient = useClientsStore((state) => state.setOrderClient);
  const setActionResultMessage = useInterfacesStore(
    (state) => state.setActionResultMessage
  );
  const fetchAllClientsOrders = useCommandesStore(
    (state) => state.fetchAllClientsOrders
  );

  const updateOrderDeliveryStatus = async (order: Commandes) => {
    const response = await CommandesAPI.update(
      authenticatedEmploye!,
      order.id!,
      new Commandes(
        order.categorie,
        order.quantite_achetee,
        order.destination,
        order.date_commande,
        order.date_livraison,
        order.est_traitee == 1 ? 0 : 1,
        order.client!.id!
      )
    );
    if (response!.status == 200) {
      fetchAllClientsOrders();
      setActionResultMessage("La commande a été mise à jour avec succès");
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
      setActionResultMessage("La commande n'a pas été trouvée");
      toggleModal("action-result-message");
    } else {
      setActionResultMessage("Erreur lors de la mise à jour de la commande");
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
              <td className="font-medium">Client</td>
              <td className="font-medium">Quantité</td>
              <td className="font-medium">Destination</td>
              <td className="font-medium">Date de Commande</td>
              <td className="font-medium">Date de Liviraison</td>
              <td className="font-medium">Catégorie</td>
              <td className="font-medium"></td>
              <td className="font-medium"></td>
              <td className="font-medium"></td>
            </tr>

            {orders.map((order) => (
              <tr key={order.id}>
                <td>
                  {order.client!.prenoms} {order.client!.nom}
                </td>
                <td>
                  {order.quantite_achetee}
                  <i> t</i>
                </td>
                <td>{order.destination}</td>
                <td>
                  {new Date(order.date_commande)!.toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </td>
                <td>
                  {new Date(order.date_livraison)!.toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </td>
                <td>{order.categorie}</td>
                <td className="">
                  {order.est_traitee == 1 ? (
                    <i className="flex justify-end">
                      <FaCheckCircle
                        className="text-secondary"
                        onClick={() => updateOrderDeliveryStatus(order)}
                        size={20}
                      />
                    </i>
                  ) : (
                    <i className="flex justify-end">
                      <FaCheck
                        className="text-secondary"
                        onClick={() => updateOrderDeliveryStatus(order)}
                        size={20}
                      />
                    </i>
                  )}
                </td>
                <td>
                  <OrderUpdate
                    key={Date.now() + order.id!}
                    id={order.id!}
                    clientName={`${order.client!.prenoms} ${order.client!.nom}`}
                    quantity={order.quantite_achetee.toString()}
                    destination={order.destination}
                    orderDate={order.date_commande}
                    deliveryDate={order.date_livraison}
                    category={order.categorie}
                    est_traitee={order.est_traitee}
                    modalLabel={`order-update-form-${order.id!}`}
                  />
                  <i className="flex justify-end">
                    <FaEdit
                      color="green"
                      onClick={() => {
                        setOrderClient(order.client);
                        toggleModal(`order-update-form-${order.id!}`);
                      }}
                    />
                  </i>
                </td>
                <td>
                  <i className="flex justify-end">
                    <FaTrash
                      color="red"
                      onClick={async () => {
                        const response = await CommandesAPI.delete(
                          authenticatedEmploye!,
                          order.id!
                        );
                        if (response!.status == 204) {
                          setActionResultMessage(
                            "La commande a été supprimée avec succès"
                          );
                          toggleModal("action-result-message");
                          fetchAllClientsOrders();
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
                            "La commande n'a pas été trouvée"
                          );
                          toggleModal("action-result-message");
                        } else {
                          setActionResultMessage(
                            "Erreur lors de la suppression de la commande"
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
    </div>
  );
};

export default OrdersTable;
