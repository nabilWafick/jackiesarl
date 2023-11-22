import AchatClient from "../achat_client/achat_client.model";

type ClientsJSON = {
  id?: number;
  nom: string;
  prenoms: string;
  numero_ifu: number;
  numero_telephone: string;
  email: string | null;
  date_ajout?: string;
};

type AchatClientJSON = {
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
};
type FactureMECEFJSON = {
  id?: number;
  vente?: AchatClientJSON;
  id_achat?: number;
  reference: string;
  fichier?: File | string;
  date_facture: string;
};

class FactureMECEF {
  id?: number;
  vente?: AchatClient;
  id_achat?: number;
  reference: string;
  fichier?: File | string;
  date_facture: Date;

  constructor(
    reference: string,
    date_facture: Date,
    id?: number,
    vente?: AchatClient,
    id_achat?: number,
    fichier?: File | string
  ) {
    this.id = id;
    this.vente = vente;
    this.id_achat = id_achat;
    this.reference = reference;
    this.fichier = fichier;
    this.date_facture = date_facture;
  }

  static fromJson(json: FactureMECEFJSON): FactureMECEF {
    return new FactureMECEF(
      json.reference,
      new Date(json.date_facture),
      json.id,
      AchatClient.fromJson(json.vente!),
      json.id_achat,
      json.fichier
    );
  }

  toJson(): FactureMECEFJSON {
    return {
      id: this.id,
      vente: this.vente?.toJson(),
      id_achat: this.id_achat,
      reference: this.reference,
      fichier: this.fichier,
      date_facture: this.date_facture.toISOString(),
    };
  }
}

export default FactureMECEF;
