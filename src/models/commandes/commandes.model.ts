// Interface TypeScript pour la table `commandes`
interface CommandesJSON {
  id?: number;
  categorie: string;
  quantite_achetee: number;
  destination: string;
  date_commande: string; // Une chaîne de caractères pour la date au format ISO
  date_livraison: string; // Une chaîne de caractères pour la date de livraison au format ISO
  est_traitee: number;
  id_client: number;
  date_ajout?: string;
}

class Commandes {
  id?: number;
  categorie: string;
  quantite_achetee: number;
  destination: string;
  date_commande: Date;
  date_livraison: Date;
  est_traitee: number;
  id_client: number;
  date_ajout?: Date;

  constructor(
    categorie: string,
    quantite_achetee: number,
    destination: string,
    date_commande: Date,
    date_livraison: Date,
    est_traitee: number,
    id_client: number,
    id?: number,
    date_ajout?: Date
  ) {
    this.categorie = categorie;
    this.quantite_achetee = quantite_achetee;
    this.destination = destination;
    this.date_commande = date_commande;
    this.date_livraison = date_livraison;
    this.est_traitee = est_traitee;
    this.id_client = id_client;
    this.id = id;
    this.date_ajout = date_ajout;
  }

  // Méthode pour créer un objet Commandes à partir d'un objet JSON générique
  static fromJson(json: CommandesJSON): Commandes {
    return new Commandes(
      json.categorie,
      json.quantite_achetee,
      json.destination,
      new Date(json.date_commande),
      new Date(json.date_livraison),
      json.est_traitee,
      json.id_client,
      json.id,
      new Date(json.date_ajout!)
    );
  }

  // Méthode pour convertir un objet Commandes en JSON générique
  toJson(): CommandesJSON {
    return {
      id: this.id,
      categorie: this.categorie,
      quantite_achetee: this.quantite_achetee,
      destination: this.destination,
      date_commande: this.date_commande.toISOString(),
      date_livraison: this.date_livraison.toISOString(),
      est_traitee: this.est_traitee,
      id_client: this.id_client,
      date_ajout:
        this.date_ajout != null ? this.date_ajout.toISOString() : undefined,
    };
  }
}

export default Commandes;
