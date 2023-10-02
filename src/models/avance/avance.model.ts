
  // Interface TypeScript pour la table `avance`
  interface AvanceJSON {
    id: number;
    montant: number;
    idClient: number;
    dateAvance: string; // Une chaîne de caractères pour la date au format ISO
  }
  
  class Avance {
    id: number;
    montant: number;
    idClient: number;
    dateAvance: Date;
  
    constructor(id: number, montant: number, idClient: number, dateAvance: Date) {
      this.id = id;
      this.montant = montant;
      this.idClient = idClient;
      this.dateAvance = dateAvance;
    }
  
    // Méthode pour créer un objet Avance à partir d'un objet JSON générique
    static fromJson(json: AvanceJSON): Avance {
      return new Avance(
        json.id,
        json.montant,
        json.idClient,
        new Date(json.dateAvance)
      );
    }
  
    // Méthode pour convertir un objet Avance en JSON générique
    toJson(): AvanceJSON {
      return {
        id: this.id,
        montant: this.montant,
        idClient: this.idClient,
        dateAvance: this.dateAvance.toISOString(),
      };
    }
  }

  export default Avance