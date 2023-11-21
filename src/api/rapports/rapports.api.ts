import axios from "axios";
import Clients from "../../models/clients/clients.model";
import Rapports from "../../models/rapports/rapports.model";
import Employes from "../../models/employes/employes.model";
import JSConstants from "../../utils/constants";

interface RapportsPromiseResponse {
  status: number;
  rapport?: Rapports;
  error?: string;
}

interface RapportsJSON {
  id?: number;
  rapport: string;
  date_envoi: string;
  employe: Clients;
}

class RapportsAPI {
  private static baseUrl = JSConstants.API_BASE_URL;

  static async create(
    authenticatedEmployee: Employes,
    data: Rapports
  ): Promise<RapportsPromiseResponse | undefined> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: RapportsPromiseResponse | undefined = undefined;

    await axios
      .post(`${RapportsAPI.baseUrl}/rapports`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          "authorization-token": `Bearer ${token}`,
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
  ): Promise<RapportsJSON | undefined> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let rapport: RapportsJSON | undefined;
    await axios
      .get(`${RapportsAPI.baseUrl}/rapport/${id}`, {
        headers: {
          "authorization-token": `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        rapport = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return rapport;
  }

  static async getAll(authenticatedEmployee: Employes): Promise<Rapports[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let rapportsList: Rapports[] = [];
    await axios
      .get(`${RapportsAPI.baseUrl}/rapports`, {
        headers: {
          "authorization-token": `Bearer ${token}`,
        },
      })
      .then((response) => {
        rapportsList = response.data;
      })
      .catch((error) => {
        console.log(error);
        return [] as Rapports[];
      });
    return rapportsList;
  }

  static async getAllOfEmployee(
    authenticatedEmployee: Employes,
    employee_id: number
  ): Promise<Rapports[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let rapportsList: Rapports[] = [];
    await axios
      .get(`${RapportsAPI.baseUrl}/rapports/employee/${employee_id}`, {
        headers: {
          "authorization-token": `Bearer ${token}`,
        },
      })
      .then((response) => {
        rapportsList = response.data;
      })
      .catch((error) => {
        console.log(error);
        return [] as Rapports[];
      });
    return rapportsList;
  }

  static async update(
    authenticatedEmployee: Employes,
    id: number,
    data: Rapports
  ): Promise<RapportsPromiseResponse | undefined> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: RapportsPromiseResponse | undefined = undefined;

    await axios
      .put(`${RapportsAPI.baseUrl}/rapports/${id}`, data.toJson(), {
        headers: {
          "Content-Type": "multipart/form-data",
          "authorization-token": `Bearer ${token}`,
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

  static async delete(
    authenticatedEmployee: Employes,
    id: number
  ): Promise<RapportsPromiseResponse | undefined> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: RapportsPromiseResponse | undefined = undefined;

    await axios
      .post(`${RapportsAPI.baseUrl}/rapports/${id}`, {
        headers: {
          "authorization-token": `Bearer ${token}`,
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
}

export default RapportsAPI;
