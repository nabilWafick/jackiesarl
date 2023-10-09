import axios from "axios";

interface RapportsJSON {
  id?: number;
  rapport: string;
  date_envoi: string;
  id_employe: number;
}

class RapportsAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(data: RapportsJSON) {
    try {
      const response = await axios.post(
        `${RapportsAPI.baseUrl}/rapports`,
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  static async getById(id: number): Promise<RapportsJSON | undefined> {
    let rapport: RapportsJSON | undefined;
    await axios
      .get(`${RapportsAPI.baseUrl}/rapports/${id}`)
      .then((response) => {
        console.log(response.data);
        rapport = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return rapport;
  }

  static async getAll(): Promise<RapportsJSON[]> {
    let rapportsList: RapportsJSON[] = [];
    await axios
      .get(`${RapportsAPI.baseUrl}/rapports`)
      .then((response) => {
        rapportsList = response.data;
      })
      .catch((error) => {
        console.log(error);
        return [] as RapportsJSON[];
      });
    return rapportsList;
  }

  static async update(id: number, data: RapportsJSON) {
    try {
      const response = await axios.put(
        `${RapportsAPI.baseUrl}/rapports/${id}`,
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
        `${RapportsAPI.baseUrl}/rapports/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default RapportsAPI;
