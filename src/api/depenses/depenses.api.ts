import axios from "axios";
import Depenses from "../../models/depenses/depenses.model";

interface DepensesJSON {
  id?: number;
  description: string;
  montant: number;
  piece: string;
  est_validee: boolean;
  date_depense: string;
}

class DepensesAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(data: Depenses) {
    try {
      const response = await axios.post(
        `${DepensesAPI.baseUrl}/depenses`,
        data.toJson()
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  static async getById(id: number): Promise<Depenses | undefined> {
    let depense: Depenses | undefined;
    await axios
      .get(`${DepensesAPI.baseUrl}/depenses/${id}`)
      .then((response) => {
        console.log(response.data);
        depense = Depenses.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return depense;
  }

  static async getAll(): Promise<Depenses[]> {
    let depensesList: Depenses[] = [];
    await axios
      .get(`${DepensesAPI.baseUrl}/depenses`)
      .then((response) => {
        depensesList = response.data.map((depense: DepensesJSON) =>
          Depenses.fromJson(depense)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as Depenses[];
      });
    return depensesList;
  }

  static async update(id: number, data: Depenses) {
    try {
      const response = await axios.put(
        `${DepensesAPI.baseUrl}/depenses/${id}`,
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
        `${DepensesAPI.baseUrl}/depenses/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default DepensesAPI;
