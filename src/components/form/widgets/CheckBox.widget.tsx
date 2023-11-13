import { FC, useState, useEffect, useRef } from "react";
import useEmployesStore from "../../../store/employes/useEmployes.store";
import EmployesAPI from "../../../api/employes/employes.api";
import useAuthenticatedEmployeStore from "../../../store/authenticated_employe/useAuthenticatedEmploye.store";

interface JSCheckBoxProps {
  label: string;
  permission: string;
}

const JSCheckBox: FC<JSCheckBoxProps> = ({ label, permission }) => {
  const fetchAllEmployes = useEmployesStore((state) => state.fetchAllEmployes);
  const selectedEmployee = useEmployesStore((state) => state.selectedEmploye);
  const authenticatedEmploye = useAuthenticatedEmployeStore(
    (state) => state.authenticatedEmploye
  );

  const permissions = useRef<Record<string, boolean>>(
    typeof selectedEmployee!.permissions == "string"
      ? JSON.parse(selectedEmployee!.permissions as string)
      : selectedEmployee!.permissions
  );

  const [isGranted, setIsGranted] = useState<boolean>(
    permissions.current[permission]
  );

  useEffect(() => {
    permissions.current =
      typeof selectedEmployee!.permissions == "string"
        ? JSON.parse(selectedEmployee!.permissions as string)
        : selectedEmployee!.permissions;
    setIsGranted(permissions.current[permission]);
  }, [selectedEmployee, permission]);

  return (
    <div className={`flex flex-col ${permission == "admin" ? "bg-white" : ""}`}>
      <div className={`flex max-h-min`}>
        <input
          style={{ background: "blue", border: "red" }}
          type="checkbox"
          checked={isGranted}
          onChange={async () => {
            const employee_permission =
              typeof selectedEmployee!.permissions == "string"
                ? JSON.parse(selectedEmployee!.permissions as string)
                : selectedEmployee!.permissions;
            if (
              authenticatedEmploye!.role == "Administrateur" &&
              permission.split("-")[0] != "lire" &&
              permission != "admin"
            ) {
              // update employee permission status
              employee_permission[permission] =
                !employee_permission[permission];
              selectedEmployee!.permissions = employee_permission;

              const response = await EmployesAPI.update(
                authenticatedEmploye!,
                selectedEmployee!.id!,
                selectedEmployee!
              );

              if (response!.status == 200) {
                setIsGranted(!isGranted);
                fetchAllEmployes(authenticatedEmploye!);
                //    incrementOnce();
              }
            }
          }}
          id={`permission-${permission}-checkbox`}
          className={` hover:cursor-pointer`}
        />
        <label
          htmlFor={`permission-${permission}-checkbox`}
          className="text-sm ml-3"
        >
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
