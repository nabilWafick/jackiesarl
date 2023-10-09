import axios from "axios";
import StockCamion from "../../models/stock_camion/stock_camion.model";

interface StockCamionJSON {
  id?: number;
  numero_camion: string;
  categorie: string;
  numero_chauffeur: number;
  numero_bc: number;
  quantite: number;
  date_approvisionnement: string;
}

class StockCamionAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(data: StockCamion) {
    try {
      const response = await axios.post(
        `${StockCamionAPI.baseUrl}/stock-camion`,
        data.toJson()
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  static async getById(id: number): Promise<StockCamion | undefined> {
    let stockCamion: StockCamion | undefined;
    await axios
      .get(`${StockCamionAPI.baseUrl}/stock-camion/${id}`)
      .then((response) => {
        console.log(response.data);
        stockCamion = StockCamion.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return stockCamion;
  }

  static async getAll(): Promise<StockCamion[]> {
    let stockCamionsList: StockCamion[] = [];
    await axios
      .get(`${StockCamionAPI.baseUrl}/stock-camion`)
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

  static async update(id: number, data: StockCamion) {
    try {
      const response = await axios.put(
        `${StockCamionAPI.baseUrl}/stock-camion/${id}`,
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
        `${StockCamionAPI.baseUrl}/stock-camion/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default StockCamionAPI;
