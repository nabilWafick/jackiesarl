import axios from "axios";
import ActivitesBanque from "../../models/activites_banque/activites_banque.model";

interface ActivitesBanqueJSON {
  id?: number;
  id_banque: number;
  description: string;
  debit: number;
  credit: number;
  solde: number;
  date_activite?: string; // Une chaîne de caractères pour la date au format ISO
}

class ActivitesBanqueAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(data: ActivitesBanque) {
    try {
      const response = await axios.post(
        `${ActivitesBanqueAPI.baseUrl}/activites-banque`,
        data.toJson()
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  static async getById(id: number): Promise<ActivitesBanque | undefined> {
    let activitesBanque: ActivitesBanque | undefined;
    await axios
      .get(`${ActivitesBanqueAPI.baseUrl}/activites-banque/${id}`)
      .then((response) => {
        console.log(response.data);
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

  static async update(id: number, data: ActivitesBanque) {
    try {
      const response = await axios.put(
        `${ActivitesBanqueAPI.baseUrl}/activites-banque/${id}`,
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
        `${ActivitesBanqueAPI.baseUrl}/activites-banque/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default ActivitesBanqueAPI;
