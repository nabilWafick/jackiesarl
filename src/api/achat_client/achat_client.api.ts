import axios from "axios";
import AchatClient from "../../models/achat_client/achat_client.model";

interface AchatClientJSON {
  id?: number;
  quantite_achetee: number;
  categorie: string;
  montant: number;
  numero_ctp: string;
  bordereau: string;
  numero_bc: string;
  id_client: number;
  date_achat?: string;
}

class AchatClientAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(data: AchatClient) {
    try {
      const response = await axios.post(
        `${AchatClientAPI.baseUrl}/achat-client`,
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  static async getById(id: number): Promise<AchatClient | undefined> {
    let achatClient: AchatClient | undefined;
    await axios
      .get(`${AchatClientAPI.baseUrl}/achat-client/${id}`)
      .then((response) => {
        console.log(response.data);
        achatClient = AchatClient.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return achatClient;
  }

  static async getAll(): Promise<AchatClient[]> {
    let achatsClientList: AchatClient[] = [];
    await axios
      .get(`${AchatClientAPI.baseUrl}/achat-client`)
      .then((response) => {
        achatsClientList = response.data.map((achatClient: AchatClientJSON) =>
          AchatClient.fromJson(achatClient)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as AchatClient[];
      });
    return achatsClientList;
  }

  static async getAllOfClient(clientId: number): Promise<AchatClient[]> {
    let achatsClientList: AchatClient[] = [];
    await axios
      .get(`${AchatClientAPI.baseUrl}/achat-client/client/${clientId}`)
      .then((response) => {
        achatsClientList = response.data.map((achatClient: AchatClientJSON) => {
          return AchatClient.fromJson(achatClient);
        });
      })
      .catch((error) => {
        console.log(error);
        return [] as AchatClient[];
      });
    return achatsClientList;
  }

  static async update(id: number, data: AchatClient) {
    try {
      const response = await axios.put(
        `${AchatClientAPI.baseUrl}/achat-client/${id}`,
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
        `${AchatClientAPI.baseUrl}/achat-client/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default AchatClientAPI;
