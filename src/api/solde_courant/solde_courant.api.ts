import axios from "axios";
import SoldeCourant from "../../models/solde_courant/solde_courant.model";
import Employes from "../../models/employes/employes.model";
import JSConstants from "../../utils/constants";

interface SoldeCourantPromiseResponse {
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
  private static baseUrl = JSConstants.API_BASE_URL;

  static async create(
    authenticatedEmployee: Employes,
    data: SoldeCourant
  ): Promise<SoldeCourantPromiseResponse | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: SoldeCourantPromiseResponse | undefined = undefined;
    await axios
      .post(`${SoldeCourantAPI.baseUrl}/solde-courant`, data.toJson(), {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
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

  static async getAll(): //  startDate: string | undefined,
  //  endDate: string | undefined
  Promise<SoldeCourant[]> {
    let soldeCourantsList: SoldeCourant[] = [];

    /* if (!startDate || !endDate) {
      await axios
        .get(`${SoldeCourantAPI.baseUrl}/soldes-courants`)
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
    }*/

    await axios
      .get(`${SoldeCourantAPI.baseUrl}/soldes-courants`)
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
    authenticatedEmployee: Employes,
    id: number,
    data: SoldeCourant
  ): Promise<SoldeCourantPromiseResponse | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: SoldeCourantPromiseResponse | undefined = undefined;
    await axios
      .put(`${SoldeCourantAPI.baseUrl}/solde-courant/${id}`, data.toJson(), {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        promiseResponse = error.response.data;
      });
    return promiseResponse;
  }

  static async delete(
    authenticatedEmployee: Employes,
    id: number
  ): Promise<SoldeCourantPromiseResponse | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: SoldeCourantPromiseResponse | undefined = undefined;
    await axios
      .delete(`${SoldeCourantAPI.baseUrl}/solde-courant/${id}`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
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
