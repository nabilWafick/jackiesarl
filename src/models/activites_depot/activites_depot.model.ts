// Interface TypeScript pour la table `activites_depot`
interface ActivitesDepotJSON {
    id: number;
    idDepot: number;
    quantiteAvantVente: number;
    vente: number;
    quantiteActuelle: number;
    versement: number;
    depense: number;
    observation: string;
    dateRemplissage: string; // Une chaîne de caractères pour la date au format ISO
  }
  
  class ActivitesDepot {
    id: number;
    idDepot: number;
    quantiteAvantVente: number;
    vente: number;
    quantiteActuelle: number;
    versement: number;
    depense: number;
    observation: string;
    dateRemplissage: Date;
  
    constructor(
      id: number,
      idDepot: number,
      quantiteAvantVente: number,
      vente: number,
      quantiteActuelle: number,
      versement: number,
      depense: number,
      observation: string,
      dateRemplissage: Date
    ) {
      this.id = id;
      this.idDepot = idDepot;
      this.quantiteAvantVente = quantiteAvantVente;
      this.vente = vente;
      this.quantiteActuelle = quantiteActuelle;
      this.versement = versement;
      this.depense = depense;
      this.observation = observation;
      this.dateRemplissage = dateRemplissage;
    }
  
    // Méthode pour créer un objet ActivitesDepot à partir d'un objet JSON générique
    static fromJson(json: ActivitesDepotJSON): ActivitesDepot {
      return new ActivitesDepot(
        json.id,
        json.idDepot,
        json.quantiteAvantVente,
        json.vente,
        json.quantiteActuelle,
        json.versement,
        json.depense,
        json.observation,
        new Date(json.dateRemplissage)
      );
    }
  
    // Méthode pour convertir un objet ActivitesDepot en JSON générique
    toJson(): ActivitesDepotJSON {
      return {
        id: this.id,
        idDepot: this.idDepot,
        quantiteAvantVente: this.quantiteAvantVente,
        vente: this.vente,
        quantiteActuelle: this.quantiteActuelle,
        versement: this.versement,
        depense: this.depense,
        observation: this.observation,
        dateRemplissage: this.dateRemplissage.toISOString(),
      };
    }
  }
  
  export default ActivitesDepot