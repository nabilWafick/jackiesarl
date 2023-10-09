import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import ActivitesDepot from "../../models/activites_depot/activites_depot.model";
import ActivitesDepotAPI from "../../api/activites_depot/activites_depot.api";

interface ActivitesDepotStore {
  activitesDepot: ActivitesDepot[];
  activitesDepotPerDay: Map<string, ActivitesDepot[]>;
  isLoading: boolean;
  fetchAllActivitesDepot: (id_depot: number) => void;
  // sortactivitesDepotNameByASC: () => void;
  // sortactivitesDepotNameByDESC: () => void;
  sortActivitesByDate: () => void;
  sortActivitesByDateInterval: (beginningDate: Date, endingDate: Date) => void;
  sortActivitesByDateIntervalPerDay: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
}

const useActivitesDepotStore = create<ActivitesDepotStore>()(
  persist(
    (set, get) => ({
      activitesDepot: [],
      activitesDepotPerDay: new Map(),
      isLoading: false,

      fetchAllActivitesDepot: async (id_depot: number) => {
        const activitesDepotList: ActivitesDepot[] =
          await ActivitesDepotAPI.getAllByDepotID(id_depot);
        const activitesDepotsLenght = get().activitesDepot;
        console.log(activitesDepotsLenght);

        set(() => ({ activitesDepot: activitesDepotList }));
      },

      /*   
      sortactivitesDepotNameByASC: () => {
        set((state) => {
          return {
            activitesDepot: [...state.activitesDepot].sort(
              (activite1, activite2) => {
                return activite1.employe.nom.localeCompare(
                  activite2.employe.nom
                );
              }
            ),
          };
        });
      },
      sortactivitesDepotNameByDESC: () => {
        set((state) => {
          return {
            activitesDepot: [...state.activitesDepot].sort(
              (activite1, activite2) => {
                return activite2.employe.nom.localeCompare(
                  activite1.employe.nom
                );
              }
            ),
          };
        });
      },
          */

      sortActivitesByDate: () => {
        set((state) => {
          const sortedList = [...state.activitesDepot].sort(
            (activite1, activite2) => {
              return (
                activite1.date_remplissage!.getTime() -
                activite2.date_remplissage!.getTime()
              );
            }
          );
          return {
            activitesDepot: sortedList,
          };
        });
      },

      sortActivitesByDateInterval: (beginningDate: Date, endingDate: Date) => {
        set((state) => {
          const sortedList = [...state.activitesDepot].filter((activite) => {
            const activiteDate = activite.date_remplissage!;
            return activiteDate >= beginningDate && activiteDate <= endingDate;
          });
          return {
            activitesDepot: sortedList,
          };
        });
      },

      sortActivitesByDateIntervalPerDay: (
        beginningDate: Date,
        endingDate: Date
      ) => {
        set((state) => {
          state.activitesDepot.forEach((brouillard) => {
            const activiteDate = brouillard.date_remplissage!;

            // Vérifiez si la date d'ajout est dans l'intervalle spécifié
            if (activiteDate >= beginningDate && activiteDate <= endingDate) {
              // Formatez la date d'ajout comme une chaîne de caractères "yyyy-MM-dd"
              const dateKey = activiteDate.toISOString().split("T")[0];

              // Ajoutez le brouillard au groupe correspondant à cette date
              if (!state.activitesDepotPerDay.has(dateKey)) {
                state.activitesDepotPerDay.set(dateKey, []);
              }
              state.activitesDepotPerDay.get(dateKey)!.push(brouillard);
            }
          });

          state.activitesDepotPerDay.forEach((activitesDepot) => {
            // Triez les activitesDepot par.date_remplissage, du plus ancien au plus récent
            activitesDepot.sort(
              (a, b) =>
                a.date_remplissage!.getTime() - b.date_remplissage!.getTime()
            );
          });

          return { activitesDepotPerDay: state.activitesDepotPerDay };
        });
      },
    }),
    {
      name: "ActivitesDepotStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useActivitesDepotStore;
