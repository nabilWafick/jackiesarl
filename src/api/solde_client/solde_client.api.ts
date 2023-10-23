import axios from "axios";
import SoldeClient from "../../models/solde_client/solde_client.model";

/*
interface SoldeClientJSON {
  total_dettes: number;
  total_paiement: number;
  creance: number;
  avance: number;
}
*/

class SoldeClientAPI {
  private static baseUrl = "http://127.0.0.1:7000/api";

  static async getById(id: number): Promise<SoldeClient | undefined> {
    let soldeClient: SoldeClient | undefined;
    await axios
      .get(`${SoldeClientAPI.baseUrl}/solde-client/${id}`)
      .then((response) => {
        soldeClient = SoldeClient.fromJson(response.data);
        console.log("soldeClient", soldeClient);
      })
      .catch((error) => {
        console.log(error);
      });
    return soldeClient;
  }
}

export default SoldeClientAPI;
