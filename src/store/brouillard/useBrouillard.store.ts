/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import Brouillard from "../../models/brouillard/brouillard.model";
import BrouillardAPI from "../../api/brouillard/brouillard.api";

interface BrouillardStore {
  brouillards: Brouillard[];
  selectedBrouillard: Brouillard | undefined;
  brouillardPerDay: Map<string, Brouillard[]>;
  isLoading: boolean;
  setSelectedBrouillard: (brouillard: Brouillard) => void;
  fetchAllBrouillard: () => void;
  // sortBrouillardsNameByASC: () => void;
  // sortBrouillardsNameByDESC: () => void;
  sortBrouillardsByDate: () => void;
  sortBrouillardsByDateInterval: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
  sortBrouillardsByDateIntervalPerDay: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
}

const useBrouillardStore = create<BrouillardStore>()(
  persist(
    (set, get) => ({
      brouillards: [],
      brouillardPerDay: new Map(),
      selectedBrouillard: undefined,
      isLoading: false,
      setSelectedBrouillard: (brouillard: Brouillard) => {
        set(() => ({ selectedBrouillard: brouillard }));
      },
      fetchAllBrouillard: async () => {
        const brouillardsList: Brouillard[] = await BrouillardAPI.getAll();

        set(() => ({ brouillards: brouillardsList }));
      },

      /*   
      sortBrouillardsNameByASC: () => {
        set((state) => {
          return {
            brouillards: [...state.brouillards].sort(
              (brouillard1, brouillard2) => {
                return brouillard1.employe.nom.localeCompare(
                  brouillard2.employe.nom
                );
              }
            ),
          };
        });
      },
      sortBrouillardsNameByDESC: () => {
        set((state) => {
          return {
            brouillards: [...state.brouillards].sort(
              (brouillard1, brouillard2) => {
                return brouillard2.employe.nom.localeCompare(
                  brouillard1.employe.nom
                );
              }
            ),
          };
        });
      },
          */

      sortBrouillardsByDate: () => {
        set((state) => {
          const sortedList = [...state.brouillards].sort(
            (brouillard1, brouillard2) => {
              return (
                brouillard1.date_ajout!.getTime() -
                brouillard2.date_ajout!.getTime()
              );
            }
          );
          return {
            brouillards: sortedList,
          };
        });
      },

      sortBrouillardsByDateInterval: (
        beginningDate: Date,
        endingDate: Date
      ) => {
        set((state) => {
          const sortedList = [...state.brouillards].filter((brouillard) => {
            const brouillardDate = brouillard.date_ajout!;
            return (
              brouillardDate >= beginningDate && brouillardDate <= endingDate
            );
          });
          return {
            brouillards: sortedList,
          };
        });
      },

      sortBrouillardsByDateIntervalPerDay: (
        beginningDate: Date,
        endingDate: Date
      ) => {
        set((state) => {
          state.brouillards.forEach((brouillard) => {
            const brouillardDate = brouillard.date_ajout!;

            // Vérifiez si la date d'ajout est dans l'intervalle spécifié
            if (
              brouillardDate >= beginningDate &&
              brouillardDate <= endingDate
            ) {
              // Formatez la date d'ajout comme une chaîne de caractères "yyyy-MM-dd"
              const dateKey = brouillardDate.toISOString().split("T")[0];

              // Ajoutez le brouillard au groupe correspondant à cette date
              if (!state.brouillardPerDay.has(dateKey)) {
                state.brouillardPerDay.set(dateKey, []);
              }
              state.brouillardPerDay.get(dateKey)!.push(brouillard);
            }
          });

          state.brouillardPerDay.forEach((brouillards) => {
            // Triez les brouillards par.date_ajout, du plus ancien au plus récent
            brouillards.sort(
              (a, b) => a.date_ajout!.getTime() - b.date_ajout!.getTime()
            );
          });

          return { brouillardPerDay: state.brouillardPerDay };
        });
      },
    }),
    {
      name: "BrouillardStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useBrouillardStore;
