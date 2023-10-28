import axios from "axios";
import PaiementClient from "../../models/paiement_client/paiement.model";

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
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(
    data: PaiementClient
  ): Promise<PaiementClientPromiseResponse | undefined> {
    let promiseResponse: PaiementClientPromiseResponse | undefined = undefined;
    await axios
      .post(`${PaiementClientAPI.baseUrl}/paiement-client`, data.toJson(), {
        headers: {
          "Content-Type": "multipart/form-data",
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

  static async getById(id: number): Promise<PaiementClient | undefined> {
    let paiementClient: PaiementClient | undefined;
    await axios
      .get(`${PaiementClientAPI.baseUrl}/paiement-client/${id}`)
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
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<PaiementClient[]> {
    let paiementsClientList: PaiementClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${PaiementClientAPI.baseUrl}/paiements-clients-default`)
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
        `${PaiementClientAPI.baseUrl}/paiements-clients-default/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<PaiementClient[]> {
    let paiementsClientList: PaiementClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${PaiementClientAPI.baseUrl}/paiements-clients/new-to-old`)
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
        `${PaiementClientAPI.baseUrl}/paiements-clients/new-to-old/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<PaiementClient[]> {
    let paiementsClientList: PaiementClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${PaiementClientAPI.baseUrl}/paiements-clients/old-to-new`)
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
        `${PaiementClientAPI.baseUrl}/paiements-clients/old-to-new/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<PaiementClient[]> {
    let paiementsClientList: PaiementClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${PaiementClientAPI.baseUrl}/paiements-clients/most-important`)
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
        `${PaiementClientAPI.baseUrl}/paiements-clients/most-important/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<PaiementClient[]> {
    let paiementsClientList: PaiementClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${PaiementClientAPI.baseUrl}/paiements-clients/less-important`)
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
        `${PaiementClientAPI.baseUrl}/paiements-clients/less-important/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<PaiementClient[]> {
    let paiementsClientList: PaiementClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-clients/cim-benin-most-important`
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
        `${PaiementClientAPI.baseUrl}/paiements-clients/cim-benin-most-important/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<PaiementClient[]> {
    let paiementsClientList: PaiementClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-clients/cim-benin-less-important`
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
        `${PaiementClientAPI.baseUrl}/paiements-clients/cim-benin-less-important/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<PaiementClient[]> {
    let paiementsClientList: PaiementClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-clients/nocibe-most-important`
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
        `${PaiementClientAPI.baseUrl}/paiements-clients/nocibe-most-important/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<PaiementClient[]> {
    let paiementsClientList: PaiementClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-clients/nocibe-less-important`
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
        `${PaiementClientAPI.baseUrl}/paiements-clients/nocibe-less-important/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<PaiementClient[]> {
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(`${PaiementClientAPI.baseUrl}/paiements-clients/unvalidated`)
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
        `${PaiementClientAPI.baseUrl}/paiements-clients/unvalidated/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<PaiementClient[]> {
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(`${PaiementClientAPI.baseUrl}/paiements-clients/validated`)
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
        `${PaiementClientAPI.baseUrl}/paiements-clients/validated/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<PaiementClient[]> {
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-client/client-default/${clientId}`
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
        `${PaiementClientAPI.baseUrl}/paiements-client/client-default/${clientId}/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<PaiementClient[]> {
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/old-to-new`
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
        `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/old-to-new/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<PaiementClient[]> {
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/new-to-important`
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
        `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/new-to-important/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<PaiementClient[]> {
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/most-important`
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
        `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/most-important/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<PaiementClient[]> {
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/less-important`
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
        `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/less-important/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<PaiementClient[]> {
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/cim-benin-most-important`
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
        `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/cim-benin-most-important/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<PaiementClient[]> {
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/cim-benin-less-important`
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
        `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/cim-benin-less-important/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<PaiementClient[]> {
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/nocibe-most-important`
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
        `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/nocibe-most-important/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<PaiementClient[]> {
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/nocibe-less-important`
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
        `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/nocibe-less-important/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<PaiementClient[]> {
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/unvalidated`
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
        `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/unvalidated/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<PaiementClient[]> {
    let paiementsClientList: PaiementClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/validated`
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
        `${PaiementClientAPI.baseUrl}/paiements-client/client/${clientId}/validated/${startDate}/${endDate}`
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
    id: number,
    data: PaiementClient
  ): Promise<PaiementClientPromiseResponse | undefined> {
    let promiseResponse: PaiementClientPromiseResponse | undefined = undefined;
    await axios
      .put(
        `${PaiementClientAPI.baseUrl}/paiement-client/${id}`,
        data.toJson(),
        {
          headers: {
            "Content-Type": "multipart/form-data",
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
    id: number
  ): Promise<PaiementClientPromiseResponse | undefined> {
    let promiseResponse: PaiementClientPromiseResponse | undefined = undefined;

    await axios
      .delete(`${PaiementClientAPI.baseUrl}/paiement-client/${id}`)
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
