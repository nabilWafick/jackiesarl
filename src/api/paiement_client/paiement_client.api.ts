import axios from "axios";
import PaiementClient from "../../models/paiement_client/paiement.model";
import Employes from "../../models/employes/employes.model";
import JSConstants from "../../utils/constants";

interface PaiementClientPromiseResponse {
  status: number;
  paiementClient?: PaiementClient;
  error?: string;
}

interface PaiementClientJSON {
  id?: number;
  montant: number;
  banque: string;
  reference: string;
  categorie: string;
  numero_bc: number;
  bordereau: string;
  est_valide: number;
  id_client: number;
  date_paiement?: string;
}

class PaiementClientAPI {
  private static baseUrl = JSConstants.API_BASE_URL;

  static async create(
    authenticatedEmployee: Employes,
    data: PaiementClient
  ): Promise<PaiementClientPromiseResponse | undefined> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: PaiementClientPromiseResponse | undefined = undefined;
    await axios
      .post(`${PaiementClientAPI.baseUrl}/paiement-client`, data.toJson(), {
        headers: {
          "Content-Type": "multipart/form-data", // Important : spécifiez le type de contenu
          "authorization-token": `Bearer ${token}`,
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
  ): Promise<PaiementClient | undefined> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let paiementClient: PaiementClient | undefined;
    await axios
      .get(`${PaiementClientAPI.baseUrl}/paiement-client/${id}`, {
        headers: {
          "authorization-token": `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        paiementClient = PaiementClient.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return paiementClient;
  }

  static async getAll(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<PaiementClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let paiementsClientList: PaiementClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${PaiementClientAPI.baseUrl}/paiements-clients-default`, {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        })
        .then((response) => {
          paiementsClientList = response.data.map(
            (paiementClient: PaiementClientJSON) =>
              PaiementClient.fromJson(paiementClient)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as PaiementClient[];
        });
      return paiementsClientList;
    }

    await axios
      .get(
        `${PaiementClientAPI.baseUrl}/paiements-clients-default/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        paiementsClientList = response.data.map(
          (paiementClient: PaiementClientJSON) =>
            PaiementClient.fromJson(paiementClient)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as PaiementClient[];
      });
    return paiementsClientList;
  }

  static async getAllFromNewToOld(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<PaiementClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let paiementsClientList: PaiementClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${PaiementClientAPI.baseUrl}/paiements-clients/new-to-old`, {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        })
        .then((response) => {
          paiementsClientList = response.data.map(
            (paiementClient: PaiementClientJSON) =>
              PaiementClient.fromJson(paiementClient)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as PaiementClient[];
        });
      return paiementsClientList;
    }

    await axios
      .get(
        `${PaiementClientAPI.baseUrl}/paiements-clients/new-to-old/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        paiementsClientList = response.data.map(
          (paiementClient: PaiementClientJSON) =>
            PaiementClient.fromJson(paiementClient)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as PaiementClient[];
      });
    return paiementsClientList;
  }

  static async getAllFromOldToNew(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<PaiementClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let paiementsClientList: PaiementClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${PaiementClientAPI.baseUrl}/paiements-clients/old-to-new`, {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        })
        .then((response) => {
          paiementsClientList = response.data.map(
            (paiementClient: PaiementClientJSON) =>
              PaiementClient.fromJson(paiementClient)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as PaiementClient[];
        });
      return paiementsClientList;
    }

    await axios
      .get(
        `${PaiementClientAPI.baseUrl}/paiements-clients/old-to-new/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        paiementsClientList = response.data.map(
          (paiementClient: PaiementClientJSON) =>
            PaiementClient.fromJson(paiementClient)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as PaiementClient[];
      });
    return paiementsClientList;
  }

  static async getAllMostImportant(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<PaiementClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let paiementsClientList: PaiementClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${PaiementClientAPI.baseUrl}/paiements-clients/most-important`, {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        })
        .then((response) => {
          paiementsClientList = response.data.map(
            (paiementClient: PaiementClientJSON) =>
              PaiementClient.fromJson(paiementClient)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as PaiementClient[];
        });
      return paiementsClientList;
    }

    await axios
      .get(
        `${PaiementClientAPI.baseUrl}/paiements-clients/most-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        paiementsClientList = response.data.map(
          (paiementClient: PaiementClientJSON) =>
            PaiementClient.fromJson(paiementClient)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as PaiementClient[];
      });
    return paiementsClientList;
  }

  static async getAllLessImportant(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<PaiementClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let paiementsClientList: PaiementClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${PaiementClientAPI.baseUrl}/paiements-clients/less-important`, {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        })
        .then((response) => {
          paiementsClientList = response.data.map(
            (paiementClient: PaiementClientJSON) =>
              PaiementClient.fromJson(paiementClient)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as PaiementClient[];
        });
      return paiementsClientList;
    }

    await axios
      .get(
        `${PaiementClientAPI.baseUrl}/paiements-clients/less-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        paiementsClientList = response.data.map(
          (paiementClient: PaiementClientJSON) =>
            PaiementClient.fromJson(paiementClient)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as PaiementClient[];
      });
    return paiementsClientList;
  }

  static async getAllCIMBENINMostImportant(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<PaiementClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let paiementsClientList: PaiementClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-clients/cim-benin-most-important`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          paiementsClientList = response.data.map(
            (paiementClient: PaiementClientJSON) =>
              PaiementClient.fromJson(paiementClient)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as PaiementClient[];
        });
      return paiementsClientList;
    }

    await axios
      .get(
        `${PaiementClientAPI.baseUrl}/paiements-clients/cim-benin-most-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        paiementsClientList = response.data.map(
          (paiementClient: PaiementClientJSON) =>
            PaiementClient.fromJson(paiementClient)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as PaiementClient[];
      });
    return paiementsClientList;
  }

  static async getAllCIMBENINLessImportant(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<PaiementClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let paiementsClientList: PaiementClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-clients/cim-benin-less-important`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          paiementsClientList = response.data.map(
            (paiementClient: PaiementClientJSON) =>
              PaiementClient.fromJson(paiementClient)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as PaiementClient[];
        });
      return paiementsClientList;
    }

    await axios
      .get(
        `${PaiementClientAPI.baseUrl}/paiements-clients/cim-benin-less-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        paiementsClientList = response.data.map(
          (paiementClient: PaiementClientJSON) =>
            PaiementClient.fromJson(paiementClient)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as PaiementClient[];
      });
    return paiementsClientList;
  }

  static async getAllNOCIBEMostImportant(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<PaiementClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let paiementsClientList: PaiementClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-clients/nocibe-most-important`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          paiementsClientList = response.data.map(
            (paiementClient: PaiementClientJSON) =>
              PaiementClient.fromJson(paiementClient)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as PaiementClient[];
        });
      return paiementsClientList;
    }

    await axios
      .get(
        `${PaiementClientAPI.baseUrl}/paiements-clients/nocibe-most-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        paiementsClientList = response.data.map(
          (paiementClient: PaiementClientJSON) =>
            PaiementClient.fromJson(paiementClient)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as PaiementClient[];
      });
    return paiementsClientList;
  }

  static async getAllNOCIBELessImportant(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<PaiementClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let paiementsClientList: PaiementClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-clients/nocibe-less-important`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          paiementsClientList = response.data.map(
            (paiementClient: PaiementClientJSON) =>
              PaiementClient.fromJson(paiementClient)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as PaiementClient[];
        });
      return paiementsClientList;
    }

    await axios
      .get(
        `${PaiementClientAPI.baseUrl}/paiements-clients/nocibe-less-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        paiementsClientList = response.data.map(
          (paiementClient: PaiementClientJSON) =>
            PaiementClient.fromJson(paiementClient)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as PaiementClient[];
      });
    return paiementsClientList;
  }

  static async getAllUnvalidated(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<PaiementClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(`${PaiementClientAPI.baseUrl}/paiements-clients/unvalidated`, {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        })
        .then((response) => {
          paiementsClientList = response.data.map(
            (paiementClient: PaiementClientJSON) => {
              return PaiementClient.fromJson(paiementClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as PaiementClient[];
        });
      return paiementsClientList;
    }

    await axios
      .get(
        `${PaiementClientAPI.baseUrl}/paiements-clients/unvalidated/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        paiementsClientList = response.data.map(
          (paiementClient: PaiementClientJSON) => {
            return PaiementClient.fromJson(paiementClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as PaiementClient[];
      });
    return paiementsClientList;
  }

  static async getAllValidated(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<PaiementClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(`${PaiementClientAPI.baseUrl}/paiements-clients/validated`, {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        })
        .then((response) => {
          paiementsClientList = response.data.map(
            (paiementClient: PaiementClientJSON) => {
              return PaiementClient.fromJson(paiementClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as PaiementClient[];
        });
      return paiementsClientList;
    }

    await axios
      .get(
        `${PaiementClientAPI.baseUrl}/paiements-clients/validated/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        paiementsClientList = response.data.map(
          (paiementClient: PaiementClientJSON) => {
            return PaiementClient.fromJson(paiementClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as PaiementClient[];
      });
    return paiementsClientList;
  }

  // =========== Selectionned Client

  static async getAllOfClient(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<PaiementClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-client/client-default/${clientId}`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          paiementsClientList = response.data.map(
            (paiementClient: PaiementClientJSON) => {
              return PaiementClient.fromJson(paiementClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as PaiementClient[];
        });
      return paiementsClientList;
    }

    await axios
      .get(
        `${PaiementClientAPI.baseUrl}/paiements-client/client-default/${clientId}/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        paiementsClientList = response.data.map(
          (paiementClient: PaiementClientJSON) => {
            return PaiementClient.fromJson(paiementClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as PaiementClient[];
      });
    return paiementsClientList;
  }

  static async getAllOfClientFromOldToNew(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<PaiementClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/old-to-new`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          paiementsClientList = response.data.map(
            (paiementClient: PaiementClientJSON) => {
              return PaiementClient.fromJson(paiementClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as PaiementClient[];
        });
      return paiementsClientList;
    }

    await axios
      .get(
        `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/old-to-new/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        paiementsClientList = response.data.map(
          (paiementClient: PaiementClientJSON) => {
            return PaiementClient.fromJson(paiementClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as PaiementClient[];
      });
    return paiementsClientList;
  }

  static async getAllOfClientFromNewToOld(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<PaiementClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/new-to-important`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          paiementsClientList = response.data.map(
            (paiementClient: PaiementClientJSON) => {
              return PaiementClient.fromJson(paiementClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as PaiementClient[];
        });
      return paiementsClientList;
    }

    await axios
      .get(
        `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/new-to-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        paiementsClientList = response.data.map(
          (paiementClient: PaiementClientJSON) => {
            return PaiementClient.fromJson(paiementClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as PaiementClient[];
      });
    return paiementsClientList;
  }

  static async getAllOfClientMostImportant(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<PaiementClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/most-important`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          paiementsClientList = response.data.map(
            (paiementClient: PaiementClientJSON) => {
              return PaiementClient.fromJson(paiementClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as PaiementClient[];
        });
      return paiementsClientList;
    }

    await axios
      .get(
        `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/most-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        paiementsClientList = response.data.map(
          (paiementClient: PaiementClientJSON) => {
            return PaiementClient.fromJson(paiementClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as PaiementClient[];
      });
    return paiementsClientList;
  }

  static async getAllOfClientLessImportant(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<PaiementClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/less-important`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          paiementsClientList = response.data.map(
            (paiementClient: PaiementClientJSON) => {
              return PaiementClient.fromJson(paiementClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as PaiementClient[];
        });
      return paiementsClientList;
    }

    await axios
      .get(
        `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/less-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        paiementsClientList = response.data.map(
          (paiementClient: PaiementClientJSON) => {
            return PaiementClient.fromJson(paiementClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as PaiementClient[];
      });
    return paiementsClientList;
  }

  static async getAllOfClientCIMBENINMostImportant(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<PaiementClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/cim-benin-most-important`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          paiementsClientList = response.data.map(
            (paiementClient: PaiementClientJSON) => {
              return PaiementClient.fromJson(paiementClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as PaiementClient[];
        });
      return paiementsClientList;
    }

    await axios
      .get(
        `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/cim-benin-most-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        paiementsClientList = response.data.map(
          (paiementClient: PaiementClientJSON) => {
            return PaiementClient.fromJson(paiementClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as PaiementClient[];
      });
    return paiementsClientList;
  }

  static async getAllOfClientCIMBENINLessImportant(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<PaiementClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/cim-benin-less-important`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          paiementsClientList = response.data.map(
            (paiementClient: PaiementClientJSON) => {
              return PaiementClient.fromJson(paiementClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as PaiementClient[];
        });
      return paiementsClientList;
    }

    await axios
      .get(
        `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/cim-benin-less-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        paiementsClientList = response.data.map(
          (paiementClient: PaiementClientJSON) => {
            return PaiementClient.fromJson(paiementClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as PaiementClient[];
      });
    return paiementsClientList;
  }

  static async getAllOfClientNOCIBEMostImportant(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<PaiementClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/nocibe-most-important`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          paiementsClientList = response.data.map(
            (paiementClient: PaiementClientJSON) => {
              return PaiementClient.fromJson(paiementClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as PaiementClient[];
        });
      return paiementsClientList;
    }

    await axios
      .get(
        `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/nocibe-most-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        paiementsClientList = response.data.map(
          (paiementClient: PaiementClientJSON) => {
            return PaiementClient.fromJson(paiementClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as PaiementClient[];
      });
    return paiementsClientList;
  }

  static async getAllOfClientNOCIBELessImportant(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<PaiementClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/nocibe-less-important`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          paiementsClientList = response.data.map(
            (paiementClient: PaiementClientJSON) => {
              return PaiementClient.fromJson(paiementClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as PaiementClient[];
        });
      return paiementsClientList;
    }

    await axios
      .get(
        `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/nocibe-less-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        paiementsClientList = response.data.map(
          (paiementClient: PaiementClientJSON) => {
            return PaiementClient.fromJson(paiementClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as PaiementClient[];
      });
    return paiementsClientList;
  }

  static async getAllOfClientUnvalidated(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<PaiementClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/unvalidated`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          paiementsClientList = response.data.map(
            (paiementClient: PaiementClientJSON) => {
              return PaiementClient.fromJson(paiementClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as PaiementClient[];
        });
      return paiementsClientList;
    }

    await axios
      .get(
        `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/unvalidated/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        paiementsClientList = response.data.map(
          (paiementClient: PaiementClientJSON) => {
            return PaiementClient.fromJson(paiementClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as PaiementClient[];
      });
    return paiementsClientList;
  }

  static async getAllOfClientValidated(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<PaiementClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/validated`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          paiementsClientList = response.data.map(
            (paiementClient: PaiementClientJSON) => {
              return PaiementClient.fromJson(paiementClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as PaiementClient[];
        });
      return paiementsClientList;
    }

    await axios
      .get(
        `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/validated/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        paiementsClientList = response.data.map(
          (paiementClient: PaiementClientJSON) => {
            return PaiementClient.fromJson(paiementClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as PaiementClient[];
      });
    return paiementsClientList;
  }

  static async update(
    authenticatedEmployee: Employes,
    id: number,
    data: PaiementClient
  ): Promise<PaiementClientPromiseResponse | undefined> {
    console.log("Paiement update call");
    console.log("Paiement Data", data);
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: PaiementClientPromiseResponse | undefined = undefined;
    await axios
      .put(
        `${PaiementClientAPI.baseUrl}/paiement-client/${id}`,
        data.toJson(),
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important : spécifiez le type de contenu
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
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
  ): Promise<PaiementClientPromiseResponse | undefined> {
    let promiseResponse: PaiementClientPromiseResponse | undefined = undefined;
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    await axios
      .delete(`${PaiementClientAPI.baseUrl}/paiement-client/${id}`, {
        headers: {
          "authorization-token": `Bearer ${token}`,
        },
      })
      .then((response) => {
        promiseResponse = response;
      })

      .catch((error) => {
        console.log(error);
        promiseResponse = error.response.data;
      });
    return promiseResponse;
  }
}

export default PaiementClientAPI;
