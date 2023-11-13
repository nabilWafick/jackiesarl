import axios from "axios";
import Modifications from "../../models/modifications/modifications.model";
import JSConstants from "../../utils/constants";

interface ModificationsJSON {
  id?: number;
  modification: string;
  nom_employe: string;
  prenoms_employe: string;
  dateModification?: string; // Une chaîne de caractères pour la date au format ISO
}

class ModificationsAPI {
  private static baseUrl = JSConstants.API_BASE_URL;

  static async create(data: Modifications) {
    try {
      const response = await axios.post(
        `${ModificationsAPI.baseUrl}/modifications`,
        data.toJson()
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  static async getById(id: number): Promise<Modifications | undefined> {
    let modification: Modifications | undefined;
    await axios
      .get(`${ModificationsAPI.baseUrl}/modifications/${id}`)
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
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Modifications[]> {
    let modificationsList: Modifications[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${ModificationsAPI.baseUrl}/modifications-default`)
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
        `${ModificationsAPI.baseUrl}/modifications-default/${startDate}/${endDate}`
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

  static async update(id: number, data: Modifications) {
    try {
      const response = await axios.put(
        `${ModificationsAPI.baseUrl}/modifications/${id}`,
        data.toJson()
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  static async delete(id: number) {
    try {
      const response = await axios.delete(
        `${ModificationsAPI.baseUrl}/modifications/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default ModificationsAPI;
