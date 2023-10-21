import { FC } from "react";
import Clients from "../../../../models/clients/clients.model";
import { Link } from "react-router-dom";
import useClientsStore from "../../../../store/clients/useClients.store";

interface ClientsTableProps {
  clientsList: Clients[];
}

const ClientsTable: FC<ClientsTableProps> = ({ clientsList }) => {
  const setSelectedClient = useClientsStore((state) => state.setSelectedClient);
  return (
    <div className="flex flex-col justify-start w-full my-7  border-2 border-primary  rounded-lg shadow-md">
      <table className="table table-striped">
        <tbody className="">
          <tr>
            <td className="font-medium">Client</td>
            <td className="font-medium">Numero IFU</td>
            <td className="font-medium">Numero de telephone</td>
            <td className="font-medium">Adresse Email</td>
          </tr>

          {clientsList.map((client) => {
            return (
              <tr key={client.id}>
                <td>
                  <Link
                    className=" text-tableTextColor font-normal hover:text-tableTextColor focus:text-tableTextColor"
                    onClick={() => setSelectedClient(client)}
                    to="/client"
                  >
                    {client.prenoms} {client.nom}
                  </Link>
                </td>
                <td>
                  <Link
                    className="text-tableTextColor font-normal hover:text-tableTextColor focus:text-tableTextColor"
                    onClick={() => setSelectedClient(client)}
                    to="/client"
                  >
                    {client.numero_ifu}
                  </Link>
                </td>
                <td>
                  <Link
                    className="text-tableTextColor font-normal hover:text-tableTextColor focus:text-tableTextColor"
                    onClick={() => setSelectedClient(client)}
                    to="/client"
                  >
                    {client.numero_telephone}
                  </Link>
                </td>
                <td>
                  <Link
                    className="text-tableTextColor font-normal hover:text-tableTextColor focus:text-tableTextColor"
                    onClick={() => setSelectedClient(client)}
                    to="/client"
                  >
                    {client.email}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ClientsTable;
