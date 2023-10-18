import axios from "axios";
import AchatClient from "../../models/achat_client/achat_client.model";

interface AchatClientPromiseResponse {
  status: number;
  achatClient?: AchatClientJSON;
  error?: string;
}

interface AchatClientJSON {
  id?: number;
  quantite_achetee: number;
  categorie: string;
  montant: number;
  numero_ctp: string;
  bordereau: File | string;
  numero_bc: number;
  id_client: number;
  date_achat?: string;
}

class AchatClientAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  /* private static config = {
    headers: {
      "Content-Type": "multipart/form-data", // Important : spécifiez le type de contenu
    },
  };
*/
  static async create(
    data: AchatClient
  ): Promise<AchatClientPromiseResponse | undefined> {
    let promiseResponse: AchatClientPromiseResponse | undefined = undefined;

    await axios
      .post(
        `${AchatClientAPI.baseUrl}/achat-client`,
        data.toJson(),
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important : spécifiez le type de contenu
          },
        }
        //   AchatClientAPI.config
      )
      .then((response) => {
        console.log(response.data);
        promiseResponse = response.data;
      })
      .catch((error) => {
        console.log(error);
        promiseResponse = error.response.data;
      });
    return promiseResponse;
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

  static async update(
    id: number,
    data: AchatClient
  ): Promise<AchatClientPromiseResponse | undefined> {
    let promiseResponse: AchatClientPromiseResponse | undefined = undefined;

    await axios
      .put(`${AchatClientAPI.baseUrl}/achat-client/${id}`, data.toJson(), {
        headers: {
          "Content-Type": "multipart/form-data", // Important : spécifiez le type de contenu
        },
      })
      .then((response) => {
        promiseResponse = response.data;
        console.log(response.data);
      })

      .catch((error) => {
        promiseResponse = error.response.data;
        console.error(error);
      });
    return promiseResponse;
  }

  static async delete(
    id: number
  ): Promise<AchatClientPromiseResponse | undefined> {
    let promiseResponse: AchatClientPromiseResponse | undefined = undefined;

    await axios
      .delete(`${AchatClientAPI.baseUrl}/achat-client/${id}`)
      .then((response) => {
        promiseResponse = response;
        console.log(response);
      })
      .catch((error) => {
        promiseResponse = error.response;
        console.log(error.response.data);
      });
    return promiseResponse;
  }
}

export default AchatClientAPI;
