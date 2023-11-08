export interface TotalPaiementsJournaliers {
  jour: string;
  total_paiement: number;
}

export interface TotalClientsInscritsQuotidiens {
  total_clients_incrits: number;
}

export interface TotalVenteQuotidienne {
  total_vente: 0;
}

export interface TotalAchatsEntrepriseQuotidiens {
  categorie: string;
  total_achat: number;
}

export interface TotalCommandesNonTraiteesQuotidiennes {
  categorie: string;
  total_commande_non_traitee: number;
}

export interface TotalCommandesTraiteesQuotidiennes {
  categorie: string;
  total_commande_traitee: number;
}

export interface TotalPaiementsBanquesQuotidiens {
  banque: string;
  total_paiement: number;
}

export interface TotalStocksBonCommandeQuotidiens {
  categorie: string;
  total_stock_restant: number;
}

export interface TotalAvancesCreancesQuotidiennes {
  total_avances: number;
  total_creances: number;
}

export class TableBord {
  statistiquePaiementsHebdomadaires: TotalPaiementsJournaliers[];
  totalClientsIncrits: TotalClientsInscritsQuotidiens;
  totalVente: TotalVenteQuotidienne;
  totalAchatsEntreprise: TotalAchatsEntrepriseQuotidiens[];
  totalCommandesNonTraitees: TotalCommandesNonTraiteesQuotidiennes[];
  totalCommandesTraites: TotalCommandesTraiteesQuotidiennes[];
  totalPaiementsBanques: TotalPaiementsBanquesQuotidiens[];
  totalStocksBonCommande: TotalStocksBonCommandeQuotidiens[];
  totalAvancesCreances: TotalAvancesCreancesQuotidiennes;

  constructor(
    statistiquePaiementsHebdomadaires: TotalPaiementsJournaliers[],
    totalClientsIncrits: TotalClientsInscritsQuotidiens,
    totalVente: TotalVenteQuotidienne,
    totalAchatsEntreprise: TotalAchatsEntrepriseQuotidiens[],
    totalCommandesNonTraitees: TotalCommandesNonTraiteesQuotidiennes[],
    totalCommandesTraites: TotalCommandesTraiteesQuotidiennes[],
    totalPaiementsBanques: TotalPaiementsBanquesQuotidiens[],
    totalStocksBonCommande: TotalStocksBonCommandeQuotidiens[],
    totalAvancesCreances: TotalAvancesCreancesQuotidiennes
  ) {
    this.statistiquePaiementsHebdomadaires = statistiquePaiementsHebdomadaires;
    this.totalClientsIncrits = totalClientsIncrits;
    this.totalVente = totalVente;
    this.totalAchatsEntreprise = totalAchatsEntreprise;
    this.totalCommandesNonTraitees = totalCommandesNonTraitees;
    this.totalCommandesTraites = totalCommandesTraites;
    this.totalPaiementsBanques = totalPaiementsBanques;
    this.totalStocksBonCommande = totalStocksBonCommande;
    this.totalAvancesCreances = totalAvancesCreances;
  }
}

//export default TableBord;
