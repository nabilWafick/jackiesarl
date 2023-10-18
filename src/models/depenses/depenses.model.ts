// Interface TypeScript pour la table `depenses`
interface DepensesJSON {
  id?: number;
  description: string;
  montant: number;
  piece: string | File;
  est_validee: number;
  date_depense?: string; // Une chaîne de caractères pour la date au format ISO
}

class Depenses {
  id?: number;
  description: string;
  montant: number;
  piece: string | File;
  est_validee: number;
  date_depense?: Date;

  constructor(
    description: string,
    montant: number,
    piece: string | File,
    est_validee: number,
    id?: number,
    date_depense?: Date
  ) {
    this.id = id;
    this.description = description;
    this.montant = montant;
    this.piece = piece;
    this.est_validee = est_validee;
    this.date_depense = date_depense;
  }

  // Méthode pour créer un objet Depenses à partir d'un objet JSON générique
  static fromJson(json: DepensesJSON): Depenses {
    return new Depenses(
      json.description,
      json.montant,
      json.piece,
      json.est_validee,
      json.id,
      new Date(json.date_depense!)
    );
  }

  // Méthode pour convertir un objet Depenses en JSON générique
  toJson(): DepensesJSON {
    return {
      id: this.id,
      description: this.description,
      montant: this.montant,
      piece: this.piece,
      est_validee: this.est_validee,
      date_depense:
        this.date_depense != null ? this.date_depense.toISOString() : undefined,
    };
  }
}

export default Depenses;
