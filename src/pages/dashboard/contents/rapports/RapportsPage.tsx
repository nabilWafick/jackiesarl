import { FC } from "react";
import ActionResult from "../../../../components/ui/dashboard/widgets/ActionResult";
//import useAuthenticatedEmployeStore from "../../../../store/authenticated_employe/useAuthenticatedEmploye.store";
import AdminRapportsPage from "./admin/AdminRapports";
import EmployeeRapportsPage from "./employee/EmployeeRapportsPage";

const RapportsPage: FC = () => {
  // const authenticatedEmploye = useAuthenticatedEmployeStore(
  //   (state) => state.authenticatedEmploye
  // );
  return (
    <div className="w-full h-full flex-col justify-around items-center row-auto">
      <ActionResult /> <AdminRapportsPage />
      <EmployeeRapportsPage />
    </div>
  );
};

export default RapportsPage;
