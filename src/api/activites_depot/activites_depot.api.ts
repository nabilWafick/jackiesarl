import axios from "axios";
import ActivitesDepot from "../../models/activites_depot/activites_depot.model";

interface ActivitesDepotPromiseResponse {
  status: number;
  activiteDepot: ActivitesDepot;
  error: string;
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
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(
    data: ActivitesDepot
  ): Promise<ActivitesDepotPromiseResponse | undefined> {
    let promiseResponse: ActivitesDepotPromiseResponse | undefined = undefined;

    await axios
      .post(`${ActivitesDepotAPI.baseUrl}/activites-depot`, data)
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        promiseResponse = error.response.data;
      });

    return promiseResponse;
  }

  static async getById(id: number): Promise<ActivitesDepot | undefined> {
    let activitesDepot: ActivitesDepot | undefined;
    await axios
      .get(`${ActivitesDepotAPI.baseUrl}/activites-depot/${id}`)
      .then((response) => {
        console.log(response.data);
        activitesDepot = ActivitesDepot.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return activitesDepot;
  }

  static async getAll(): Promise<ActivitesDepot[]> {
    let activitesDepotList: ActivitesDepot[] = [];
    await axios
      .get(`${ActivitesDepotAPI.baseUrl}/activites-depot`)
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

  static async getAllByDepotID(id_depot: number): Promise<ActivitesDepot[]> {
    let activitesDepotList: ActivitesDepot[] = [];
    await axios
      .get(`${ActivitesDepotAPI.baseUrl}/activites-depot/depot/${id_depot}`)
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

  static async update(id: number, data: ActivitesDepot) {
    try {
      const response = await axios.put(
        `${ActivitesDepotAPI.baseUrl}/activites-depot/${id}`,
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  static async delete(id: number) {
    try {
      const response = await axios.delete(
        `${ActivitesDepotAPI.baseUrl}/activites-depot/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default ActivitesDepotAPI;
