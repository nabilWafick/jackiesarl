import axios from "axios";
import StockBonCommande from '../../models/stock_bon_commande/stock_bon_commande.model';
interface StockBonCommandePromiseResponse{
  status: number,
  stockBonCommande?: StockBonCommande,
  error?: string;
}


interface StockBonCommandeJSON {
  id?: number;
  numero_bc: number;
  categorie: string;
  quantite_achetee: number;
  stock_avant_vente: number;
  vente: number;
  stock_apres_vente: number;
  date_rechargement: string;
}

class StockBonCommandeAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(data: StockBonCommande): Promise<StockBonCommandePromiseResponse | undefined> {
    let promiseResponse : StockBonCommandePromiseResponse | undefined = undefined
    
      await axios.post(
        `${StockBonCommandeAPI.baseUrl}/stock-bon-commande`,
        data.toJson()
      ).then(response => {
      promiseResponse = response.data
      })
    .catch( (error)=> {
     promiseResponse = error.response.data
    })
    return promiseResponse
  }

  static async getById(id: number): Promise<StockBonCommande | undefined> {
    let stockBonCommande: StockBonCommande | undefined;
    await axios
      .get(`${StockBonCommandeAPI.baseUrl}/stock-bon-commande/${id}`)
      .then((response) => {
        console.log(response.data);
        stockBonCommande = StockBonCommande.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return stockBonCommande;
  }

  static async getAll(): Promise<StockBonCommande[]> {
    let stockBonCommandesList: StockBonCommande[] = [];
    await axios
      .get(`${StockBonCommandeAPI.baseUrl}/stock-bon-commande`)
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

  static async update(id: number, data: StockBonCommande) {
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
}

export default StockBonCommandeAPI;
