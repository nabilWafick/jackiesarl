

interface ActivitesBanqueJSON {
  id?: number;
  id_banque: number;
  description: string;
  debit: number;
  credit: number;
  solde: number;
  date_activite?: string; // Une chaîne de caractères pour la date au format ISO
}

class ActivitesBanque {
  id?: number;
  id_banque: number;
  description: string;
  debit: number;
  credit: number;
  solde: number;
  date_activite?: Date;

  constructor(
    
    id_banque: number,
    description: string,
    debit: number,
    credit: number,
    solde: number,
    id?: number,
    date_activite?: Date
  ) {
   
    this.id_banque = id_banque;
    this.description = description;
    this.debit = debit;
    this.credit = credit;
    this.solde = solde;
    this.id = id;
    this.date_activite = date_activite;
  }

  // Méthode pour créer un objet ActivitesBanque à partir d'un objet JSON générique
  static fromJson(json: ActivitesBanqueJSON): ActivitesBanque {
    return new ActivitesBanque(
     
      json.id_banque,
      json.description,
      json.debit,
      json.credit,
      json.solde,
      json.id,
      new Date(json.date_activite!)
    );
  }

  // Méthode pour convertir un objet ActivitesBanque en JSON générique
  toJson(): ActivitesBanqueJSON {
    return {
      id: this.id,
      id_banque: this.id_banque,
      description: this.description,
      debit: this.debit,
      credit: this.credit,
      solde: this.solde,
      date_activite:this.date_activite != null ? this.date_activite.toISOString() : undefined,
    };
  }
}


export default ActivitesBanque