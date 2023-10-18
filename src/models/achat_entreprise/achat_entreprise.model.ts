interface AchatEntrepriseJson {
  bon_commande: number;
  quantite_achetee: number;
  montant: number;
  banque: string;
  cheque: number;
  bordereau: string | File;
  date_achat?: string;
}

class AchatEntreprise {
  bon_commande: number;
  quantite_achetee: number;
  montant: number;
  banque: string;
  cheque: number;
  bordereau: string | File;
  date_achat?: Date;

  constructor(
    bon_commande: number,
    quantite_achetee: number,
    montant: number,
    banque: string,
    cheque: number,
    bordereau: string | File,
    date_achat?: Date
  ) {
    this.bon_commande = bon_commande;
    this.quantite_achetee = quantite_achetee;
    this.montant = montant;
    this.banque = banque;
    this.cheque = cheque;
    this.bordereau = bordereau;
    this.date_achat = date_achat;
  }

  static fromJson(json: AchatEntrepriseJson): AchatEntreprise {
    return new AchatEntreprise(
      json.bon_commande,
      json.quantite_achetee,
      json.montant,
      json.banque,
      json.cheque,
      json.bordereau,
      new Date(json.date_achat!)
    );
  }

  toJson(): AchatEntrepriseJson {
    return {
      bon_commande: this.bon_commande,
      quantite_achetee: this.quantite_achetee,
      montant: this.montant,
      banque: this.banque,
      cheque: this.cheque,
      bordereau: this.bordereau,
      date_achat:
        this.date_achat != null ? this.date_achat!.toISOString() : undefined,
    };
  }
}

export default AchatEntreprise;
