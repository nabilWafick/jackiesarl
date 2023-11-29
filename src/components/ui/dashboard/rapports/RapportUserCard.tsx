import { FC } from "react";
import Employes from "../../../../models/employes/employes.model";
import ProfileCard from "../../widgets/ProfileCard";
import useReportsStore from "../../../../store/rapports/useRapports.store";
//import useEmployesStore from "../../../../store/employes/useEmployes.store";

interface RapportUserCardProps {
  employee: Employes;
}

const RapportUserCard: FC<RapportUserCardProps> = ({ employee }) => {
  const reportSelectedEmployee = useReportsStore(
    (state) => state.reportSelectedEmployee
  );
  const setReportSelectedEmployee = useReportsStore(
    (state) => state.setReportSelectedEmployee
  );
  // const selectedEmployee = useEmployesStore((state) => state.selectedEmploye);

  return (
    <div
      className={`h-[75px] w-52 px-2 flex flex-row ${
        reportSelectedEmployee != undefined &&
        employee!.id! == reportSelectedEmployee!.id!
          ? "bg-primary"
          : "bg-white"
      }  content-center shadow-md items-center m-2 text-[10px] sm:text-[10px] md:text-[11px] lg:text-[12px]`}
      onClick={() => setReportSelectedEmployee(employee)}
    >
      <div className=" mr-3 rounded-full bg-gray-300 shadow-sm">
        <ProfileCard height={60} width={60} iconSize={20} />
      </div>
      <div className="mr-2">
        <p className=" text-xs' mb-1">{employee.role}</p>
        <p className="text-xs' font-bold">
          {employee.prenoms} {employee.nom}
        </p>
      </div>
    </div>
  );
};

export default RapportUserCard;
