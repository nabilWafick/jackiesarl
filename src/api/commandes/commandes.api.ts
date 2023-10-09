import axios from "axios";

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

  static async create(data: CommandesJSON) {
    try {
      const response = await axios.post(
        `${CommandesAPI.baseUrl}/commandes`,
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  static async getById(id: number): Promise<CommandesJSON | undefined> {
    let commande: CommandesJSON | undefined;
    await axios
      .get(`${CommandesAPI.baseUrl}/commandes/${id}`)
      .then((response) => {
        console.log(response.data);
        commande = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return commande;
  }

  static async getAll(): Promise<CommandesJSON[]> {
    let commandesList: CommandesJSON[] = [];
    await axios
      .get(`${CommandesAPI.baseUrl}/commandes`)
      .then((response) => {
        commandesList = response.data;
      })
      .catch((error) => {
        console.log(error);
        return [] as CommandesJSON[];
      });
    return commandesList;
  }

  static async update(id: number, data: CommandesJSON) {
    try {
      const response = await axios.put(
        `${CommandesAPI.baseUrl}/commandes/${id}`,
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
        `${CommandesAPI.baseUrl}/commandes/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default CommandesAPI;
