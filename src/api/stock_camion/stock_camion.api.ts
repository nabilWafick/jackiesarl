import axios from "axios";
import StockCamion from "../../models/stock_camion/stock_camion.model";
import Employes from "../../models/employes/employes.model";
import JSConstants from "../../utils/constants";

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
  private static baseUrl = JSConstants.API_BASE_URL;

  static async create(
    authenticatedEmployee: Employes,
    data: StockCamion
  ): Promise<StockCamionPromiseResponse | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: StockCamionPromiseResponse | undefined = undefined;

    await axios
      .post(`${StockCamionAPI.baseUrl}/stock-camion`, data.toJson(), {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        promiseResponse = error.response.data;
      });
    return promiseResponse;
  }

  static async getById(
    authenticatedEmployee: Employes,
    id: number
  ): Promise<StockCamion | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let stockCamion: StockCamion | undefined;
    await axios
      .get(`${StockCamionAPI.baseUrl}/stock-camion/${id}`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        stockCamion = StockCamion.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return stockCamion;
  }

  static async getAll(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<StockCamion[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let stockCamionsList: StockCamion[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${StockCamionAPI.baseUrl}/stocks-camions-default`, {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        })
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
        `${StockCamionAPI.baseUrl}/stocks-camions-default/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    id: number,
    data: StockCamion
  ): Promise<StockCamionPromiseResponse | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: StockCamionPromiseResponse | undefined = undefined;

    await axios
      .put(`${StockCamionAPI.baseUrl}/stock-camion/${id}`, data.toJson(), {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        promiseResponse = error.response.data;
      });

    return promiseResponse;
  }

  static async delete(
    authenticatedEmployee: Employes,
    id: number
  ): Promise<StockCamionPromiseResponse | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: StockCamionPromiseResponse | undefined = undefined;

    await axios
      .delete(`${StockCamionAPI.baseUrl}/stock-camion/${id}`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
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
