// Interface TypeScript pour la table `stock_camion`
interface StockCamionJSON {
    id?: number;
    numero_camion: string;
    categorie: string;
    numero_chauffeur: number;
    numero_bc: number;
    quantite: number;
    date_approvisionnement?: string; // Une chaîne de caractères pour la date au format ISO
  }
  
   class StockCamion {
    id?: number;
    numero_camion: string;
    categorie: string;
    numero_chauffeur: number;
    numero_bc: number;
    quantite: number;
    date_approvisionnement?: Date;
  
    constructor(
      
      numero_camion: string,
      categorie: string,
      numero_chauffeur: number,
      numero_bc: number,
      quantite: number,
      id?: number,
      date_approvisionnement?: Date
    ) {
      this.id = id;
      this.numero_camion = numero_camion;
      this.categorie = categorie;
      this.numero_chauffeur = numero_chauffeur;
      this.numero_bc = numero_bc;
      this.quantite = quantite;
      this.date_approvisionnement = date_approvisionnement;
    }
  
    // Méthode pour créer un objet StockCamion à partir d'un objet JSON générique
    static fromJson(json: StockCamionJSON): StockCamion {
      return new StockCamion(
        
        json.numero_camion,
        json.categorie,
        json.numero_chauffeur,
        json.numero_bc,
        json.quantite,
        json.id,
        new Date(json.date_approvisionnement!)
      );
    }
  
    // Méthode pour convertir un objet StockCamion en JSON générique
    toJson(): StockCamionJSON {
      return {
        id: this.id,
        numero_camion: this.numero_camion,
        categorie: this.categorie,
        numero_chauffeur: this.numero_chauffeur,
        numero_bc: this.numero_bc,
        quantite: this.quantite,
        date_approvisionnement:this.date_approvisionnement != null ? this.date_approvisionnement.toISOString() : undefined,
      };
    }
  }
  

  export default StockCamion