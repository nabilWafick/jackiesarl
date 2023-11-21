import axios from "axios";
import Brouillard from "../../models/brouillard/brouillard.model";
import Employes from "../../models/employes/employes.model";
import JSConstants from "../../utils/constants";

interface BrouillardPromiseRsponse {
  status: number;
  brouillard?: Brouillard;
  error?: string;
}

interface BrouillardJSON {
  id?: number;
  depot: string;
  stock_actuel: number;
  nom_gerant: string;
  numero_gerant: string;
  date_ajout?: string;
}

class BrouillardAPI {
  private static baseUrl = JSConstants.API_BASE_URL;

  static async create(
    authenticatedEmployee: Employes,
    data: Brouillard
  ): Promise<BrouillardPromiseRsponse | undefined> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: BrouillardPromiseRsponse | undefined = undefined;

    await axios
      .post(`${BrouillardAPI.baseUrl}/brouillard`, data.toJson(), {
        headers: {
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
  ): Promise<Brouillard | undefined> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let brouillard: Brouillard | undefined;
    await axios
      .get(`${BrouillardAPI.baseUrl}/brouillard/${id}`, {
        headers: {
          "authorization-token": `Bearer ${token}`,
        },
      })
      .then((response) => {
        brouillard = Brouillard.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return brouillard;
  }

  static async getAll(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Brouillard[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let brouillardList: Brouillard[] = [];

    if (!startDate && !endDate) {
      await axios
        .get(`${BrouillardAPI.baseUrl}/brouillards-default`, {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        })
        .then((response) => {
          brouillardList = response.data.map((brouillard: BrouillardJSON) =>
            Brouillard.fromJson(brouillard)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as Brouillard[];
        });
      return brouillardList;
    }

    await axios
      .get(
        `${BrouillardAPI.baseUrl}/brouillards-default/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        brouillardList = response.data.map((brouillard: BrouillardJSON) =>
          Brouillard.fromJson(brouillard)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as Brouillard[];
      });
    return brouillardList;
  }

  static async update(
    authenticatedEmployee: Employes,
    id: number,
    is_current_stock_increasing: number,
    data: Brouillard
  ): Promise<BrouillardPromiseRsponse | undefined> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: BrouillardPromiseRsponse | undefined = undefined;

    await axios
      .put(
        `${BrouillardAPI.baseUrl}/brouillard/${id}/${is_current_stock_increasing}`,
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
      });
    return promiseResponse;
  }

  static async delete(
    authenticatedEmployee: Employes,
    id: number
  ): Promise<BrouillardPromiseRsponse | undefined> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: BrouillardPromiseRsponse | undefined = undefined;

    await axios
      .delete(`${BrouillardAPI.baseUrl}/brouillard/${id}`, {
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

export default BrouillardAPI;
