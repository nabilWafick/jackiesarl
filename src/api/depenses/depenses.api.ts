import axios from "axios";
import Depenses from "../../models/depenses/depenses.model";
import Employes from "../../models/employes/employes.model";
import JSConstants from "../../utils/constants";

interface DepensesPromiseResponse {
  status: number;
  depense?: Depenses;
  error?: string;
}

interface DepensesJSON {
  id?: number;
  description: string;
  montant: number;
  piece: string | File;
  est_validee: number;
  date_depense?: string;
}

class DepensesAPI {
  private static baseUrl = JSConstants.API_BASE_URL;

  static async create(
    authenticatedEmployee: Employes,
    data: Depenses
  ): Promise<DepensesPromiseResponse | undefined> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: DepensesPromiseResponse | undefined = undefined;

    await axios
      .post(`${DepensesAPI.baseUrl}/depenses`, data.toJson(), {
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
  ): Promise<Depenses | undefined> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let depense: Depenses | undefined;
    await axios
      .get(`${DepensesAPI.baseUrl}/depense/${id}`, {
        headers: {
          "authorization-token": `Bearer ${token}`,
        },
      })
      .then((response) => {
        depense = Depenses.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return depense;
  }

  static async getAll(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Depenses[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let depensesList: Depenses[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${DepensesAPI.baseUrl}/depenses-default`, {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        })
        .then((response) => {
          depensesList = response.data.map((depense: DepensesJSON) =>
            Depenses.fromJson(depense)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as Depenses[];
        });
      return depensesList;
    }

    await axios
      .get(`${DepensesAPI.baseUrl}/depenses-default/${startDate}/${endDate}`, {
        headers: {
          "authorization-token": `Bearer ${token}`,
        },
      })
      .then((response) => {
        depensesList = response.data.map((depense: DepensesJSON) =>
          Depenses.fromJson(depense)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as Depenses[];
      });
    return depensesList;
  }

  static async getAllFromOldToNew(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Depenses[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let depensesList: Depenses[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${DepensesAPI.baseUrl}/depenses/old-to-new`, {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        })
        .then((response) => {
          depensesList = response.data.map((depense: DepensesJSON) =>
            Depenses.fromJson(depense)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as Depenses[];
        });
      return depensesList;
    }

    await axios
      .get(
        `${DepensesAPI.baseUrl}/depenses/old-to-new/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        depensesList = response.data.map((depense: DepensesJSON) =>
          Depenses.fromJson(depense)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as Depenses[];
      });
    return depensesList;
  }

  static async getAllFromNewToOld(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Depenses[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let depensesList: Depenses[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${DepensesAPI.baseUrl}/depenses/new-to-old`, {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        })
        .then((response) => {
          depensesList = response.data.map((depense: DepensesJSON) =>
            Depenses.fromJson(depense)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as Depenses[];
        });
      return depensesList;
    }

    await axios
      .get(
        `${DepensesAPI.baseUrl}/depenses/new-to-old/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        depensesList = response.data.map((depense: DepensesJSON) =>
          Depenses.fromJson(depense)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as Depenses[];
      });
    return depensesList;
  }

  static async getAllMostImportant(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Depenses[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let depensesList: Depenses[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${DepensesAPI.baseUrl}/depenses/most-important`, {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        })
        .then((response) => {
          depensesList = response.data.map((depense: DepensesJSON) =>
            Depenses.fromJson(depense)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as Depenses[];
        });
      return depensesList;
    }

    await axios
      .get(
        `${DepensesAPI.baseUrl}/depenses/most-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        depensesList = response.data.map((depense: DepensesJSON) =>
          Depenses.fromJson(depense)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as Depenses[];
      });
    return depensesList;
  }

  static async getAllLessImportant(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Depenses[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let depensesList: Depenses[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${DepensesAPI.baseUrl}/depenses/less-important`, {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        })
        .then((response) => {
          depensesList = response.data.map((depense: DepensesJSON) =>
            Depenses.fromJson(depense)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as Depenses[];
        });
      return depensesList;
    }

    await axios
      .get(
        `${DepensesAPI.baseUrl}/depenses/less-important/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        depensesList = response.data.map((depense: DepensesJSON) =>
          Depenses.fromJson(depense)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as Depenses[];
      });
    return depensesList;
  }

  static async getAllUnvalidated(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Depenses[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let depensesList: Depenses[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${DepensesAPI.baseUrl}/depenses/unvalidated`, {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        })
        .then((response) => {
          depensesList = response.data.map((depense: DepensesJSON) =>
            Depenses.fromJson(depense)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as Depenses[];
        });
      return depensesList;
    }

    await axios
      .get(
        `${DepensesAPI.baseUrl}/depenses/unvalidated/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        depensesList = response.data.map((depense: DepensesJSON) =>
          Depenses.fromJson(depense)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as Depenses[];
      });
    return depensesList;
  }

  static async getAllValidated(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Depenses[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let depensesList: Depenses[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${DepensesAPI.baseUrl}/depenses/validated`, {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        })
        .then((response) => {
          depensesList = response.data.map((depense: DepensesJSON) =>
            Depenses.fromJson(depense)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as Depenses[];
        });
      return depensesList;
    }

    await axios
      .get(
        `${DepensesAPI.baseUrl}/depenses/validated/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        depensesList = response.data.map((depense: DepensesJSON) =>
          Depenses.fromJson(depense)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as Depenses[];
      });
    return depensesList;
  }

  static async update(
    authenticatedEmployee: Employes,
    id: number,
    data: Depenses
  ): Promise<DepensesPromiseResponse | undefined> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: DepensesPromiseResponse | undefined = undefined;

    await axios
      .put(`${DepensesAPI.baseUrl}/depenses/${id}`, data.toJson(), {
        headers: {
          "Content-Type": "multipart/form-data", // Important : spécifiez le type de contenu
          "authorization-token": `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response.data);
        promiseResponse = response.data;
      })
      .catch((error) => {
        // console.log(error);
        promiseResponse = error.response.data;
      });
    return promiseResponse;
  }

  static async delete(
    authenticatedEmployee: Employes,
    id: number
  ): Promise<DepensesPromiseResponse | undefined> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: DepensesPromiseResponse | undefined = undefined;

    await axios
      .delete(`${DepensesAPI.baseUrl}/depenses/${id}`, {
        headers: {
          "authorization-token": `Bearer ${token}`,
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

export default DepensesAPI;
