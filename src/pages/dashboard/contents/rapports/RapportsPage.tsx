import { FC } from "react";
import ActionResult from "../../../../components/ui/dashboard/widgets/ActionResult";
import EmployeeRapportsPage from "./employee/EmployeeRapportsPage";
import FileShower from "../../../../components/ui/dashboard/widgets/FileShower";
import AdminRapportsPage from "./admin/AdminRapportsPage";
import { authenticatedEmployee } from "../../../../data/GlobalData";

const RapportsPage: FC = () => {
  const authenticatedEmploye = authenticatedEmployee.value;

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
