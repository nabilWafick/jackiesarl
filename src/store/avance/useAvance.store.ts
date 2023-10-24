/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import SoldeClient from "../../models/solde_client/solde_client.model";
import SoldeClientAPI from "../../api/solde_client/solde_client.api";

interface AvanceStore {
  avances: SoldeClient[];
  fetchAvances: () => void;
}

const useAvanceStore = create<AvanceStore>()(
  persist(
    (set, get) => {
      return {
        avances: [],
        fetchAvances: async () => {
          const avancesList = await SoldeClientAPI.getAll();
          set(() => ({
            avances: avancesList,
          }));
        },
      };
    },
    {
      name: "AvanceStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAvanceStore;
