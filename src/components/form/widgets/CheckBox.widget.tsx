import { FC, useState } from "react";
import useEmployesStore from "../../../store/employes/useEmployes.store";
import Employes from "../../../models/employes/employes.model";
import EmployesAPI from "../../../api/employes/employes.api";

interface JSCheckBoxProps {
  employee: Employes;
  label: string;
  permision: string;
}

const JSCheckBox: FC<JSCheckBoxProps> = ({ employee, label, permision }) => {
  // const selectedEmployee = useEmployesStore((state) => state.selectedEmploye);
  // const setSelectedEmployee = useEmployesStore(
  //   (state) => state.setSelectedEmployee
  // );

  const fetchAllEmployes = useEmployesStore((state) => state.fetchAllEmployes);

  const permissions =
    typeof employee!.permissions == "string"
      ? JSON.parse(employee!.permissions as string)
      : employee!.permissions;

  const [isGranted, setIsGranted] = useState<boolean>(permissions[permision]);
  // console.log("selected employee id", employee!.id!);
  // console.log(permision, permissions[permision]);

  return (
    <div className="flex gap-x-6">
      <div className="flex">
        <input
          style={{ background: "blue", border: "red" }}
          type="checkbox"
          checked={isGranted}
          onChange={async () => {
            const employee_permission =
              typeof employee!.permissions == "string"
                ? JSON.parse(employee!.permissions as string)
                : employee!.permissions;

            // update employee permission status
            employee_permission[permision] = !employee_permission[permision];
            employee!.permissions = employee_permission;

            const response = await EmployesAPI.update(employee.id!, employee);

            if (response!.status == 200) {
              setIsGranted(!isGranted);
              console.log("updated");
              fetchAllEmployes();
            }
          }}
          className="shrink-0 mt-0.5 bg-blue-500  border-red-500 rounded text-yellow-600 focus:ring-blue-700 checked:bg-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
          id="hs-checkbox-group-1"
        />
        <label htmlFor="hs-checkbox-group-1" className="text-sm ml-3">
          {label}
        </label>
      </div>
    </div>
  );
};

export default JSCheckBox;
/**
 * SELECT
  CASE 
    WHEN DAYNAME(date_ajout) = 'Monday' THEN 'Lundi'
    WHEN DAYNAME(date_ajout) = 'Tuesday' THEN 'Mardi'
    WHEN DAYNAME(date_ajout) = 'Wednesday' THEN 'Mercredi'
    WHEN DAYNAME(date_ajout) = 'Thursday' THEN 'Jeudi'
    WHEN DAYNAME(date_ajout) = 'Friday' THEN 'Vendredi'
    WHEN DAYNAME(date_ajout) = 'Saturday' THEN 'Samedi'
    WHEN DAYNAME(date_ajout) = 'Sunday' THEN 'Dimanche'
  END AS jour,
  COALESCE(SUM(montant), 0) AS total_achats
FROM
  achat
WHERE
  WEEK(date_achat) = WEEK(CURDATE())
GROUP BY
  jour
ORDER BY
  FIELD(jour, 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche');

 */
