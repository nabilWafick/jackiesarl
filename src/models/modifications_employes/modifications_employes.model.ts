import Employes from "../employes/employes.model";

interface EmployesJSON {
  id?: number;
  nom: string;
  prenoms: string;
  email: string;
  password: string;
  role: string;
  token?: string;
}

// Interface TypeScript pour la table `modificationsEmployes`
interface ModificationsEmployesJSON {
  id?: number;
  modification: string;
  employe: EmployesJSON;
  dateModification?: string; // Une chaîne de caractères pour la date au format ISO
}

class ModificationsEmployes {
  id?: number;
  modification: string;
  employe: Employes;
  dateModification?: Date;

  constructor(
    modification: string,
    employe: Employes,
    id?: number,
    dateModification?: Date
  ) {
    this.id = id;
    this.modification = modification;
    this.employe = employe;
    this.dateModification = dateModification;
  }

  // Méthode pour créer un objet ModificationsEmployes à partir d'un objet JSON générique
  static fromJson(json: ModificationsEmployesJSON): ModificationsEmployes {
    return new ModificationsEmployes(
      json.modification,
      Employes.fromJson(json.employe),
      json.id,
      new Date(json.dateModification!)
    );
  }

  // Méthode pour convertir un objet ModificationsEmployes en JSON générique
  toJson(): ModificationsEmployesJSON {
    return {
      id: this.id,
      modification: this.modification,
      employe: this.employe,
      dateModification:
        this.dateModification != null
          ? this.dateModification.toISOString()
          : undefined,
    };
  }
}

export default ModificationsEmployes;
