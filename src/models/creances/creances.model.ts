// Interface TypeScript pour la table `creances`
interface CreancesJSON {
    id: number;
    creanceCimBenin: number;
    creanceNocibe: number;
    creanceAutres: number;
    dateCreance: string; // Une chaîne de caractères pour la date au format ISO
    idClient: number;
  }
  
  class Creances {
    id: number;
    creanceCimBenin: number;
    creanceNocibe: number;
    creanceAutres: number;
    dateCreance: Date;
    idClient: number;
  
    constructor(
      id: number,
      creanceCimBenin: number,
      creanceNocibe: number,
      creanceAutres: number,
      dateCreance: Date,
      idClient: number
    ) {
      this.id = id;
      this.creanceCimBenin = creanceCimBenin;
      this.creanceNocibe = creanceNocibe;
      this.creanceAutres = creanceAutres;
      this.dateCreance = dateCreance;
      this.idClient = idClient;
    }
  
    // Méthode pour créer un objet Creances à partir d'un objet JSON générique
    static fromJson(json: CreancesJSON): Creances {
      return new Creances(
        json.id,
        json.creanceCimBenin,
        json.creanceNocibe,
        json.creanceAutres,
        new Date(json.dateCreance),
        json.idClient
      );
    }
  
    // Méthode pour convertir un objet Creances en JSON générique
    toJson(): CreancesJSON {
      return {
        id: this.id,
        creanceCimBenin: this.creanceCimBenin,
        creanceNocibe: this.creanceNocibe,
        creanceAutres: this.creanceAutres,
        dateCreance: this.dateCreance.toISOString(),
        idClient: this.idClient,
      };
    }
  }
  

  export default Creances