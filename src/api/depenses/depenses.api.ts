import axios from "axios";
import Depenses from "../../models/depenses/depenses.model";

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
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(
    data: Depenses
  ): Promise<DepensesPromiseResponse | undefined> {
    let promiseResponse: DepensesPromiseResponse | undefined = undefined;

    await axios
      .post(`${DepensesAPI.baseUrl}/depenses`, data.toJson(), {
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

  static async getById(id: number): Promise<Depenses | undefined> {
    let depense: Depenses | undefined;
    await axios
      .get(`${DepensesAPI.baseUrl}/depense/${id}`)
      .then((response) => {
        depense = Depenses.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return depense;
  }

  static async getAll(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Depenses[]> {
    let depensesList: Depenses[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${DepensesAPI.baseUrl}/depenses-default`)
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
      .get(`${DepensesAPI.baseUrl}/depenses-default/${startDate}/${endDate}`)
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
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Depenses[]> {
    let depensesList: Depenses[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${DepensesAPI.baseUrl}/depenses/old-to-new`)
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
      .get(`${DepensesAPI.baseUrl}/depenses/old-to-new/${startDate}/${endDate}`)
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
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Depenses[]> {
    let depensesList: Depenses[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${DepensesAPI.baseUrl}/depenses/new-to-old`)
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
      .get(`${DepensesAPI.baseUrl}/depenses/new-to-old/${startDate}/${endDate}`)
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
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Depenses[]> {
    let depensesList: Depenses[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${DepensesAPI.baseUrl}/depenses/most-important`)
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
        `${DepensesAPI.baseUrl}/depenses/most-important/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Depenses[]> {
    let depensesList: Depenses[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${DepensesAPI.baseUrl}/depenses/less-important`)
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
        `${DepensesAPI.baseUrl}/depenses/less-important/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Depenses[]> {
    let depensesList: Depenses[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${DepensesAPI.baseUrl}/depenses/unvalidated`)
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
        `${DepensesAPI.baseUrl}/depenses/unvalidated/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Depenses[]> {
    let depensesList: Depenses[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${DepensesAPI.baseUrl}/depenses/validated`)
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
      .get(`${DepensesAPI.baseUrl}/depenses/validated/${startDate}/${endDate}`)
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
    id: number,
    data: Depenses
  ): Promise<DepensesPromiseResponse | undefined> {
    let promiseResponse: DepensesPromiseResponse | undefined = undefined;

    await axios
      .put(`${DepensesAPI.baseUrl}/depenses/${id}`, data.toJson(), {
        headers: {
          "Content-Type": "multipart/form-data", // Important : spécifiez le type de contenu
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
    id: number
  ): Promise<DepensesPromiseResponse | undefined> {
    let promiseResponse: DepensesPromiseResponse | undefined = undefined;

    await axios
      .delete(`${DepensesAPI.baseUrl}/depenses/${id}`)
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
