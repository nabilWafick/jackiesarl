import SellingTable from "../../../../components/ui/dashboard/selling/SellingTable";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall";
import "../../../../assets/css/table.css";
import useClientsStore from "../../../../store/clients/useClients.store";
import useSalesStore from "../../../../store/vente/vente.store";
import { FC, useEffect } from "react";

const SalesPage: FC = () => {
  const clients = useClientsStore((state) => state.clients);
  const fetchAllClients = useClientsStore((state) => state.fetchAllClients);
  const sales = useSalesStore((state) => state.sales);
  const fetchAllSales = useSalesStore((state) => state.fetchAllSales);

  useEffect(() => {
    fetchAllClients();
    fetchAllSales(clients);
  }, [clients, fetchAllClients, fetchAllSales]);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-start items-center mt-2 my-3 content-center">
        <DateIntervall />
      </div>
      <SellingTable sales={sales} />
    </div>
  );
};

export default SalesPage;
