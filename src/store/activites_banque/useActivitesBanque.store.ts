/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import ActivitesBanque from "../../models/activites_banque/activites_banque.model";
import ActivitesBanqueAPI from "../../api/activites_banque/activites_banque.api";
import Employes from "../../models/employes/employes.model";
interface ActivitesBanqueStore {
  activitesBanque: ActivitesBanque[];
  activitesBanquePerDay: Map<string, ActivitesBanque[]>;
  isLoading: boolean;
  authenticatedEmployee: Employes | undefined;
  setAuthenticatedEmployee: (employee: Employes) => void;
  fetchAllActivitesBanque: (id_banque: number) => void;
}

const useActivitesBanqueStore = create<ActivitesBanqueStore>()(
  persist(
    (set, get) => ({
      activitesBanque: [],
      activitesBanquePerDay: new Map(),
      isLoading: false,
      authenticatedEmployee: undefined,
      setAuthenticatedEmployee: (employee) => {
        set(() => ({ authenticatedEmployee: employee }));
      },
      fetchAllActivitesBanque: async (id_depot: number) => {
        const auth = get().authenticatedEmployee;
        const activitesBanqueList: ActivitesBanque[] =
          await ActivitesBanqueAPI.getAllByBanqueID(auth!, id_depot);

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
