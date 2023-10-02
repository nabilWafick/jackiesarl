// Interface TypeScript pour la table `achat_client`
interface AchatClientJSON {
  id?: number;
  quantiteAchetee: number;
  categorie: string;
  montant: number;
  numeroCtp: string;
  bordereau: string;
  numeroBc: string;
  idClient: number;
  dateAchat: string;
}

class AchatClient {
  id?: number;
  quantiteAchetee: number;
  categorie: string;
  montant: number;
  numeroCtp: string;
  bordereau: string;
  numeroBc: string;
  idClient: number;
  dateAchat: Date;

  constructor(
    quantiteAchetee: number,
    categorie: string,
    montant: number,
    numeroCtp: string,
    bordereau: string,
    numeroBc: string,
    idClient: number,
    dateAchat: Date,
    id?: number
  ) {
    this.id = id;
    this.quantiteAchetee = quantiteAchetee;
    this.categorie = categorie;
    this.montant = montant;
    this.numeroCtp = numeroCtp;
    this.bordereau = bordereau;
    this.numeroBc = numeroBc;
    this.idClient = idClient;
    this.dateAchat = dateAchat;
  }

  // Méthode pour créer un objet AchatClient à partir d'un objet JSON générique
  static fromJson(json: AchatClientJSON): AchatClient {
    return new AchatClient(
      json.quantiteAchetee,
      json.categorie,
      json.montant,
      json.numeroCtp,
      json.bordereau,
      json.numeroBc,
      json.idClient,
      new Date(json.dateAchat),
      json.id
    );
  }

  // Méthode pour convertir un objet AchatClient en JSON générique
  toJson(): AchatClientJSON {
    return {
      id: this.id,
      quantiteAchetee: this.quantiteAchetee,
      categorie: this.categorie,
      montant: this.montant,
      numeroCtp: this.numeroCtp,
      bordereau: this.bordereau,
      numeroBc: this.numeroBc,
      idClient: this.idClient,
      dateAchat: this.dateAchat.toISOString(),
    };
  }
}

export default AchatClient;
