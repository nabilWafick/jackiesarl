import axios from "axios";
import Clients from "../../models/clients/clients.model";
import Employes from "../../models/employes/employes.model";
import JSConstants from "../../utils/constants";
interface ClientsPromiseResponse {
  status: number;
  client?: ClientsJSON;
  error?: string;
  errors?: {
    firstname: string | null;
    lastname: string | null;
    phoneNumber: string | null;
    ifuNumber: string | null;
    email: string | null;
  };
}

interface ClientsJSON {
  id?: number;
  nom: string;
  prenoms: string;
  numero_ifu: number;
  numero_telephone: string;
  email: string | null;
  date_ajout?: string;
}

class ClientsAPI {
  private static baseUrl = JSConstants.API_BASE_URL;

  static async create(
    authenticatedEmployee: Employes,
    data: Clients
  ): Promise<ClientsPromiseResponse | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let promiseResponse: ClientsPromiseResponse | undefined = undefined;
    await axios
      .post(`${ClientsAPI.baseUrl}/clients`, data.toJson(), {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        console.log(error);
        promiseResponse = error.response.data;
      });
    return promiseResponse;
  }

  static async getById(
    authenticatedEmployee: Employes,
    id: number
  ): Promise<Clients | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let client: Clients | undefined;
    await axios
      .get(`${ClientsAPI.baseUrl}/client/${id}`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        client = Clients.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return client;
  }

  static async getAllMatched(
    authenticatedEmployee: Employes,
    name: string
  ): Promise<Clients[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let clientsList: Clients[] = [];
    await axios
      .get(`${ClientsAPI.baseUrl}/clients/search/${name}`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        clientsList = response.data.map((client: ClientsJSON) =>
          Clients.fromJson(client)
        );
      })
      .catch(() => {
        return [] as Clients[];
      });
    return clientsList;
  }

  static async getAll(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Clients[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";

    let clientsList: Clients[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${ClientsAPI.baseUrl}/clients-default`, {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        })
        .then((response) => {
          clientsList = response.data.map((client: ClientsJSON) =>
            Clients.fromJson(client)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as Clients[];
        });
      return clientsList;
    }

    await axios
      .get(`${ClientsAPI.baseUrl}/clients/${startDate}/${endDate}`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        clientsList = response.data.map((client: ClientsJSON) =>
          Clients.fromJson(client)
        );
      })
      .catch(() => {
        return [] as Clients[];
      });
    return clientsList;
  }

  static async getAllByAlphabeticalOrder(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Clients[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let clientsList: Clients[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${ClientsAPI.baseUrl}/clients/alphabetical-order`, {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        })
        .then((response) => {
          clientsList = response.data.map((client: ClientsJSON) =>
            Clients.fromJson(client)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as Clients[];
        });
      return clientsList;
    }

    await axios
      .get(
        `${ClientsAPI.baseUrl}/clients/alphabetical-order/${startDate}/${endDate}`,
        {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        }
      )
      .then((response) => {
        clientsList = response.data.map((client: ClientsJSON) =>
          Clients.fromJson(client)
        );
      })
      .catch(() => {
        return [] as Clients[];
      });
    return clientsList;
  }

  static async getAllFromOldToNew(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Clients[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let clientsList: Clients[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${ClientsAPI.baseUrl}/clients/old-to-new`, {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        })
        .then((response) => {
          clientsList = response.data.map((client: ClientsJSON) =>
            Clients.fromJson(client)
          );
        })
        .catch((error) => {
          console.log(error);
          return [] as Clients[];
        });
      return clientsList;
    }

    await axios
      .get(`${ClientsAPI.baseUrl}/clients/old-to-new/${startDate}/${endDate}`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        clientsList = response.data.map((client: ClientsJSON) =>
          Clients.fromJson(client)
        );
      })
      .catch(() => {
        return [] as Clients[];
      });
    return clientsList;
  }

  static async getAllFromNewToOld(
    authenticatedEmployee: Employes,
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Clients[]> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    let clientsList: Clients[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(`${ClientsAPI.baseUrl}/clients/new-to-old`, {
          headers: {
            "authorization-tokens": `Bearer ${accesToken} ${token} `,
          },
        })
        .then((response) => {
          clientsList = response.data.map((client: ClientsJSON) =>
            Clients.fromJson(client)
          );
        })
        .catch(() => {
          //  console.log(error);
          return [] as Clients[];
        });
      return clientsList;
    }
    await axios
      .get(`${ClientsAPI.baseUrl}/clients/new-to-old/${startDate}/${endDate}`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        clientsList = response.data.map((client: ClientsJSON) =>
          Clients.fromJson(client)
        );
      })
      .catch(() => {
        return [] as Clients[];
      });
    return clientsList;
  }

  static async update(
    authenticatedEmployee: Employes,
    id: number,
    data: Clients
  ): Promise<ClientsPromiseResponse | undefined> {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";

    let promiseResponse: ClientsPromiseResponse | undefined = undefined;

    await axios
      .put(`${ClientsAPI.baseUrl}/clients/${id}`, data.toJson(), {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
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

  /*
  static async delete(authenticatedEmployee: Employes, id: number) {
    const accesToken =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.accessToken
        : "accessToken";
    const token =
      authenticatedEmployee != undefined
        ? authenticatedEmployee.token
        : "token";
    await axios
      .delete(`${ClientsAPI.baseUrl}/clients/${id}`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  */
}

export default ClientsAPI;
