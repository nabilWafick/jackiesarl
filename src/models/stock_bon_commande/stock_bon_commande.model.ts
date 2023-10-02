// Interface TypeScript pour la table `stock_bon_commande`
interface StockBonCommandeJSON {
    id: number;
    numeroBc: number;
    categorie: string;
    quantiteAchetee: number;
    stockAvantVente: number;
    vente: number;
    stockApresVente: number;
    dateRechargement: string; // Une chaîne de caractères pour la date au format ISO
  }
  
   class StockBonCommande {
    id: number;
    numeroBc: number;
    categorie: string;
    quantiteAchetee: number;
    stockAvantVente: number;
    vente: number;
    stockApresVente: number;
    dateRechargement: Date;
  
    constructor(
      id: number,
      numeroBc: number,
      categorie: string,
      quantiteAchetee: number,
      stockAvantVente: number,
      vente: number,
      stockApresVente: number,
      dateRechargement: Date
    ) {
      this.id = id;
      this.numeroBc = numeroBc;
      this.categorie = categorie;
      this.quantiteAchetee = quantiteAchetee;
      this.stockAvantVente = stockAvantVente;
      this.vente = vente;
      this.stockApresVente = stockApresVente;
      this.dateRechargement = dateRechargement;
    }
  
    // Méthode pour créer un objet StockBonCommande à partir d'un objet JSON générique
    static fromJson(json: StockBonCommandeJSON): StockBonCommande {
      return new StockBonCommande(
        json.id,
        json.numeroBc,
        json.categorie,
        json.quantiteAchetee,
        json.stockAvantVente,
        json.vente,
        json.stockApresVente,
        new Date(json.dateRechargement)
      );
    }
  
    // Méthode pour convertir un objet StockBonCommande en JSON générique
    toJson(): StockBonCommandeJSON {
      return {
        id: this.id,
        numeroBc: this.numeroBc,
        categorie: this.categorie,
        quantiteAchetee: this.quantiteAchetee,
        stockAvantVente: this.stockAvantVente,
        vente: this.vente,
        stockApresVente: this.stockApresVente,
        dateRechargement: this.dateRechargement.toISOString(),
      };
    }
  }
  

  export default StockBonCommande