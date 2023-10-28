import axios from "axios";
import Clients from "../../models/clients/clients.model";
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
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async create(
    data: Clients
  ): Promise<ClientsPromiseResponse | undefined> {
    let promiseResponse: ClientsPromiseResponse | undefined = undefined;
    await axios
      .post(`${ClientsAPI.baseUrl}/clients`, data.toJson())
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        console.log(error);
        promiseResponse = error.response.data;
      });
    return promiseResponse;
  }

  static async getById(id: number): Promise<Clients | undefined> {
    let client: Clients | undefined;
    await axios
      .get(`${ClientsAPI.baseUrl}/client/${id}`)
      .then((response) => {
        client = Clients.fromJson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return client;
  }

  static async getAllMatched(name: string): Promise<Clients[]> {
    let clientsList: Clients[] = [];
    await axios
      .get(`${ClientsAPI.baseUrl}/clients/search/${name}`)
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
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Clients[]> {
    let clientsList: Clients[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${ClientsAPI.baseUrl}/clients-default`)
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
      .get(`${ClientsAPI.baseUrl}/clients/${startDate}/${endDate}`)
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
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Clients[]> {
    let clientsList: Clients[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${ClientsAPI.baseUrl}/clients/alphabetical-order`)
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
        `${ClientsAPI.baseUrl}/clients/alphabetical-order/${startDate}/${endDate}`
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
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Clients[]> {
    let clientsList: Clients[] = [];

    if (!startDate || !endDate) {
      await axios
        .get(`${ClientsAPI.baseUrl}/clients/old-to-new`)
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
      .get(`${ClientsAPI.baseUrl}/clients/old-to-new/${startDate}/${endDate}`)
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
    startDate: string | undefined,
    endDate: string | undefined
  ): Promise<Clients[]> {
    let clientsList: Clients[] = [];
    if (!startDate || !endDate) {
      await axios
        .get(`${ClientsAPI.baseUrl}/clients/new-to-old`)
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
      .get(`${ClientsAPI.baseUrl}/clients/new-to-old/${startDate}/${endDate}`)
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

  static async update(id: number, data: Clients) {
    await axios
      .put(`${ClientsAPI.baseUrl}/clients/${id}`, data.toJson())
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static async delete(id: number) {
    await axios
      .delete(`${ClientsAPI.baseUrl}/clients/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default ClientsAPI;
