import axios from "axios";
import PaiementClient from "../../models/paiement_client/paiement.model";

interface PaiementClientPromiseResponse {
  status: number;
  paiementClient?: PaiementClient;
  error?: string;
}

interface PaiementClientJSON {
  id?: number;
  montant: number;
  banque: string;
  reference: string;
  categorie: string;
  numero_bc: number;
  bordereau: string;
  est_valide: number;
  id_client: number;
  date_paiement?: string;
}

class PaiementClientAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(
    data: PaiementClient
  ): Promise<PaiementClientPromiseResponse | undefined> {
    let promiseResponse: PaiementClientPromiseResponse | undefined = undefined;
    await axios
      .post(`${PaiementClientAPI.baseUrl}/paiement-client`, data.toJson(), {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        promiseResponse = error.response.data;
      });
    return promiseResponse;
  }

  static async getById(id: number): Promise<PaiementClient | undefined> {
    let paiementClient: PaiementClient | undefined;
    await axios
      .get(`${PaiementClientAPI.baseUrl}/paiement-client/${id}`)
      .then((response) => {
        console.log(response.data);
        paiementClient = PaiementClient.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return paiementClient;
  }

  static async getAll(): Promise<PaiementClient[]> {
    let paiementClientsList: PaiementClient[] = [];
    await axios
      .get(`${PaiementClientAPI.baseUrl}/paiement-client`)
      .then((response) => {
        //  console.log(response.data);
        paiementClientsList = response.data.map(
          (paiementClient: PaiementClientJSON) =>
            PaiementClient.fromJson(paiementClient)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as PaiementClient[];
      });
    return paiementClientsList;
  }

  static async getAllOfClient(clientId: number): Promise<PaiementClient[]> {
    let achatsClientList: PaiementClient[] = [];
    await axios
      .get(`${PaiementClientAPI.baseUrl}/paiement-client/client/${clientId}`)
      .then((response) => {
        achatsClientList = response.data.map(
          (paiementClient: PaiementClientJSON) => {
            return PaiementClient.fromJson(paiementClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as PaiementClient[];
      });
    return achatsClientList;
  }

  static async update(
    id: number,
    data: PaiementClient
  ): Promise<PaiementClientPromiseResponse | undefined> {
    let promiseResponse: PaiementClientPromiseResponse | undefined = undefined;
    await axios
      .put(
        `${PaiementClientAPI.baseUrl}/paiement-client/${id}`,
        data.toJson(),
        {
          headers: {
            "Content-Type": "multipart/form-data",
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

  static async delete(
    id: number
  ): Promise<PaiementClientPromiseResponse | undefined> {
    let promiseResponse: PaiementClientPromiseResponse | undefined = undefined;

    await axios
      .delete(`${PaiementClientAPI.baseUrl}/paiement-client/${id}`)
      .then((response) => {
        promiseResponse = response;
      })

      .catch((error) => {
        console.log(error);
        promiseResponse = error.response.data;
      });
    return promiseResponse;
  }
}

export default PaiementClientAPI;
