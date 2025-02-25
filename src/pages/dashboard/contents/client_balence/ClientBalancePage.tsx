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
  const startDate = useSoldeClientStore((state) => state.startDate);
  const endDate = useSoldeClientStore((state) => state.endDate);

  const onStartDateChange = useSoldeClientStore(
    (state) => state.onStartDateChange
  );
  const onEndDateChange = useSoldeClientStore((state) => state.onEndDateChange);
  const resetDatesInterval = useSoldeClientStore(
    (state) => state.resetDatesInterval
  );

  useEffect(() => {
    fetchSoldeClient(selectedClient!.id!);
  }, [fetchSoldeClient, selectedClient]);
  return (
    <div className="h-full w-full flex flex-col ">
      <div className="flex justify-center mb-5">
        <ClientCard client={selectedClient!} />
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center my-2 content-center">
        <DateIntervall
          selectedStartDate={startDate}
          selectedEndDate={endDate}
          onStartDateChange={onStartDateChange}
          onEndDateChange={onEndDateChange}
          resetDatesInterval={resetDatesInterval}
        />
      </div>

      <ClientBalanceTable soldeClient={soldeClient!} />
    </div>
  );
};

export default ClientBalancePage;
