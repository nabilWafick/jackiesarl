import { FC, useEffect } from "react";
import useSoldeClientStore from "../../../../store/solde_client/useSoldeClient.store";
import useClientsStore from "../../../../store/clients/useClients.store";

const ClientBalanceTable: FC = () => {
  const soldeClient = useSoldeClientStore((state) => state.soldeClient);
  const fetchSoldeClient = useSoldeClientStore(
    (state) => state.fetchSoldeClient
  );
  const selectedClient = useClientsStore((state) => state.selectedClient);

  useEffect(() => {
    fetchSoldeClient(selectedClient!.id!);
  }, [fetchSoldeClient, selectedClient]);

  return (
    <div className="flex flex-col justify-start w-full ">
      {/* <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p> */}
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>Total des dettes</td>
              <td className="text-end">
                {soldeClient!.total_dettes} <i> fcfa</i>
              </td>
            </tr>
            <tr>
              <td>Total des paiements</td>
              <td className="text-end">
                {soldeClient!.total_paiements} <i> fcfa</i>
              </td>
            </tr>
            <tr>
              <td>Créances</td>
              <td className="text-end">
                {soldeClient!.creance} <i> fcfa</i>
              </td>
            </tr>
            <tr>
              <td>Avance</td>
              <td className="text-end">
                {soldeClient!.avance} <i> fcfa</i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientBalanceTable;
