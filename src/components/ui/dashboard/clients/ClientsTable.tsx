import { FC } from "react";
import Clients from "../../../../models/clients/clients.model";
import { Link } from "react-router-dom";
import useClientsStore from "../../../../store/clients/useClients.store";
import { toggleModal } from "../widgets/ToggleModal";
import { FaEdit } from "react-icons/fa";
import ClientUpdate from "../../../form/forms/client_update/ClientUpdate";
import "../../../../assets/css/Sidebar.css";

interface ClientsTableProps {
  clientsList: Clients[];
}

const ClientsTable: FC<ClientsTableProps> = ({ clientsList }) => {
  const setSelectedClient = useClientsStore((state) => state.setSelectedClient);
  return (
    <div className="flex flex-col justify-start w-full my-7  border-2 border-primary  rounded-lg shadow-md overflow-auto sidebar ">
      <table className="table table-striped text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
        <tbody className="">
          <tr>
            <td className="font-medium">Client</td>
            <td className="font-medium">Numero IFU</td>
            <td className="font-medium">Numero de telephone</td>
            <td className="font-medium">Adresse Email</td>
            <td className="font-medium">Date d'ajout</td>
            <td className="font-medium"></td>
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
                <td>
                  <Link
                    className="text-tableTextColor font-normal hover:text-tableTextColor focus:text-tableTextColor"
                    onClick={() => setSelectedClient(client)}
                    to="/client"
                  >
                    {new Date(client.date_ajout!)!.toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Link>
                </td>
                <td>
                  <ClientUpdate
                    key={Date.now() + client.id!}
                    id={client.id!}
                    firstname={client.prenoms}
                    lastname={client.nom}
                    ifuNumber={client.numero_ifu.toString()}
                    phoneNumber={client.numero_telephone}
                    email={client.email ?? undefined}
                    modalLabel={`client-update-form-${client.id}`}
                  />
                  <center>
                    <FaEdit
                      color="green"
                      onClick={() => {
                        toggleModal(`client-update-form-${client.id}`);
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
  );
};

export default ClientsTable;
