import axios from "axios";
import Employes from "../../models/employes/employes.model";
import JSConstants from "../../utils/constants";

interface EmployesPromiseResponse {
  status: number;
  employe?: Employes;
  employes?: Employes[];
  error?: string;
}

interface EmployesJSON {
  id?: number;
  nom: string;
  prenoms: string;
  email: string;
  numero_telephone: string;
  password: string;
  role: string;
  permissions: { [key: string]: boolean };
  token?: string;
  date_ajout?: string;
}

class EmployesAPI {
  private static baseUrl = JSConstants.API_BASE_URL;

  static async create(
    authenticatedEmployee: Employes,
    data: Employes
  ): Promise<EmployesPromiseResponse | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: EmployesPromiseResponse | undefined = undefined;
    await axios
      .post(`${EmployesAPI.baseUrl}/employes`, data.toJson(), {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        promiseResponse = error.response.data;
        console.error(error);
      });

    return promiseResponse;
  }

  static async getById(
    authenticatedEmployee: Employes,
    id: number
  ): Promise<Employes | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let employe: Employes | undefined;
    await axios
      .get(`${EmployesAPI.baseUrl}/employes/${id}`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        //  console.log(response.data);
        employe = Employes.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return employe;
  }

  static async getAll(authenticatedEmployee: Employes): Promise<Employes[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let employesList: Employes[] = [];
    await axios
      .get(`${EmployesAPI.baseUrl}/employes`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        employesList = response.data.map((employe: EmployesJSON) =>
          Employes.fromJson(employe)
        );
        //    console.log(employesList);
      })
      .catch((error) => {
        console.log(error);
        return [] as Employes[];
      });
    return employesList;
  }

  static async update(
    authenticatedEmployee: Employes,
    id: number,
    data: Employes
  ): Promise<EmployesPromiseResponse | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: EmployesPromiseResponse | undefined = undefined;
    // console.log("employee toJSON", typeof data);
    await axios
      .put(`${EmployesAPI.baseUrl}/employes/${id}`, data, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        promiseResponse = error.response.data;
        console.error(error);
      });

    return promiseResponse;
  }

  static async delete(authenticatedEmployee: Employes, id: number) {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    await axios
      .delete(`${EmployesAPI.baseUrl}/employes/${id}`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  }
}

export default EmployesAPI;
