import axios from "axios";
import JSConstants from "../../utils/constants";
import Employes from "../../models/employes/employes.model";

interface TotalPaiementsJournaliers {
  jour: string;
  total_paiement: number;
}

interface TotalVentesJournaliers {
  jour: string;
  total_vente: number;
}

interface TotalClientsInscritsQuotidiens {
  total_clients_incrits: number;
}

interface TotalVenteQuotidienne {
  total_quantite: number;
  total_vente: number;
}

interface TotalAchatsEntrepriseQuotidiens {
  categorie: string;
  total_achat: number;
}

interface TotalCommandesNonTraiteesQuotidiennes {
  categorie: string;
  total_commande_non_traitee: number;
}

interface TotalCommandesTraiteesQuotidiennes {
  categorie: string;
  total_commande_traitee: number;
}

interface TotalPaiementsBanquesQuotidiens {
  banque: string;
  total_paiement: number;
}

interface TotalStocksBonCommandeQuotidiens {
  categorie: string;
  total_stock_restant: number;
}

interface TotalAvancesCreancesQuotidiennes {
  total_avances: number;
  total_creances: number;
}
class TableBordAPI {
  private static baseUrl = JSConstants.API_BASE_URL;

  static async getWeekDailyPayments(
    authenticatedEmployee: Employes
  ): Promise<TotalPaiementsJournaliers[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: TotalPaiementsJournaliers[] = [];
    await axios
      .get(`${TableBordAPI.baseUrl}/table-bord/total-paiements-hebdomadaire/`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return promiseResponse;
  }

  static async getWeekDailySales(
    authenticatedEmployee: Employes
  ): Promise<TotalVentesJournaliers[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: TotalVentesJournaliers[] = [];
    await axios
      .get(`${TableBordAPI.baseUrl}/table-bord/total-ventes-hebdomadaire/`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return promiseResponse;
  }

  static async getDailyRegisteredCustumersTotal(
    authenticatedEmployee: Employes,
    isToday: 1 | 0
  ): Promise<TotalClientsInscritsQuotidiens> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: TotalClientsInscritsQuotidiens = {
      total_clients_incrits: 0,
    };
    await axios
      .get(
        `${TableBordAPI.baseUrl}/table-bord/total-clients-inscrits-quotidien/${isToday}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
      )
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return promiseResponse;
  }

  static async getDailySalesTotal(
    authenticatedEmployee: Employes,
    isToday: 1 | 0
  ): Promise<TotalVenteQuotidienne> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: TotalVenteQuotidienne = {
      total_quantite: 0,
      total_vente: 0,
    };
    await axios
      .get(
        `${TableBordAPI.baseUrl}/table-bord/total-ventes-quotidiennes/${isToday}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
      )
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return promiseResponse;
  }

  static async getDailyCompanyPurchases(
    authenticatedEmployee: Employes,
    isToday: 1 | 0
  ): Promise<TotalAchatsEntrepriseQuotidiens[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: TotalAchatsEntrepriseQuotidiens[] = [];
    await axios
      .get(
        `${TableBordAPI.baseUrl}/table-bord/total-achats-entreprise-quotidiens/${isToday}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
      )
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return promiseResponse;
  }

  static async getDailyUntraitedOrdersTotal(
    authenticatedEmployee: Employes,
    isToday: 1 | 0
  ): Promise<TotalCommandesNonTraiteesQuotidiennes[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: TotalCommandesNonTraiteesQuotidiennes[] = [];
    await axios
      .get(
        `${TableBordAPI.baseUrl}/table-bord/total-commandes-non-traitees-quotidiennes/${isToday}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
      )
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return promiseResponse;
  }

  static async getDailyTraitedOrdersTotal(
    authenticatedEmployee: Employes,
    isToday: 1 | 0
  ): Promise<TotalCommandesTraiteesQuotidiennes[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: TotalCommandesTraiteesQuotidiennes[] = [];
    await axios
      .get(
        `${TableBordAPI.baseUrl}/table-bord/total-commandes-traitees-quotidiennes/${isToday}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
      )
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return promiseResponse;
  }

  static async getDailyPaymentPerBank(
    authenticatedEmployee: Employes,
    isToday: 1 | 0
  ): Promise<TotalPaiementsBanquesQuotidiens[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: TotalPaiementsBanquesQuotidiens[] = [];
    await axios
      .get(
        `${TableBordAPI.baseUrl}/table-bord/total-paiements-banques-quotidiens/${isToday}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
      )
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return promiseResponse;
  }

  static async getDailyPurchasesOrdersStockTotal(
    authenticatedEmployee: Employes,
    isToday: 1 | 0
  ): Promise<TotalStocksBonCommandeQuotidiens[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: TotalStocksBonCommandeQuotidiens[] = [];
    await axios
      .get(
        `${TableBordAPI.baseUrl}/table-bord/total-stocks-bon-commande-quotidiens/${isToday}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
      )
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return promiseResponse;
  }

  static async getDailyAdvancesDebts(
    authenticatedEmployee: Employes,
    isToday: 1 | 0
  ): Promise<TotalAvancesCreancesQuotidiennes> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: TotalAvancesCreancesQuotidiennes = {
      total_avances: 0,
      total_creances: 0,
    };
    await axios
      .get(
        `${TableBordAPI.baseUrl}/table-bord/total-avances-creances-quotidiennes/${isToday}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
      )
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return promiseResponse;
  }
}

export default TableBordAPI;
