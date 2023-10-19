import axios from "axios";
import Commandes from "../../models/commandes/commandes.model";

interface CommandesPromiseResponse {
  status: number;
  commande?: Commandes;
  error?: string;
}

interface CommandesJSON {
  id?: number;
  categorie: string;
  quantite_achetee: number;
  destination: string;
  date_commande: string;
  date_livraison: string;
  est_traitee: number;
  id_client: number;
  date_ajout: string;
}

class CommandesAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(
    data: Commandes
  ): Promise<CommandesPromiseResponse | undefined> {
    let prromiseResponse: CommandesPromiseResponse | undefined = undefined;
    await axios
      .post(`${CommandesAPI.baseUrl}/commandes`, data.toJson())
      .then((response) => {
        prromiseResponse = response.data;
      })
      .catch((error) => {
        prromiseResponse = error.response.data;
      });
    return prromiseResponse;
  }

  static async getById(id: number): Promise<Commandes | undefined> {
    let commande: Commandes | undefined;
    await axios
      .get(`${CommandesAPI.baseUrl}/commandes/${id}`)
      .then((response) => {
        commande = Commandes.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return commande;
  }

  static async getAll(): Promise<Commandes[]> {
    let commandesList: Commandes[] = [];
    await axios
      .get(`${CommandesAPI.baseUrl}/commandes`)
      .then((response) => {
        commandesList = response.data.map((commande: CommandesJSON) =>
          Commandes.fromJson(commande)
        );
      })

      .catch((error) => {
        console.log(error);
        return [] as Commandes[];
      });
    return commandesList;
  }

  static async update(
    id: number,
    data: Commandes
  ): Promise<CommandesPromiseResponse | undefined> {
    let prromiseResponse: CommandesPromiseResponse | undefined = undefined;
    await axios
      .put(`${CommandesAPI.baseUrl}/commandes/${id}`, data.toJson())
      .then((response) => {
        prromiseResponse = response.data;
      })
      .catch((error) => {
        prromiseResponse = error.response.data;
      });
    return prromiseResponse;
  }

  static async delete(
    id: number
  ): Promise<CommandesPromiseResponse | undefined> {
    let prromiseResponse: CommandesPromiseResponse | undefined = undefined;
    await axios
      .delete(`${CommandesAPI.baseUrl}/commandes/${id}`)
      .then((response) => {
        prromiseResponse = response;
      })
      .catch((error) => {
        prromiseResponse = error.response.data;
      });
    return prromiseResponse;
  }
}

export default CommandesAPI;
