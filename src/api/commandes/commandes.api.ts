import axios from "axios";
import Commandes from "../../models/commandes/commandes.model";

interface CommandesJSON {
  id?: number;
  categorie: string;
  quantite_achetee: number;
  destination: number;
  date_commande: string;
  date_livraison: string;
  est_traitee: boolean;
  id_client: number;
  date_ajout: string;
}

class CommandesAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(data: Commandes) {
    try {
      const response = await axios.post(
        `${CommandesAPI.baseUrl}/commandes`,
        data.toJson()
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  static async getById(id: number): Promise<Commandes | undefined> {
    let commande: Commandes | undefined;
    await axios
      .get(`${CommandesAPI.baseUrl}/commandes/${id}`)
      .then((response) => {
        console.log(response.data);
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
        console.log(commandesList);
      })

      .catch((error) => {
        console.log(error);
        return [] as Commandes[];
      });
    return commandesList;
  }

  static async update(id: number, data: Commandes) {
    try {
      const response = await axios.put(
        `${CommandesAPI.baseUrl}/commandes/${id}`,
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
        `${CommandesAPI.baseUrl}/commandes/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default CommandesAPI;
