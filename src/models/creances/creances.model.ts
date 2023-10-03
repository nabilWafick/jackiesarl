// Interface TypeScript pour la table `creances`
interface CreancesJSON {
    id?: number;
    creance_cim_enin: number;
    creance_nocibe: number;
    creance_autres: number;
    id_client: number;
    date_creance?: string; // Une chaîne de caractères pour la date au format ISO
   
  }
  
  class Creances {
    id?: number;
    creance_cim_enin: number;
    creance_nocibe: number;
    creance_autres: number;
    id_client: number;
    date_creance?: Date;
    
  
    constructor(
     
      creance_cim_enin: number,
      creance_nocibe: number,
      creance_autres: number,
      id_client: number,
      id?: number,
      date_creance?: Date,
      
    ) {
      
      this.creance_cim_enin = creance_cim_enin;
      this.creance_nocibe = creance_nocibe;
      this.creance_autres = creance_autres;
      this.id_client = id_client;
      this.id = id;
      this.date_creance = date_creance;
     
    }
  
    // Méthode pour créer un objet Creances à partir d'un objet JSON générique
    static fromJson(json: CreancesJSON): Creances {
      return new Creances(
       
        json.creance_cim_enin,
        json.creance_nocibe,
        json.creance_autres,
        json.id_client,
        json.id,
        new Date(json.date_creance!),
       
      );
    }
  
    // Méthode pour convertir un objet Creances en JSON générique
    toJson(): CreancesJSON {
      return {
        id: this.id,
        creance_cim_enin: this.creance_cim_enin,
        creance_nocibe: this.creance_nocibe,
        creance_autres: this.creance_autres,
        id_client: this.id_client,
        date_creance: this.date_creance != null ? this.date_creance.toISOString() : undefined,
       
      };
    }
  }
  

  export default Creances