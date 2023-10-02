
  // Interface TypeScript pour la table `autorisations`
  interface AutorisationsJSON {
    id: number;
    role: string;
    autorisations: string;
  }
  
  class Autorisations {
    id: number;
    role: string;
    autorisations: string;
  
    constructor(id: number, role: string, autorisations: string) {
      this.id = id;
      this.role = role;
      this.autorisations = autorisations;
    }
  
    // Méthode pour créer un objet Autorisations à partir d'un objet JSON générique
    static fromJson(json: AutorisationsJSON): Autorisations {
      return new Autorisations(json.id, json.role, json.autorisations);
    }
  
    // Méthode pour convertir un objet Autorisations en JSON générique
    toJson(): AutorisationsJSON {
      return {
        id: this.id,
        role: this.role,
        autorisations: this.autorisations,
      };
    }
  }
  
  export default Autorisations