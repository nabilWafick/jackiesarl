interface AchatEntrepriseJson {
    id?: number;
    quantite_achetee: number;
    categorie: string;
    montant: number;
    numero_ctp: string;
    bordereau: string;
    numero_bc: string;
    id_entreprise: number;
    date_achat?: string;
  }
  
  class AchatEntreprise {
    id?: number;
    quantite_achetee: number;
    categorie: string;
    montant: number;
    numero_ctp: string;
    bordereau: string;
    numero_bc: string;
    id_entreprise: number;
    date_achat?: Date;
  
    constructor(
      
      quantite_achetee: number,
      categorie: string,
      montant: number,
      numero_ctp: string,
      bordereau: string,
      numero_bc: string,
      id_entreprise: number,
      id?: number,
      date_achat?: Date
    ) {
      this.id = id;
      this.quantite_achetee = quantite_achetee;
      this.categorie = categorie;
      this.montant = montant;
      this.numero_ctp = numero_ctp;
      this.bordereau = bordereau;
      this.numero_bc = numero_bc;
      this.id_entreprise = id_entreprise;
      this.date_achat = date_achat;
    }
  
    static fromJson(json: AchatEntrepriseJson): AchatEntreprise {
      return new AchatEntreprise(
       
        json.quantite_achetee,
        json.categorie,
        json.montant,
        json.numero_ctp,
        json.bordereau,
        json.numero_bc,
        json.id_entreprise,
        json.id,
        new Date(json.date_achat!)
      );
    }
  
    toJson(): AchatEntrepriseJson {
      return {
        id: this.id,
        quantite_achetee: this.quantite_achetee,
        categorie: this.categorie,
        montant: this.montant,
        numero_ctp: this.numero_ctp,
        bordereau: this.bordereau,
        numero_bc: this.numero_bc,
        id_entreprise: this.id_entreprise,
        date_achat:this.date_achat != null ? this.date_achat!.toISOString() : undefined,
      };
    }
  }
  
  export default AchatEntreprise;
  