// Interface TypeScript pour la table `remise_cheque_client`
interface RemiseChequeClientJSON {
    id: number;
    description: string;
    banque: string;
    montant: number;
    reste: number;
    estValide: boolean;
    idClient: number;
    dateRemise: string; // Une chaîne de caractères pour la date au format ISO
  }
  
  
  class RemiseChequeClient {
    id: number;
    description: string;
    banque: string;
    montant: number;
    reste: number;
    estValide: boolean;
    idClient: number;
    dateRemise: Date;
  
    constructor(
      id: number,
      description: string,
      banque: string,
      montant: number,
      reste: number,
      estValide: boolean,
      idClient: number,
      dateRemise: Date
    ) {
      this.id = id;
      this.description = description;
      this.banque = banque;
      this.montant = montant;
      this.reste = reste;
      this.estValide = estValide;
      this.idClient = idClient;
      this.dateRemise = dateRemise;
    }
  
    // Méthode pour créer un objet RemiseChequeClient à partir d'un objet JSON générique
    static fromJson(json: RemiseChequeClientJSON): RemiseChequeClient {
      return new RemiseChequeClient(
        json.id,
        json.description,
        json.banque,
        json.montant,
        json.reste,
        json.estValide,
        json.idClient,
        new Date(json.dateRemise)
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
        estValide: this.estValide,
        idClient: this.idClient,
        dateRemise: this.dateRemise.toISOString(),
      };
    }
  }
  

  export default RemiseChequeClient