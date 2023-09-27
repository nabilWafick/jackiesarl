import { FC } from "react";
import { FaCaretDown, FaCaretUp, FaDotCircle } from "react-icons/fa";
import { DoughnutChart } from "../../../../pages_/charts/DoughnutChart";

interface VDSData {
  name: string;
  value: number;
  percentage: number;
  increase: boolean;
}

interface VerticalDoughnutStatCardProps {
  name: string;
  value: string;
  data: VDSData[];
}

const VerticalDoughnutStatCard: FC<VerticalDoughnutStatCardProps> = ({
  name,
  value,
  data,
}) => {
  return (
    <div
      className={`h-full w-1/3 bg-slate-50 ${
        name != "Commandes traitées" && "ml-1"
      } p-3 doughnut shadow-md rounded-lg `}
    >
      <div className="flex mb-3 justify-between ">
        <p className="font-medium text-lg">{name}</p>
        <p className="font-bold text-xl text-secondary ">{value}</p>
      </div>
      <div className=" bg-black h-[1px] mb-[35px] w-full"></div>
      <div className=" h-3/4 w-full flex flex-col justify-center items-center content-center">
        <div className="my-4">
          <DoughnutChart />
        </div>
        <div className=" w-[300px]  mt-7 flex flex-col">
          {data.map((_data) => (
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <FaDotCircle className="mr-3 text-secondary" size={12} />
                <p>{_data.name}</p>
              </div>
              <div className="flex items-center">
                <p className="mr-4 ">{_data.value}</p>
                <div className="flex ">
                  <div className="flex flex-col ">
                    {_data.increase ? (
                      <FaCaretUp color="green" />
                    ) : (
                      <FaCaretDown color="red" />
                    )}
                  </div>
                  <p className="ml-1.5">{_data.percentage}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalDoughnutStatCard;
