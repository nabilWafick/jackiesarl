// Interface TypeScript pour la table `solde_courant`
interface SoldeCourantJSON {
    id: number;
    banque: string;
    numeroCompte: string;
    soldeActuel: number;
    dateAjout: string; // Une chaîne de caractères pour la date au format ISO
  }
  
   class SoldeCourant {
    id: number;
    banque: string;
    numeroCompte: string;
    soldeActuel: number;
    dateAjout: Date;
  
    constructor(
      id: number,
      banque: string,
      numeroCompte: string,
      soldeActuel: number,
      dateAjout: Date
    ) {
      this.id = id;
      this.banque = banque;
      this.numeroCompte = numeroCompte;
      this.soldeActuel = soldeActuel;
      this.dateAjout = dateAjout;
    }
  
    // Méthode pour créer un objet SoldeCourant à partir d'un objet JSON générique
    static fromJson(json: SoldeCourantJSON): SoldeCourant {
      return new SoldeCourant(
        json.id,
        json.banque,
        json.numeroCompte,
        json.soldeActuel,
        new Date(json.dateAjout)
      );
    }
  
    // Méthode pour convertir un objet SoldeCourant en JSON générique
    toJson(): SoldeCourantJSON {
      return {
        id: this.id,
        banque: this.banque,
        numeroCompte: this.numeroCompte,
        soldeActuel: this.soldeActuel,
        dateAjout: this.dateAjout.toISOString(),
      };
    }
  }
  
  export default SoldeCourant