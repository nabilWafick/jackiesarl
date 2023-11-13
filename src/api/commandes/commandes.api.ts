import axios from "axios";
import Commandes from "../../models/commandes/commandes.model";
import Employes from "../../models/employes/employes.model";
import JSConstants from "../../utils/constants";

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
  private static baseUrl = JSConstants.API_BASE_URL;

  static async create(
    authenticatedEmployee: Employes,
    data: Commandes
  ): Promise<CommandesPromiseResponse | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: CommandesPromiseResponse | undefined = undefined;
    await axios
      .post(`${CommandesAPI.baseUrl}/commandes`, data.toJson(), {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        promiseResponse = error.response.data;
      });
    return promiseResponse;
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
    authenticatedEmployee: Employes,
    id: number,
    data: Commandes
  ): Promise<CommandesPromiseResponse | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: CommandesPromiseResponse | undefined = undefined;
    await axios
      .put(`${CommandesAPI.baseUrl}/commandes/${id}`, data.toJson(), {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        promiseResponse = error.response.data;
      });
    return promiseResponse;
  }

  static async delete(
    authenticatedEmployee: Employes,
    id: number
  ): Promise<CommandesPromiseResponse | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: CommandesPromiseResponse | undefined = undefined;
    await axios
      .delete(`${CommandesAPI.baseUrl}/commandes/${id}`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        promiseResponse = response;
      })
      .catch((error) => {
        promiseResponse = error.response.data;
      });
    return promiseResponse;
  }
}

export default CommandesAPI;
