import axios from "axios";
import RemiseChequeClient from "../../models/remise_cheque_client/remise_cheque_client.model";

interface RemiseChequeClientPromiseResponse {
  status: number;
  remiseChequeClient?: RemiseChequeClient;
  error?: string;
}

interface RemiseChequeClientJSON {
  id?: number;
  description: string;
  banque: string;
  montant: number;
  reste: number;
  est_validee: number;
  id_client: number;
  date_remise?: string;
}

class RemiseChequeClientAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(
    data: RemiseChequeClient
  ): Promise<RemiseChequeClientPromiseResponse | undefined> {
    let promiseResponse: RemiseChequeClientPromiseResponse | undefined =
      undefined;
    await axios
      .post(
        `${RemiseChequeClientAPI.baseUrl}/remise-cheque-client`,
        data.toJson()
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        promiseResponse = error.response.data;
        console.error(error.response);
      });
    return promiseResponse;
  }

  static async getById(id: number): Promise<RemiseChequeClient | undefined> {
    let remiseChequeClient: RemiseChequeClient | undefined;
    await axios
      .get(`${RemiseChequeClientAPI.baseUrl}/remise-cheque-client/${id}`)
      .then((response) => {
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

  static async update(
    id: number,
    data: RemiseChequeClient
  ): Promise<RemiseChequeClientPromiseResponse | undefined> {
    let promiseResponse: RemiseChequeClientPromiseResponse | undefined =
      undefined;

    await axios
      .put(
        `${RemiseChequeClientAPI.baseUrl}/remise-cheque-client/${id}`,
        data.toJson()
      )
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        promiseResponse = error.response.data;

        console.error(error.response);
      });
    return promiseResponse;
  }

  static async delete(
    id: number
  ): Promise<RemiseChequeClientPromiseResponse | undefined> {
    let promiseResponse: RemiseChequeClientPromiseResponse | undefined =
      undefined;
    await axios
      .delete(`${RemiseChequeClientAPI.baseUrl}/remise-cheque-client/${id}`)
      .then((response) => {
        promiseResponse = response;
      })
      .catch((error) => {
        promiseResponse = error.response.data;
        console.error(error.response);
      });

    return promiseResponse;
  }
}

export default RemiseChequeClientAPI;
