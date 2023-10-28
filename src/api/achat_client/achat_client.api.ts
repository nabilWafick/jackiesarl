import axios from "axios";
import AchatClient from "../../models/achat_client/achat_client.model";

interface AchatClientPromiseResponse {
  status: number;
  achatClient?: AchatClientJSON;
  error?: string;
}

interface AchatClientJSON {
  id?: number;
  quantite_achetee: number;
  categorie: string;
  montant: number;
  numero_ctp: string;
  bordereau: File | string;
  numero_bc: number;
  id_client: number;
  date_achat?: string;
}

class AchatClientAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(
    data: AchatClient
  ): Promise<AchatClientPromiseResponse | undefined> {
    let promiseResponse: AchatClientPromiseResponse | undefined = undefined;

    await axios
      .post(`${AchatClientAPI.baseUrl}/achat-client`, data.toJson(), {
        headers: {
          "Content-Type": "multipart/form-data", // Important : spécifiez le type de contenu
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

  static async getById(id: number): Promise<AchatClient | undefined> {
    let achatClient: AchatClient | undefined;
    await axios
      .get(`${AchatClientAPI.baseUrl}/achat-client/${id}`)
      .then((response) => {
        achatClient = AchatClient.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return achatClient;
  }

  /* if (!startDate || !endDate) {
      
  }
*/
  static async getAll(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<AchatClient[]> {
    let achatsClientList: AchatClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${AchatClientAPI.baseUrl}/achats-clients-default`)
        .then((response) => {
          achatsClientList = response.data.map((achatClient: AchatClientJSON) =>
            AchatClient.fromJson(achatClient)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as AchatClient[];
        });
      return achatsClientList;
    }

    await axios
      .get(
        `${AchatClientAPI.baseUrl}/achats-clients-default/${startDate}/${endDate}`
      )
      .then((response) => {
        achatsClientList = response.data.map((achatClient: AchatClientJSON) =>
          AchatClient.fromJson(achatClient)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as AchatClient[];
      });
    return achatsClientList;
  }

  static async getAllFromNewToOld(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<AchatClient[]> {
    let achatsClientList: AchatClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${AchatClientAPI.baseUrl}/achats-clients/new-to-old`)
        .then((response) => {
          achatsClientList = response.data.map((achatClient: AchatClientJSON) =>
            AchatClient.fromJson(achatClient)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as AchatClient[];
        });
      return achatsClientList;
    }

    await axios
      .get(
        `${AchatClientAPI.baseUrl}/achats-clients/new-to-old/${startDate}/${endDate}`
      )
      .then((response) => {
        achatsClientList = response.data.map((achatClient: AchatClientJSON) =>
          AchatClient.fromJson(achatClient)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as AchatClient[];
      });
    return achatsClientList;
  }

  static async getAllFromOldToNew(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<AchatClient[]> {
    let achatsClientList: AchatClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${AchatClientAPI.baseUrl}/achats-clients/old-to-new`)
        .then((response) => {
          achatsClientList = response.data.map((achatClient: AchatClientJSON) =>
            AchatClient.fromJson(achatClient)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as AchatClient[];
        });
      return achatsClientList;
    }

    await axios
      .get(
        `${AchatClientAPI.baseUrl}/achats-clients/old-to-new/${startDate}/${endDate}`
      )
      .then((response) => {
        achatsClientList = response.data.map((achatClient: AchatClientJSON) =>
          AchatClient.fromJson(achatClient)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as AchatClient[];
      });
    return achatsClientList;
  }

  static async getAllMostImportant(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<AchatClient[]> {
    let achatsClientList: AchatClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${AchatClientAPI.baseUrl}/achats-clients/most-important`)
        .then((response) => {
          achatsClientList = response.data.map((achatClient: AchatClientJSON) =>
            AchatClient.fromJson(achatClient)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as AchatClient[];
        });
      return achatsClientList;
    }

    await axios
      .get(
        `${AchatClientAPI.baseUrl}/achats-clients/most-important/${startDate}/${endDate}`
      )
      .then((response) => {
        achatsClientList = response.data.map((achatClient: AchatClientJSON) =>
          AchatClient.fromJson(achatClient)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as AchatClient[];
      });
    return achatsClientList;
  }

  static async getAllLessImportant(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<AchatClient[]> {
    let achatsClientList: AchatClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${AchatClientAPI.baseUrl}/achats-clients/less-important`)
        .then((response) => {
          achatsClientList = response.data.map((achatClient: AchatClientJSON) =>
            AchatClient.fromJson(achatClient)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as AchatClient[];
        });
      return achatsClientList;
    }

    await axios
      .get(
        `${AchatClientAPI.baseUrl}/achats-clients/less-important/${startDate}/${endDate}`
      )
      .then((response) => {
        achatsClientList = response.data.map((achatClient: AchatClientJSON) =>
          AchatClient.fromJson(achatClient)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as AchatClient[];
      });
    return achatsClientList;
  }

  static async getAllCIMBENINMostImportant(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<AchatClient[]> {
    let achatsClientList: AchatClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(
          `${AchatClientAPI.baseUrl}/achats-clients/cim-benin-most-important`
        )
        .then((response) => {
          achatsClientList = response.data.map((achatClient: AchatClientJSON) =>
            AchatClient.fromJson(achatClient)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as AchatClient[];
        });
      return achatsClientList;
    }

    await axios
      .get(
        `${AchatClientAPI.baseUrl}/achats-clients/cim-benin-most-important/${startDate}/${endDate}`
      )
      .then((response) => {
        achatsClientList = response.data.map((achatClient: AchatClientJSON) =>
          AchatClient.fromJson(achatClient)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as AchatClient[];
      });
    return achatsClientList;
  }

  static async getAllCIMBENINLessImportant(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<AchatClient[]> {
    let achatsClientList: AchatClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(
          `${AchatClientAPI.baseUrl}/achats-clients/cim-benin-less-important`
        )
        .then((response) => {
          achatsClientList = response.data.map((achatClient: AchatClientJSON) =>
            AchatClient.fromJson(achatClient)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as AchatClient[];
        });
      return achatsClientList;
    }

    await axios
      .get(
        `${AchatClientAPI.baseUrl}/achats-clients/cim-benin-less-important/${startDate}/${endDate}`
      )
      .then((response) => {
        achatsClientList = response.data.map((achatClient: AchatClientJSON) =>
          AchatClient.fromJson(achatClient)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as AchatClient[];
      });
    return achatsClientList;
  }

  static async getAllNOCIBEMostImportant(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<AchatClient[]> {
    let achatsClientList: AchatClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${AchatClientAPI.baseUrl}/achats-clients/nocibe-most-important`)
        .then((response) => {
          achatsClientList = response.data.map((achatClient: AchatClientJSON) =>
            AchatClient.fromJson(achatClient)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as AchatClient[];
        });
      return achatsClientList;
    }

    await axios
      .get(
        `${AchatClientAPI.baseUrl}/achats-clients/nocibe-most-important/${startDate}/${endDate}`
      )
      .then((response) => {
        achatsClientList = response.data.map((achatClient: AchatClientJSON) =>
          AchatClient.fromJson(achatClient)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as AchatClient[];
      });
    return achatsClientList;
  }

  static async getAllNOCIBELessImportant(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<AchatClient[]> {
    let achatsClientList: AchatClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${AchatClientAPI.baseUrl}/achats-clients/nocibe-less-important`)
        .then((response) => {
          achatsClientList = response.data.map((achatClient: AchatClientJSON) =>
            AchatClient.fromJson(achatClient)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as AchatClient[];
        });
      return achatsClientList;
    }

    await axios
      .get(
        `${AchatClientAPI.baseUrl}/achats-clients/nocibe-less-important/${startDate}/${endDate}`
      )
      .then((response) => {
        achatsClientList = response.data.map((achatClient: AchatClientJSON) =>
          AchatClient.fromJson(achatClient)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as AchatClient[];
      });
    return achatsClientList;
  }

  // =========== Selectionned Client

  static async getAllOfClient(
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<AchatClient[]> {
    let achatsClientList: AchatClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${AchatClientAPI.baseUrl}/achats-client/client-default/${clientId}`
        )
        .then((response) => {
          achatsClientList = response.data.map(
            (achatClient: AchatClientJSON) => {
              return AchatClient.fromJson(achatClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as AchatClient[];
        });
      return achatsClientList;
    }

    await axios
      .get(
        `${AchatClientAPI.baseUrl}/achats-client/client-default/${clientId}/${startDate}/${endDate}`
      )
      .then((response) => {
        achatsClientList = response.data.map((achatClient: AchatClientJSON) => {
          return AchatClient.fromJson(achatClient);
        });
      })
      .catch((error) => {
        console.log(error);
        return [] as AchatClient[];
      });
    return achatsClientList;
  }

  static async getAllOfClientFromOldToNew(
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<AchatClient[]> {
    let achatsClientList: AchatClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/old-to-new`
        )
        .then((response) => {
          achatsClientList = response.data.map(
            (achatClient: AchatClientJSON) => {
              return AchatClient.fromJson(achatClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as AchatClient[];
        });
      return achatsClientList;
    }

    await axios
      .get(
        `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/old-to-new/${startDate}/${endDate}`
      )
      .then((response) => {
        achatsClientList = response.data.map((achatClient: AchatClientJSON) => {
          return AchatClient.fromJson(achatClient);
        });
      })
      .catch((error) => {
        console.log(error);
        return [] as AchatClient[];
      });
    return achatsClientList;
  }

  static async getAllOfClientFromNewToOld(
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<AchatClient[]> {
    let achatsClientList: AchatClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/new-to-important`
        )
        .then((response) => {
          achatsClientList = response.data.map(
            (achatClient: AchatClientJSON) => {
              return AchatClient.fromJson(achatClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as AchatClient[];
        });
      return achatsClientList;
    }

    await axios
      .get(
        `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/new-to-important/${startDate}/${endDate}`
      )
      .then((response) => {
        achatsClientList = response.data.map((achatClient: AchatClientJSON) => {
          return AchatClient.fromJson(achatClient);
        });
      })
      .catch((error) => {
        console.log(error);
        return [] as AchatClient[];
      });
    return achatsClientList;
  }

  static async getAllOfClientMostImportant(
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<AchatClient[]> {
    let achatsClientList: AchatClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/most-important`
        )
        .then((response) => {
          achatsClientList = response.data.map(
            (achatClient: AchatClientJSON) => {
              return AchatClient.fromJson(achatClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as AchatClient[];
        });
      return achatsClientList;
    }

    await axios
      .get(
        `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/most-important/${startDate}/${endDate}`
      )
      .then((response) => {
        achatsClientList = response.data.map((achatClient: AchatClientJSON) => {
          return AchatClient.fromJson(achatClient);
        });
      })
      .catch((error) => {
        console.log(error);
        return [] as AchatClient[];
      });
    return achatsClientList;
  }

  static async getAllOfClientLessImportant(
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<AchatClient[]> {
    let achatsClientList: AchatClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/less-important`
        )
        .then((response) => {
          achatsClientList = response.data.map(
            (achatClient: AchatClientJSON) => {
              return AchatClient.fromJson(achatClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as AchatClient[];
        });
      return achatsClientList;
    }

    await axios
      .get(
        `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/less-important/${startDate}/${endDate}`
      )
      .then((response) => {
        achatsClientList = response.data.map((achatClient: AchatClientJSON) => {
          return AchatClient.fromJson(achatClient);
        });
      })
      .catch((error) => {
        console.log(error);
        return [] as AchatClient[];
      });
    return achatsClientList;
  }

  static async getAllOfClientCIMBENINMostImportant(
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<AchatClient[]> {
    let achatsClientList: AchatClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/cim-benin-most-important`
        )
        .then((response) => {
          achatsClientList = response.data.map(
            (achatClient: AchatClientJSON) => {
              return AchatClient.fromJson(achatClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as AchatClient[];
        });
      return achatsClientList;
    }

    await axios
      .get(
        `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/cim-benin-most-important/${startDate}/${endDate}`
      )
      .then((response) => {
        achatsClientList = response.data.map((achatClient: AchatClientJSON) => {
          return AchatClient.fromJson(achatClient);
        });
      })
      .catch((error) => {
        console.log(error);
        return [] as AchatClient[];
      });
    return achatsClientList;
  }

  static async getAllOfClientCIMBENINLessImportant(
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<AchatClient[]> {
    let achatsClientList: AchatClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/cim-benin-less-important`
        )
        .then((response) => {
          achatsClientList = response.data.map(
            (achatClient: AchatClientJSON) => {
              return AchatClient.fromJson(achatClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as AchatClient[];
        });
      return achatsClientList;
    }

    await axios
      .get(
        `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/cim-benin-less-important/${startDate}/${endDate}`
      )
      .then((response) => {
        achatsClientList = response.data.map((achatClient: AchatClientJSON) => {
          return AchatClient.fromJson(achatClient);
        });
      })
      .catch((error) => {
        console.log(error);
        return [] as AchatClient[];
      });
    return achatsClientList;
  }

  static async getAllOfClientNOCIBEMostImportant(
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<AchatClient[]> {
    let achatsClientList: AchatClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/nocibe-most-important`
        )
        .then((response) => {
          achatsClientList = response.data.map(
            (achatClient: AchatClientJSON) => {
              return AchatClient.fromJson(achatClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as AchatClient[];
        });
      return achatsClientList;
    }

    await axios
      .get(
        `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/nocibe-most-important/${startDate}/${endDate}`
      )
      .then((response) => {
        achatsClientList = response.data.map((achatClient: AchatClientJSON) => {
          return AchatClient.fromJson(achatClient);
        });
      })
      .catch((error) => {
        console.log(error);
        return [] as AchatClient[];
      });
    return achatsClientList;
  }

  static async getAllOfClientNOCIBELessImportant(
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<AchatClient[]> {
    let achatsClientList: AchatClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/nocibe-less-important`
        )
        .then((response) => {
          achatsClientList = response.data.map(
            (achatClient: AchatClientJSON) => {
              return AchatClient.fromJson(achatClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as AchatClient[];
        });
      return achatsClientList;
    }

    await axios
      .get(
        `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/nocibe-less-important/${startDate}/${endDate}`
      )
      .then((response) => {
        achatsClientList = response.data.map((achatClient: AchatClientJSON) => {
          return AchatClient.fromJson(achatClient);
        });
      })
      .catch((error) => {
        console.log(error);
        return [] as AchatClient[];
      });
    return achatsClientList;
  }

  static async update(
    id: number,
    data: AchatClient
  ): Promise<AchatClientPromiseResponse | undefined> {
    let promiseResponse: AchatClientPromiseResponse | undefined = undefined;

    await axios
      .put(`${AchatClientAPI.baseUrl}/achat-client/${id}`, data.toJson(), {
        headers: {
          "Content-Type": "multipart/form-data", // Important : spécifiez le type de contenu
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
    id: number
  ): Promise<AchatClientPromiseResponse | undefined> {
    let promiseResponse: AchatClientPromiseResponse | undefined = undefined;

    await axios
      .delete(`${AchatClientAPI.baseUrl}/achat-client/${id}`)
      .then((response) => {
        promiseResponse = response;
      })
      .catch((error) => {
        promiseResponse = error.response;
      });
    return promiseResponse;
  }
}

export default AchatClientAPI;
