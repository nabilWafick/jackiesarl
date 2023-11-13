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
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
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
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
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

  static async getById(id: number): Promise<RemiseChequeClient | undefined> {
    let remiseChequeClient: RemiseChequeClient | undefined;
    await axios
      .get(`${RemiseChequeClientAPI.baseUrl}/remise-cheque-client/${id}`)
      .then((response) => {
        remiseChequeClient = RemiseChequeClient.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return remiseChequeClient;
  }

  static async getAll(): Promise<RemiseChequeClient[]> {
    let remiseChequeClientsList: RemiseChequeClient[] = [];
    await axios
      .get(`${RemiseChequeClientAPI.baseUrl}/remise-cheque-client`)
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client-default/${clientId}`
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
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client-default/${clientId}/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/old-to-new`
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
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/old-to-new/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/new-to-old`
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
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/new-to-old/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/most-important`
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
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/most-important/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/less-important`
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
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/less-important/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/more-important`
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
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/more-important/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/rest-less-important`
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
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/rest-less-important/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/BOA`
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
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/BOA/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/UBA`
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
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/UBA/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/NSIA`
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
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/NSIA/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/BGFI`
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
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/BGFI/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/SGB`
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
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/SGB/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/Ecobank`
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
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/Ecobank/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/unvalidated`
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
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/unvalidated/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined,
    clientId: number
  ): Promise<RemiseChequeClient[]> {
    let remiseChequesClientList: RemiseChequeClient[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(
          `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/validated`
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
        `${RemiseChequeClientAPI.baseUrl}/remise-cheques-client/client/${clientId}/validated/${startDate}/${endDate}`
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
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
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
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
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
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: RemiseChequeClientPromiseResponse | undefined =
      undefined;
    await axios
      .delete(`${RemiseChequeClientAPI.baseUrl}/remise-cheque-client/${id}`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
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
