import axios from "axios";
import StockCamion from "../../models/stock_camion/stock_camion.model";

interface StockCamionPromiseResponse {
  status: number;
  stockCamion?: StockCamion;
  error?: string;
}

interface StockCamionJSON {
  id?: number;
  numero_camion: string;
  categorie: string;
  numero_chauffeur: string;
  numero_bc: number;
  quantite: number;
  date_approvisionnement: string;
}

class StockCamionAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(
    data: StockCamion
  ): Promise<StockCamionPromiseResponse | undefined> {
    let promiseResponse: StockCamionPromiseResponse | undefined = undefined;

    await axios
      .post(`${StockCamionAPI.baseUrl}/stock-camion`, data.toJson())
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        promiseResponse = error.response.data;
      });
    return promiseResponse;
  }

  static async getById(id: number): Promise<StockCamion | undefined> {
    let stockCamion: StockCamion | undefined;
    await axios
      .get(`${StockCamionAPI.baseUrl}/stock-camion/${id}`)
      .then((response) => {
        stockCamion = StockCamion.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return stockCamion;
  }

  static async getAll(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<StockCamion[]> {
    let stockCamionsList: StockCamion[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${StockCamionAPI.baseUrl}/stocks-camions-default`)
        .then((response) => {
          stockCamionsList = response.data.map((stockCamion: StockCamionJSON) =>
            StockCamion.fromJson(stockCamion)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as StockCamion[];
        });
      return stockCamionsList;
    }
    await axios
      .get(
        `${StockCamionAPI.baseUrl}/stocks-camions-default/${startDate}/${endDate}`
      )
      .then((response) => {
        stockCamionsList = response.data.map((stockCamion: StockCamionJSON) =>
          StockCamion.fromJson(stockCamion)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as StockCamion[];
      });
    return stockCamionsList;
  }

  static async update(
    id: number,
    data: StockCamion
  ): Promise<StockCamionPromiseResponse | undefined> {
    let promiseResponse: StockCamionPromiseResponse | undefined = undefined;

    await axios
      .put(`${StockCamionAPI.baseUrl}/stock-camion/${id}`, data.toJson())
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
  ): Promise<StockCamionPromiseResponse | undefined> {
    let promiseResponse: StockCamionPromiseResponse | undefined = undefined;

    await axios
      .delete(`${StockCamionAPI.baseUrl}/stock-camion/${id}`)
      .then((response) => {
        promiseResponse = response;
      })
      .catch((error) => {
        promiseResponse = error.response.data;
      });
    return promiseResponse;
  }
}

export default StockCamionAPI;
