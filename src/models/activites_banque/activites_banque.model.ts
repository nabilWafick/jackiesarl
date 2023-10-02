

interface ActivitesBanqueJSON {
  id: number;
  idBanque: number;
  description: string;
  debit: number;
  credit: number;
  solde: number;
  dateActivite: string; // Une chaîne de caractères pour la date au format ISO
}

class ActivitesBanque {
  id: number;
  idBanque: number;
  description: string;
  debit: number;
  credit: number;
  solde: number;
  dateActivite: Date;

  constructor(
    id: number,
    idBanque: number,
    description: string,
    debit: number,
    credit: number,
    solde: number,
    dateActivite: Date
  ) {
    this.id = id;
    this.idBanque = idBanque;
    this.description = description;
    this.debit = debit;
    this.credit = credit;
    this.solde = solde;
    this.dateActivite = dateActivite;
  }

  // Méthode pour créer un objet ActivitesBanque à partir d'un objet JSON générique
  static fromJson(json: ActivitesBanqueJSON): ActivitesBanque {
    return new ActivitesBanque(
      json.id,
      json.idBanque,
      json.description,
      json.debit,
      json.credit,
      json.solde,
      new Date(json.dateActivite)
    );
  }

  // Méthode pour convertir un objet ActivitesBanque en JSON générique
  toJson(): ActivitesBanqueJSON {
    return {
      id: this.id,
      idBanque: this.idBanque,
      description: this.description,
      debit: this.debit,
      credit: this.credit,
      solde: this.solde,
      dateActivite: this.dateActivite.toISOString(),
    };
  }
}


export default ActivitesBanque