import axios from "axios";
import Clients from "../../models/clients/clients.model";

// Charge les variables d'environnement depuis le fichier .env

class ClientsAPI {
  private static  baseUrl =  "http://127.0.0.1:7000/api";
  
  /* private static headers = {
    "Authorization": "Bearer token",
    "Content-Type": "Application/json",
  };*/

  static async create(data: Clients) {
    await axios
      .post(`${ClientsAPI.baseUrl}/clients`, data.toJson(),)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static async getById(id: number) {
    
    await axios
      .get(`${ClientsAPI.baseUrl}/clients/${id}`,)
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
      .get(`${ClientsAPI.baseUrl}/clients`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static async update(id: number, data: Clients) {
    await axios
      .put(`${ClientsAPI.baseUrl}/clients/${id}`, data.toJson(),)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static async delete(id: number) {
    await axios
      .delete(`${ClientsAPI.baseUrl}/clients/${id}`,)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default ClientsAPI;
