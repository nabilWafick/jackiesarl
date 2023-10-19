// Interface TypeScript pour la table `stock_bon_commande`
interface StockBonCommandeJSON {
  id?: number;
  numero_bc: number;
  categorie: string;
  quantite_achetee: number;
  stock_initial: number;
  stock_avant_vente: number;
  vente: number;
  stock_apres_vente: number;
  date_rechargement?: string; // Une chaîne de caractères pour la date au format ISO
}

class StockBonCommande {
  id?: number;
  numero_bc: number;
  categorie: string;
  stock_initial: number;
  quantite_achetee: number;
  stock_avant_vente: number;
  vente: number;
  stock_apres_vente: number;
  date_rechargement?: Date;

  constructor(
    numero_bc: number,
    categorie: string,
    quantite_achetee: number,
    stock_initial: number,
    stock_avant_vente: number,
    vente: number,
    stock_apres_vente: number,
    id?: number,
    date_rechargement?: Date
  ) {
    this.id = id;
    this.numero_bc = numero_bc;
    this.categorie = categorie;
    this.quantite_achetee = quantite_achetee;
    this.stock_initial = stock_initial;
    this.stock_avant_vente = stock_avant_vente;
    this.vente = vente;
    this.stock_apres_vente = stock_apres_vente;
    this.date_rechargement = date_rechargement;
  }

  // Méthode pour créer un objet StockBonCommande à partir d'un objet JSON générique
  static fromJson(json: StockBonCommandeJSON): StockBonCommande {
    return new StockBonCommande(
      json.numero_bc,
      json.categorie,
      json.quantite_achetee,
      json.stock_initial,
      json.stock_avant_vente,
      json.vente,
      json.stock_apres_vente,
      json.id,
      new Date(json.date_rechargement!)
    );
  }

  // Méthode pour convertir un objet StockBonCommande en JSON générique
  toJson(): StockBonCommandeJSON {
    return {
      id: this.id,
      numero_bc: this.numero_bc,
      categorie: this.categorie,
      quantite_achetee: this.quantite_achetee,
      stock_initial: this.stock_initial,
      stock_avant_vente: this.stock_avant_vente,
      vente: this.vente,
      stock_apres_vente: this.stock_apres_vente,
      date_rechargement:
        this.date_rechargement != null
          ? this.date_rechargement.toISOString()
          : undefined,
    };
  }
}

export default StockBonCommande;
