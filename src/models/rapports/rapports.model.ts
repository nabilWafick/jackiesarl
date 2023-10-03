// Interface TypeScript pour la table `rapports`
interface RapportsJSON {
    id?: number;
    rapport: string;
    id_employe: number;
    date_envoi?: string; // Une chaîne de caractères pour la date au format ISO
   
  }
  
   class Rapports {
    id?: number;
    rapport: string;
    id_employe: number;
    date_envoi?: Date;
    
  
    constructor(
      
      rapport: string,
      id_employe: number,
      id?: number,
      date_envoi?: Date,
     
    ) {
      this.id = id;
      this.rapport = rapport;
      this.id_employe = id_employe;
      this.date_envoi = date_envoi;
     
    }
  
    // Méthode pour créer un objet Rapports à partir d'un objet JSON générique
    static fromJson(json: RapportsJSON): Rapports {
      return new Rapports(
        
        json.rapport,
        json.id_employe,
        json.id,
        new Date(json.date_envoi!),
       
      );
    }
  
    // Méthode pour convertir un objet Rapports en JSON générique
    toJson(): RapportsJSON {
      return {
        id: this.id,
        rapport: this.rapport,
        id_employe: this.id_employe,
        date_envoi: this.date_envoi != null ? this.date_envoi.toISOString() : undefined,
      
      };
    }
  }
  
  export default Rapports