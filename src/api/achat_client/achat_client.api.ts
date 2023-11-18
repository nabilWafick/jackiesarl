import axios from "axios";
import AchatClient from "../../models/achat_client/achat_client.model";
import Employes from "../../models/employes/employes.model";
import JSConstants from "../../utils/constants";

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
  private static baseUrl = JSConstants.API_BASE_URL;

  static async create(
    authenticatedEmployee: Employes,
    data: AchatClient
  ): Promise<AchatClientPromiseResponse | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";

    let promiseResponse: AchatClientPromiseResponse | undefined = undefined;

    await axios
      .post(`${AchatClientAPI.baseUrl}/achat-client`, data.toJson(), {
        headers: {
          "Content-Type": "multipart/form-data",
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
  ): Promise<AchatClient | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let achatClient: AchatClient | undefined;
    await axios
      .get(`${AchatClientAPI.baseUrl}/achat-client/${id}`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        achatClient = AchatClient.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return achatClient;
  }

  static async getAll(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<AchatClient[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let achatsClientList: AchatClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${AchatClientAPI.baseUrl}/achats-clients-default`, {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        })
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
        `${AchatClientAPI.baseUrl}/achats-clients-default/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<AchatClient[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let achatsClientList: AchatClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${AchatClientAPI.baseUrl}/achats-clients/new-to-old`, {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        })
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
        `${AchatClientAPI.baseUrl}/achats-clients/new-to-old/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<AchatClient[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let achatsClientList: AchatClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${AchatClientAPI.baseUrl}/achats-clients/old-to-new`, {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        })
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
        `${AchatClientAPI.baseUrl}/achats-clients/old-to-new/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<AchatClient[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
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
        `${AchatClientAPI.baseUrl}/achats-clients/most-important/${startDate}/${endDate},`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<AchatClient[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let achatsClientList: AchatClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${AchatClientAPI.baseUrl}/achats-clients/less-important`, {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        })
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
        `${AchatClientAPI.baseUrl}/achats-clients/less-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<AchatClient[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let achatsClientList: AchatClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(
          `${AchatClientAPI.baseUrl}/achats-clients/cim-benin-most-important`,
          {
            headers: {
              "authorization-tokens": `Bearer ${accesToken} ${token} `,
            },
          }
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
        `${AchatClientAPI.baseUrl}/achats-clients/cim-benin-most-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<AchatClient[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let achatsClientList: AchatClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(
          `${AchatClientAPI.baseUrl}/achats-clients/cim-benin-less-important`,
          {
            headers: {
              "authorization-tokens": `Bearer ${accesToken} ${token} `,
            },
          }
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
        `${AchatClientAPI.baseUrl}/achats-clients/cim-benin-less-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<AchatClient[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let achatsClientList: AchatClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${AchatClientAPI.baseUrl}/achats-clients/nocibe-most-important`, {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        })
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
        `${AchatClientAPI.baseUrl}/achats-clients/nocibe-most-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<AchatClient[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let achatsClientList: AchatClient[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${AchatClientAPI.baseUrl}/achats-clients/nocibe-less-important`, {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        })
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
        `${AchatClientAPI.baseUrl}/achats-clients/nocibe-less-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<AchatClient[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let achatsClientList: AchatClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${AchatClientAPI.baseUrl}/achats-client/client-default/${clientId}`,
          {
            headers: {
              "authorization-tokens": `Bearer ${accesToken} ${token} `,
            },
          }
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
        `${AchatClientAPI.baseUrl}/achats-client/client-default/${clientId}/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<AchatClient[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let achatsClientList: AchatClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/old-to-new`,
          {
            headers: {
              "authorization-tokens": `Bearer ${accesToken} ${token} `,
            },
          }
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
        `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/old-to-new/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<AchatClient[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let achatsClientList: AchatClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/new-to-important`,
          {
            headers: {
              "authorization-tokens": `Bearer ${accesToken} ${token} `,
            },
          }
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
        `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/new-to-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<AchatClient[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let achatsClientList: AchatClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/most-important`,
          {
            headers: {
              "authorization-tokens": `Bearer ${accesToken} ${token} `,
            },
          }
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
        `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/most-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<AchatClient[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let achatsClientList: AchatClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/less-important`,
          {
            headers: {
              "authorization-tokens": `Bearer ${accesToken} ${token} `,
            },
          }
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
        `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/less-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<AchatClient[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let achatsClientList: AchatClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/cim-benin-most-important`,
          {
            headers: {
              "authorization-tokens": `Bearer ${accesToken} ${token} `,
            },
          }
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
        `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/cim-benin-most-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<AchatClient[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let achatsClientList: AchatClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/cim-benin-less-important`,
          {
            headers: {
              "authorization-tokens": `Bearer ${accesToken} ${token} `,
            },
          }
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
        `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/cim-benin-less-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<AchatClient[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let achatsClientList: AchatClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/nocibe-most-important`,
          {
            headers: {
              "authorization-tokens": `Bearer ${accesToken} ${token} `,
            },
          }
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
        `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/nocibe-most-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<AchatClient[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let achatsClientList: AchatClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/nocibe-less-important`,
          {
            headers: {
              "authorization-tokens": `Bearer ${accesToken} ${token} `,
            },
          }
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
        `${AchatClientAPI.baseUrl}/achats-client/client/${clientId}/nocibe-less-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
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
    authenticatedEmployee: Employes,
    id: number,
    data: AchatClient
  ): Promise<AchatClientPromiseResponse | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: AchatClientPromiseResponse | undefined = undefined;

    await axios
      .put(`${AchatClientAPI.baseUrl}/achat-client/${id}`, data.toJson(), {
        headers: {
          "Content-Type": "multipart/form-data",
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
  ): Promise<AchatClientPromiseResponse | undefined> {
    // console.log("In API func delete");
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: AchatClientPromiseResponse | undefined = undefined;

    await axios
      .delete(`${AchatClientAPI.baseUrl}/achat-client/${id}`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        promiseResponse = response;
        console.log("delete response", response);
      })
      .catch((error) => {
        promiseResponse = error.response.data;
      });
    return promiseResponse;
  }
}

export default AchatClientAPI;
