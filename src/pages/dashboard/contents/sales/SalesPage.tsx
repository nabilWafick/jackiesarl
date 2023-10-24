import SalesTable from "../../../../components/ui/dashboard/sales/SalesTable";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import "../../../../assets/css/table.css";
import useSalesStore from "../../../../store/vente/vente.store";
import { FC, useEffect } from "react";

const SalesPage: FC = () => {
  const sales = useSalesStore((state) => state.sales);
  const fetchAllSales = useSalesStore((state) => state.fetchAllSales);

  useEffect(() => {
    fetchAllSales();
  }, [fetchAllSales]);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex flex-row justify-start items-center mt-2 my-3 content-center">
        <DateIntervall />
      </div>
      <SalesTable sales={sales} />
    </div>
  );
};

export default SalesPage;
