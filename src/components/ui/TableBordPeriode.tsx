import { FC } from "react";

interface TableBordPeriodeProps {
  periode: string;
  onClick: () => void;
}

const TableBordPeriode: FC<TableBordPeriodeProps> = ({ periode, onClick }) => {
  return (
    <div
      className={`text-xs rounded-full py-3 px-4 mx-3 ${
        periode == "Aujourd'hui" ? "bg-secondary text-white" : "bg-slate-100"
      } shadow-md`}
      onClick={onClick}
    >
      {periode}
    </div>
  );
};

export default TableBordPeriode;
