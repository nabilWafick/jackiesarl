// Interface TypeScript pour la table `depenses`
interface DepensesJSON {
    id: number;
    description: string;
    montant: number;
    piece: string;
    estValide: boolean;
    dateDepense: string; // Une chaîne de caractères pour la date au format ISO
  }
  
  
  class Depenses {
    id: number;
    description: string;
    montant: number;
    piece: string;
    estValide: boolean;
    dateDepense: Date;
  
    constructor(
      id: number,
      description: string,
      montant: number,
      piece: string,
      estValide: boolean,
      dateDepense: Date
    ) {
      this.id = id;
      this.description = description;
      this.montant = montant;
      this.piece = piece;
      this.estValide = estValide;
      this.dateDepense = dateDepense;
    }
  
    // Méthode pour créer un objet Depenses à partir d'un objet JSON générique
    static fromJson(json: DepensesJSON): Depenses {
      return new Depenses(
        json.id,
        json.description,
        json.montant,
        json.piece,
        json.estValide,
        new Date(json.dateDepense)
      );
    }
  
    // Méthode pour convertir un objet Depenses en JSON générique
    toJson(): DepensesJSON {
      return {
        id: this.id,
        description: this.description,
        montant: this.montant,
        piece: this.piece,
        estValide: this.estValide,
        dateDepense: this.dateDepense.toISOString(),
      };
    }
  }
  

  export default Depenses