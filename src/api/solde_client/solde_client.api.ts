import axios from "axios";
import SoldeClient from "../../models/solde_client/solde_client.model";
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
interface SoldeClientJSON {
  client?: ClientsJSON;
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
  total_avance_CIMBENIN: number;
  total_avance_NOCIBE: number;
  total_creance_CIMBENIN: number;
  total_creance_NOCIBE: number;
  total_avance_clients: number;
  total_creance_clients: number;
  pourcentage_avance_client: number;
  pourcentage_creance_client: number;
}

class SoldeClientAPI {
  private static baseUrl = JSConstants.API_BASE_URL;

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
          //    console.log("soldeClient", soldeClient);
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
        //  console.log("soldeClient", soldeClient);
      })
      .catch((error) => {
        console.log(error);
      });
    return soldeClient;
  }

  static async getAll(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<SoldeClient[]> {
    let soldeClientsList: SoldeClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${SoldeClientAPI.baseUrl}/soldes-clients-default`)
        .then((response) => {
          soldeClientsList = response.data.map((soldeClient: SoldeClientJSON) =>
            SoldeClient.fromJson(soldeClient)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as SoldeClient[];
        });
      return soldeClientsList;
    }

    await axios
      .get(
        `${SoldeClientAPI.baseUrl}/soldes-clients-default/${startDate}/${endDate}`
      )
      .then((response) => {
        soldeClientsList = response.data.map((soldeClient: SoldeClientJSON) =>
          SoldeClient.fromJson(soldeClient)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as SoldeClient[];
      });
    return soldeClientsList;
  }

  static async getAllAdvanceMoreImportant(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<SoldeClient[]> {
    let soldeClientsList: SoldeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(`${SoldeClientAPI.baseUrl}/soldes-clients/advance-more-important`)
        .then((response) => {
          soldeClientsList = response.data.map((soldeClient: SoldeClientJSON) =>
            SoldeClient.fromJson(soldeClient)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as SoldeClient[];
        });
      return soldeClientsList;
    }

    await axios
      .get(
        `${SoldeClientAPI.baseUrl}/soldes-clients/advance-more-important/${startDate}/${endDate}`
      )
      .then((response) => {
        soldeClientsList = response.data.map((soldeClient: SoldeClientJSON) =>
          SoldeClient.fromJson(soldeClient)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as SoldeClient[];
      });
    return soldeClientsList;
  }

  static async getAllAdvanceLessImportant(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<SoldeClient[]> {
    let soldeClientsList: SoldeClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${SoldeClientAPI.baseUrl}/soldes-clients/advance-less-important`)
        .then((response) => {
          soldeClientsList = response.data.map((soldeClient: SoldeClientJSON) =>
            SoldeClient.fromJson(soldeClient)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as SoldeClient[];
        });
      return soldeClientsList;
    }

    await axios
      .get(
        `${SoldeClientAPI.baseUrl}/soldes-clients/advance-less-important/${startDate}/${endDate}`
      )
      .then((response) => {
        soldeClientsList = response.data.map((soldeClient: SoldeClientJSON) =>
          SoldeClient.fromJson(soldeClient)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as SoldeClient[];
      });
    return soldeClientsList;
  }

  static async getAllDebtsMoreImportant(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<SoldeClient[]> {
    let soldeClientsList: SoldeClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${SoldeClientAPI.baseUrl}/soldes-clients/debt-more-important`)
        .then((response) => {
          soldeClientsList = response.data.map((soldeClient: SoldeClientJSON) =>
            SoldeClient.fromJson(soldeClient)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as SoldeClient[];
        });
      return soldeClientsList;
    }

    await axios
      .get(
        `${SoldeClientAPI.baseUrl}/soldes-clients/debt-more-important/${startDate}/${endDate}`
      )
      .then((response) => {
        soldeClientsList = response.data.map((soldeClient: SoldeClientJSON) =>
          SoldeClient.fromJson(soldeClient)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as SoldeClient[];
      });
    return soldeClientsList;
  }

  static async getAllDebtsLessImportant(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<SoldeClient[]> {
    let soldeClientsList: SoldeClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${SoldeClientAPI.baseUrl}/soldes-clients/debt-less-important`)
        .then((response) => {
          soldeClientsList = response.data.map((soldeClient: SoldeClientJSON) =>
            SoldeClient.fromJson(soldeClient)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as SoldeClient[];
        });
      return soldeClientsList;
    }

    await axios
      .get(
        `${SoldeClientAPI.baseUrl}/soldes-clients/debt-less-important/${startDate}/${endDate}`
      )
      .then((response) => {
        soldeClientsList = response.data.map((soldeClient: SoldeClientJSON) =>
          SoldeClient.fromJson(soldeClient)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as SoldeClient[];
      });
    return soldeClientsList;
  }
}

export default SoldeClientAPI;
