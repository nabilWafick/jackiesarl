import axios from "axios";
import ActivitesBanque from "../../models/activites_banque/activites_banque.model";
import Employes from "../../models/employes/employes.model";
import JSConstants from "../../utils/constants";

interface ActivitesBanquePromiseResponse {
  status: number;
  activitesBanque?: ActivitesBanque;
  error?: string;
}

interface ActivitesBanqueJSON {
  id?: number;
  id_banque: number;
  description: string;
  debit: number;
  credit: number;
  solde_actuel: number;
  date_activite?: string; // Une chaîne de caractères pour la date au format ISO
}

class ActivitesBanqueAPI {
  private static baseUrl = JSConstants.API_BASE_URL;

  static async create(
    authenticatedEmployee: Employes,
    data: ActivitesBanque
  ): Promise<ActivitesBanquePromiseResponse | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: ActivitesBanquePromiseResponse | undefined = undefined;
    await axios
      .post(`${ActivitesBanqueAPI.baseUrl}/activites-banque`, data.toJson(), {
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

  static async getById(id: number): Promise<ActivitesBanque | undefined> {
    let activitesBanque: ActivitesBanque | undefined;
    await axios
      .get(`${ActivitesBanqueAPI.baseUrl}/activites-banque/${id}`)
      .then((response) => {
        activitesBanque = ActivitesBanque.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return activitesBanque;
  }

  static async getAll(): Promise<ActivitesBanque[]> {
    let activitesBanqueList: ActivitesBanque[] = [];
    await axios
      .get(`${ActivitesBanqueAPI.baseUrl}/activites-banque`)
      .then((response) => {
        activitesBanqueList = response.data.map(
          (activitesBanque: ActivitesBanqueJSON) =>
            ActivitesBanque.fromJson(activitesBanque)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as ActivitesBanque[];
      });
    return activitesBanqueList;
  }

  static async getAllByBanqueID(id_banque: number): Promise<ActivitesBanque[]> {
    let activitesBanqueList: ActivitesBanque[] = [];
    await axios
      .get(`${ActivitesBanqueAPI.baseUrl}/activites-banque/banque/${id_banque}`)
      .then((response) => {
        activitesBanqueList = response.data.map(
          (activitesBanque: ActivitesBanqueJSON) =>
            ActivitesBanque.fromJson(activitesBanque)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as ActivitesBanque[];
      });
    return activitesBanqueList;
  }

  static async update(
    authenticatedEmployee: Employes,
    id: number,
    data: ActivitesBanque
  ): Promise<ActivitesBanquePromiseResponse | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: ActivitesBanquePromiseResponse | undefined = undefined;
    await axios
      .put(
        `${ActivitesBanqueAPI.baseUrl}/activites-banque/${id}`,
        data.toJson(),
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
      )
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
  ): Promise<ActivitesBanquePromiseResponse | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: ActivitesBanquePromiseResponse | undefined = undefined;
    await axios
      .delete(`${ActivitesBanqueAPI.baseUrl}/activites-banque/${id}`, {
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

export default ActivitesBanqueAPI;
