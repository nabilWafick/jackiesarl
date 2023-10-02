// Interface TypeScript pour la table `clients`
interface ClientsJSON {
  id: number;
  nom: string;
  prenoms: string;

  numeroIfu: number;
  numeroTelephone: string;
  email: string | null;
}

class Clients {
  id: number;
  nom: string;
  prenoms: string;
  numeroIfu: number;
  numeroTelephone: string;
  email: string | null;

  constructor(
    id: number,
    nom: string,
    prenoms: string,
    numeroIfu: number,
    numeroTelephone: string,
    email: string | null
  ) {
    this.id = id;
    this.nom = nom;
    this.prenoms = prenoms;
    this.numeroIfu = numeroIfu;
    this.numeroTelephone = numeroTelephone;
    this.email = email;
  }

  // Méthode pour créer un objet Clients à partir d'un objet JSON générique
  static fromJson(json: ClientsJSON): Clients {
    return new Clients(
      json.id,
      json.nom,
      json.prenoms,
      json.numeroIfu,
      json.numeroTelephone,
      json.email
    );
  }

  // Méthode pour convertir un objet Clients en JSON générique
  toJson(): ClientsJSON {
    return {
      id: this.id,
      nom: this.nom,
      prenoms: this.prenoms,
      numeroIfu: this.numeroIfu,
      numeroTelephone: this.numeroTelephone,
      email: this.email,
    };
  }
}

export default Clients;
