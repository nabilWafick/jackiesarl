
  // Interface TypeScript pour la table `avance`
  interface AvanceJSON {
    id?: number;
    montant: number;
    id_client: number;
    date_avance?: string; // Une chaîne de caractères pour la date au format ISO
  }
  
  class Avance {
    id?: number;
    montant: number;
    id_client: number;
    date_avance?: Date;
  
    constructor(montant: number, id_client: number,id?: number,  date_avance?: Date) {
      this.montant = montant;
      this.id_client = id_client;
      this.id = id;
      this.date_avance = date_avance;
      
    }
  
    // Méthode pour créer un objet Avance à partir d'un objet JSON générique
    static fromJson(json: AvanceJSON): Avance {
      return new Avance(
      
        json.montant,
        json.id_client,
        json.id,
        new Date(json.date_avance!)
      );
    }
  
    // Méthode pour convertir un objet Avance en JSON générique
    toJson(): AvanceJSON {
      return {
        id: this.id,
        montant: this.montant,
        id_client: this.id_client,
        date_avance:this.date_avance !=null ? this.date_avance!.toISOString() : undefined,
      };
    }
  }

  export default Avance