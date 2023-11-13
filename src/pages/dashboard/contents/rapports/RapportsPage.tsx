import { FC } from "react";
import ActionResult from "../../../../components/ui/dashboard/widgets/ActionResult";
import EmployeeRapportsPage from "./employee/EmployeeRapportsPage";
import FileShower from "../../../../components/ui/dashboard/widgets/FileShower";
import useAuthenticatedEmployeStore from "../../../../store/authenticated_employe/useAuthenticatedEmploye.store";
import AdminRapportsPage from "./admin/AdminRapportsPage";

const RapportsPage: FC = () => {
  const authenticatedEmploye = useAuthenticatedEmployeStore(
    (state) => state.authenticatedEmploye
  );

  const employeePermissions = JSON.parse(
    authenticatedEmploye!.permissions as string
  );

  return (
    <div className="w-full h-full flex-col justify-around items-center">
      <ActionResult />
      <FileShower />
      {employeePermissions["admin"] && <AdminRapportsPage />}
      <EmployeeRapportsPage />
    </div>
  );
};

export default RapportsPage;
