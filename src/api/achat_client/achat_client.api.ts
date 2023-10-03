import axios from "axios";
import AchatClient from "../../models/achat_client/achat_client.model";

// Charge les variables d'environnement depuis le fichier .env

class AchatClientApi {
  private static  baseUrl =  "http://127.0.0.1:7000/api";
  private static headers = {
    "Authorization": "Bearer token",
    "Content-Type": "Application/json",
  };

  static async create(data: AchatClient) {
    await axios
      .post(`${AchatClientApi.baseUrl}/achat-client`, data.toJson,)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static async getById(id: number) {
    
    await axios
      .get(`${AchatClientApi.baseUrl}/achat-client/${id},`,)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      
     console.log(`id ${id}`)
  }

  static async getAll() {
    await axios
      .get(`${AchatClientApi.baseUrl}/achat-client`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static async update(id: number, data: AchatClient) {
    await axios
      .put(`${AchatClientApi.baseUrl}/achat-client/${id}`, data.toJson,)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static async delete(id: number) {
    await axios
      .delete(`${AchatClientApi.baseUrl}/achat-client/${id}`,)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default AchatClientApi;
