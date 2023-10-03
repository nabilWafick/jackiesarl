// Interface TypeScript pour la table `modifications`
interface ModificationsJSON {
    id?: number;
    modification: string;
    idEmploye: number;
    dateModification?: string; // Une chaîne de caractères pour la date au format ISO
  }
  
   class Modifications {
    id?: number;
    modification: string;
    idEmploye: number;
    dateModification?: Date;
  
    constructor(
     
      modification: string,
      idEmploye: number,
      id?: number,
      dateModification?: Date
    ) {
      this.id = id;
      this.modification = modification;
      this.idEmploye = idEmploye;
      this.dateModification = dateModification;
    }
  
    // Méthode pour créer un objet Modifications à partir d'un objet JSON générique
    static fromJson(json: ModificationsJSON): Modifications {
      return new Modifications(
        
        json.modification,
        json.idEmploye,
        json.id,
        new Date(json.dateModification!)
      );
    }
  
    // Méthode pour convertir un objet Modifications en JSON générique
    toJson(): ModificationsJSON {
      return {
        id: this.id,
        modification: this.modification,
        idEmploye: this.idEmploye,
        dateModification:this.dateModification != null ? this.dateModification.toISOString() : undefined,
      };
    }
  }
  
  export default Modifications