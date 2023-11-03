import Employes from "../../models/employes/employes.model";
import axios from "axios";

axios.defaults.withCredentials = true;

interface AuthPromiseResponse {
  status: number;
  employe?: Employes;
  message?: string;
  error?: string;
  errors?: {
    firstname: null | string;
    lastname: null | string;
    email: null | string;
    phoneNumber: null | string;
  };
}

interface AuthData {
  email: string;
  password: string;
}

/*
interface EmployesJSON {
    id?: number;
    nom: string;
    prenoms: string;
    email: string;
    numero_telephone: string;
    password: string;
    role: string;
    permissions: { [key: string]: boolean };
    token?: string;
    date_ajout?: string;
}
*/

class AuthAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async register(
    data: Employes
  ): Promise<AuthPromiseResponse | undefined> {
    let promiseResponse: AuthPromiseResponse | undefined = undefined;

    await axios
      .post(`${AuthAPI.baseUrl}/auth/register`, data.toJson())
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        promiseResponse = error.response.data;
        console.error(error);
      });

    return promiseResponse;
  }

  static async login(data: AuthData): Promise<AuthPromiseResponse | undefined> {
    let promiseResponse: AuthPromiseResponse | undefined = undefined;

    await axios
      .post(`${AuthAPI.baseUrl}/auth/login`, data)
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        promiseResponse = error.response.data;
        console.error(error);
      });

    return promiseResponse;
  }

  static verifyAuthentication(
    employee: Employes | undefined
  ): AuthPromiseResponse | undefined {
    const accesToken =
      employee != undefined ? employee.accessToken : "accessToken";
    const token = employee != undefined ? employee.token : "token";

    let promiseResponse: AuthPromiseResponse | undefined = undefined;

    axios
      .get(`${AuthAPI.baseUrl}/auth/verify-authentication`, {
        headers: {
          "authorization-tokens": `Bearer ${accesToken} ${token} `,
        },
      })
      .then((response) => {
        promiseResponse = response.data;
      })
      .catch((error) => {
        promiseResponse = error.response.data;
        console.error(error);
      });

    return promiseResponse;
  }

  static async logout(): Promise<AuthPromiseResponse | undefined> {
    let promiseResponse: AuthPromiseResponse | undefined = undefined;

    await axios
      .post(`${AuthAPI.baseUrl}/auth/logout`)
      .then((response) => {
        location.reload();
        promiseResponse = response.data;
      })
      .catch((error) => {
        promiseResponse = error.response.data;
        console.error(error);
      });

    return promiseResponse;
  }
}

export default AuthAPI;
