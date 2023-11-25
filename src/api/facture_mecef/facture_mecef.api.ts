import axios from "axios";
import Employes from "../../models/employes/employes.model";
import JSConstants from "../../utils/constants";
import FactureMECEF from "../../models/facture_mecef/facture_mecef.model";

type FactureMECEFPromiseResponse = {
  status: number;
  factureMECEF?: FactureMECEF;
  error?: string;
};

type ClientsJSON = {
  id?: number;
  nom: string;
  prenoms: string;
  numero_ifu: number;
  numero_telephone: string;
  email: string | null;
  date_ajout?: string;
};

type AchatClientJSON = {
  id?: number;
  client?: ClientsJSON;
  quantite_achetee: number;
  categorie: string;
  montant: number;
  numero_ctp: string;
  bordereau: File | string;
  numero_bc: number;
  id_client: number;
  date_achat?: string;
};
type FactureMECEFJSON = {
  id?: number;
  vente?: AchatClientJSON;
  id_achat?: number;
  reference: string;
  fichier?: File | string;
  date_facture: string;
};

class FactureMECEFAPI {
  private static baseUrl = JSConstants.API_BASE_URL;

  static async create(
    authenticatedEmployee: Employes,
    data: FactureMECEF
  ): Promise<FactureMECEFPromiseResponse | undefined> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: FactureMECEFPromiseResponse | undefined = undefined;
    await axios
      .post(`${FactureMECEFAPI.baseUrl}/facture-mecef`, data.toJson(), {
        headers: {
          "Content-Type": "multipart/form-data",
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
  ): Promise<FactureMECEF | undefined> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let factureMECEF: FactureMECEF | undefined;
    await axios
      .get(`${FactureMECEFAPI.baseUrl}/facture-mecef/${id}`, {
        headers: {
          "authorization-token": `Bearer ${token}`,
        },
      })
      .then((response) => {
        factureMECEF = FactureMECEF.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return factureMECEF;
  }

  static async getAll(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<FactureMECEF[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let facturesMECEFList: FactureMECEF[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${FactureMECEFAPI.baseUrl}/factures-mecef-default`, {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        })
        .then((response) => {
          facturesMECEFList = response.data.map(
            (factureMECEF: FactureMECEFJSON) =>
              FactureMECEF.fromJson(factureMECEF)
          );
          //    console.log("bills in api", response.data);
        })
        .catch((error) => {
          console.log(error);
          return [] as FactureMECEF[];
        });
      return facturesMECEFList;
    }

    await axios
      .get(
        `${FactureMECEFAPI.baseUrl}/factures-mecef-default/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        facturesMECEFList = response.data.map(
          (factureMECEF: FactureMECEFJSON) =>
            FactureMECEF.fromJson(factureMECEF)
        );
        //    console.log("bills in api", response.data);
      })
      .catch((error) => {
        console.log(error);
        return [] as FactureMECEF[];
      });
    return facturesMECEFList;
  }

  static async update(
    authenticatedEmployee: Employes,
    id: number,
    data: FactureMECEF
  ): Promise<FactureMECEFPromiseResponse | undefined> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: FactureMECEFPromiseResponse | undefined = undefined;
    await axios
      .put(`${FactureMECEFAPI.baseUrl}/facture-mecef/${id}`, data.toJson(), {
        headers: {
          "Content-Type": "multipart/form-data",
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

  static async delete(
    authenticatedEmployee: Employes,
    id: number
  ): Promise<FactureMECEFPromiseResponse | undefined> {
    //  console.log("bill id", id);
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";

    let promiseResponse: FactureMECEFPromiseResponse | undefined = undefined;
    await axios
      .delete(`${FactureMECEFAPI.baseUrl}/facture-mecef/${id}`, {
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

export default FactureMECEFAPI;
