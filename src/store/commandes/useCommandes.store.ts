/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import Commandes from "../../models/commandes/commandes.model";
import CommandesAPI from "../../api/commandes/commandes.api";
interface CommandesStore {
  clientsOrders: Commandes[];
  clientsOrdersPerDay: Map<string, Commandes[]>;
  isLoading: boolean;
  fetchAllClientsOrders: () => void;
  sortClientsOrdersByCIMBENINCategory: () => void;
  sortClientsOrdersNOCIBECategory: () => void;
  sortClientsOrdersOTHERCategory: () => void;
  sortClientsOrdersByDate: () => void;
  sortClientsOrdersByDateInterval: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
  sortClientsOrdersByDateIntervalPerDay: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
}

const useCommandesStore = create<CommandesStore>()(
  persist(
    (set, get) => ({
      clientsOrders: [],
      clientsOrdersPerDay: new Map(),
      isLoading: false,
      fetchAllClientsOrders: async () => {
        const clientsOrdersList = await CommandesAPI.getAll();

        set(() => ({ clientsOrders: clientsOrdersList }));
      },
      sortClientsOrdersByCIMBENINCategory: () => {
        set((state) => {
          const sortedList = [...state.clientsOrders].filter(
            (clientOrder) => clientOrder.categorie === "CIM BENIN"
          );

          return {
            clientsOrders: sortedList,
          };
        });
      },
      sortClientsOrdersNOCIBECategory: () => {
        set((state) => {
          const sortedList = [...state.clientsOrders].filter(
            (clientOrder) => clientOrder.categorie === "NOCIBE"
          );
          return {
            clientsOrders: sortedList,
          };
        });
      },
      sortClientsOrdersOTHERCategory: () => {
        set((state) => {
          const sortedList = [...state.clientsOrders].filter(
            (clientOrder) => clientOrder.categorie === "Autres"
          );

          return {
            clientsOrders: sortedList,
          };
        });
      },
      sortClientsOrdersByDate: () => {
        set((state) => {
          const sortedList = [...state.clientsOrders].sort(
            (clientOrder1, clientOrder2) =>
              clientOrder1.date_ajout!.getTime() -
              clientOrder2.date_ajout!.getTime()
          );
          return {
            clientsOrders: sortedList,
          };
        });
      },
      sortClientsOrdersByDateInterval: (
        beginningDate: Date,
        endingDate: Date
      ) => {
        set((state) => {
          const sortedList = [...state.clientsOrders].filter((clientOrder) => {
            const orderDate = clientOrder.date_ajout!;
            return orderDate >= beginningDate && orderDate <= endingDate;
          });
          return {
            clientsOrders: sortedList,
          };
        });
      },
      sortClientsOrdersByDateIntervalPerDay: (
        beginningDate: Date,
        endingDate: Date
      ) => {
        set((state) => {
          state.clientsOrders.forEach((clientOrder) => {
            const clientDate = clientOrder.date_ajout!;

            // Vérifiez si la date d'ajout est dans l'intervalle spécifié
            if (clientDate >= beginningDate && clientDate <= endingDate) {
              // Formatez la date d'ajout comme une chaîne de caractères "yyyy-MM-dd"
              const dateKey = clientDate.toISOString().split("T")[0];

              // Ajoutez le client au groupe correspondant à cette date
              if (!state.clientsOrdersPerDay.has(dateKey)) {
                state.clientsOrdersPerDay.set(dateKey, []);
              }
              state.clientsOrdersPerDay.get(dateKey)!.push(clientOrder);
            }
          });

          state.clientsOrdersPerDay.forEach((clients) => {
            // Triez les clients par date_ajout, du plus ancien au plus récent
            clients.sort(
              (a, b) => a.date_ajout!.getTime() - b.date_ajout!.getTime()
            );
          });

          return {
            clientsOrdersPerDay: state.clientsOrdersPerDay,
          };
        });
      },
    }),
    {
      name: "CommandesStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCommandesStore;
