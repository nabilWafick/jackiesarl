import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import ActivitesBanque from "../../models/activites_banque/activites_banque.model";
import ActivitesBanqueAPI from "../../api/activites_banque/activites_banque.api";
interface ActivitesBanqueStore {
  activitesBanque: ActivitesBanque[];
  activitesBanquePerDay: Map<string, ActivitesBanque[]>;
  isLoading: boolean;
  fetchAllActivitesBanque: (id_banque: number) => void;
  // sortactivitesBanqueNameByASC: () => void;
  // sortactivitesBanqueNameByDESC: () => void;
  sortActivitesBanqueByDate: () => void;
  sortActivitesBanqueByDateInterval: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
  sortActivitesBanqueByDateIntervalPerDay: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
}

const useActivitesBanque = create<ActivitesBanqueStore>()(
  persist(
    (set, get) => ({
      activitesBanque: [],
      activitesBanquePerDay: new Map(),
      isLoading: false,

      fetchAllActivitesBanque: async (id_depot: number) => {
        const activitesBanqueList: ActivitesBanque[] =
          await ActivitesBanqueAPI.getAllByBanqueID(id_depot);
        const activitesBanqueLenght = get().activitesBanque;
        console.log(activitesBanqueLenght);

        set(() => ({ activitesBanque: activitesBanqueList }));
      },

      /*   
      sortactivitesBanqueNameByASC: () => {
        set((state) => {
          return {
            activitesBanque: [...state.activitesBanque].sort(
              (activite1, activite2) => {
                return activite1.employe.nom.localeCompare(
                  activite2.employe.nom
                );
              }
            ),
          };
        });
      },
      sortactivitesBanqueNameByDESC: () => {
        set((state) => {
          return {
            activitesBanque: [...state.activitesBanque].sort(
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

      sortActivitesBanqueByDate: () => {
        set((state) => {
          const sortedList = [...state.activitesBanque].sort(
            (activite1, activite2) => {
              return (
                activite1.date_activite!.getTime() -
                activite2.date_activite!.getTime()
              );
            }
          );
          return {
            activitesBanque: sortedList,
          };
        });
      },

      sortActivitesBanqueByDateInterval: (
        beginningDate: Date,
        endingDate: Date
      ) => {
        set((state) => {
          const sortedList = [...state.activitesBanque].filter((activite) => {
            const activiteDate = activite.date_activite!;
            return activiteDate >= beginningDate && activiteDate <= endingDate;
          });
          return {
            activitesBanque: sortedList,
          };
        });
      },

      sortActivitesBanqueByDateIntervalPerDay: (
        beginningDate: Date,
        endingDate: Date
      ) => {
        set((state) => {
          state.activitesBanque.forEach((brouillard) => {
            const activiteDate = brouillard.date_activite!;

            // Vérifiez si la date d'ajout est dans l'intervalle spécifié
            if (activiteDate >= beginningDate && activiteDate <= endingDate) {
              // Formatez la date d'ajout comme une chaîne de caractères "yyyy-MM-dd"
              const dateKey = activiteDate.toISOString().split("T")[0];

              // Ajoutez le brouillard au groupe correspondant à cette date
              if (!state.activitesBanquePerDay.has(dateKey)) {
                state.activitesBanquePerDay.set(dateKey, []);
              }
              state.activitesBanquePerDay.get(dateKey)!.push(brouillard);
            }
          });

          state.activitesBanquePerDay.forEach((activitesBanque) => {
            // Triez les activitesBanque par.date_activite, du plus ancien au plus récent
            activitesBanque.sort(
              (a, b) => a.date_activite!.getTime() - b.date_activite!.getTime()
            );
          });

          return { activitesBanquePerDay: state.activitesBanquePerDay };
        });
      },
    }),
    {
      name: "ActivitesBanqueStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useActivitesBanque;
