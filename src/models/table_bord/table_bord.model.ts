export type TotalPaiementsJournaliers = {
  jour: string;
  total_paiement: number;
};

export interface TotalVentesJournaliers {
  jour: string;
  total_vente: number;
}

export interface TotalQuantitesVentesJournaliers {
  jour: string;
  total_quantite_vente: number;
}

export type TotalClientsInscritsQuotidiens = {
  total_clients_incrits: number;
};

export type TotalVenteQuotidienne = {
  total_quantite: number;
  total_vente: number;
};

export type TotalAchatsEntrepriseQuotidiens = {
  categorie: string;
  total_achat: number;
};

export type TotalCommandesNonTraiteesQuotidiennes = {
  categorie: string;
  total_commande_non_traitee: number;
};

export type TotalCommandesTraiteesQuotidiennes = {
  categorie: string;
  total_commande_traitee: number;
};

export type TotalPaiementsBanquesQuotidiens = {
  banque: string;
  total_paiement: number;
};

export type TotalStocksBonCommandeQuotidiens = {
  categorie: string;
  total_stock_restant: number;
};

export type TotalAvancesCreancesQuotidiennes = {
  total_avances: number;
  total_creances: number;
};

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
