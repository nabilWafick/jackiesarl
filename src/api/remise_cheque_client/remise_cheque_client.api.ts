import axios from "axios";
import RemiseChequeClient from "../../models/remise_cheque_client/remise_cheque_client.model";

interface RemiseChequeClientJSON {
  id?: number;
  description: string;
  banque: string;
  montant: number;
  reste: number;
  est_validee: boolean;
  id_client: number;
  date_remise: string;
}

class RemiseChequeClientAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(data: RemiseChequeClient) {
    try {
      const response = await axios.post(
        `${RemiseChequeClientAPI.baseUrl}/remise-cheque-client`,
        data.toJson()
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  static async getById(id: number): Promise<RemiseChequeClient | undefined> {
    let remiseChequeClient: RemiseChequeClient | undefined;
    await axios
      .get(`${RemiseChequeClientAPI.baseUrl}/remise-cheque-client/${id}`)
      .then((response) => {
        console.log(response.data);
        remiseChequeClient = RemiseChequeClient.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return remiseChequeClient;
  }

  static async getAll(): Promise<RemiseChequeClient[]> {
    let remiseChequeClientsList: RemiseChequeClient[] = [];
    await axios
      .get(`${RemiseChequeClientAPI.baseUrl}/remise-cheque-client`)
      .then((response) => {
        remiseChequeClientsList = response.data.map(
          (remiseChequeClient: RemiseChequeClientJSON) => {
            return RemiseChequeClient.fromJson(remiseChequeClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as RemiseChequeClient[];
      });
    return remiseChequeClientsList;
  }

  static async getAllOfClient(clientId: number): Promise<RemiseChequeClient[]> {
    let remiseChecksClientList: RemiseChequeClient[] = [];
    await axios
      .get(
        `${RemiseChequeClientAPI.baseUrl}/remise-cheque-client/client/${clientId}`
      )
      .then((response) => {
        remiseChecksClientList = response.data.map(
          (remiseChequeClient: RemiseChequeClientJSON) => {
            return RemiseChequeClient.fromJson(remiseChequeClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as RemiseChequeClient[];
      });
    return remiseChecksClientList;
  }

  static async update(id: number, data: RemiseChequeClient) {
    try {
      const response = await axios.put(
        `${RemiseChequeClientAPI.baseUrl}/remise-cheque-client/${id}`,
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
        `${RemiseChequeClientAPI.baseUrl}/remise-cheque-client/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default RemiseChequeClientAPI;
