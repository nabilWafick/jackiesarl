import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import SoldeCourantAPI from "../../api/solde_courant/solde_courant.api";
import SoldeCourant from "../../models/solde_courant/solde_courant.model";

interface SoldeCourantStore {
  soldeCourant: SoldeCourant[];
  soldeCourantPerDay: Map<string, SoldeCourant[]>;
  selectedSoldeCourant: SoldeCourant | undefined;
  isLoading: boolean;
  setSelectedSoldeCourant: (soldeCourant: SoldeCourant) => void;
  fetchAllSoldeCourant: () => void;
  // sortSoldeCourantNameByASC: () => void;
  // sortSoldeCourantNameByDESC: () => void;
  sortSoldeCourantByDate: () => void;
  sortSoldeCourantByDateInterval: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
  sortSoldeCourantByDateIntervalPerDay: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
}

const useSoldeCourantStore = create<SoldeCourantStore>()(
  persist(
    (set, get) => ({
      soldeCourant: [],
      soldeCourantPerDay: new Map(),
      selectedSoldeCourant: undefined,
      isLoading: false,
      setSelectedSoldeCourant: (soldeCourant: SoldeCourant) => {
        set(() => ({
          selectedSoldeCourant: soldeCourant,
        }));
        console.log("selectedCourant:", soldeCourant.id);
      },

      fetchAllSoldeCourant: async () => {
        const soldeCourantList: SoldeCourant[] = await SoldeCourantAPI.getAll();
        const soldeCourantLenght = get().soldeCourant;
        console.log(soldeCourantLenght);

        set(() => ({ soldeCourant: soldeCourantList }));
      },

      /*   
      sortSoldeCourantNameByASC: () => {
        set((state) => {
          return {
            soldeCourant: [...state.soldeCourant].sort(
              (depense1, depense2) => {
                return depense1.employe.nom.localeCompare(
                  depense2.employe.nom
                );
              }
            ),
          };
        });
      },
      sortSoldeCourantNameByDESC: () => {
        set((state) => {
          return {
            soldeCourant: [...state.soldeCourant].sort(
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

      sortSoldeCourantByDateInterval: (
        beginningDate: Date,
        endingDate: Date
      ) => {
        set((state) => {
          const sortedList = [...state.soldeCourant].filter((depense) => {
            const depenseDate = depense.date_ajout!;
            return depenseDate >= beginningDate && depenseDate <= endingDate;
          });
          return {
            soldeCourant: sortedList,
          };
        });
      },

      sortSoldeCourantByDateIntervalPerDay: (
        beginningDate: Date,
        endingDate: Date
      ) => {
        set((state) => {
          state.soldeCourant.forEach((depense) => {
            const depenseDate = depense.date_ajout!;

            // Vérifiez si la date d'ajout est dans l'intervalle spécifié
            if (depenseDate >= beginningDate && depenseDate <= endingDate) {
              // Formatez la date d'ajout comme une chaîne de caractères "yyyy-MM-dd"
              const dateKey = depenseDate.toISOString().split("T")[0];

              // Ajoutez le depense au groupe correspondant à cette date
              if (!state.soldeCourantPerDay.has(dateKey)) {
                state.soldeCourantPerDay.set(dateKey, []);
              }
              state.soldeCourantPerDay.get(dateKey)!.push(depense);
            }
          });

          state.soldeCourantPerDay.forEach((soldeCourant) => {
            // Triez les soldeCourant par.date_ajout, du plus ancien au plus récent
            soldeCourant.sort(
              (a, b) => a.date_ajout!.getTime() - b.date_ajout!.getTime()
            );
          });

          return { soldeCourantPerDay: state.soldeCourantPerDay };
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
