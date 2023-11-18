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

  static async getById(
    authenticatedEmployee: Employes,
    id: number
  ): Promise<Commandes | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let commande: Commandes | undefined;
    await axios
      .get(`${CommandesAPI.baseUrl}/commande/${id}`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        commande = Commandes.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return commande;
  }

  static async getAll(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Commandes[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let commandesList: Commandes[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${CommandesAPI.baseUrl}/commandes-default`, {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        })
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
        `${CommandesAPI.baseUrl}/commandes-default/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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

  static async getAllFromNewToOld(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Commandes[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let commandesList: Commandes[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${CommandesAPI.baseUrl}/commandes/new-to-old`, {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        })
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
        `${CommandesAPI.baseUrl}/commandes/new-to-old/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Commandes[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let commandesList: Commandes[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${CommandesAPI.baseUrl}/commandes/old-to-new`, {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        })
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
        `${CommandesAPI.baseUrl}/commandes/old-to-new/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Commandes[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let commandesList: Commandes[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${CommandesAPI.baseUrl}/commandes/most-important`, {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        })
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
        `${CommandesAPI.baseUrl}/commandes/most-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Commandes[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let commandesList: Commandes[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${CommandesAPI.baseUrl}/commandes/less-important`, {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        })
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
        `${CommandesAPI.baseUrl}/commandes/less-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Commandes[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let commandesList: Commandes[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${CommandesAPI.baseUrl}/commandes/cim-benin-most-important`, {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        })
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
        `${CommandesAPI.baseUrl}/commandes/cim-benin-most-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Commandes[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let commandesList: Commandes[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${CommandesAPI.baseUrl}/commandes/cim-benin-less-important`, {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        })
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
        `${CommandesAPI.baseUrl}/commandes/cim-benin-less-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Commandes[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let commandesList: Commandes[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${CommandesAPI.baseUrl}/commandes/nocibe-most-important`, {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        })
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
        `${CommandesAPI.baseUrl}/commandes/nocibe-most-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Commandes[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let commandesList: Commandes[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${CommandesAPI.baseUrl}/commandes/nocibe-less-important`, {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        })
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
        `${CommandesAPI.baseUrl}/commandes/nocibe-less-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Commandes[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let commandesList: Commandes[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(`${CommandesAPI.baseUrl}/commandes/undelivered`, {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        })
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
        `${CommandesAPI.baseUrl}/commandes/undelivered/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Commandes[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let commandesList: Commandes[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(`${CommandesAPI.baseUrl}/commandes/delivered`, {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        })
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
        `${CommandesAPI.baseUrl}/commandes/delivered/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Commandes[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let commandesList: Commandes[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(`${CommandesAPI.baseUrl}/commandes/destination`, {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        })
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
        `${CommandesAPI.baseUrl}/commandes/destination/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
      .put(`${CommandesAPI.baseUrl}/commandes/${id}`, data, {
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
