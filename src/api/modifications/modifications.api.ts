import axios from "axios";
import Modifications from "../../models/modifications/modifications.model";

interface ModificationsJSON {
  id?: number;
  modification: string;
  id_employe: number;
  date_modification: string;
}

class ModificationsAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(data: Modifications) {
    try {
      const response = await axios.post(
        `${ModificationsAPI.baseUrl}/modifications`,
        data.toJson()
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  static async getById(id: number): Promise<Modifications | undefined> {
    let modification: Modifications | undefined;
    await axios
      .get(`${ModificationsAPI.baseUrl}/modifications/${id}`)
      .then((response) => {
        console.log(response.data);
        modification = Modifications.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return modification;
  }

  static async getAll(): Promise<Modifications[]> {
    let modificationsList: Modifications[] = [];
    await axios
      .get(`${ModificationsAPI.baseUrl}/modifications`)
      .then((response) => {
        modificationsList = response.data.map(
          (modification: ModificationsJSON) => {
            return Modifications.fromJson(modification);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as Modifications[];
      });
    return modificationsList;
  }

  static async update(id: number, data: Modifications) {
    try {
      const response = await axios.put(
        `${ModificationsAPI.baseUrl}/modifications/${id}`,
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
        `${ModificationsAPI.baseUrl}/modifications/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default ModificationsAPI;
