import axios from "axios";
import Clients from "../../models/clients/clients.model";
import Rapports from "../../models/rapports/rapports.model";

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
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(
    data: Rapports
  ): Promise<RapportsPromiseResponse | undefined> {
    let promiseResponse: RapportsPromiseResponse | undefined = undefined;

    await axios
      .post(`${RapportsAPI.baseUrl}/rapports`, data.toJson(), {
        headers: {
          "Content-Type": "multipart/form-data", // Important : spécifiez le type de contenu
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

  static async getById(id: number): Promise<RapportsJSON | undefined> {
    let rapport: RapportsJSON | undefined;
    await axios
      .get(`${RapportsAPI.baseUrl}/rapport/${id}`)
      .then((response) => {
        console.log(response.data);
        rapport = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return rapport;
  }

  static async getAll(): Promise<Rapports[]> {
    let rapportsList: Rapports[] = [];
    await axios
      .get(`${RapportsAPI.baseUrl}/rapports`)
      .then((response) => {
        rapportsList = response.data;
      })
      .catch((error) => {
        console.log(error);
        return [] as Rapports[];
      });
    return rapportsList;
  }

  static async getAllOfEmployee(employee_id: number): Promise<Rapports[]> {
    let rapportsList: Rapports[] = [];
    await axios
      .get(`${RapportsAPI.baseUrl}/rapports/employee/${employee_id}`)
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
    id: number,
    data: Rapports
  ): Promise<RapportsPromiseResponse | undefined> {
    let promiseResponse: RapportsPromiseResponse | undefined = undefined;

    await axios
      .put(`${RapportsAPI.baseUrl}/rapports/${id}`, data.toJson(), {
        headers: {
          "Content-Type": "multipart/form-data", // Important : spécifiez le type de contenu
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
    id: number
  ): Promise<RapportsPromiseResponse | undefined> {
    let promiseResponse: RapportsPromiseResponse | undefined = undefined;

    await axios
      .post(`${RapportsAPI.baseUrl}/rapports/${id}`)
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
