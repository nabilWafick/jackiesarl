import { FC } from "react";
import { FaCheck, FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";
import CommandesClients from "../../../../models/commandes_client/commandes_client.store";

interface OrdersTableProps {
  orders: CommandesClients[];
}

const OrdersTable: FC<OrdersTableProps> = ({ orders }) => {
  return (
    <div className="flex flex-col justify-start w-full ">
      <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p>
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
                  {order.client.prenoms} {order.client.nom}
                </td>
                <td>{order.quantite_achetee}t</td>
                <td>{order.destination}</td>
                <td>{order.date_commande.getDate()}</td>
                <td>{order.date_livraison.getDate()}</td>
                <td>{order.categorie}</td>
                <td className="">
                  {order.est_traitee ? (
                    <i className="flex justify-end">
                      <FaCheckCircle className="text-secondary" size={20} />
                    </i>
                  ) : (
                    <i className="flex justify-end">
                      <FaCheck className="text-secondary" size={20} />
                    </i>
                  )}
                </td>
                <td>
                  <i className="flex justify-end">
                    <FaEdit color="green" />
                  </i>
                </td>
                <td>
                  <i className="flex justify-end">
                    <FaTrash color="red" />
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
