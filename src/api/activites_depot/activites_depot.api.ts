import axios from "axios";
import ActivitesDepot from "../../models/activites_depot/activites_depot.model";
import Employes from "../../models/employes/employes.model";
import JSConstants from "../../utils/constants";

interface ActivitesDepotPromiseResponse {
  status: number;
  activiteDepot?: ActivitesDepot;
  error?: string;
}

interface ActivitesDepotJSON {
  id?: number;
  id_depot: number;
  quantite_avant_vente: number;
  vente: number;
  quantite_apres_vente: number;
  versement: number;
  depense: number;
  observation: string;
  date_remplissage?: string; // Une chaîne de caractères pour la date au format ISO
}

class ActivitesDepotAPI {
  private static baseUrl = JSConstants.API_BASE_URL;

  static async create(
    authenticatedEmployee: Employes,
    data: ActivitesDepot
  ): Promise<ActivitesDepotPromiseResponse | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: ActivitesDepotPromiseResponse | undefined = undefined;

    await axios
      .post(`${ActivitesDepotAPI.baseUrl}/activites-depot`, data, {
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

  static async getById(
    authenticatedEmployee: Employes,
    id: number
  ): Promise<ActivitesDepot | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let activitesDepot: ActivitesDepot | undefined;
    await axios
      .get(`${ActivitesDepotAPI.baseUrl}/activites-depot/${id}`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        activitesDepot = ActivitesDepot.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return activitesDepot;
  }

  static async getAll(
    authenticatedEmployee: Employes
  ): Promise<ActivitesDepot[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let activitesDepotList: ActivitesDepot[] = [];
    await axios
      .get(`${ActivitesDepotAPI.baseUrl}/activites-depots`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        activitesDepotList = response.data.map(
          (activitesDepot: ActivitesDepotJSON) =>
            ActivitesDepot.fromJson(activitesDepot)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as ActivitesDepot[];
      });
    return activitesDepotList;
  }

  static async getAllByDepotID(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    id_depot: number
  ): Promise<ActivitesDepot[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let activitesDepotList: ActivitesDepot[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(
          `${ActivitesDepotAPI.baseUrl}/activites-depot/depot-default/${id_depot}`,
          {
            headers: {
              "authorization-tokens": `Bearer ${accesToken} ${token} `,
            },
          }
        )
        .then((response) => {
          activitesDepotList = response.data.map(
            (activitesDepot: ActivitesDepotJSON) =>
              ActivitesDepot.fromJson(activitesDepot)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as ActivitesDepot[];
        });
      return activitesDepotList;
    }

    await axios
      .get(
        `${ActivitesDepotAPI.baseUrl}/activites-depot/depot-default/${id_depot}/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
      )
      .then((response) => {
        activitesDepotList = response.data.map(
          (activitesDepot: ActivitesDepotJSON) =>
            ActivitesDepot.fromJson(activitesDepot)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as ActivitesDepot[];
      });
    return activitesDepotList;
  }

  static async update(
    authenticatedEmployee: Employes,
    id: number,
    data: ActivitesDepot
  ): Promise<ActivitesDepotPromiseResponse | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: ActivitesDepotPromiseResponse | undefined = undefined;

    await axios
      .put(`${ActivitesDepotAPI.baseUrl}/activites-depot/${id}`, data, {
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
  ): Promise<ActivitesDepotPromiseResponse | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: ActivitesDepotPromiseResponse | undefined = undefined;

    await axios
      .delete(`${ActivitesDepotAPI.baseUrl}/activites-depot/${id}`, {
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

export default ActivitesDepotAPI;
