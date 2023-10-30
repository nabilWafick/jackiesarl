import axios from "axios";
import AchatEntreprise from "../../models/achat_entreprise/achat_entreprise.model";
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
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(
    data: AchatEntreprise
  ): Promise<AchatEntreprisePromiseResponse | undefined> {
    let promiseResponse: AchatEntreprisePromiseResponse | undefined = undefined;

    await axios
      .post(`${AchatEntrepriseAPI.baseUrl}/achat-entreprise`, data.toJson(), {
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

  static async getByBonCommande(
    bonCommande: number
  ): Promise<AchatEntreprise | undefined> {
    let achatEntreprise: AchatEntreprise | undefined;
    await axios
      .get(`${AchatEntrepriseAPI.baseUrl}/achat-entreprise/${bonCommande}`)
      .then((response) => {
        achatEntreprise = AchatEntreprise.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return achatEntreprise;
  }

  static async getAll(
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<AchatEntreprise[]> {
    let achatsEntrepriseList: AchatEntreprise[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(`${AchatEntrepriseAPI.baseUrl}/achats-entreprise-default`)
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
        `${AchatEntrepriseAPI.baseUrl}/achats-entreprise-default/${startDate}/${endDate}`
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
    bonCommande: number,
    data: AchatEntreprise
  ): Promise<AchatEntreprisePromiseResponse | undefined> {
    let promiseResponse: AchatEntreprisePromiseResponse | undefined = undefined;

    await axios
      .put(
        `${AchatEntrepriseAPI.baseUrl}/achat-entreprise/${bonCommande}`,
        data.toJson(),
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important : spécifiez le type de contenu
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
    bonCommande: number
  ): Promise<AchatEntreprisePromiseResponse | undefined> {
    let promiseResponse: AchatEntreprisePromiseResponse | undefined = undefined;

    await axios
      .delete(`${AchatEntrepriseAPI.baseUrl}/achat-entreprise/${bonCommande}`)
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
