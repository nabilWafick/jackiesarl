// Interface TypeScript pour la table `modifications`
interface ModificationsJSON {
  id?: number;
  modification: string;
  id_employe: number;
  dateModification?: string; // Une chaîne de caractères pour la date au format ISO
}

class Modifications {
  id?: number;
  modification: string;
  id_employe: number;
  dateModification?: Date;

  constructor(
    modification: string,
    id_employe: number,
    id?: number,
    dateModification?: Date
  ) {
    this.id = id;
    this.modification = modification;
    this.id_employe = id_employe;
    this.dateModification = dateModification;
  }

  // Méthode pour créer un objet Modifications à partir d'un objet JSON générique
  static fromJson(json: ModificationsJSON): Modifications {
    return new Modifications(
      json.modification,
      json.id_employe,
      json.id,
      new Date(json.dateModification!)
    );
  }

  // Méthode pour convertir un objet Modifications en JSON générique
  toJson(): ModificationsJSON {
    return {
      id: this.id,
      modification: this.modification,
      id_employe: this.id_employe,
      dateModification:
        this.dateModification != null
          ? this.dateModification.toISOString()
          : undefined,
    };
  }
}

export default Modifications;
