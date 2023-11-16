import { FC, ReactElement } from "react";
//import { FaCaretDown, FaCaretUp } from "react-icons/fa";

interface StatistiqueCardProps {
  name: string;
  icon: ReactElement;
  // percentage?: number;
  // increase?: boolean;
  supValue?: number;
  value: number;
}

const StatistiqueCard: FC<StatistiqueCardProps> = ({
  name,
  icon,
  supValue,
  //   percentage,
  //  increase,
  value,
}) => {
  return (
    <div className="h-full w-full bg-slate-50 flex flex-col justify-between items-between content-between shadow-md rounded-[30px] p-3">
      <div className="w-full flex justify-between items-center ">
        {icon}
        {/* <div className="flex">
          <div className="flex flex-col items-center">
            {increase ? (
              <FaCaretUp color="green" className="mx-1" />
            ) : (
              <FaCaretDown color="red" className="mx-1" />
            )}
          </div>

          <p>{percentage}%</p>
        </div> */}
        <p className="text-center text-[20px] font-bold mr-2">
          {supValue} {supValue != undefined && <i> t</i>}
        </p>
      </div>

      <p className="text-center text-[30px] font-bold">{value}</p>
      <p className="self-center text-lg">{name}</p>
    </div>
  );
};

export default StatistiqueCard;
