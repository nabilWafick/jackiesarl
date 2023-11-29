import { FC } from "react";
import { BiUser, BiX } from "react-icons/bi";
import Clients from "../../../../models/clients/clients.model";

interface ClientCardProps {
  client: Clients;
}

const ClientCard: FC<ClientCardProps> = ({ client }) => {
  return (
    <div className="client flex justify-start items-center mt-3 mb-2 ">
      <div className="flex justify-around items-center p-2 border border-secondary rounded-md shadow-md">
        <div className="h-10 w-10 bg-primary slate-200  rounded-full shadow-sm flex justify-center items-center">
          <BiUser className="text-secondary" />
        </div>
        <div className="flex flex-col justify-center items-start mx-4">
          <p className="text-sm text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
            {client.prenoms} {client.nom}
          </p>
          <p className="text-sm">{client.numero_ifu}</p>
        </div>

        <div className="h-full flex items-start justify-start">
          <BiX
            className="flex justify-start ml-1 item-start text-secondary"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
