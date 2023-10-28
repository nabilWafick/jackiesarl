import axios from "axios";
import SoldeClient from "../../models/solde_client/solde_client.model";

interface ClientsJSON {
  id?: number;
  nom: string;
  prenoms: string;
  numero_ifu: number;
  numero_telephone: string;
  email: string | null;
  date_ajout?: string;
}
interface SoldeClientJSON {
  client: ClientsJSON;
  total_dettes_mois: number;
  total_paiements_mois: number;
  total_dettes_global: number;
  total_paiements_global: number;
  avance: number;
  creance: number;
  total_dettes_mois_CIMBENIN: number;
  total_dettes_mois_NOCIBE: number;
  total_paiements_mois_CIMBENIN: number;
  total_paiements_mois_NOCIBE: number;
  total_dettes_global_CIMBENIN: number;
  total_dettes_global_NOCIBE: number;
  total_paiements_global_CIMBENIN: number;
  total_paiements_global_NOCIBE: number;
  avance_CIMBENIN: number;
  avance_NOCIBE: number;
  creance_CIMBENIN: number;
  creance_NOCIBE: number;
}

class SoldeClientAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async getById(
    startDate: string | undefined,
    endDate: string | undefined,
    id: number
  ): Promise<SoldeClient | undefined> {
    let soldeClient: SoldeClient | undefined;

    if (!startDate || !endDate) {
      await axios
        .get(`${SoldeClientAPI.baseUrl}/solde-client/${id}`)
        .then((response) => {
          soldeClient = SoldeClient.fromJson(response.data);
          console.log("soldeClient", soldeClient);
        })
        .catch((error) => {
          console.log(error);
        });
      return soldeClient;
    }

    await axios
      .get(
        `${SoldeClientAPI.baseUrl}/solde-client/${id}/${startDate}/${endDate}`
      )
      .then((response) => {
        soldeClient = SoldeClient.fromJson(response.data);
        console.log("soldeClient", soldeClient);
      })
      .catch((error) => {
        console.log(error);
      });
    return soldeClient;
  }

  static async getAll(): Promise<SoldeClient[] | undefined> {
    let soldesClients: SoldeClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${SoldeClientAPI.baseUrl}/soldes-clients/`)
        .then((response) => {
          soldesClients = response.data.map((soldeClient: SoldeClientJSON) =>
            SoldeClient.fromJson(soldeClient)
          );
        })
        .catch((error) => {
          console.log(error);
        });
      return soldesClients;
    }

    await axios
      .get(`${SoldeClientAPI.baseUrl}/soldes-clients/${startDate}/${endDate}`)
      .then((response) => {
        soldesClients = response.data.map((soldeClient: SoldeClientJSON) =>
          SoldeClient.fromJson(soldeClient)
        );
      })
      .catch((error) => {
        console.log(error);
      });
    return soldesClients;
  }
}

export default SoldeClientAPI;
