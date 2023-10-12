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

interface PaiementClientValidationJSON {
  id?: number;
  montant: number;
  banque: string;
  reference: string;
  categorie: string;
  numero_bc: number;
  bordereau: string;
  est_valide: boolean;
  client: ClientsJSON;
  date_paiement?: string;
}

class PaiementClientValidation {
  id?: number;
  montant: number;
  banque: string;
  reference: string;
  categorie: string;
  numero_bc: number;
  bordereau: string;
  est_valide: boolean;
  client: Clients;
  date_paiement?: Date;

  constructor(
    montant: number,
    banque: string,
    reference: string,
    categorie: string,
    numero_bc: number,
    bordereau: string,
    est_valide: boolean,
    client: Clients,
    id?: number,
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
    this.client = client;
    this.date_paiement = date_paiement;
  }

  static fromJson(
    json: PaiementClientValidationJSON
  ): PaiementClientValidation {
    return new PaiementClientValidation(
      json.montant,
      json.banque,
      json.reference,
      json.categorie,
      json.numero_bc,
      json.bordereau,
      json.est_valide,
      //   json.clientName,
      // json.clientfirstnames,
      Clients.fromJson(json.client),
      json.id,
      new Date(json.date_paiement!)
    );
  }

  // Méthode pour convertir un objet PaiementClientValidation en JSON générique
  toJson(): PaiementClientValidationJSON {
    return {
      id: this.id,
      montant: this.montant,
      banque: this.banque,
      reference: this.reference,
      categorie: this.categorie,
      numero_bc: this.numero_bc,
      bordereau: this.bordereau,
      est_valide: this.est_valide,
      client: this.client.toJson(),
      date_paiement:
        this.date_paiement != null
          ? this.date_paiement.toISOString()
          : undefined,
    };
  }
}

export default PaiementClientValidation;
