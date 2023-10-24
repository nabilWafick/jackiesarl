import Clients from "../clients/clients.model";

// Interface TypeScript pour la table `solde_courant`
interface ClientsJSON {
  id?: number;
  nom: string;
  prenoms: string;
  numero_ifu: number;
  numero_telephone: string;
  email: string | null;
  date_ajout?: string;
}
interface SoldeClientJSON {
  client?: ClientsJSON;
  total_dettes_mois: number;
  total_paiements_mois: number;
  total_dettes_global: number;
  total_paiements_global: number;
  avance: number;
  creance: number;
  total_dettes_mois_CIMBENIN: number;
  total_dettes_mois_NOCIBE: number;
  total_paiements_mois_CIMBENIN: number;
  total_paiements_mois_NOCIBE: number;
  total_dettes_global_CIMBENIN: number;
  total_dettes_global_NOCIBE: number;
  total_paiements_global_CIMBENIN: number;
  total_paiements_global_NOCIBE: number;
  avance_CIMBENIN: number;
  avance_NOCIBE: number;
  creance_CIMBENIN: number;
  creance_NOCIBE: number;
  total_avance_CIMBENIN: number;
  total_avance_NOCIBE: number;
  total_creance_CIMBENIN: number;
  total_creance_NOCIBE: number;
  total_avance_clients: number;
  total_creance_clients: number;
  pourcentage_avance_client: number;
  pourcentage_creance_client: number;
}

class SoldeClient {
  client?: Clients;
  total_dettes_mois: number;
  total_paiements_mois: number;
  total_dettes_global: number;
  total_paiements_global: number;
  avance: number;
  creance: number;
  total_dettes_mois_CIMBENIN: number;
  total_dettes_mois_NOCIBE: number;
  total_paiements_mois_CIMBENIN: number;
  total_paiements_mois_NOCIBE: number;
  total_dettes_global_CIMBENIN: number;
  total_dettes_global_NOCIBE: number;
  total_paiements_global_CIMBENIN: number;
  total_paiements_global_NOCIBE: number;
  avance_CIMBENIN: number;
  avance_NOCIBE: number;
  creance_CIMBENIN: number;
  creance_NOCIBE: number;
  total_avance_CIMBENIN: number;
  total_avance_NOCIBE: number;
  total_creance_CIMBENIN: number;
  total_creance_NOCIBE: number;
  total_avance_clients: number;
  total_creance_clients: number;
  pourcentage_avance_client: number;
  pourcentage_creance_client: number;

  constructor(
    total_dettes_mois: number,
    total_paiements_mois: number,
    total_dettes_global: number,
    total_paiements_global: number,
    avance: number,
    creance: number,
    total_dettes_mois_CIMBENIN: number,
    total_dettes_mois_NOCIBE: number,
    total_paiements_mois_CIMBENIN: number,
    total_paiements_mois_NOCIBE: number,
    total_dettes_global_CIMBENIN: number,
    total_dettes_global_NOCIBE: number,
    total_paiements_global_CIMBENIN: number,
    total_paiements_global_NOCIBE: number,
    avance_CIMBENIN: number,
    avance_NOCIBE: number,
    creance_CIMBENIN: number,
    creance_NOCIBE: number,
    total_avance_CIMBENIN: number,
    total_avance_NOCIBE: number,
    total_creance_CIMBENIN: number,
    total_creance_NOCIBE: number,
    total_avance_clients: number,
    total_creance_clients: number,
    pourcentage_avance_client: number,
    pourcentage_creance_client: number,
    client?: Clients
  ) {
    this.client = client;
    this.total_dettes_mois = total_dettes_mois;
    this.total_paiements_mois = total_paiements_mois;
    this.total_dettes_global = total_dettes_global;
    this.total_paiements_global = total_paiements_global;
    this.avance = avance;
    this.creance = creance;
    this.total_dettes_mois_CIMBENIN = total_dettes_mois_CIMBENIN;
    this.total_dettes_mois_NOCIBE = total_dettes_mois_NOCIBE;
    this.total_paiements_mois_CIMBENIN = total_paiements_mois_CIMBENIN;
    this.total_paiements_mois_NOCIBE = total_paiements_mois_NOCIBE;
    this.total_dettes_global_CIMBENIN = total_dettes_global_CIMBENIN;
    this.total_dettes_global_NOCIBE = total_dettes_global_NOCIBE;
    this.total_paiements_global_CIMBENIN = total_paiements_global_CIMBENIN;
    this.total_paiements_global_NOCIBE = total_paiements_global_NOCIBE;
    this.avance_CIMBENIN = avance_CIMBENIN;
    this.avance_NOCIBE = avance_NOCIBE;
    this.creance_CIMBENIN = creance_CIMBENIN;
    this.creance_NOCIBE = creance_NOCIBE;
    this.total_avance_CIMBENIN = total_avance_CIMBENIN;
    this.total_avance_NOCIBE = total_avance_NOCIBE;
    this.total_creance_CIMBENIN = total_creance_CIMBENIN;
    this.total_creance_NOCIBE = total_creance_NOCIBE;
    this.total_avance_clients = total_avance_clients;
    this.total_creance_clients = total_creance_clients;
    this.pourcentage_avance_client = pourcentage_avance_client;
    this.pourcentage_creance_client = pourcentage_creance_client;
  }

  // Méthode pour créer un objet SoldeClient à partir d'un objet JSON générique
  static fromJson(json: SoldeClientJSON): SoldeClient {
    return new SoldeClient(
      json.total_dettes_mois,
      json.total_paiements_mois,
      json.total_dettes_global,
      json.total_paiements_global,
      json.avance,
      json.creance,
      json.total_dettes_mois_CIMBENIN,
      json.total_dettes_mois_NOCIBE,
      json.total_paiements_mois_CIMBENIN,
      json.total_paiements_mois_NOCIBE,
      json.total_dettes_global_CIMBENIN,
      json.total_dettes_global_NOCIBE,
      json.total_paiements_global_CIMBENIN,
      json.total_paiements_global_NOCIBE,
      json.avance_CIMBENIN,
      json.avance_NOCIBE,
      json.creance_CIMBENIN,
      json.creance_NOCIBE,
      json.total_avance_CIMBENIN,
      json.total_avance_NOCIBE,
      json.total_creance_CIMBENIN,
      json.total_creance_NOCIBE,
      json.total_avance_clients,
      json.total_creance_clients,
      json.pourcentage_avance_client,
      json.pourcentage_creance_client,
      json.client ? Clients.fromJson(json.client!) : undefined
    );
  }

  // Méthode pour convertir un objet SoldeClient en JSON générique
  toJson(): SoldeClientJSON {
    return {
      client: this.client?.toJson(),
      total_dettes_mois: this.total_dettes_mois,
      total_paiements_mois: this.total_paiements_mois,
      total_dettes_global: this.total_dettes_global,
      total_paiements_global: this.total_paiements_global,
      avance: this.avance,
      creance: this.creance,
      total_dettes_mois_CIMBENIN: this.total_dettes_mois_CIMBENIN,
      total_dettes_mois_NOCIBE: this.total_dettes_mois_NOCIBE,
      total_paiements_mois_CIMBENIN: this.total_paiements_mois_CIMBENIN,
      total_paiements_mois_NOCIBE: this.total_paiements_mois_NOCIBE,
      total_dettes_global_CIMBENIN: this.total_dettes_global_CIMBENIN,
      total_dettes_global_NOCIBE: this.total_dettes_global_NOCIBE,
      total_paiements_global_CIMBENIN: this.total_paiements_global_CIMBENIN,
      total_paiements_global_NOCIBE: this.total_paiements_global_NOCIBE,
      avance_CIMBENIN: this.avance_CIMBENIN,
      avance_NOCIBE: this.avance_CIMBENIN,
      creance_CIMBENIN: this.creance_CIMBENIN,
      creance_NOCIBE: this.creance_NOCIBE,
      total_avance_CIMBENIN: this.total_avance_CIMBENIN,
      total_avance_NOCIBE: this.total_avance_NOCIBE,
      total_creance_CIMBENIN: this.total_creance_CIMBENIN,
      total_creance_NOCIBE: this.total_creance_CIMBENIN,
      total_avance_clients: this.total_avance_clients,
      total_creance_clients: this.total_creance_clients,
      pourcentage_avance_client: this.pourcentage_avance_client,
      pourcentage_creance_client: this.pourcentage_creance_client,
    };
  }
}

export default SoldeClient;
