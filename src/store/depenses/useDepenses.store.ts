/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import Depenses from "../../models/depenses/depenses.model";
import DepensesAPI from "../../api/depenses/depenses.api";

interface DepensesStore {
  depenses: Depenses[];
  depensesPerDay: Map<string, Depenses[]>;
  isLoading: boolean;
  fetchAllDepenses: () => void;
  // sortDepensesNameByASC: () => void;
  // sortDepensesNameByDESC: () => void;
  sortDepensesByDate: () => void;
  sortDepensesByDateInterval: (beginningDate: Date, endingDate: Date) => void;
  sortDepensesByDateIntervalPerDay: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
}

const useDepensesStore = create<DepensesStore>()(
  persist(
    (set, get) => ({
      depenses: [],
      depensesPerDay: new Map(),

      isLoading: false,
      fetchAllDepenses: async () => {
        const depensesList: Depenses[] = await DepensesAPI.getAll();

        set(() => ({ depenses: depensesList }));
      },

      /*   
      sortDepensesNameByASC: () => {
        set((state) => {
          return {
            depenses: [...state.depenses].sort(
              (depense1, depense2) => {
                return depense1.employe.nom.localeCompare(
                  depense2.employe.nom
                );
              }
            ),
          };
        });
      },
      sortDepensesNameByDESC: () => {
        set((state) => {
          return {
            depenses: [...state.depenses].sort(
              (depense1, depense2) => {
                return depense2.employe.nom.localeCompare(
                  depense1.employe.nom
                );
              }
            ),
          };
        });
      },
          */

      sortDepensesByDate: () => {
        set((state) => {
          const sortedList = [...state.depenses].sort((depense1, depense2) => {
            return (
              depense1.date_depense!.getTime() -
              depense2.date_depense!.getTime()
            );
          });
          return {
            depenses: sortedList,
          };
        });
      },

      sortDepensesByDateInterval: (beginningDate: Date, endingDate: Date) => {
        set((state) => {
          const sortedList = [...state.depenses].filter((depense) => {
            const depenseDate = depense.date_depense!;
            return depenseDate >= beginningDate && depenseDate <= endingDate;
          });
          return {
            depenses: sortedList,
          };
        });
      },

      sortDepensesByDateIntervalPerDay: (
        beginningDate: Date,
        endingDate: Date
      ) => {
        set((state) => {
          state.depenses.forEach((depense) => {
            const depenseDate = depense.date_depense!;

            // Vérifiez si la date d'ajout est dans l'intervalle spécifié
            if (depenseDate >= beginningDate && depenseDate <= endingDate) {
              // Formatez la date d'ajout comme une chaîne de caractères "yyyy-MM-dd"
              const dateKey = depenseDate.toISOString().split("T")[0];

              // Ajoutez le depense au groupe correspondant à cette date
              if (!state.depensesPerDay.has(dateKey)) {
                state.depensesPerDay.set(dateKey, []);
              }
              state.depensesPerDay.get(dateKey)!.push(depense);
            }
          });

          state.depensesPerDay.forEach((depenses) => {
            // Triez les depenses par date_depense, du plus ancien au plus récent
            depenses.sort(
              (a, b) => a.date_depense!.getTime() - b.date_depense!.getTime()
            );
          });

          return { depensesPerDay: state.depensesPerDay };
        });
      },
    }),
    {
      name: "DepensesStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useDepensesStore;
