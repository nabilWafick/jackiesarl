import axios from 'axios';
import dotenv from 'dotenv';
import AchatClient from '../../models/achat_client/achat_client.model';

dotenv.config(); // Charge les variables d'environnement depuis le fichier .env

class AchatClientApi {
  private static baseUrl: string =  ''; // Utilise la variable d'environnement pour l'URL de base

  static async create(data: AchatClient) {
  
      const response = await axios.post(`${AchatClientApi.baseUrl}/achat-client`, data.toJson);
      return response.data;
    
  }

  static async getById(id: number) {
   
      const response = await axios.get(`${AchatClientApi.baseUrl}/achat-client/${id}`);
      return response.data;
  
  }

  static async getAll() {
   
      const response = await axios.get(`${AchatClientApi.baseUrl}/achat-client`);
      return response.data;
 
  }

  static async update(id: number, data: AchatClient) {
   
      const response = await axios.put(`${AchatClientApi.baseUrl}/achat-client/${id}`, data.toJson);
      return response.data;
 
  }

  static async delete(id: number) {
   
      const response = await axios.delete(`${AchatClientApi.baseUrl}/achat-client/${id}`);
      return response.data;
 
  }
}

export default AchatClientApi;
