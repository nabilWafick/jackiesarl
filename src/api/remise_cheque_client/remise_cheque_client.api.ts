import axios from "axios";
import RemiseChequeClient from "../../models/remise_cheque_client/remise_cheque_client.model";
import Employes from "../../models/employes/employes.model";
import JSConstants from "../../utils/constants";

interface RemiseChequeClientPromiseResponse {
  status: number;
  remiseChequeClient?: RemiseChequeClient;
  error?: string;
}

interface RemiseChequeClientJSON {
  id?: number;
  description: string;
  banque: string;
  montant: number;
  reste: number;
  est_validee: number;
  id_client: number;
  date_remise?: string;
}

class RemiseChequeClientAPI {
  private static baseUrl = JSConstants.API_BASE_URL;

  static async create(
    authenticatedEmployee: Employes,
    data: RemiseChequeClient
  ): Promise<RemiseChequeClientPromiseResponse | undefined> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: RemiseChequeClientPromiseResponse | undefined =
      undefined;
    await axios
      .post(
        `${RemiseChequeClientAPI.baseUrl}/remise-cheque-client`,
        data.toJson(),
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        promiseResponse = error.response.data;
        console.error(error.response);
      });
    return promiseResponse;
  }

  static async getById(
    authenticatedEmployee: Employes,
    id: number
  ): Promise<RemiseChequeClient | undefined> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let remiseChequeClient: RemiseChequeClient | undefined;
    await axios
      .get(`${RemiseChequeClientAPI.baseUrl}/remise-cheque-client/${id}`, {
        headers: {
          "authorization-token": `Bearer ${token}`,
        },
      })
      .then((response) => {
        remiseChequeClient = RemiseChequeClient.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return remiseChequeClient;
  }

  static async getAll(
    authenticatedEmployee: Employes
  ): Promise<RemiseChequeClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let remiseChequeClientsList: RemiseChequeClient[] = [];
    await axios
      .get(`${RemiseChequeClientAPI.baseUrl}/remise-cheque-client`, {
        headers: {
          "authorization-token": `Bearer ${token}`,
        },
      })
      .then((response) => {
        remiseChequeClientsList = response.data.map(
          (remiseChequeClient: RemiseChequeClientJSON) => {
            return RemiseChequeClient.fromJson(remiseChequeClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as RemiseChequeClient[];
      });
    return remiseChequeClientsList;
  }

  static async getAllOfClient(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client-default/${clientId}`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          remiseChequesClientList = response.data.map(
            (remiseChequeClient: RemiseChequeClientJSON) => {
              return RemiseChequeClient.fromJson(remiseChequeClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as RemiseChequeClient[];
        });
      return remiseChequesClientList;
    }

    await axios
      .get(
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client-default/${clientId}/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        remiseChequesClientList = response.data.map(
          (remiseChequeClient: RemiseChequeClientJSON) => {
            return RemiseChequeClient.fromJson(remiseChequeClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as RemiseChequeClient[];
      });
    return remiseChequesClientList;
  }

  static async getAllOfClientFromOldToNew(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/old-to-new`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          remiseChequesClientList = response.data.map(
            (remiseChequeClient: RemiseChequeClientJSON) => {
              return RemiseChequeClient.fromJson(remiseChequeClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as RemiseChequeClient[];
        });
      return remiseChequesClientList;
    }

    await axios
      .get(
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/old-to-new/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        remiseChequesClientList = response.data.map(
          (remiseChequeClient: RemiseChequeClientJSON) => {
            return RemiseChequeClient.fromJson(remiseChequeClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as RemiseChequeClient[];
      });
    return remiseChequesClientList;
  }

  static async getAllOfClientFromNewToOld(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/new-to-old`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          remiseChequesClientList = response.data.map(
            (remiseChequeClient: RemiseChequeClientJSON) => {
              return RemiseChequeClient.fromJson(remiseChequeClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as RemiseChequeClient[];
        });
      return remiseChequesClientList;
    }

    await axios
      .get(
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/new-to-old/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        remiseChequesClientList = response.data.map(
          (remiseChequeClient: RemiseChequeClientJSON) => {
            return RemiseChequeClient.fromJson(remiseChequeClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as RemiseChequeClient[];
      });
    return remiseChequesClientList;
  }

  static async getAllOfClientMostImportant(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/most-important`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          remiseChequesClientList = response.data.map(
            (remiseChequeClient: RemiseChequeClientJSON) => {
              return RemiseChequeClient.fromJson(remiseChequeClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as RemiseChequeClient[];
        });
      return remiseChequesClientList;
    }

    await axios
      .get(
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/most-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        remiseChequesClientList = response.data.map(
          (remiseChequeClient: RemiseChequeClientJSON) => {
            return RemiseChequeClient.fromJson(remiseChequeClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as RemiseChequeClient[];
      });
    return remiseChequesClientList;
  }

  static async getAllOfClientLessImportant(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/less-important`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          remiseChequesClientList = response.data.map(
            (remiseChequeClient: RemiseChequeClientJSON) => {
              return RemiseChequeClient.fromJson(remiseChequeClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as RemiseChequeClient[];
        });
      return remiseChequesClientList;
    }

    await axios
      .get(
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/less-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        remiseChequesClientList = response.data.map(
          (remiseChequeClient: RemiseChequeClientJSON) => {
            return RemiseChequeClient.fromJson(remiseChequeClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as RemiseChequeClient[];
      });
    return remiseChequesClientList;
  }

  static async getAllOfClientRestMoreImportant(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/more-important`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          remiseChequesClientList = response.data.map(
            (remiseChequeClient: RemiseChequeClientJSON) => {
              return RemiseChequeClient.fromJson(remiseChequeClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as RemiseChequeClient[];
        });
      return remiseChequesClientList;
    }

    await axios
      .get(
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/more-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        remiseChequesClientList = response.data.map(
          (remiseChequeClient: RemiseChequeClientJSON) => {
            return RemiseChequeClient.fromJson(remiseChequeClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as RemiseChequeClient[];
      });
    return remiseChequesClientList;
  }

  static async getAllOfClientRestLessImportant(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/rest-less-important`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          remiseChequesClientList = response.data.map(
            (remiseChequeClient: RemiseChequeClientJSON) => {
              return RemiseChequeClient.fromJson(remiseChequeClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as RemiseChequeClient[];
        });
      return remiseChequesClientList;
    }

    await axios
      .get(
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/rest-less-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        remiseChequesClientList = response.data.map(
          (remiseChequeClient: RemiseChequeClientJSON) => {
            return RemiseChequeClient.fromJson(remiseChequeClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as RemiseChequeClient[];
      });
    return remiseChequesClientList;
  }

  static async getAllOfClientBOABank(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/BOA`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          remiseChequesClientList = response.data.map(
            (remiseChequeClient: RemiseChequeClientJSON) => {
              return RemiseChequeClient.fromJson(remiseChequeClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as RemiseChequeClient[];
        });
      return remiseChequesClientList;
    }

    await axios
      .get(
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/BOA/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        remiseChequesClientList = response.data.map(
          (remiseChequeClient: RemiseChequeClientJSON) => {
            return RemiseChequeClient.fromJson(remiseChequeClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as RemiseChequeClient[];
      });
    return remiseChequesClientList;
  }

  static async getAllOfClientUBABank(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/UBA`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          remiseChequesClientList = response.data.map(
            (remiseChequeClient: RemiseChequeClientJSON) => {
              return RemiseChequeClient.fromJson(remiseChequeClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as RemiseChequeClient[];
        });
      return remiseChequesClientList;
    }

    await axios
      .get(
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/UBA/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        remiseChequesClientList = response.data.map(
          (remiseChequeClient: RemiseChequeClientJSON) => {
            return RemiseChequeClient.fromJson(remiseChequeClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as RemiseChequeClient[];
      });
    return remiseChequesClientList;
  }

  static async getAllOfClientNSIABank(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/NSIA`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          remiseChequesClientList = response.data.map(
            (remiseChequeClient: RemiseChequeClientJSON) => {
              return RemiseChequeClient.fromJson(remiseChequeClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as RemiseChequeClient[];
        });
      return remiseChequesClientList;
    }

    await axios
      .get(
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/NSIA/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        remiseChequesClientList = response.data.map(
          (remiseChequeClient: RemiseChequeClientJSON) => {
            return RemiseChequeClient.fromJson(remiseChequeClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as RemiseChequeClient[];
      });
    return remiseChequesClientList;
  }

  static async getAllOfClientBGFIBank(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/BGFI`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          remiseChequesClientList = response.data.map(
            (remiseChequeClient: RemiseChequeClientJSON) => {
              return RemiseChequeClient.fromJson(remiseChequeClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as RemiseChequeClient[];
        });
      return remiseChequesClientList;
    }

    await axios
      .get(
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/BGFI/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        remiseChequesClientList = response.data.map(
          (remiseChequeClient: RemiseChequeClientJSON) => {
            return RemiseChequeClient.fromJson(remiseChequeClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as RemiseChequeClient[];
      });
    return remiseChequesClientList;
  }

  static async getAllOfClientSGBBank(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/SGB`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          remiseChequesClientList = response.data.map(
            (remiseChequeClient: RemiseChequeClientJSON) => {
              return RemiseChequeClient.fromJson(remiseChequeClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as RemiseChequeClient[];
        });
      return remiseChequesClientList;
    }

    await axios
      .get(
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/SGB/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        remiseChequesClientList = response.data.map(
          (remiseChequeClient: RemiseChequeClientJSON) => {
            return RemiseChequeClient.fromJson(remiseChequeClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as RemiseChequeClient[];
      });
    return remiseChequesClientList;
  }

  static async getAllOfClientEcobankBank(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/Ecobank`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          remiseChequesClientList = response.data.map(
            (remiseChequeClient: RemiseChequeClientJSON) => {
              return RemiseChequeClient.fromJson(remiseChequeClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as RemiseChequeClient[];
        });
      return remiseChequesClientList;
    }

    await axios
      .get(
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/Ecobank/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        remiseChequesClientList = response.data.map(
          (remiseChequeClient: RemiseChequeClientJSON) => {
            return RemiseChequeClient.fromJson(remiseChequeClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as RemiseChequeClient[];
      });
    return remiseChequesClientList;
  }

  static async getAllOfClientUnvalidated(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/unvalidated`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          remiseChequesClientList = response.data.map(
            (remiseChequeClient: RemiseChequeClientJSON) => {
              return RemiseChequeClient.fromJson(remiseChequeClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as RemiseChequeClient[];
        });
      return remiseChequesClientList;
    }

    await axios
      .get(
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/unvalidated/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        remiseChequesClientList = response.data.map(
          (remiseChequeClient: RemiseChequeClientJSON) => {
            return RemiseChequeClient.fromJson(remiseChequeClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as RemiseChequeClient[];
      });
    return remiseChequesClientList;
  }

  static async getAllOfClientValidated(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/validated`,
          {
            headers: {
              "authorization-token": `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          remiseChequesClientList = response.data.map(
            (remiseChequeClient: RemiseChequeClientJSON) => {
              return RemiseChequeClient.fromJson(remiseChequeClient);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as RemiseChequeClient[];
        });
      return remiseChequesClientList;
    }

    await axios
      .get(
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/validated/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        remiseChequesClientList = response.data.map(
          (remiseChequeClient: RemiseChequeClientJSON) => {
            return RemiseChequeClient.fromJson(remiseChequeClient);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as RemiseChequeClient[];
      });
    return remiseChequesClientList;
  }

  static async update(
    authenticatedEmployee: Employes,
    id: number,
    data: RemiseChequeClient
  ): Promise<RemiseChequeClientPromiseResponse | undefined> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: RemiseChequeClientPromiseResponse | undefined =
      undefined;

    await axios
      .put(
        `${RemiseChequeClientAPI.baseUrl}/remise-cheque-client/${id}`,
        data.toJson(),
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        promiseResponse = error.response.data;

        console.error(error.response);
      });
    return promiseResponse;
  }

  static async delete(
    authenticatedEmployee: Employes,
    id: number
  ): Promise<RemiseChequeClientPromiseResponse | undefined> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: RemiseChequeClientPromiseResponse | undefined =
      undefined;
    await axios
      .delete(`${RemiseChequeClientAPI.baseUrl}/remise-cheque-client/${id}`, {
        headers: {
          "authorization-token": `Bearer ${token}`,
        },
      })
      .then((response) => {
        promiseResponse = response;
      })
      .catch((error) => {
        promiseResponse = error.response.data;
        console.error(error.response);
      });

    return promiseResponse;
  }
}

export default RemiseChequeClientAPI;
