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
      className={`h-[500px] w-full sm:h-[500px] sm:w-full  md:h-[400px] md:w-full lg:h-full  lg:w-1/2 mt-4 lg:mt-0 md:ml-0 lg:ml-1.5 p-3 doughnut shadow-md rounded-lg `}
    >
      <div className="flex mb-3 justify-between text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] ">
        <p className="font-medium ">Achat Entreprise</p>
        <p className="font-bold  text-secondary ">
          {totalAchatsEntreprise[0].total_achat +
            totalAchatsEntreprise[1].total_achat}
          <i> t</i>
        </p>
      </div>
      <div className=" bg-black h-[1px] mb-[35px] w-full"></div>
      <div className=" h-3/4 w-full flex flex-col sm:flex-col md:flex-row justify-center items-center content-center">
        <div className="my-4">
          <CompanyDailyPurchasesDoughnutChart />
        </div>
        <div className="mt-4 sm:mt-4 md:mt-0 w-[300px] flex flex-col text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
          {totalAchatsEntreprise.map((data, index) => (
            <div className="flex justify-between items-center" key={index}>
              <div className="flex justify-start items-center">
                <FaDotCircle
                  className={`mr-3 ${
                    index == 0 ? "text-[#FF6384]" : "text-[#36A2EB]"
                  }`}
                  size={12}
                />
                <p className=" font-medium">{data.categorie}</p>
              </div>
              <div className="flex items-center font-medium">
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
