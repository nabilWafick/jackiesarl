import axios from "axios";
import SoldeCourant from "../../models/solde_courant/solde_courant.model";

interface SoldeCourantPromiserResponse {
  status: number;
  soldeCourant?: SoldeCourant;
  error?: string;
}

interface SoldeCourantJSON {
  id?: number;
  banque: string;
  numero_compte: number;
  solde_actuel: number;
  date_ajout: string;
}

class SoldeCourantAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(
    data: SoldeCourant
  ): Promise<SoldeCourantPromiserResponse | undefined> {
    let promiseResponse: SoldeCourantPromiserResponse | undefined = undefined;
    await axios
      .post(`${SoldeCourantAPI.baseUrl}/solde-courant`, data.toJson())
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        promiseResponse = error.response.data;
      });
    return promiseResponse;
  }

  static async getById(id: number): Promise<SoldeCourant | undefined> {
    let soldeCourant: SoldeCourant | undefined;
    await axios
      .get(`${SoldeCourantAPI.baseUrl}/solde-courant/${id}`)
      .then((response) => {
        soldeCourant = SoldeCourant.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return soldeCourant;
  }

  static async getAll(): Promise<SoldeCourant[]> {
    let soldeCourantsList: SoldeCourant[] = [];
    await axios
      .get(`${SoldeCourantAPI.baseUrl}/solde-courant`)
      .then((response) => {
        soldeCourantsList = response.data.map(
          (soldeCourant: SoldeCourantJSON) =>
            SoldeCourant.fromJson(soldeCourant)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as SoldeCourant[];
      });
    return soldeCourantsList;
  }

  static async update(
    id: number,
    data: SoldeCourant
  ): Promise<SoldeCourantPromiserResponse | undefined> {
    let promiseResponse: SoldeCourantPromiserResponse | undefined = undefined;
    await axios
      .put(`${SoldeCourantAPI.baseUrl}/solde-courant/${id}`, data.toJson())
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        promiseResponse = error.response.data;
      });
    return promiseResponse;
  }

  static async delete(
    id: number
  ): Promise<SoldeCourantPromiserResponse | undefined> {
    let promiseResponse: SoldeCourantPromiserResponse | undefined = undefined;
    await axios
      .post(`${SoldeCourantAPI.baseUrl}/solde-courant/${id}`)
      .then((response) => {
        promiseResponse = response;
      })
      .catch((error) => {
        promiseResponse = error.response.data;
      });
    return promiseResponse;
  }
}

export default SoldeCourantAPI;
