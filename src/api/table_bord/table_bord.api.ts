import axios from "axios";
import JSConstants from "../../utils/constants";

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

  static async getWeekDailyPayments(): Promise<TotalPaiementsJournaliers[]> {
    let promiseResponse: TotalPaiementsJournaliers[] = [];
    await axios
      .get(`${TableBordAPI.baseUrl}/table-bord/total-paiements-hebdomadaire/`)
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return promiseResponse;
  }

  static async getWeekDailySales(): Promise<TotalVentesJournaliers[]> {
    let promiseResponse: TotalVentesJournaliers[] = [];
    await axios
      .get(`${TableBordAPI.baseUrl}/table-bord/total-ventes-hebdomadaire/`)
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return promiseResponse;
  }

  static async getDailyRegisteredCustumersTotal(
    isToday: 1 | 0
  ): Promise<TotalClientsInscritsQuotidiens> {
    let promiseResponse: TotalClientsInscritsQuotidiens = {
      total_clients_incrits: 0,
    };
    await axios
      .get(
        `${TableBordAPI.baseUrl}/table-bord/total-clients-inscrits-quotidien/${isToday}`
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
    isToday: 1 | 0
  ): Promise<TotalVenteQuotidienne> {
    let promiseResponse: TotalVenteQuotidienne = {
      total_quantite: 0,
      total_vente: 0,
    };
    await axios
      .get(
        `${TableBordAPI.baseUrl}/table-bord/total-ventes-quotidiennes/${isToday}`
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
    isToday: 1 | 0
  ): Promise<TotalAchatsEntrepriseQuotidiens[]> {
    let promiseResponse: TotalAchatsEntrepriseQuotidiens[] = [];
    await axios
      .get(
        `${TableBordAPI.baseUrl}/table-bord/total-achats-entreprise-quotidiens/${isToday}`
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
    isToday: 1 | 0
  ): Promise<TotalCommandesNonTraiteesQuotidiennes[]> {
    let promiseResponse: TotalCommandesNonTraiteesQuotidiennes[] = [];
    await axios
      .get(
        `${TableBordAPI.baseUrl}/table-bord/total-commandes-non-traitees-quotidiennes/${isToday}`
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
    isToday: 1 | 0
  ): Promise<TotalCommandesTraiteesQuotidiennes[]> {
    let promiseResponse: TotalCommandesTraiteesQuotidiennes[] = [];
    await axios
      .get(
        `${TableBordAPI.baseUrl}/table-bord/total-commandes-traitees-quotidiennes/${isToday}`
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
    isToday: 1 | 0
  ): Promise<TotalPaiementsBanquesQuotidiens[]> {
    let promiseResponse: TotalPaiementsBanquesQuotidiens[] = [];
    await axios
      .get(
        `${TableBordAPI.baseUrl}/table-bord/total-paiements-banques-quotidiens/${isToday}`
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
    isToday: 1 | 0
  ): Promise<TotalStocksBonCommandeQuotidiens[]> {
    let promiseResponse: TotalStocksBonCommandeQuotidiens[] = [];
    await axios
      .get(
        `${TableBordAPI.baseUrl}/table-bord/total-stocks-bon-commande-quotidiens/${isToday}`
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
    isToday: 1 | 0
  ): Promise<TotalAvancesCreancesQuotidiennes> {
    let promiseResponse: TotalAvancesCreancesQuotidiennes = {
      total_avances: 0,
      total_creances: 0,
    };
    await axios
      .get(
        `${TableBordAPI.baseUrl}/table-bord/total-avances-creances-quotidiennes/${isToday}`
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
