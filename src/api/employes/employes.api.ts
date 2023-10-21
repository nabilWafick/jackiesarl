import axios from "axios";
import Employes from "../../models/employes/employes.model";

interface EmployesJSON {
  id?: number;
  nom: string;
  prenoms: string;
  email: string;
  password: string;
  role: string;
  token: string;
}

class EmployesAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(data: Employes) {
    try {
      const response = await axios.post(
        `${EmployesAPI.baseUrl}/employes`,
        data.toJson()
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  static async getById(id: number): Promise<Employes | undefined> {
    let employe: Employes | undefined;
    await axios
      .get(`${EmployesAPI.baseUrl}/employes/${id}`)
      .then((response) => {
        //  console.log(response.data);
        employe = Employes.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return employe;
  }

  static async getAll(): Promise<Employes[]> {
    let employesList: Employes[] = [];
    await axios
      .get(`${EmployesAPI.baseUrl}/employes`)
      .then((response) => {
        employesList = response.data.map((employe: EmployesJSON) =>
          Employes.fromJson(employe)
        );
        //   console.log(employesList);
      })
      .catch((error) => {
        console.log(error);
        return [] as Employes[];
      });
    return employesList;
  }

  static async update(id: number, data: Employes) {
    try {
      const response = await axios.put(
        `${EmployesAPI.baseUrl}/employes/${id}`,
        data.toJson()
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  static async delete(id: number) {
    try {
      const response = await axios.delete(
        `${EmployesAPI.baseUrl}/employes/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default EmployesAPI;
