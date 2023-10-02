
  // Interface TypeScript pour la table `brouillard`
  interface BrouillardJSON {
    id: number;
    depot: string;
    stockActuel: number;
    nomGerant: string;
    numeroGerant: string;
  }
  
  class Brouillard {
    id: number;
    depot: string;
    stockActuel: number;
    nomGerant: string;
    numeroGerant: string;
  
    constructor(
      id: number,
      depot: string,
      stockActuel: number,
      nomGerant: string,
      numeroGerant: string
    ) {
      this.id = id;
      this.depot = depot;
      this.stockActuel = stockActuel;
      this.nomGerant = nomGerant;
      this.numeroGerant = numeroGerant;
    }
  
    // Méthode pour créer un objet Brouillard à partir d'un objet JSON générique
    static fromJson(json: BrouillardJSON): Brouillard {
      return new Brouillard(
        json.id,
        json.depot,
        json.stockActuel,
        json.nomGerant,
        json.numeroGerant
      );
    }
  
    // Méthode pour convertir un objet Brouillard en JSON générique
    toJson(): BrouillardJSON {
      return {
        id: this.id,
        depot: this.depot,
        stockActuel: this.stockActuel,
        nomGerant: this.nomGerant,
        numeroGerant: this.numeroGerant,
      };
    }
  }
  
  export default Brouillard