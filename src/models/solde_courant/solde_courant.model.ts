// Interface TypeScript pour la table `solde_courant`
interface SoldeCourantJSON {
  id?: number;
  banque: string;
  numero_compte: number;
  solde_actuel: number;
  date_ajout?: string; // Une chaîne de caractères pour la date au format ISO
}

class SoldeCourant {
  id?: number;
  banque: string;
  numero_compte: number;
  solde_actuel: number;
  date_ajout?: Date;

  constructor(
    banque: string,
    numero_compte: number,
    solde_actuel: number,
    id?: number,
    date_ajout?: Date
  ) {
    this.id = id;
    this.banque = banque;
    this.numero_compte = numero_compte;
    this.solde_actuel = solde_actuel;
    this.date_ajout = date_ajout;
  }

  // Méthode pour créer un objet SoldeCourant à partir d'un objet JSON générique
  static fromJson(json: SoldeCourantJSON): SoldeCourant {
    return new SoldeCourant(
      json.banque,
      json.numero_compte,
      json.solde_actuel,
      json.id,
      new Date(json.date_ajout!)
    );
  }

  // Méthode pour convertir un objet SoldeCourant en JSON générique
  toJson(): SoldeCourantJSON {
    return {
      id: this.id,
      banque: this.banque,
      numero_compte: this.numero_compte,
      solde_actuel: this.solde_actuel,
      date_ajout:
        this.date_ajout != null ? this.date_ajout.toISOString() : undefined,
    };
  }
}

export default SoldeCourant;
