// Interface TypeScript pour la table `remise_cheque_client`
interface RemiseChequeClientJSON {
    id?: number;
    description: string;
    banque: string;
    montant: number;
    reste: number;
    est_validee: number;
    id_client: number;
    date_remise?: string; // Une chaîne de caractères pour la date au format ISO
  }
  
  
  class RemiseChequeClient {
    id?: number;
    description: string;
    banque: string;
    montant: number;
    reste: number;
    est_validee: number;
    id_client: number;
    date_remise?: Date;
  
    constructor(
     
      description: string,
      banque: string,
      montant: number,
      reste: number,
      est_validee: number,
      id_client: number,
      id?: number,
      date_remise?: Date
    ) {
      this.id = id;
      this.description = description;
      this.banque = banque;
      this.montant = montant;
      this.reste = reste;
      this.est_validee = est_validee;
      this.id_client = id_client;
      this.date_remise = date_remise;
    }
  
    // Méthode pour créer un objet RemiseChequeClient à partir d'un objet JSON générique
    static fromJson(json: RemiseChequeClientJSON): RemiseChequeClient {
      return new RemiseChequeClient(
       
        json.description,
        json.banque,
        json.montant,
        json.reste,
        json.est_validee,
        json.id_client,
        json.id,
        new Date(json.date_remise!)
      );
    }
  
    // Méthode pour convertir un objet RemiseChequeClient en JSON générique
    toJson(): RemiseChequeClientJSON {
      return {
        id: this.id,
        description: this.description,
        banque: this.banque,
        montant: this.montant,
        reste: this.reste,
        est_validee: this.est_validee,
        id_client: this.id_client,
        date_remise: this.date_remise != null ? this.date_remise.toISOString() : undefined,
      };
    }
  }
  

  export default RemiseChequeClient