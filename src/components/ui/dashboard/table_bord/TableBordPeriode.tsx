import { FC } from "react";
import useDashBoardStore from "../../../../store/table_bord/useTableBord.store";

interface TableBordPeriodeProps {
  periode: string;
  periodeValue: 1 | 0;
}

const TableBordPeriode: FC<TableBordPeriodeProps> = ({
  periode,
  periodeValue,
}) => {
  const setIsToday = useDashBoardStore((state) => state.setIsToday);
  const fetchDashBoardData = useDashBoardStore(
    (state) => state.fetchDashBoardData
  );
  const isToday = useDashBoardStore((state) => state.isToday);
  return (
    <div
      className={`text-xs rounded-full py-3 px-4 mx-3 ${
        periodeValue == isToday ? "bg-secondary text-white" : "bg-slate-100"
      } shadow-md`}
      onClick={async () => {
        setIsToday(periodeValue);
        fetchDashBoardData(isToday);
      }}
    >
      {periode}
    </div>
  );
};

export default TableBordPeriode;
