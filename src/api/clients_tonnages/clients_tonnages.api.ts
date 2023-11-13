import axios from "axios";
import ClientsTonnages from "../../models/clients_tonnages/clients_tonnages.model";
import JSConstants from "../../utils/constants";

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

  static async getById(id: number): Promise<ClientsTonnages | undefined> {
    let client: ClientsTonnages | undefined;
    await axios
      .get(`${ClientsTonnagesAPI.baseUrl}/clients-tonnages/${id}`)
      .then((response) => {
        client = ClientsTonnages.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return client;
  }

  static async getAll(): Promise<ClientsTonnages[]> {
    let clientsList: ClientsTonnages[] = [];
    await axios
      .get(`${ClientsTonnagesAPI.baseUrl}/clients-tonnages/`)
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
