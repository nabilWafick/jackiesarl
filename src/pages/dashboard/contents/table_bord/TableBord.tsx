import { FaHandHoldingUsd } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import CompanyDailyPurchasesStatCard from "../../../../components/ui/dashboard/table_bord/CompanyDailyPurchasesStatCard";
import TableBordPeriode from "../../../../components/ui/dashboard/table_bord/TableBordPeriode";
import TotalStockCard from "../../../../components/ui/dashboard/table_bord/TotalStockCard";
import TransactionChartCard from "../../../../components/ui/dashboard/table_bord/TransactionChartCard";
import StatistiqueCard from "../../../../components/ui/dashboard/widgets/StatistiqueCard.widget";
import { FC, useEffect } from "react";
import useDashBoardStore from "../../../../store/table_bord/useTableBord.store";
import DailyUnTraitedOrdersStatCard from "../../../../components/ui/dashboard/table_bord/DailyUnTraitedOrdersStatCard";
import DailyTraitedOrdersStatCard from "../../../../components/ui/dashboard/table_bord/DailyTraitedOrdersStatCard";
import DailyBanksPaymentsStatCard from "../../../../components/ui/dashboard/table_bord/DailyBanksPaymentsStatCard";
import { DailySalesLineBarChart } from "../../../../components/ui/dashboard/table_bord/charts/DailySalesLineBarChart";
import { DailySalesQuantityLineBarChart } from "../../../../components/ui/dashboard/table_bord/charts/DailySalesQuantityLineBarChart";

const TableBord: FC = () => {
  const fetchDashBoardData = useDashBoardStore(
    (state) => state.fetchDashBoardData
  );
  const isToday = useDashBoardStore((state) => state.isToday);
  const totalClientsIncrits = useDashBoardStore(
    (state) => state.totalClientsIncrits
  );
  const totalVente = useDashBoardStore((state) => state.totalVente);
  const totalAvancesCreances = useDashBoardStore(
    (state) => state.totalAvancesCreances
  );

  useEffect(() => {
    fetchDashBoardData(isToday);
  }, [fetchDashBoardData, isToday]);

  setTimeout(() => {}, 1500);

  return (
    <div className="h-max w-full flex flex-col justify-center items-center content-center mt-[1400px]">
      {/* Table de bord */}
      <div className=" p-3 w-full flex flex-row justify-between items-center ">
        <h2 className="font-medium text-2xl">Table de bord</h2>
        <div className="moments flex ">
          <TableBordPeriode periode={"Aujourd'hui"} periodeValue={1} />
          <TableBordPeriode periode={"Hier"} periodeValue={0} />
        </div>
      </div>

      <div className="flex h-[500px] w-full my-4 justify-between items-center content-center ">
        <TransactionChartCard />
        <div className="h-full w-1/2 statistique grid grid-flow-row grid-cols-2 ml-3 p-">
          <div className="grid-element m-3">
            <StatistiqueCard
              name={"Avance"}
              icon={<FaHandHoldingUsd className="text-secondary" size={40} />}
              value={totalAvancesCreances.total_avances}
            />
          </div>
          <div className="grid-element m-3">
            <StatistiqueCard
              name={"Vente"}
              icon={<BsHandbag className="text-secondary" size={40} />}
              supValue={totalVente.total_quantite}
              value={totalVente.total_vente}
            />
          </div>
          <div className="grid-element m-3">
            <StatistiqueCard
              name={"Clients Inscrits"}
              icon={<BiUser className="text-secondary" size={40} />}
              value={totalClientsIncrits.total_clients_incrits}
            />
          </div>
          <div className="grid-element m-3">
            <StatistiqueCard
              name={"Créances"}
              icon={<GiReceiveMoney className="text-secondary" size={40} />}
              value={totalAvancesCreances.total_creances}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center  h-[350px] w-full my-2 ">
        <div className="h-full w-full mr-2 my-2 rounded-md bg-slate-50 pt-5 pb-2 pr-5 pl-5 shadow-md">
          <DailySalesLineBarChart />
        </div>
        <div className="h-full w-full ml-1.5 my-1.5 rounded-md bg-slate-50 pt-5 pb-2 pr-5 pl-5 shadow-md">
          <DailySalesQuantityLineBarChart />
        </div>
      </div>

      <div className="h-[400px] w-full ml-2 flex my-4 justify-between  ">
        <TotalStockCard />

        <CompanyDailyPurchasesStatCard />
      </div>

      <div className=" h-[580px] w-full flex my-4 justify-between  items-center content-center ">
        <DailyUnTraitedOrdersStatCard />
        <DailyTraitedOrdersStatCard />
        <DailyBanksPaymentsStatCard />
      </div>
    </div>
  );
};

export default TableBord;
