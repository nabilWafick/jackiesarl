import axios from "axios";
import SoldeCourant from "../../models/solde_courant/solde_courant.model";

interface SoldeCourantJSON {
  id?: number;
  banque: string;
  numero_compte: string;
  solde_actuel: number;
  date_ajout: string;
}

class SoldeCourantAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(data: SoldeCourant) {
    try {
      const response = await axios.post(
        `${SoldeCourantAPI.baseUrl}/solde-courant`,
        data.toJson()
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  static async getById(id: number): Promise<SoldeCourant | undefined> {
    let soldeCourant: SoldeCourant | undefined;
    await axios
      .get(`${SoldeCourantAPI.baseUrl}/solde-courant/${id}`)
      .then((response) => {
        console.log(response.data);
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

  static async update(id: number, data: SoldeCourant) {
    try {
      const response = await axios.put(
        `${SoldeCourantAPI.baseUrl}/solde-courant/${id}`,
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
        `${SoldeCourantAPI.baseUrl}/solde-courant/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default SoldeCourantAPI;
