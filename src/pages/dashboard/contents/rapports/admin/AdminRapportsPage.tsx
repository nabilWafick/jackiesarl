import { FC, useEffect } from "react";
import "../../../../../assets/css/Sidebar.css";
import RapportFileUploadedCard from "../../../../../components/ui/dashboard/rapports/RapportFileUploadedCard";
import RapportUserCard from "../../../../../components/ui/dashboard/rapports/RapportUserCard";
import useReportsStore from "../../../../../store/rapports/useRapports.store";
import useEmployesStore from "../../../../../store/employes/useEmployes.store";

const AdminRapportsPage: FC = () => {
  const employes = useEmployesStore((state) => state.employes);
  const fetchAllEmployes = useEmployesStore((state) => state.fetchAllEmployes);
  const fetchAllEmployeesReports = useReportsStore(
    (state) => state.fetchAllEmployeesReports
  );

  const employeesReports = useReportsStore((state) => state.employeesReports);

  const reportSelectedEmployee = useReportsStore(
    (state) => state.reportSelectedEmployee
  );
  //const re = useReportsStore(state=>state.setAuthenticatedEmployee)

  useEffect(() => {
    fetchAllEmployes();
    fetchAllEmployeesReports();
  }, [fetchAllEmployeesReports, fetchAllEmployes]);

  return (
    <div className="w-full flex-col justify-center items-center overflow-hidden mt-10 mb-20">
      <p className="text-lg text-center font-medium my-4">Administrateur</p>

      <div className="flex  justify-center my-3 sidebar ">
        <div className="users col-span-4 mx-5">
          <p className="flex justify-center py-2 shadow-md rounded-md bg-secondary text-white font-semibold px-10 mr mb-5">
            Collaborateurs
          </p>
          <div className="h-96 sidebar overflow-x-hidden px-3">
            {employes.map((employe, index) => (
              <RapportUserCard key={index} employee={employe!} />
            ))}
          </div>
        </div>
        <div className="files flex flex-col mx-5">
          <div className="flex justify-center py-2 shadow-md rounded-md bg-secondary text-white font-semibold px-10 mb-5 ">
            Rapports
          </div>
          <div className="h-96 sidebar overflow-x-hidden px-3">
            {reportSelectedEmployee != undefined &&
              employeesReports.map((employeeReport, index) => {
                if (reportSelectedEmployee.id! == employeeReport!.employe!.id)
                  return (
                    <RapportFileUploadedCard
                      key={index}
                      rapport={employeeReport}
                    />
                  );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRapportsPage;
