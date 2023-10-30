import { FC, useState, useEffect } from "react";
import axios from "axios";

interface Employee {
  id: number;
  nom: string;
  prenoms: string;
  permissions: {
    [key: string]: boolean;
  };
}

const EmployeeUpdate: FC = () => {
  const [employee, setEmployee] = useState<Employee>({
    id: 1, // ID de l'employé que vous souhaitez mettre à jour
    nom: "",
    prenoms: "",
    permissions: {
      admin: false,
      "lire-tableau-bord": false,
      "ajouter-client": false,
      // ... Ajoutez d'autres permissions ici
    },
  });

  useEffect(() => {
    // Récupérer les données de l'employé depuis l'API
    axios.get(`/api/employes/${employee.id}`).then((response) => {
      setEmployee(response.data);
    });
  }, [employee.id]);

  const handlePermissionChange = (permission: string) => {
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      permissions: {
        ...prevEmployee.permissions,
        [permission]: !prevEmployee.permissions[permission],
      },
    }));
  };

  const handleUpdateEmployee = () => {
    axios
      .put(`/api/employes/${employee.id}`, {
        permissions: employee.permissions,
      })
      .then((response) => {
        console.log("Employé mis à jour avec succès", response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour de l'employé", error);
      });
  };

  return (
    <div>
      <h1>Mise à jour de l</h1>
      <p>Nom : {employee.nom}</p>
      <p>Prénoms : {employee.prenoms}</p>
      <h2>Permissions</h2>
      <img src={process.env.PUBLIC_URL} alt="" />
      {Object.keys(employee.permissions).map((permission) => (
        <div key={permission}>
          <label>
            <input
              type="checkbox"
              checked={employee.permissions[permission]}
              onChange={() => handlePermissionChange(permission)}
            />
            {permission}
          </label>
        </div>
      ))}
      <button onClick={handleUpdateEmployee}>Mettre à jour l'employé</button>
    </div>
  );
};

export default EmployeeUpdate;
