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
interface AchatClientJSON {
  id?: number;
  client?: ClientsJSON;
  quantite_achetee: number;
  categorie: string;
  montant: number;
  numero_ctp: string;
  bordereau: File | string;
  numero_bc: number;
  id_client: number;
  date_achat?: string;
}

class AchatClient {
  id?: number;
  client?: Clients;
  quantite_achetee: number;
  categorie: string;
  montant: number;
  numero_ctp: string;
  bordereau: File | string;
  numero_bc: number;
  id_client: number;
  date_achat?: Date;

  constructor(
    quantite_achetee: number,

    categorie: string,
    montant: number,
    numero_ctp: string,
    bordereau: File | string,
    numero_bc: number,
    id_client: number,
    id?: number,
    client?: Clients,
    date_achat?: Date
  ) {
    this.id = id;
    this.quantite_achetee = quantite_achetee;
    this.categorie = categorie;
    this.montant = montant;
    this.numero_ctp = numero_ctp;
    this.bordereau = bordereau;
    this.numero_bc = numero_bc;
    this.id_client = id_client;
    this.client = client;
    this.date_achat = date_achat;
  }

  // Méthode pour créer un objet AchatClient à partir d'un objet JSON générique
  static fromJson(json: AchatClientJSON): AchatClient {
    return new AchatClient(
      json.quantite_achetee,
      json.categorie,
      json.montant,
      json.numero_ctp,
      json.bordereau,
      json.numero_bc,
      json.id_client,
      json.id,
      json.client ? Clients.fromJson(json.client) : undefined,
      new Date(json.date_achat!)
    );
  }

  // Méthode pour convertir un objet AchatClient en JSON générique
  toJson(): AchatClientJSON {
    return {
      id: this.id,
      quantite_achetee: this.quantite_achetee,
      categorie: this.categorie,
      montant: this.montant,
      numero_ctp: this.numero_ctp,
      bordereau: this.bordereau,
      numero_bc: this.numero_bc,
      id_client: this.id_client,
      client: this.client?.toJson(),
      date_achat:
        this.date_achat != null ? this.date_achat!.toISOString() : undefined,
    };
  }
}

export default AchatClient;
