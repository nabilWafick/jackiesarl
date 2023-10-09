import axios from "axios";
import Brouillard from "../../models/brouillard/brouillard.model";

interface BrouillardJSON {
  id?: number;
  depot: string;
  stock_actuel: number;
  nom_gerant: string;
  numero_gerant: string;
  date_ajout: string;
}

class BrouillardAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(data: Brouillard) {
    try {
      const response = await axios.post(
        `${BrouillardAPI.baseUrl}/brouillard`,
        data.toJson()
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  static async getById(id: number): Promise<Brouillard | undefined> {
    let brouillard: Brouillard | undefined;
    await axios
      .get(`${BrouillardAPI.baseUrl}/brouillard/${id}`)
      .then((response) => {
        console.log(response.data);
        brouillard = Brouillard.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return brouillard;
  }

  static async getAll(): Promise<Brouillard[]> {
    let brouillardList: Brouillard[] = [];
    await axios
      .get(`${BrouillardAPI.baseUrl}/brouillard`)
      .then((response) => {
        brouillardList = response.data.map((brouillard: BrouillardJSON) =>
          Brouillard.fromJson(brouillard)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as Brouillard[];
      });
    return brouillardList;
  }

  static async update(id: number, data: Brouillard) {
    try {
      const response = await axios.put(
        `${BrouillardAPI.baseUrl}/brouillard/${id}`,
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
        `${BrouillardAPI.baseUrl}/brouillard/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default BrouillardAPI;
