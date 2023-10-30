// Interface TypeScript pour la table `modifications`
interface ModificationsJSON {
  id?: number;
  modification: string;
  nom_employe: string;
  prenoms_employe: string;
  dateModification?: string; // Une chaîne de caractères pour la date au format ISO
}

class Modifications {
  id?: number;
  modification: string;
  nom_employe: string;
  prenoms_employe: string;
  dateModification?: Date;

  constructor(
    modification: string,
    nom_employe: string,
    prenoms_employe: string,
    id?: number,
    dateModification?: Date
  ) {
    this.id = id;
    this.modification = modification;
    this.nom_employe = nom_employe;
    this.prenoms_employe = prenoms_employe;
    this.dateModification = dateModification;
  }

  // Méthode pour créer un objet Modifications à partir d'un objet JSON générique
  static fromJson(json: ModificationsJSON): Modifications {
    return new Modifications(
      json.modification,
      json.nom_employe,
      json.prenoms_employe,
      json.id,
      new Date(json.dateModification!)
    );
  }

  // Méthode pour convertir un objet Modifications en JSON générique
  toJson(): ModificationsJSON {
    return {
      id: this.id,
      modification: this.modification,
      nom_employe: this.nom_employe,
      prenoms_employe: this.prenoms_employe,
      dateModification:
        this.dateModification != null
          ? this.dateModification.toISOString()
          : undefined,
    };
  }
}

export default Modifications;
