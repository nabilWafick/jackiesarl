import { FC } from "react";
import Employes from "../../../../models/employes/employes.model";
import ProfileCard from "../../widgets/ProfileCard";
import useEmployesStore from "../../../../store/employes/useEmployes.store";

interface RapportUserCardProps {
  employee: Employes;
}

const RapportUserCard: FC<RapportUserCardProps> = ({ employee }) => {
  const setSelectedEmployee = useEmployesStore(
    (state) => state.setSelectedEmployee
  );

  // const selectedEmployee = useEmployesStore((state) => state.selectedEmploye);

  return (
    <div
      className={`h-[75px] w-52 px-2 flex flex-row ${
        /*
        employee.id! == selectedEmployee!.id! ? "bg-primary" : "bg-white"
      */ ""
      }  content-center shadow-md items-center my-3`}
      onClick={() => setSelectedEmployee(employee)}
    >
      <div className=" mr-3 rounded-full bg-gray-300 shadow-sm">
        <ProfileCard height={60} width={60} iconSize={20} />
      </div>
      <div className="mr-2">
        <p className=" text-xs mb-1">{/*employee.role*/}Role</p>
        <p className="text-xs font-bold">
          {/*employee.prenoms*/} Prénoms {/*employee.nom*/} Nom
        </p>
      </div>
    </div>
  );
};

export default RapportUserCard;
