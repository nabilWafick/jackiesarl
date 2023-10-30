import axios from "axios";
import Commandes from "../../models/commandes/commandes.model";

interface CommandesPromiseResponse {
  status: number;
  commande?: Commandes;
  error?: string;
}

interface CommandesJSON {
  id?: number;
  categorie: string;
  quantite_achetee: number;
  destination: string;
  date_commande: string;
  date_livraison: string;
  est_traitee: number;
  id_client: number;
  date_ajout: string;
}

class CommandesAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(
    data: Commandes
  ): Promise<CommandesPromiseResponse | undefined> {
    let prromiseResponse: CommandesPromiseResponse | undefined = undefined;
    await axios
      .post(`${CommandesAPI.baseUrl}/commandes`, data.toJson())
      .then((response) => {
        prromiseResponse = response.data;
      })
      .catch((error) => {
        prromiseResponse = error.response.data;
      });
    return prromiseResponse;
  }

  static async getById(id: number): Promise<Commandes | undefined> {
    let commande: Commandes | undefined;
    await axios
      .get(`${CommandesAPI.baseUrl}/commande/${id}`)
      .then((response) => {
        commande = Commandes.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return commande;
  }

  static async getAll(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Commandes[]> {
    let commandesList: Commandes[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${CommandesAPI.baseUrl}/commandes-default`)
        .then((response) => {
          commandesList = response.data.map((commande: CommandesJSON) =>
            Commandes.fromJson(commande)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as Commandes[];
        });
      return commandesList;
    }

    await axios
      .get(`${CommandesAPI.baseUrl}/commandes-default/${startDate}/${endDate}`)
      .then((response) => {
        commandesList = response.data.map((commande: CommandesJSON) =>
          Commandes.fromJson(commande)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as Commandes[];
      });
    return commandesList;
  }

  static async getAllFromNewToOld(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Commandes[]> {
    let commandesList: Commandes[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${CommandesAPI.baseUrl}/commandes/new-to-old`)
        .then((response) => {
          commandesList = response.data.map((commande: CommandesJSON) =>
            Commandes.fromJson(commande)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as Commandes[];
        });
      return commandesList;
    }

    await axios
      .get(
        `${CommandesAPI.baseUrl}/commandes/new-to-old/${startDate}/${endDate}`
      )
      .then((response) => {
        commandesList = response.data.map((commande: CommandesJSON) =>
          Commandes.fromJson(commande)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as Commandes[];
      });
    return commandesList;
  }

  static async getAllFromOldToNew(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Commandes[]> {
    let commandesList: Commandes[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${CommandesAPI.baseUrl}/commandes/old-to-new`)
        .then((response) => {
          commandesList = response.data.map((commande: CommandesJSON) =>
            Commandes.fromJson(commande)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as Commandes[];
        });
      return commandesList;
    }

    await axios
      .get(
        `${CommandesAPI.baseUrl}/commandes/old-to-new/${startDate}/${endDate}`
      )
      .then((response) => {
        commandesList = response.data.map((commande: CommandesJSON) =>
          Commandes.fromJson(commande)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as Commandes[];
      });
    return commandesList;
  }

  static async getAllMostImportant(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Commandes[]> {
    let commandesList: Commandes[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${CommandesAPI.baseUrl}/commandes/most-important`)
        .then((response) => {
          commandesList = response.data.map((commande: CommandesJSON) =>
            Commandes.fromJson(commande)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as Commandes[];
        });
      return commandesList;
    }

    await axios
      .get(
        `${CommandesAPI.baseUrl}/commandes/most-important/${startDate}/${endDate}`
      )
      .then((response) => {
        commandesList = response.data.map((commande: CommandesJSON) =>
          Commandes.fromJson(commande)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as Commandes[];
      });
    return commandesList;
  }

  static async getAllLessImportant(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Commandes[]> {
    let commandesList: Commandes[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${CommandesAPI.baseUrl}/commandes/less-important`)
        .then((response) => {
          commandesList = response.data.map((commande: CommandesJSON) =>
            Commandes.fromJson(commande)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as Commandes[];
        });
      return commandesList;
    }

    await axios
      .get(
        `${CommandesAPI.baseUrl}/commandes/less-important/${startDate}/${endDate}`
      )
      .then((response) => {
        commandesList = response.data.map((commande: CommandesJSON) =>
          Commandes.fromJson(commande)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as Commandes[];
      });
    return commandesList;
  }

  static async getAllCIMBENINMostImportant(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Commandes[]> {
    let commandesList: Commandes[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${CommandesAPI.baseUrl}/commandes/cim-benin-most-important`)
        .then((response) => {
          commandesList = response.data.map((commande: CommandesJSON) =>
            Commandes.fromJson(commande)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as Commandes[];
        });
      return commandesList;
    }

    await axios
      .get(
        `${CommandesAPI.baseUrl}/commandes/cim-benin-most-important/${startDate}/${endDate}`
      )
      .then((response) => {
        commandesList = response.data.map((commande: CommandesJSON) =>
          Commandes.fromJson(commande)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as Commandes[];
      });
    return commandesList;
  }

  static async getAllCIMBENINLessImportant(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Commandes[]> {
    let commandesList: Commandes[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${CommandesAPI.baseUrl}/commandes/cim-benin-less-important`)
        .then((response) => {
          commandesList = response.data.map((commande: CommandesJSON) =>
            Commandes.fromJson(commande)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as Commandes[];
        });
      return commandesList;
    }

    await axios
      .get(
        `${CommandesAPI.baseUrl}/commandes/cim-benin-less-important/${startDate}/${endDate}`
      )
      .then((response) => {
        commandesList = response.data.map((commande: CommandesJSON) =>
          Commandes.fromJson(commande)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as Commandes[];
      });
    return commandesList;
  }

  static async getAllNOCIBEMostImportant(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Commandes[]> {
    let commandesList: Commandes[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${CommandesAPI.baseUrl}/commandes/nocibe-most-important`)
        .then((response) => {
          commandesList = response.data.map((commande: CommandesJSON) =>
            Commandes.fromJson(commande)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as Commandes[];
        });
      return commandesList;
    }

    await axios
      .get(
        `${CommandesAPI.baseUrl}/commandes/nocibe-most-important/${startDate}/${endDate}`
      )
      .then((response) => {
        commandesList = response.data.map((commande: CommandesJSON) =>
          Commandes.fromJson(commande)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as Commandes[];
      });
    return commandesList;
  }

  static async getAllNOCIBELessImportant(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Commandes[]> {
    let commandesList: Commandes[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${CommandesAPI.baseUrl}/commandes/nocibe-less-important`)
        .then((response) => {
          commandesList = response.data.map((commande: CommandesJSON) =>
            Commandes.fromJson(commande)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as Commandes[];
        });
      return commandesList;
    }

    await axios
      .get(
        `${CommandesAPI.baseUrl}/commandes/nocibe-less-important/${startDate}/${endDate}`
      )
      .then((response) => {
        commandesList = response.data.map((commande: CommandesJSON) =>
          Commandes.fromJson(commande)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as Commandes[];
      });
    return commandesList;
  }

  static async getAllUndelivered(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Commandes[]> {
    let commandesList: Commandes[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(`${CommandesAPI.baseUrl}/commandes/undelivered`)
        .then((response) => {
          commandesList = response.data.map((commande: CommandesJSON) => {
            return Commandes.fromJson(commande);
          });
        })
        .catch((error) => {
          console.log(error);
          return [] as Commandes[];
        });
      return commandesList;
    }

    await axios
      .get(
        `${CommandesAPI.baseUrl}/commandes/undelivered/${startDate}/${endDate}`
      )
      .then((response) => {
        commandesList = response.data.map((commande: CommandesJSON) => {
          return Commandes.fromJson(commande);
        });
      })
      .catch((error) => {
        console.log(error);
        return [] as Commandes[];
      });
    return commandesList;
  }

  static async getAllDelivered(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Commandes[]> {
    let commandesList: Commandes[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(`${CommandesAPI.baseUrl}/commandes/delivered`)
        .then((response) => {
          commandesList = response.data.map((commande: CommandesJSON) => {
            return Commandes.fromJson(commande);
          });
        })
        .catch((error) => {
          console.log(error);
          return [] as Commandes[];
        });
      return commandesList;
    }

    await axios
      .get(
        `${CommandesAPI.baseUrl}/commandes/delivered/${startDate}/${endDate}`
      )
      .then((response) => {
        commandesList = response.data.map((commande: CommandesJSON) => {
          return Commandes.fromJson(commande);
        });
      })
      .catch((error) => {
        console.log(error);
        return [] as Commandes[];
      });
    return commandesList;
  }

  static async getAllGroupByDestination(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Commandes[]> {
    let commandesList: Commandes[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(`${CommandesAPI.baseUrl}/commandes/destination`)
        .then((response) => {
          commandesList = response.data.map((commande: CommandesJSON) => {
            return Commandes.fromJson(commande);
          });
        })
        .catch((error) => {
          console.log(error);
          return [] as Commandes[];
        });
      return commandesList;
    }

    await axios
      .get(
        `${CommandesAPI.baseUrl}/commandes/destination/${startDate}/${endDate}`
      )
      .then((response) => {
        commandesList = response.data.map((commande: CommandesJSON) => {
          return Commandes.fromJson(commande);
        });
      })
      .catch((error) => {
        console.log(error);
        return [] as Commandes[];
      });
    return commandesList;
  }

  static async update(
    id: number,
    data: Commandes
  ): Promise<CommandesPromiseResponse | undefined> {
    let prromiseResponse: CommandesPromiseResponse | undefined = undefined;
    await axios
      .put(`${CommandesAPI.baseUrl}/commandes/${id}`, data.toJson())
      .then((response) => {
        prromiseResponse = response.data;
      })
      .catch((error) => {
        prromiseResponse = error.response.data;
      });
    return prromiseResponse;
  }

  static async delete(
    id: number
  ): Promise<CommandesPromiseResponse | undefined> {
    let prromiseResponse: CommandesPromiseResponse | undefined = undefined;
    await axios
      .delete(`${CommandesAPI.baseUrl}/commandes/${id}`)
      .then((response) => {
        prromiseResponse = response;
      })
      .catch((error) => {
        prromiseResponse = error.response.data;
      });
    return prromiseResponse;
  }
}

export default CommandesAPI;
