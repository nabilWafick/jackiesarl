/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import SoldeClient from "../../models/solde_client/solde_client.model";
import SoldeClientAPI from "../../api/solde_client/solde_client.api";

interface SoldeClientStore {
  soldeClient: SoldeClient;
  fetchSoldeClient: (idClient: number) => void;
}

const useSoldeClientStore = create<SoldeClientStore>()(
  persist(
    (set, get) => {
      return {
        soldeClient: new SoldeClient(
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ),
        fetchSoldeClient: async (idClient: number) => {
          const newSoldeClient = await SoldeClientAPI.getById(idClient);
          set(() => ({
            soldeClient: newSoldeClient,
          }));
        },
      };
    },
    {
      name: "SoldeClientStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useSoldeClientStore;
