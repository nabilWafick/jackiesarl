// Interface TypeScript pour la table `employes`
interface EmployesJSON {
  id?: number;
  nom: string;
  prenoms: string;
  email: string;
  numero_telephone: string;
  password: string;
  role: string;
  permissions?: { [key: string]: boolean };
  token?: string;
  accessToken?: string;
  date_ajout?: string;
}

class Employes {
  id?: number;
  nom: string;
  prenoms: string;
  email: string;
  numero_telephone: string;
  password: string;
  role: string;
  permissions?: { [key: string]: boolean };
  token?: string;
  accessToken?: string;
  date_ajout?: Date;

  constructor(
    nom: string,
    prenoms: string,
    email: string,
    numero_telephone: string,
    password: string,
    role: string,
    id?: number,
    permissions?: { [key: string]: boolean },
    token?: string,
    accessToken?: string,
    date_ajout?: Date
  ) {
    this.id = id;
    this.nom = nom;
    this.prenoms = prenoms;
    this.email = email;
    this.numero_telephone = numero_telephone;
    this.password = password;
    this.role = role;
    this.permissions = permissions;
    this.token = token;
    this.accessToken = accessToken;
    this.date_ajout = date_ajout;
  }

  // Méthode pour créer un objet Employes à partir d'un objet JSON générique
  static fromJson(json: EmployesJSON): Employes {
    return new Employes(
      json.nom,
      json.prenoms,
      json.email,
      json.numero_telephone,
      json.password,
      json.role,
      json.id,
      json.permissions,
      json.token,
      json.accessToken,
      new Date(json.date_ajout!)
    );
  }

  // Méthode pour convertir un objet Employes en JSON générique
  toJson(): EmployesJSON {
    return {
      id: this.id,
      nom: this.nom,
      prenoms: this.prenoms,
      email: this.email,
      numero_telephone: this.numero_telephone,
      password: this.password,
      role: this.role,
      permissions: this.permissions,
      token: this.token,
      accessToken: this.accessToken,
      date_ajout:
        this.date_ajout != null ? this.date_ajout.toISOString() : undefined,
    };
  }
}

export default Employes;
