// Interface TypeScript pour la table `employes`
interface EmployesJSON {
    id?: number;
    nom: string;
    prenoms: string;
    email: string;
    password: string;
    role: string;
    token?: string;
  }
  
  class Employes {
    id?: number;
    nom: string;
    prenoms: string;
    email: string;
    password: string;
    role: string;
    token?: string;
  
    constructor(
     
      nom: string,
      prenoms: string,
      email: string,
      password: string,
      role: string,
      id?: number,
      token?: string,
     
    ) {
      this.id = id;
      this.nom = nom;
      this.prenoms = prenoms;
      this.email = email;
      this.password = password;
      this.role = role;
      this.token = token;
    }
  
    // Méthode pour créer un objet Employes à partir d'un objet JSON générique
    static fromJson(json: EmployesJSON): Employes {
      return new Employes(
      
        json.nom,
        json.prenoms,
        json.email,
        json.password,
        json.role,
        json.id,
        json.token
      );
    }
  
    // Méthode pour convertir un objet Employes en JSON générique
    toJson(): EmployesJSON {
      return {
        id: this.id,
        nom: this.nom,
        prenoms: this.prenoms,
        email: this.email,
        password: this.password,
        role: this.role,
        token: this.token,
      };
    }
  }
  


  export default Employes