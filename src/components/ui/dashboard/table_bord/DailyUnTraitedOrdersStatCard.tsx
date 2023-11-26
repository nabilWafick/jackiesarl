import { FC } from "react";
import { /* FaCaretDown, FaCaretUp,*/ FaDotCircle } from "react-icons/fa";
import { DailyUntraitedOrdersDoughnutChart } from "./charts/DailyUntraitedOrdersDoughnutChart";
import useDashBoardStore from "../../../../store/table_bord/useTableBord.store";

const DailyUnTraitedOrdersStatCard: FC = () => {
  const totalCommandesNonTraitees = useDashBoardStore(
    (state) => state.totalCommandesNonTraitees
  );
  return (
    <div
      className={`h-full w-full sm:w-full md:w-full lg:w-1/3 bg-slate-50 mr-0 sm:mr-0 md:mr-0 lg:mr-1.5 p-3 doughnut shadow-md rounded-lg `}
    >
      <div className="flex mb-3 justify-between text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
        <p className="font-medium ">Commandes Non Traitées</p>
        <p className="font-bold text-secondary ">
          {totalCommandesNonTraitees[0].total_commande_non_traitee +
            totalCommandesNonTraitees[1].total_commande_non_traitee}
          <i> t</i>
        </p>
      </div>
      <div className=" bg-black h-[1px] mb-[35px] w-full"></div>
      <div className="h-3/4 sm:h-3/4 md:h-full lg:h-3/4 w-full flex flex-col md:flex-row lg:flex-col justify-center items-center content-center">
        <div className="md:my-0 lg:my-4">
          <DailyUntraitedOrdersDoughnutChart />
        </div>
        <div className="w-[300px] sm:w-full md:w-full  mt-4 sm:mt-4 md:mt-0  lg:mt-7 flex flex-col text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
          {totalCommandesNonTraitees.map((data, index) => (
            <div className="flex justify-between items-center" key={index}>
              <div className="flex items-center">
                <FaDotCircle
                  className={`mr-3 ${
                    index == 0 ? "text-[#FF6384]" : "text-[#36A2EB]"
                  }`}
                  size={12}
                />
                <p className=" font-medium">{data.categorie}</p>
              </div>
              <div className="flex items-center">
                <p className="mr-4 font-medium">
                  {data.total_commande_non_traitee}
                </p>
                {/* <div className="flex ">
                  <div className="flex flex-col ">
                    {_data.increase ? (
                      <FaCaretUp color="green" />
                    ) : (
                      <FaCaretDown color="red" />
                    )}
                  </div>
                  <p className="ml-1.5">{_data.percentage}%</p>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyUnTraitedOrdersStatCard;
