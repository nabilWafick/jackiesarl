
  // Interface TypeScript pour la table `brouillard`
  interface BrouillardJSON {
    id?: number;
    depot: string;
    stock_actuel: number;
    nom_gerant: string;
    numero_gerant: string;
    date_ajout?:string;
  }
  
  class Brouillard {
    id?: number;
    depot: string;
    stock_actuel: number;
    nom_gerant: string;
    numero_gerant: string;
    date_ajout?: Date;
  
    constructor(
      
      depot: string,
      stock_actuel: number,
      nom_gerant: string,
      numero_gerant: string,
      id?:number,
      date_ajout?:Date,
    ) {
     
      this.depot = depot;
      this.stock_actuel = stock_actuel;
      this.nom_gerant = nom_gerant;
      this.numero_gerant = numero_gerant;
      this.id = id;
      this.date_ajout = date_ajout;
    }
  
    // Méthode pour créer un objet Brouillard à partir d'un objet JSON générique
    static fromJson(json: BrouillardJSON): Brouillard {
      return new Brouillard(
        json.depot,
        json.stock_actuel,
        json.nom_gerant,
        json.numero_gerant,
        json.id,
       new Date( json.date_ajout!),
      );
    }
  
    // Méthode pour convertir un objet Brouillard en JSON générique
    toJson(): BrouillardJSON {
      return {
        id: this.id,
        depot: this.depot,
        stock_actuel: this.stock_actuel,
        nom_gerant: this.nom_gerant,
        numero_gerant: this.numero_gerant,
        date_ajout: this.date_ajout != null ? this.date_ajout!.toISOString(): undefined
      };
    }
  }
  
  export default Brouillard