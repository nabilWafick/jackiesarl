import axios from "axios";
import AchatEntreprise from "../../models/achat_entreprise/achat_entreprise.model";

interface AchatEntrepriseJson {
  bon_commande: number;
  quantite_achetee: number;
  montant: number;
  banque: string;
  cheque: string;
  bordereau: string;
  date_achat?: string;
}

class AchatEntrepriseAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(data: AchatEntreprise) {
    try {
      const response = await axios.post(
        `${AchatEntrepriseAPI.baseUrl}/achat-entreprise`,
        data.toJson()
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  static async getByBonCommande(
    bonCommande: number
  ): Promise<AchatEntreprise | undefined> {
    let achatEntreprise: AchatEntreprise | undefined;
    await axios
      .get(`${AchatEntrepriseAPI.baseUrl}/achat-entreprise/${bonCommande}`)
      .then((response) => {
        console.log(response.data);
        achatEntreprise = AchatEntreprise.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return achatEntreprise;
  }

  static async getAll(): Promise<AchatEntreprise[]> {
    let achatsEntrepriseList: AchatEntreprise[] = [];
    await axios
      .get(`${AchatEntrepriseAPI.baseUrl}/achat-entreprise`)
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

  static async update(bonCommande: number, data: AchatEntreprise) {
    try {
      const response = await axios.put(
        `${AchatEntrepriseAPI.baseUrl}/achat-entreprise/${bonCommande}`,
        data.toJson()
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  static async delete(bonCommande: number) {
    try {
      const response = await axios.delete(
        `${AchatEntrepriseAPI.baseUrl}/achat-entreprise/${bonCommande}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default AchatEntrepriseAPI;
