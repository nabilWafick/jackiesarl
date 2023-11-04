import { FC } from "react";
import { BsDot } from "react-icons/bs";
import Employes from "../../../../models/employes/employes.model";
import JSCheckBox from "../../../form/widgets/CheckBox.widget";

interface PermissionCheckBoxData {
  label: string;
  permission: string;
}

interface PermissionsGroupProps {
  permissionsGroupName: string;
  permissionsList: PermissionCheckBoxData[];
  employee: Employes;
}

const PermissionsGroup: FC<PermissionsGroupProps> = ({
  permissionsGroupName,
  permissionsList,
  employee,
}) => {
  return (
    <div className="flex flex-col  p-2 mb-1">
      <h2 className="flex self-start mb-2 text-xl items-center ">
        <BsDot className=" text-secondary" size={27} />
        <p className="ml-1 font-medium">{permissionsGroupName}</p>
      </h2>
      <ul className="ml-7">
        {permissionsList.map(({ label, permission }, index) => (
          <li key={index} className="text-sm flex text-start self-start">
            <JSCheckBox
              label={label}
              permision={permission}
              employee={employee}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PermissionsGroup;
