interface AchatEntrepriseJson {
    id: number;
    quantiteAchetee: number;
    categorie: string;
    montant: number;
    numeroCtp: string;
    bordereau: string;
    numeroBc: string;
    idEntreprise: number;
    dateAchat: string;
  }
  
  class AchatEntreprise {
    id: number;
    quantiteAchetee: number;
    categorie: string;
    montant: number;
    numeroCtp: string;
    bordereau: string;
    numeroBc: string;
    idEntreprise: number;
    dateAchat: Date;
  
    constructor(
      id: number,
      quantiteAchetee: number,
      categorie: string,
      montant: number,
      numeroCtp: string,
      bordereau: string,
      numeroBc: string,
      idEntreprise: number,
      dateAchat: Date
    ) {
      this.id = id;
      this.quantiteAchetee = quantiteAchetee;
      this.categorie = categorie;
      this.montant = montant;
      this.numeroCtp = numeroCtp;
      this.bordereau = bordereau;
      this.numeroBc = numeroBc;
      this.idEntreprise = idEntreprise;
      this.dateAchat = dateAchat;
    }
  
    static fromJson(json: AchatEntrepriseJson): AchatEntreprise {
      return new AchatEntreprise(
        json.id,
        json.quantiteAchetee,
        json.categorie,
        json.montant,
        json.numeroCtp,
        json.bordereau,
        json.numeroBc,
        json.idEntreprise,
        new Date(json.dateAchat)
      );
    }
  
    toJson(): AchatEntrepriseJson {
      return {
        id: this.id,
        quantiteAchetee: this.quantiteAchetee,
        categorie: this.categorie,
        montant: this.montant,
        numeroCtp: this.numeroCtp,
        bordereau: this.bordereau,
        numeroBc: this.numeroBc,
        idEntreprise: this.idEntreprise,
        dateAchat: this.dateAchat.toISOString(),
      };
    }
  }
  
  export default AchatEntreprise;
  