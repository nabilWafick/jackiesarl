// Interface TypeScript pour la table `commandes`
interface CommandesJSON {
    id: number;
    categorie: string;
    quantiteAchetee: number;
    destination: number;
    dateCommande: string; // Une chaîne de caractères pour la date au format ISO
    dateLivraison: string; // Une chaîne de caractères pour la date de livraison au format ISO
    estTraitee: boolean;
    idClient: number;
  }


  class Commandes {
    id: number;
    categorie: string;
    quantiteAchetee: number;
    destination: number;
    dateCommande: Date;
    dateLivraison: Date;
    estTraitee: boolean;
    idClient: number;
  
    constructor(
      id: number,
      categorie: string,
      quantiteAchetee: number,
      destination: number,
      dateCommande: Date,
      dateLivraison: Date,
      estTraitee: boolean,
      idClient: number
    ) {
      this.id = id;
      this.categorie = categorie;
      this.quantiteAchetee = quantiteAchetee;
      this.destination = destination;
      this.dateCommande = dateCommande;
      this.dateLivraison = dateLivraison;
      this.estTraitee = estTraitee;
      this.idClient = idClient;
    }
  
    // Méthode pour créer un objet Commandes à partir d'un objet JSON générique
    static fromJson(json: CommandesJSON): Commandes {
      return new Commandes(
        json.id,
        json.categorie,
        json.quantiteAchetee,
        json.destination,
        new Date(json.dateCommande),
        new Date(json.dateLivraison),
        json.estTraitee,
        json.idClient
      );
    }
  
    // Méthode pour convertir un objet Commandes en JSON générique
    toJson(): CommandesJSON {
      return {
        id: this.id,
        categorie: this.categorie,
        quantiteAchetee: this.quantiteAchetee,
        destination: this.destination,
        dateCommande: this.dateCommande.toISOString(),
        dateLivraison: this.dateLivraison.toISOString(),
        estTraitee: this.estTraitee,
        idClient: this.idClient,
      };
    }
  }
  
  export default Commandes