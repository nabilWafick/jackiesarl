// Interface TypeScript pour la table `clients`
interface ClientsJSON {
  id?: number;
  nom: string;
  prenoms: string;
  numero_ifu: number;
  numero_telephone: string;
  email: string | null;
  date_ajout?: string;
}

class Clients {
  id?: number;
  nom: string;
  prenoms: string;
  numero_ifu: number;
  numero_telephone: string;
  email: string | null;
  date_ajout?: Date;

  constructor(
    nom: string,
    prenoms: string,
    numero_ifu: number,
    numero_telephone: string,
    email: string | null,
    id?: number,
    date_ajout?: Date
  ) {
    this.nom = nom;
    this.prenoms = prenoms;
    this.numero_ifu = numero_ifu;
    this.numero_telephone = numero_telephone;
    this.email = email;
    this.id = id;
    this.date_ajout = date_ajout;
  }

  *[Symbol.iterator]() {
    yield this.nom;
    yield this.prenoms;
    yield this.numero_ifu;
    yield this.numero_telephone;
    yield this.email;
    yield this.id;
    yield this.date_ajout;
  }

  // Méthode pour créer un objet Clients à partir d'un objet JSON générique
  static fromJson(json: ClientsJSON): Clients {
    return new Clients(
      json.nom,
      json.prenoms,
      json.numero_ifu,
      json.numero_telephone,
      json.email,
      json.id,
      new Date(json.date_ajout!)
    );
  }

  // Méthode pour convertir un objet Clients en JSON générique
  toJson(): ClientsJSON {
    return {
      id: this.id,
      nom: this.nom,
      prenoms: this.prenoms,
      numero_ifu: this.numero_ifu,
      numero_telephone: this.numero_telephone,
      email: this.email,
      date_ajout:
        this.date_ajout != null ? this.date_ajout!.toISOString() : undefined,
    };
  }
}

export default Clients;
