/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import SoldeClient from "../../models/solde_client/solde_client.model";
import SoldeClientAPI from "../../api/solde_client/solde_client.api";

interface CreanceStore {
  creances: SoldeClient[];
  fetchCreances: () => void;
}

const useCreanceStore = create<CreanceStore>()(
  persist(
    (set, get) => {
      return {
        creances: [],
        fetchCreances: async () => {
          const creancesList = await SoldeClientAPI.getAll();
          set(() => ({
            creances: creancesList,
          }));
        },
      };
    },
    {
      name: "CreanceStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCreanceStore;
