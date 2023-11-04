import Permissions from "../../../../components/ui/dashboard/permissions/Permissions";
import { FC, useEffect } from "react";
import useEmployesStore from "../../../../store/employes/useEmployes.store";
import SelectedEmployeeCard from "../../../../components/ui/dashboard/selected_employee_card/selected_employee_card";

const AutorisationsPage: FC = () => {
  const employees = useEmployesStore((state) => state.employes);
  const fetchAllEmployes = useEmployesStore((state) => state.fetchAllEmployes);
  const selectedEmployee = useEmployesStore((state) => state.selectedEmploye);

  useEffect(() => {
    fetchAllEmployes();
  }, [fetchAllEmployes]);

  return (
    <div className="w-full h-full flex justify-around items-center row-auto">
      <div className="flex justify-center my-3 row-auto">
        <div className="users col-span-4 mx-5">
          <div className="flex justify-center p-2 shadow-md rounded-md bg-secondary text-white font-semibold">
            Utilisateurs
          </div>

          {employees.map((employe, index) => (
            <SelectedEmployeeCard key={index} employee={employe} />
          ))}
        </div>
        <div className="files col-span-4 mx-5">
          <div className="flex justify-center py-2 px-20 shadow-md rounded-md bg-secondary text-white font-semibold">
            Autorisations
          </div>

          {selectedEmployee != undefined ? (
            <Permissions empoyee={selectedEmployee} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default AutorisationsPage;
