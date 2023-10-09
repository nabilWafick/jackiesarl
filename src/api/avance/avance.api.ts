import axios from "axios";

interface AvanceJSON {
  id?: number;
  montant: number;
  id_client: number;
  date_avance: string;
}

class AvanceAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(data: AvanceJSON) {
    try {
      const response = await axios.post(`${AvanceAPI.baseUrl}/avance`, data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  static async getById(id: number): Promise<AvanceJSON | undefined> {
    let avance: AvanceJSON | undefined;
    await axios
      .get(`${AvanceAPI.baseUrl}/avance/${id}`)
      .then((response) => {
        console.log(response.data);
        avance = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return avance;
  }

  static async getAll(): Promise<AvanceJSON[]> {
    let avanceList: AvanceJSON[] = [];
    await axios
      .get(`${AvanceAPI.baseUrl}/avance`)
      .then((response) => {
        avanceList = response.data;
      })
      .catch((error) => {
        console.log(error);
        return [] as AvanceJSON[];
      });
    return avanceList;
  }

  static async update(id: number, data: AvanceJSON) {
    try {
      const response = await axios.put(
        `${AvanceAPI.baseUrl}/avance/${id}`,
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  static async delete(id: number) {
    try {
      const response = await axios.delete(`${AvanceAPI.baseUrl}/avance/${id}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default AvanceAPI;
