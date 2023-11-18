// Interface TypeScript pour la table `modifications`
interface ModificationsJSON {
  id?: number;
  modification: string;
  details: string;
  nom_employe: string;
  prenoms_employe: string;
  date_modification?: string; // Une chaîne de caractères pour la date au format ISO
}

class Modifications {
  id?: number;
  modification: string;
  details: string;
  nom_employe: string;
  prenoms_employe: string;
  date_modification?: Date;

  constructor(
    modification: string,
    details: string,
    nom_employe: string,
    prenoms_employe: string,
    id?: number,
    date_modification?: Date
  ) {
    this.id = id;
    this.modification = modification;
    this.details = details;
    this.nom_employe = nom_employe;
    this.prenoms_employe = prenoms_employe;
    this.date_modification = date_modification;
  }

  // Méthode pour créer un objet Modifications à partir d'un objet JSON générique
  static fromJson(json: ModificationsJSON): Modifications {
    return new Modifications(
      json.modification,
      json.details,
      json.nom_employe,
      json.prenoms_employe,
      json.id,
      new Date(json.date_modification!)
    );
  }

  // Méthode pour convertir un objet Modifications en JSON générique
  toJson(): ModificationsJSON {
    return {
      id: this.id,
      modification: this.modification,
      details: this.details,
      nom_employe: this.nom_employe,
      prenoms_employe: this.prenoms_employe,
      date_modification:
        this.date_modification != null
          ? this.date_modification.toISOString()
          : undefined,
    };
  }
}

export default Modifications;
