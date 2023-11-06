import Employes from "../employes/employes.model";

// Interface TypeScript pour la table `rapports`
interface RapportsJSON {
  id?: number;
  rapport: string | File;
  date_envoi?: string;
  id_employe?: number;
  employe?: Employes; // Une chaîne de caractères pour la date au format ISO
}

class Rapports {
  id?: number;
  rapport: string | File;
  date_envoi?: Date;
  id_employe?: number;
  employe?: Employes;

  constructor(
    rapport: string | File,
    id?: number,
    date_envoi?: Date,
    id_employe?: number,
    employe?: Employes
  ) {
    this.id = id;
    this.rapport = rapport;
    this.date_envoi = date_envoi;
    this.id_employe = id_employe;
    this.employe = employe;
  }

  // Méthode pour créer un objet Rapports à partir d'un objet JSON générique
  static fromJson(json: RapportsJSON): Rapports {
    return new Rapports(
      json.rapport,
      json.id,
      new Date(json.date_envoi!),
      json.id_employe,
      json.employe
    );
  }

  // Méthode pour convertir un objet Rapports en JSON générique
  toJson(): RapportsJSON {
    return {
      id: this.id,
      rapport: this.rapport,
      id_employe: this.id_employe,
      employe: this.employe,
      date_envoi:
        this.date_envoi != null ? this.date_envoi.toISOString() : undefined,
    };
  }
}

export default Rapports;
