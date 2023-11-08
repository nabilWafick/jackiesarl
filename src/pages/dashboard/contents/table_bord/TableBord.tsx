import { FaHandHoldingUsd } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import HorizontalDoughnutStatCard from "../../../../components/ui/dashboard/table_bord/HorizontalDoughnutStatCard";
import TableBordPeriode from "../../../../components/ui/dashboard/table_bord/TableBordPeriode";
import TotalStockCard from "../../../../components/ui/dashboard/table_bord/TotalStockCard";
import TransactionChartCard from "../../../../components/ui/dashboard/table_bord/TransactionChartCard";
import VerticalDoughnutStatCard from "../../../../components/ui/dashboard/table_bord/VerticalDoughnutStatCard";
import StatistiqueCard from "../../../../components/ui/dashboard/widgets/StatistiqueCard.widget";
import { FC, useEffect } from "react";
import useDashBoardStore from "../../../../store/table_bord/useTableBord.store";

const vertDoughnutStatCardData = [
  {
    name: "Commandes traitées",
    value: "300 M",
    data: [
      {
        name: "CIM BENIN",
        value: 1000,
        // increase: true,
        // percentage: 50,
      },
      {
        name: "NOCIBE BENIN",
        value: 500,
        increase: true,
        percentage: 25,
      },
    ],
  },
  {
    name: "Commandes non traitées",
    value: "100 M",
    data: [
      {
        name: "CIM BENIN",
        value: 1000,
        // increase: true,
        // percentage: 50,
      },
      {
        name: "NOCIBE BENIN",
        value: 500,
        increase: true,
        percentage: 25,
      },
    ],
  },
  {
    name: "Total de Paiement",
    value: "300 M",
    data: [
      {
        name: "CIM BENIN",
        value: 1000,
        // increase: true,
        // percentage: 50,
      },
      {
        name: "NOCIBE BENIN",
        value: 500,
        increase: true,
        percentage: 25,
      },
    ],
  },
];

const horizDoughnutStatCardData = [
  {
    name: "Total de Achat",
    value: "300 M",
    data: [
      {
        name: "CIM BENIN",
        value: 1000,
        // increase: true,
        // percentage: 50,
      },
      {
        name: "NOCIBE BENIN",
        value: 500,
        increase: true,
        percentage: 25,
      },
    ],
  },
];

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

  return (
    <div className="h-max w-full flex flex-col justify-center items-center content-center">
      {/* Table de bord */}
      <div className=" p-3 w-full flex flex-row justify-between items-center ">
        <h2 className="font-medium text-2xl">Table de bord</h2>
        <div className="moments flex ">
          <TableBordPeriode periode={"Aujourd'hui"} periodeValue={1} />
          <TableBordPeriode periode={"Hier"} periodeValue={0} />
        </div>
      </div>

      {/* Line 1 Stats */}

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

      {/* Line 2 Stats */}

      <div className="h-[400px] w-full flex my-4 justify-between  ">
        <TotalStockCard />

        {horizDoughnutStatCardData.map((horizDoughnutData) => (
          <HorizontalDoughnutStatCard
            key={horizDoughnutData.name}
            name={horizDoughnutData.name}
            value={horizDoughnutData.value}
            data={horizDoughnutData.data}
          />
        ))}
      </div>

      {/* Line 3 Stats */}
      <div className="h-[530px] w-full flex my-4 justify-between  items-center content-center ">
        {vertDoughnutStatCardData.map((vertDoughnutData) => (
          <VerticalDoughnutStatCard
            key={vertDoughnutData.name}
            name={vertDoughnutData.name}
            value={vertDoughnutData.value}
            data={vertDoughnutData.data}
          />
        ))}
      </div>
    </div>
  );
};

export default TableBord;
