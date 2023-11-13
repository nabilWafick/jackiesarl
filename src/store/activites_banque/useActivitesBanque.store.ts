/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import ActivitesBanque from "../../models/activites_banque/activites_banque.model";
import ActivitesBanqueAPI from "../../api/activites_banque/activites_banque.api";
interface ActivitesBanqueStore {
  activitesBanque: ActivitesBanque[];
  activitesBanquePerDay: Map<string, ActivitesBanque[]>;
  isLoading: boolean;
  fetchAllActivitesBanque: (id_banque: number) => void;
}

const useActivitesBanqueStore = create<ActivitesBanqueStore>()(
  persist(
    (set, get) => ({
      activitesBanque: [],
      activitesBanquePerDay: new Map(),
      isLoading: false,

      fetchAllActivitesBanque: async (id_depot: number) => {
        const activitesBanqueList: ActivitesBanque[] =
          await ActivitesBanqueAPI.getAllByBanqueID(id_depot);

        set(() => ({ activitesBanque: activitesBanqueList }));
      },
    }),
    {
      name: "ActivitesBanqueStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useActivitesBanqueStore;
