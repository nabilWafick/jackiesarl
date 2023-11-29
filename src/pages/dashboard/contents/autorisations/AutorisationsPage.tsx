import Permissions from "../../../../components/ui/dashboard/permissions/Permissions";
import { FC, useEffect } from "react";
import useEmployesStore from "../../../../store/employes/useEmployes.store";
import SelectedEmployeeCard from "../../../../components/ui/dashboard/selected_employee_card/SelectedEmployeeCard";
import { authenticatedEmployee } from "../../../../data/GlobalData";
import "../../../../assets/css/Sidebar.css";

const AutorisationsPage: FC = () => {
  const authenticatedEmploye = authenticatedEmployee.value;
  const employees = useEmployesStore((state) => state.employes);
  const fetchAllEmployes = useEmployesStore((state) => state.fetchAllEmployes);
  const selectedEmployee = useEmployesStore((state) => state.selectedEmploye);
  const employePermissions = JSON.parse(
    authenticatedEmploye!.permissions as string
  );
  useEffect(() => {
    employePermissions["admin"] && fetchAllEmployes();
  }, [fetchAllEmployes, authenticatedEmploye, employePermissions]);

  return (
    <div className="w-full h-full flex-col justify-around items-center">
      {employePermissions["admin"] ? (
        <div className="flex flex-col sm:flex-row justify-center my-3 ">
          <div className="users col-span-4 mx-5">
            <div className="flex justify-center p-2 shadow-md rounded-md bg-secondary text-white font-semibold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
              Collaborateurs
            </div>

            <div className="min-h-max max-h-96 sidebar flex flex-row sm:flex-col overflow-auto px-3">
              {employees.map((employe, index) => (
                <SelectedEmployeeCard key={index} employee={employe} />
              ))}
            </div>
          </div>
          <div className="files col-span-4 mx-5 mt-5 sm:mt-0">
            <div className="flex justify-center py-2 px-20 shadow-md rounded-md bg-secondary text-white font-semibold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
              Autorisations
            </div>

            <div className="min-h-max max-h-96 sidebar flex flex-row sm:flex-col overflow-auto px-3">
              {selectedEmployee != undefined ? <Permissions /> : ""}
            </div>
          </div>
        </div>
      ) : (
        <p className=" text-tableTextColor  flex self-center justify-center items-center  text-[50px]">
          Rien à afficher
        </p>
      )}
    </div>
  );
};

export default AutorisationsPage;
