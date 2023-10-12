import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import CommandesClients from "../../models/commandes_client/commandes_client.store";
import CommandesAPI from "../../api/commandes/commandes.api";
import ClientsAPI from "../../api/clients/clients.api";

interface CommandesStore {
  clientsOrders: CommandesClients[];
  clientsOrdersPerDay: Map<string, CommandesClients[]>;
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
        const clients = await ClientsAPI.getAll();
        console.log("from fetchAllClientsOrders", clients);
        const clientsOrdersList = await CommandesAPI.getAll();
        console.log("from fetchAllClientsOrders", clientsOrdersList);

        const clientsOrders = clientsOrdersList.map(
          (clientsOrder) =>
            new CommandesClients(
              clientsOrder.categorie,
              clientsOrder.quantite_achetee,
              clientsOrder.destination,
              clientsOrder.date_commande,
              clientsOrder.date_livraison,
              clientsOrder.est_traitee,
              clients.find((client) => client!.id === clientsOrder.id_client)!,
              clientsOrder.id,
              clientsOrder.date_ajout!
            )
        );
        set(() => ({ clientsOrders: clientsOrders }));
        const clientsOrdersListLength = get().clientsOrders;
        console.log("clientsOrdersListLength: ", clientsOrdersListLength);
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
