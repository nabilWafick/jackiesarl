import Clients from "../clients/clients.model";

interface ClientsJSON {
  id?: number;
  nom: string;
  prenoms: string;
  numero_ifu: number;
  numero_telephone: string;
  email: string | null;
  date_ajout?: string;
}

// Interface TypeScript pour la table `achat_client`
interface VenteJSON {
  id?: number;
  quantite_achetee: number;
  categorie: string;
  montant: number;
  numero_ctp: string;
  bordereau: string | File;
  numero_bc: number;
  client: ClientsJSON;
  date_achat?: string;
}

class Vente {
  id?: number;
  quantite_achetee: number;
  categorie: string;
  montant: number;
  numero_ctp: string;
  bordereau: string | File;
  numero_bc: number;
  client: Clients;
  date_achat?: Date;

  constructor(
    quantite_achetee: number,
    categorie: string,
    montant: number,
    numero_ctp: string,
    bordereau: string | File,
    numero_bc: number,
    client: Clients,
    id?: number,
    date_achat?: Date
  ) {
    this.id = id;
    this.quantite_achetee = quantite_achetee;
    this.categorie = categorie;
    this.montant = montant;
    this.numero_ctp = numero_ctp;
    this.bordereau = bordereau;
    this.numero_bc = numero_bc;
    this.client = client;
    this.date_achat = date_achat;
  }

  // Méthode pour créer un objet Vente à partir d'un objet JSON générique
  static fromJson(json: VenteJSON): Vente {
    return new Vente(
      json.quantite_achetee,
      json.categorie,
      json.montant,
      json.numero_ctp,
      json.bordereau,
      json.numero_bc,
      Clients.fromJson(json.client),
      json.id,
      new Date(json.date_achat!)
    );
  }

  // Méthode pour convertir un objet Vente en JSON générique
  toJson(): VenteJSON {
    return {
      id: this.id,
      quantite_achetee: this.quantite_achetee,
      categorie: this.categorie,
      montant: this.montant,
      numero_ctp: this.numero_ctp,
      bordereau: this.bordereau,
      numero_bc: this.numero_bc,
      client: this.client.toJson(),
      date_achat:
        this.date_achat != null ? this.date_achat!.toISOString() : undefined,
    };
  }
}

export default Vente;
