import { FC } from "react";
import { /* FaCaretDown, FaCaretUp,*/ FaDotCircle } from "react-icons/fa";
import { DailyBanksPaymentsDoughnutChart } from "./charts/DailyBanksPaymentsDoughnutChart";
import useDashBoardStore from "../../../../store/table_bord/useTableBord.store";

const DailyBanksPaymentsStatCard: FC = () => {
  const totalPaiementsBanques = useDashBoardStore(
    (state) => state.totalPaiementsBanques
  );

  const banksColors = [
    "#FFC784",
    "#FEA2EB",
    "#9B6384",
    "#368423",
    "#9BC784",
    "#36A2EB",
  ];

  let totalAmount = 0;

  totalPaiementsBanques.forEach((banque) => {
    totalAmount += banque.total_paiement;
  });

  return (
    <div
      className={`h-full w-1/3 bg-slate-50 p-3 doughnut shadow-md rounded-lg `}
    >
      <div className="flex mb-3 justify-between ">
        <p className="font-medium text-lg">Paiements Bancaires</p>
        <p className="font-bold text-xl text-secondary ">{totalAmount}</p>
      </div>
      <div className=" bg-black h-[1px] mb-[35px] w-full"></div>
      <div className=" h-3/4 w-full flex flex-col justify-center items-center content-center">
        <div className="my-4">
          <DailyBanksPaymentsDoughnutChart />
        </div>
        <div className=" w-[300px]  mt-7 flex flex-col">
          {totalPaiementsBanques.map((data, index) => (
            <div className="flex justify-between items-center" key={index}>
              <div className="flex items-center">
                <FaDotCircle
                  className={`mr-3`}
                  color={banksColors[index]}
                  size={12}
                />
                <p className=" font-medium">{data.banque}</p>
              </div>
              <div className="flex items-center">
                <p className="mr-4 ">{data.total_paiement}</p>
                {/* <div className="flex ">
                  <div className="flex flex-col ">
                    {data.increase ? (
                      <FaCaretUp color="green" />
                    ) : (
                      <FaCaretDown color="red" />
                    )}
                  </div>
                  <p className="ml-1.5">{data.percentage}%</p>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyBanksPaymentsStatCard;
