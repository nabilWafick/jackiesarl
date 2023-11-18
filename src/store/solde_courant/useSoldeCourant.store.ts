/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import SoldeCourantAPI from "../../api/solde_courant/solde_courant.api";
import SoldeCourant from "../../models/solde_courant/solde_courant.model";
import Employes from "../../models/employes/employes.model";

interface SoldeCourantStore {
  soldeCourant: SoldeCourant[];
  soldeCourantPerDay: Map<string, SoldeCourant[]>;
  selectedSoldeCourant: SoldeCourant | undefined;
  isLoading: boolean;
  authenticatedEmployee: Employes | undefined;
  setAuthenticatedEmployee: (employee: Employes) => void;
  setSelectedSoldeCourant: (soldeCourant: SoldeCourant) => void;
  fetchAllSoldeCourant: () => void;
}

const useSoldeCourantStore = create<SoldeCourantStore>()(
  persist(
    (set, get) => ({
      soldeCourant: [],
      soldeCourantPerDay: new Map(),
      selectedSoldeCourant: undefined,
      isLoading: false,
      authenticatedEmployee: undefined,
      setAuthenticatedEmployee: (employee) => {
        set(() => ({ authenticatedEmployee: employee }));
      },
      setSelectedSoldeCourant: (soldeCourant: SoldeCourant) => {
        set(() => ({
          selectedSoldeCourant: soldeCourant,
        }));
      },

      fetchAllSoldeCourant: async () => {
        const auth = get().authenticatedEmployee;
        const soldeCourantList: SoldeCourant[] = await SoldeCourantAPI.getAll(
          auth!
        );
        set(() => ({ soldeCourant: soldeCourantList }));
      },

      sortSoldeCourantByDate: () => {
        set((state) => {
          const sortedList = [...state.soldeCourant].sort(
            (depense1, depense2) => {
              return (
                depense1.date_ajout!.getTime() - depense2.date_ajout!.getTime()
              );
            }
          );
          return {
            soldeCourant: sortedList,
          };
        });
      },
    }),
    {
      name: "SoldeCourantStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useSoldeCourantStore;
