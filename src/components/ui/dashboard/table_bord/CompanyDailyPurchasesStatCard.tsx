import { FC } from "react";
import { /* FaCaretDown, FaCaretUp,*/ FaDotCircle } from "react-icons/fa";
import { CompanyDailyPurchasesDoughnutChart } from "./charts/CompanyDailyPurchasesDoughnutChart";
import useDashBoardStore from "../../../../store/table_bord/useTableBord.store";

const CompanyDailyPurchasesStatCard: FC = () => {
  const totalAchatsEntreprise = useDashBoardStore(
    (state) => state.totalAchatsEntreprise
  );

  return (
    <div
      className={`h-full w-1/2 bg-slate-50 ml-1.5 p-3 doughnut shadow-md rounded-lg `}
    >
      <div className="flex mb-3 justify-between ">
        <p className="font-medium text-lg">Achat Entreprise</p>
        <p className="font-bold text-xl text-secondary ">
          {totalAchatsEntreprise[0].total_achat +
            totalAchatsEntreprise[1].total_achat}
        </p>
      </div>
      <div className=" bg-black h-[1px] mb-[35px] w-full"></div>
      <div className=" h-3/4 w-full flex flex-row justify-center items-center content-center">
        <div className="my-4">
          <CompanyDailyPurchasesDoughnutChart />
        </div>
        <div className=" w-[300px] flex flex-col">
          {totalAchatsEntreprise.map((data, index) => (
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
                <p className="mr-4 ">{data.total_achat}</p>
                {/* <div className="flex">
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

export default CompanyDailyPurchasesStatCard;
