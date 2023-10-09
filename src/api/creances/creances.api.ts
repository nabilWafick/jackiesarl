import axios from "axios";

interface CreancesJSON {
  id?: number;
  creance_cim_benin: number;
  creance_nocibe: number;
  creance_autres: number;
  date_creance: string;
  id_client: number;
}

class CreancesAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(data: CreancesJSON) {
    try {
      const response = await axios.post(
        `${CreancesAPI.baseUrl}/creances`,
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  static async getById(id: number): Promise<CreancesJSON | undefined> {
    let creance: CreancesJSON | undefined;
    await axios
      .get(`${CreancesAPI.baseUrl}/creances/${id}`)
      .then((response) => {
        console.log(response.data);
        creance = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return creance;
  }

  static async getAll(): Promise<CreancesJSON[]> {
    let creancesList: CreancesJSON[] = [];
    await axios
      .get(`${CreancesAPI.baseUrl}/creances`)
      .then((response) => {
        creancesList = response.data;
      })
      .catch((error) => {
        console.log(error);
        return [] as CreancesJSON[];
      });
    return creancesList;
  }

  static async update(id: number, data: CreancesJSON) {
    try {
      const response = await axios.put(
        `${CreancesAPI.baseUrl}/creances/${id}`,
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
        `${CreancesAPI.baseUrl}/creances/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default CreancesAPI;
