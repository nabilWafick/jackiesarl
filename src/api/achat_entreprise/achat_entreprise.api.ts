import axios from "axios";
import AchatEntreprise from "../../models/achat_entreprise/achat_entreprise.model";
import Employes from "../../models/employes/employes.model";
import JSConstants from "../../utils/constants";
interface AchatEntreprisePromiseResponse {
  status: number;
  achatEntreprise?: number;
  error?: string;
}

interface AchatEntrepriseJson {
  bon_commande: number;
  categorie: string;
  quantite_achetee: number;
  montant: number;
  banque: string;
  cheque: number;
  bordereau: string | File;
  date_achat?: string;
}

class AchatEntrepriseAPI {
  private static baseUrl = JSConstants.API_BASE_URL;

  static async create(
    authenticatedEmployee: Employes,
    data: AchatEntreprise
  ): Promise<AchatEntreprisePromiseResponse | undefined> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: AchatEntreprisePromiseResponse | undefined = undefined;

    await axios
      .post(`${AchatEntrepriseAPI.baseUrl}/achat-entreprise`, data.toJson(), {
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

  static async getByBonCommande(
    authenticatedEmployee: Employes,
    bonCommande: number
  ): Promise<AchatEntreprise | undefined> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let achatEntreprise: AchatEntreprise | undefined;
    await axios
      .get(`${AchatEntrepriseAPI.baseUrl}/achat-entreprise/${bonCommande}`, {
        headers: {
          "authorization-token": `Bearer ${token}`,
        },
      })
      .then((response) => {
        achatEntreprise = AchatEntreprise.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return achatEntreprise;
  }

  static async getAll(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<AchatEntreprise[]> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let achatsEntrepriseList: AchatEntreprise[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(`${AchatEntrepriseAPI.baseUrl}/achats-entreprise-default`, {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        })
        .then((response) => {
          achatsEntrepriseList = response.data.map(
            (achatEntreprise: AchatEntrepriseJson) =>
              AchatEntreprise.fromJson(achatEntreprise)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as AchatEntreprise[];
        });
      return achatsEntrepriseList;
    }
    await axios
      .get(
        `${AchatEntrepriseAPI.baseUrl}/achats-entreprise-default/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-token": `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        achatsEntrepriseList = response.data.map(
          (achatEntreprise: AchatEntrepriseJson) =>
            AchatEntreprise.fromJson(achatEntreprise)
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as AchatEntreprise[];
      });
    return achatsEntrepriseList;
  }

  static async update(
    authenticatedEmployee: Employes,
    bonCommande: number,
    data: AchatEntreprise
  ): Promise<AchatEntreprisePromiseResponse | undefined> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: AchatEntreprisePromiseResponse | undefined = undefined;

    await axios
      .put(
        `${AchatEntrepriseAPI.baseUrl}/achat-entreprise/${bonCommande}`,
        data.toJson(),
        {
          headers: {
            "Content-Type": "multipart/form-data",
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
    bonCommande: number
  ): Promise<AchatEntreprisePromiseResponse | undefined> {
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: AchatEntreprisePromiseResponse | undefined = undefined;

    await axios
      .delete(`${AchatEntrepriseAPI.baseUrl}/achat-entreprise/${bonCommande}`, {
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

export default AchatEntrepriseAPI;
