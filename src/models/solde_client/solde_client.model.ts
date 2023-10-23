// Interface TypeScript pour la table `solde_courant`
interface SoldeClientJSON {
  total_dettes: number;
  total_paiements: number;
  creance: number;
  avance: number;
}

class SoldeClient {
  total_dettes: number;
  total_paiements: number;
  creance: number;
  avance: number;

  constructor(
    total_dettes: number,
    total_paiements: number,
    creance: number,
    avance: number
  ) {
    this.total_dettes = total_dettes;
    this.total_paiements = total_paiements;
    this.creance = creance;
    this.avance = avance;
  }

  // Méthode pour créer un objet SoldeClient à partir d'un objet JSON générique
  static fromJson(json: SoldeClientJSON): SoldeClient {
    return new SoldeClient(
      json.total_dettes,
      json.total_paiements,
      json.creance,
      json.avance
    );
  }

  // Méthode pour convertir un objet SoldeClient en JSON générique
  toJson(): SoldeClientJSON {
    return {
      total_dettes: this.total_dettes,
      total_paiements: this.total_paiements,
      creance: this.creance,
      avance: this.avance,
    };
  }
}

export default SoldeClient;
