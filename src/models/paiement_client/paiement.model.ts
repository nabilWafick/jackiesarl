// Interface TypeScript pour la table `paiement_client`

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

interface PaiementClientJSON {
  id?: number;
  client?: ClientsJSON;
  montant: number;
  banque: string;
  reference: string;
  categorie: string;
  numero_bc: number;
  bordereau: string | File;
  est_valide: number;
  id_client: number;
  date_paiement?: string; // Une chaîne de caractères pour la date au format ISO
}

class PaiementClient {
  id?: number;
  client?: Clients;
  montant: number;
  banque: string;
  reference: string;
  categorie: string;
  numero_bc: number;
  bordereau: string | File;
  est_valide: number;
  id_client: number;
  date_paiement?: Date;
  constructor(
    montant: number,
    banque: string,
    reference: string,
    categorie: string,
    numero_bc: number,
    bordereau: string | File,
    est_valide: number,
    id_client: number,
    id?: number,
    client?: Clients,
    date_paiement?: Date
  ) {
    this.id = id;
    this.montant = montant;
    this.banque = banque;
    this.reference = reference;
    this.categorie = categorie;
    this.numero_bc = numero_bc;
    this.bordereau = bordereau;
    this.est_valide = est_valide;
    this.id_client = id_client;
    this.client = client;
    this.date_paiement = date_paiement;
  }

  // Méthode pour créer un objet PaiementClient à partir d'un objet JSON générique
  static fromJson(json: PaiementClientJSON): PaiementClient {
    return new PaiementClient(
      json.montant,
      json.banque,
      json.reference,
      json.categorie,
      json.numero_bc,
      json.bordereau,
      json.est_valide,
      json.id_client,
      json.id,
      json.client ? Clients.fromJson(json.client) : undefined,
      new Date(json.date_paiement!)
    );
  }

  // Méthode pour convertir un objet PaiementClient en JSON générique
  toJson(): PaiementClientJSON {
    return {
      id: this.id,
      montant: this.montant,
      banque: this.banque,
      reference: this.reference,
      categorie: this.categorie,
      numero_bc: this.numero_bc,
      bordereau: this.bordereau,
      est_valide: this.est_valide,
      id_client: this.id_client,
      client: this.client?.toJson(),
      date_paiement:
        this.date_paiement != null
          ? this.date_paiement.toISOString()
          : undefined,
    };
  }
}

export default PaiementClient;
