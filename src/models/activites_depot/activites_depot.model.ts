// Interface TypeScript pour la table `activites_depot`
interface ActivitesDepotJSON {
    id?: number;
    id_depot: number;
    quantite_avant_vente: number;
    vente: number;
    quantite_apres_vente: number;
    versement: number;
    depense: number;
    observation: string;
    date_remplissage?: string; // Une chaîne de caractères pour la date au format ISO
  }
  
  class ActivitesDepot {
    id?: number;
    id_depot: number;
    quantite_avant_vente: number;
    vente: number;
    quantite_apres_vente: number;
    versement: number;
    depense: number;
    observation: string;
    date_remplissage?: Date;
  
    constructor(
      
      id_depot: number,
      quantite_avant_vente: number,
      vente: number,
      quantite_apres_vente: number,
      versement: number,
      depense: number,
      observation: string,
      id?: number,
      date_remplissage?: Date
    ) {
     
      this.id_depot = id_depot;
      this.quantite_avant_vente = quantite_avant_vente;
      this.vente = vente;
      this.quantite_apres_vente = quantite_apres_vente;
      this.versement = versement;
      this.depense = depense;
      this.observation = observation;
      this.id = id;
      this.date_remplissage = date_remplissage;
    }
  
    // Méthode pour créer un objet ActivitesDepot à partir d'un objet JSON générique
    static fromJson(json: ActivitesDepotJSON): ActivitesDepot {
      return new ActivitesDepot(
        
        json.id_depot,
        json.quantite_avant_vente,
        json.vente,
        json.quantite_apres_vente,
        json.versement,
        json.depense,
        json.observation,
        json.id,
        new Date(json.date_remplissage!)
      );
    }
  
    // Méthode pour convertir un objet ActivitesDepot en JSON générique
    toJson(): ActivitesDepotJSON {
      return {
        id: this.id,
        id_depot: this.id_depot,
        quantite_avant_vente: this.quantite_avant_vente,
        vente: this.vente,
        quantite_apres_vente: this.quantite_apres_vente,
        versement: this.versement,
        depense: this.depense,
        observation: this.observation,
        date_remplissage:this.date_remplissage != null ? this.date_remplissage!.toISOString() : undefined,
      };
    }
  }
  
  export default ActivitesDepot