// Interface TypeScript pour la table `stock_camion`
interface StockCamionJSON {
    id: number;
    numeroCamion: string;
    categorie: string;
    numeroChauffeur: number;
    numeroBc: number;
    quantite: number;
    dateApprovisionnement: string; // Une chaîne de caractères pour la date au format ISO
  }
  
   class StockCamion {
    id: number;
    numeroCamion: string;
    categorie: string;
    numeroChauffeur: number;
    numeroBc: number;
    quantite: number;
    dateApprovisionnement: Date;
  
    constructor(
      id: number,
      numeroCamion: string,
      categorie: string,
      numeroChauffeur: number,
      numeroBc: number,
      quantite: number,
      dateApprovisionnement: Date
    ) {
      this.id = id;
      this.numeroCamion = numeroCamion;
      this.categorie = categorie;
      this.numeroChauffeur = numeroChauffeur;
      this.numeroBc = numeroBc;
      this.quantite = quantite;
      this.dateApprovisionnement = dateApprovisionnement;
    }
  
    // Méthode pour créer un objet StockCamion à partir d'un objet JSON générique
    static fromJson(json: StockCamionJSON): StockCamion {
      return new StockCamion(
        json.id,
        json.numeroCamion,
        json.categorie,
        json.numeroChauffeur,
        json.numeroBc,
        json.quantite,
        new Date(json.dateApprovisionnement)
      );
    }
  
    // Méthode pour convertir un objet StockCamion en JSON générique
    toJson(): StockCamionJSON {
      return {
        id: this.id,
        numeroCamion: this.numeroCamion,
        categorie: this.categorie,
        numeroChauffeur: this.numeroChauffeur,
        numeroBc: this.numeroBc,
        quantite: this.quantite,
        dateApprovisionnement: this.dateApprovisionnement.toISOString(),
      };
    }
  }
  

  export default StockCamion