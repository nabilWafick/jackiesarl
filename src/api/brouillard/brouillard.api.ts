import axios from "axios";
import Brouillard from "../../models/brouillard/brouillard.model";

interface BrouillardPromiseRsponse {
  status: number;
  brouillard?: Brouillard;
  error?: string;
}

interface BrouillardJSON {
  id?: number;
  depot: string;
  stock_actuel: number;
  nom_gerant: string;
  numero_gerant: string;
  date_ajout?: string;
}

class BrouillardAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(
    data: Brouillard
  ): Promise<BrouillardPromiseRsponse | undefined> {
    let promiseResponse: BrouillardPromiseRsponse | undefined = undefined;

    await axios
      .post(`${BrouillardAPI.baseUrl}/brouillard`, data.toJson())
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        promiseResponse = error.response.data;
      });
    return promiseResponse;
  }

  static async getById(id: number): Promise<Brouillard | undefined> {
    let brouillard: Brouillard | undefined;
    await axios
      .get(`${BrouillardAPI.baseUrl}/brouillard/${id}`)
      .then((response) => {
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

  static async update(
    id: number,
    is_current_stock_increasing: number,
    data: Brouillard
  ): Promise<BrouillardPromiseRsponse | undefined> {
    let promiseResponse: BrouillardPromiseRsponse | undefined = undefined;

    await axios
      .put(
        `${BrouillardAPI.baseUrl}/brouillard/${id}/${is_current_stock_increasing}`,
        data.toJson()
      )
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        promiseResponse = error.response.data;
      });
    return promiseResponse;
  }

  static async delete(
    id: number
  ): Promise<BrouillardPromiseRsponse | undefined> {
    let promiseResponse: BrouillardPromiseRsponse | undefined = undefined;

    await axios
      .delete(`${BrouillardAPI.baseUrl}/brouillard/${id}`)
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        promiseResponse = error.response.data;
      });
    return promiseResponse;
  }
}

export default BrouillardAPI;
