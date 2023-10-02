// Interface TypeScript pour la table `paiement_client`
interface PaiementClientJSON {
    id: number;
    montant: number;
    banque: string;
    reference: string;
    categorie: string;
    numeroBc: number;
    bordereau: string;
    estValide: boolean;
    idClient: number;
    datePaiement: string; // Une chaîne de caractères pour la date au format ISO
  }
  
  class PaiementClient {
    id: number;
    montant: number;
    banque: string;
    reference: string;
    categorie: string;
    numeroBc: number;
    bordereau: string;
    estValide: boolean;
    idClient: number;
    datePaiement: Date;
  
    constructor(
      id: number,
      montant: number,
      banque: string,
      reference: string,
      categorie: string,
      numeroBc: number,
      bordereau: string,
      estValide: boolean,
      idClient: number,
      datePaiement: Date
    ) {
      this.id = id;
      this.montant = montant;
      this.banque = banque;
      this.reference = reference;
      this.categorie = categorie;
      this.numeroBc = numeroBc;
      this.bordereau = bordereau;
      this.estValide = estValide;
      this.idClient = idClient;
      this.datePaiement = datePaiement;
    }
  
    // Méthode pour créer un objet PaiementClient à partir d'un objet JSON générique
    static fromJson(json: PaiementClientJSON): PaiementClient {
      return new PaiementClient(
        json.id,
        json.montant,
        json.banque,
        json.reference,
        json.categorie,
        json.numeroBc,
        json.bordereau,
        json.estValide,
        json.idClient,
        new Date(json.datePaiement)
      );
    }
  
    // Méthode pour convertir un objet PaiementClient en JSON générique
    toJson(): PaiementClientJSON {
      return {
        id: this.id,
        montant: this.montant,
        banque: this.banque,
        reference: this.reference,
        categorie: this.categorie,
        numeroBc: this.numeroBc,
        bordereau: this.bordereau,
        estValide: this.estValide,
        idClient: this.idClient,
        datePaiement: this.datePaiement.toISOString(),
      };
    }
  }
  

  export default PaiementClient