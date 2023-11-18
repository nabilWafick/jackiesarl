import axios from "axios";
import ClientsTonnages from "../../models/clients_tonnages/clients_tonnages.model";
import JSConstants from "../../utils/constants";
import Employes from "../../models/employes/employes.model";

interface ClientsJSON {
  id?: number;
  nom: string;
  prenoms: string;
  numero_ifu: number;
  numero_telephone: string;
  email: string | null;
  date_ajout?: string;
}

interface ClientsTonnagesJSON {
  client: ClientsJSON;
  tonnage_CIMBENIN: number;
  tonnage_NOCIBE: number;
  pourcentage_achat: number;
}

class ClientsTonnagesAPI {
  private static baseUrl = JSConstants.API_BASE_URL;

  static async getById(
    authenticatedEmployee: Employes,
    id: number
  ): Promise<ClientsTonnages | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let client: ClientsTonnages | undefined;
    await axios
      .get(`${ClientsTonnagesAPI.baseUrl}/clients-tonnages/${id}`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        client = ClientsTonnages.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return client;
  }

  static async getAll(
    authenticatedEmployee: Employes
  ): Promise<ClientsTonnages[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let clientsList: ClientsTonnages[] = [];
    await axios
      .get(`${ClientsTonnagesAPI.baseUrl}/clients-tonnages/`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        clientsList = response.data.map((clientTonnage: ClientsTonnagesJSON) =>
          ClientsTonnages.fromJson(clientTonnage)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as ClientsTonnages[];
      });
    return clientsList;
  }
}

export default ClientsTonnagesAPI;
