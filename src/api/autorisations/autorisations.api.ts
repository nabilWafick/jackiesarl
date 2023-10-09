import axios from "axios";
import Autorisations from "../../models/autorisations/autorisations.model";

interface AutorisationsJSON {
  id?: number;
  role: string;
  autorisations: string;
}

class AutorisationsAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(data: Autorisations) {
    try {
      const response = await axios.post(
        `${AutorisationsAPI.baseUrl}/autorisations`,
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  static async getById(id: number): Promise<Autorisations | undefined> {
    let autorisations: Autorisations | undefined;
    await axios
      .get(`${AutorisationsAPI.baseUrl}/autorisations/${id}`)
      .then((response) => {
        console.log(response.data);
        autorisations = Autorisations.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return autorisations;
  }

  static async getAll(): Promise<Autorisations[]> {
    let autorisationsList: Autorisations[] = [];
    await axios
      .get(`${AutorisationsAPI.baseUrl}/autorisations`)
      .then((response) => {
        autorisationsList = response.data.map(
          (autorisations: AutorisationsJSON) =>
            Autorisations.fromJson(autorisations)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as Autorisations[];
      });
    return autorisationsList;
  }

  static async update(id: number, data: Autorisations) {
    try {
      const response = await axios.put(
        `${AutorisationsAPI.baseUrl}/autorisations/${id}`,
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
        `${AutorisationsAPI.baseUrl}/autorisations/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default AutorisationsAPI;
