import axios from "axios";
import Modifications from "../../models/modifications/modifications.model";
import JSConstants from "../../utils/constants";
import Employes from "../../models/employes/employes.model";

interface ModificationsJSON {
  id?: number;
  modification: string;
  details: string;
  nom_employe: string;
  prenoms_employe: string;
  date_modification?: string; // Une chaîne de caractères pour la date au format ISO
}

class ModificationsAPI {
  private static baseUrl = JSConstants.API_BASE_URL;

  static async getById(
    authenticatedEmployee: Employes,
    id: number
  ): Promise<Modifications | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let modification: Modifications | undefined;
    await axios
      .get(`${ModificationsAPI.baseUrl}/modifications/${id}`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        console.log(response.data);
        modification = Modifications.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return modification;
  }

  static async getAll(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Modifications[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let modificationsList: Modifications[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${ModificationsAPI.baseUrl}/modifications-default`, {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        })
        .then((response) => {
          modificationsList = response.data.map(
            (modification: ModificationsJSON) => {
              return Modifications.fromJson(modification);
            }
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as Modifications[];
        });
      return modificationsList;
    }

    await axios
      .get(
        `${ModificationsAPI.baseUrl}/modifications-default/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
      )
      .then((response) => {
        modificationsList = response.data.map(
          (modification: ModificationsJSON) => {
            return Modifications.fromJson(modification);
          }
        );
      })
      .catch((error) => {
        console.log(error);
        return [] as Modifications[];
      });
    return modificationsList;
  }
}

export default ModificationsAPI;
