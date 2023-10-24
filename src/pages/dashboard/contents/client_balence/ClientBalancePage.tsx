import ClientBalanceTable from "../../../../components/ui/dashboard/client_balence/ClientBalanceTable";
import ClientCard from "../../../../components/ui/dashboard/clients/ClientCard";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import "../../../../assets/css/table.css";
import { FC, useEffect } from "react";
import useClientsStore from "../../../../store/clients/useClients.store";
import useSoldeClientStore from "../../../../store/solde_client/useSoldeClient.store";

const ClientBalancePage: FC = () => {
  const selectedClient = useClientsStore((state) => state.selectedClient);
  const soldeClient = useSoldeClientStore((state) => state.soldeClient);
  const fetchSoldeClient = useSoldeClientStore(
    (state) => state.fetchSoldeClient
  );

  useEffect(() => {
    fetchSoldeClient(selectedClient!.id!);
  }, [fetchSoldeClient, selectedClient]);
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <ClientCard client={selectedClient!} />
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
      </div>

      <ClientBalanceTable soldeClient={soldeClient!} />
    </div>
  );
};

export default ClientBalancePage;
