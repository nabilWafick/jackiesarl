// Interface TypeScript pour la table `rapports`
interface RapportsJSON {
    id: number;
    rapport: string;
    dateEnvoi: string; // Une chaîne de caractères pour la date au format ISO
    idEmploye: number;
  }
  
   class Rapports {
    id: number;
    rapport: string;
    dateEnvoi: Date;
    idEmploye: number;
  
    constructor(
      id: number,
      rapport: string,
      dateEnvoi: Date,
      idEmploye: number
    ) {
      this.id = id;
      this.rapport = rapport;
      this.dateEnvoi = dateEnvoi;
      this.idEmploye = idEmploye;
    }
  
    // Méthode pour créer un objet Rapports à partir d'un objet JSON générique
    static fromJson(json: RapportsJSON): Rapports {
      return new Rapports(
        json.id,
        json.rapport,
        new Date(json.dateEnvoi),
        json.idEmploye
      );
    }
  
    // Méthode pour convertir un objet Rapports en JSON générique
    toJson(): RapportsJSON {
      return {
        id: this.id,
        rapport: this.rapport,
        dateEnvoi: this.dateEnvoi.toISOString(),
        idEmploye: this.idEmploye,
      };
    }
  }
  
  export default Rapports