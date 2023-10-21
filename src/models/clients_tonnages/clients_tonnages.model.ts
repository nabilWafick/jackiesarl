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

interface ClientsTonnagesJSON {
  client: ClientsJSON;
  tonnage_CIMBENIN: number;
  tonnage_NOCIBE: number;
  pourcentage_achat: number;
}

class ClientsTonnages {
  client: Clients;
  tonnage_CIMBENIN: number;
  tonnage_NOCIBE: number;
  pourcentage_achat: number;

  constructor(
    client: Clients,
    tonnage_CIMBENIN: number,
    tonnage_NOCIBE: number,
    pourcentage_achat: number
  ) {
    this.client = client;

    (this.tonnage_CIMBENIN = tonnage_CIMBENIN),
      (this.tonnage_NOCIBE = tonnage_NOCIBE),
      (this.pourcentage_achat = pourcentage_achat);
  }

  static fromJson(json: ClientsTonnagesJSON): ClientsTonnages {
    return new ClientsTonnages(
      Clients.fromJson(json.client),
      json.tonnage_CIMBENIN,
      json.tonnage_NOCIBE,
      json.pourcentage_achat
    );
  }

  toJson(): ClientsTonnagesJSON {
    return {
      client: this.client.toJson(),
      tonnage_CIMBENIN: this.tonnage_CIMBENIN,
      tonnage_NOCIBE: this.tonnage_NOCIBE,
      pourcentage_achat: this.pourcentage_achat,
    };
  }
}

export default ClientsTonnages;
