import axios from "axios";
import StockBonCommande from "../../models/stock_bon_commande/stock_bon_commande.model";
import Employes from "../../models/employes/employes.model";
import JSConstants from "../../utils/constants";
interface StockBonCommandePromiseResponse {
  status: number;
  stockBonCommande?: StockBonCommande;
  error?: string;
}

interface StockBonCommandeJSON {
  id?: number;
  numero_bc: number;
  categorie: string;
  quantite_achetee: number;
  stock_initial: number;
  stock_avant_vente: number;
  vente: number;
  stock_apres_vente: number;
  date_rechargement: string;
}

class StockBonCommandeAPI {
  private static baseUrl = JSConstants.API_BASE_URL;

  static async create(
    authenticatedEmployee: Employes,
    data: StockBonCommande
  ): Promise<StockBonCommandePromiseResponse | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: StockBonCommandePromiseResponse | undefined =
      undefined;

    await axios
      .post(
        `${StockBonCommandeAPI.baseUrl}/stock-bon-commande`,
        data.toJson(),
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
      )
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
  ): Promise<StockBonCommande | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let stockBonCommande: StockBonCommande | undefined;
    await axios
      .get(`${StockBonCommandeAPI.baseUrl}/stock-bon-commande/${id}`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        stockBonCommande = StockBonCommande.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return stockBonCommande;
  }

  static async getAll(
    authenticatedEmployee: Employes
  ): Promise<StockBonCommande[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let stockBonCommandesList: StockBonCommande[] = [];
    await axios
      .get(`${StockBonCommandeAPI.baseUrl}/stock-bon-commande`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        //  console.log("Purchase Order Stock", response.data);
        stockBonCommandesList = response.data.map(
          (stockBonCommande: StockBonCommandeJSON) =>
            StockBonCommande.fromJson(stockBonCommande)
        );
        //  console.log("stockBonCommandesList: ", stockBonCommandesList);
      })
      .catch((error) => {
        console.log(error);
        return [] as StockBonCommande[];
      });
    return stockBonCommandesList;
  }

  // ================ Unused functions

  /*
  static async update(authenticatedEmployee: Employes,id: number, data: StockBonCommande) {
    try {
      const response = await axios.put(
        `${StockBonCommandeAPI.baseUrl}/stock-bon-commande/${id}`,
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
        `${StockBonCommandeAPI.baseUrl}/stock-bon-commande/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  */
}

export default StockBonCommandeAPI;
