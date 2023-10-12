import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import ModificationsAPI from "../../api/modifications/modifications.api";
import ModificationsEmployes from "../../models/modifications_employes/modifications_employes.model";
import Modifications from "../../models/modifications/modifications.model";
import EmployesAPI from "../../api/employes/employes.api";

interface ModificationsStore {
  modifications: ModificationsEmployes[];
  modificationsPerDay: Map<string, ModificationsEmployes[]>;
  isLoading: boolean;
  fetchAllModifications: () => void;
  sortModificationsNameByASC: () => void;
  sortModificationsNameByDESC: () => void;
  sortModificationsByDate: () => void;
  sortModificationsByDateInterval: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
  sortModificationsByDateIntervalPerDay: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
}

const useModificationsStore = create<ModificationsStore>()(
  persist(
    (set, get) => ({
      modifications: [],
      modificationsPerDay: new Map(),
      selectedClient: undefined,
      isLoading: false,
      fetchAllModifications: async () => {
        const employes = await EmployesAPI.getAll();
        const modificationsList: Modifications[] =
          await ModificationsAPI.getAll();
        const modificationssLenght = get().modifications;
        console.log(modificationssLenght);
        const employesModifications = modificationsList.map(
          (modification) =>
            new ModificationsEmployes(
              modification.modification,
              employes.find(
                (employe) => employe.id === modification.id_employe
              )!,
              modification.id!,
              modification.dateModification
            )
        );

        set(() => ({ modifications: employesModifications }));
      },

      sortModificationsNameByASC: () => {
        set((state) => {
          return {
            modifications: [...state.modifications].sort(
              (modification1, modification2) => {
                return modification1.employe.nom.localeCompare(
                  modification2.employe.nom
                );
              }
            ),
          };
        });
      },
      sortModificationsNameByDESC: () => {
        set((state) => {
          return {
            modifications: [...state.modifications].sort(
              (modification1, modification2) => {
                return modification2.employe.nom.localeCompare(
                  modification1.employe.nom
                );
              }
            ),
          };
        });
      },

      sortModificationsByDate: () => {
        set((state) => {
          const sortedList = [...state.modifications].sort(
            (modification1, modification2) => {
              return (
                modification1.dateModification!.getTime() -
                modification2.dateModification!.getTime()
              );
            }
          );
          return {
            modifications: sortedList,
          };
        });
      },

      sortModificationsByDateInterval: (
        beginningDate: Date,
        endingDate: Date
      ) => {
        set((state) => {
          const sortedList = [...state.modifications].filter((modification) => {
            const modificationDate = modification.dateModification!;
            return (
              modificationDate >= beginningDate &&
              modificationDate <= endingDate
            );
          });
          return {
            modifications: sortedList,
          };
        });
      },

      sortModificationsByDateIntervalPerDay: (
        beginningDate: Date,
        endingDate: Date
      ) => {
        set((state) => {
          state.modifications.forEach((client) => {
            const modificationDate = client.dateModification!;

            // Vérifiez si la date d'ajout est dans l'intervalle spécifié
            if (
              modificationDate >= beginningDate &&
              modificationDate <= endingDate
            ) {
              // Formatez la date d'ajout comme une chaîne de caractères "yyyy-MM-dd"
              const dateKey = modificationDate.toISOString().split("T")[0];

              // Ajoutez le client au groupe correspondant à cette date
              if (!state.modificationsPerDay.has(dateKey)) {
                state.modificationsPerDay.set(dateKey, []);
              }
              state.modificationsPerDay.get(dateKey)!.push(client);
            }
          });

          state.modificationsPerDay.forEach((modifications) => {
            // Triez les Modifications par dateModification, du plus ancien au plus récent
            modifications.sort(
              (a, b) =>
                a.dateModification!.getTime() - b.dateModification!.getTime()
            );
          });

          return { modificationsPerDay: state.modificationsPerDay };
        });
      },
    }),
    {
      name: "ModificationsStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useModificationsStore;
