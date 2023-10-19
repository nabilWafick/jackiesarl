/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import Clients from "../../models/clients/clients.model";
import ClientsAPI from "../../api/clients/clients.api";
import { createJSONStorage, persist } from "zustand/middleware";

interface ClientsStore {
  clients: Clients[];
  searchedClients: Clients[];
  clientsPerDay: Map<string, Clients[]>;
  selectedClient: Clients | undefined;
  orderClient: Clients | undefined;
  paymentValidationClient: Clients | undefined;
  isLoading: boolean;
  fetchAllClients: () => void;
  searchClients: (name: string) => void;
  refreshSearchedClients: () => void;
  setSelectedClient: (client: Clients) => void;
  setOrderClient: (client: Clients | undefined) => void;
  setPaymentValidationClient: (client: Clients | undefined) => void;
  sortClientsNameByASC: () => void;
  sortClientsNameByDESC: () => void;
  sortClientsByDate: () => void;
  sortClientsByDateInterval: (beginningDate: Date, endingDate: Date) => void;
  sortClientsByDateIntervalPerDay: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
}

const useClientsStore = create<ClientsStore>()(
  persist(
    (set, get) => ({
      clients: [],
      searchedClients: [],
      clientsPerDay: new Map(),
      selectedClient: undefined,
      orderClient: undefined,
      paymentValidationClient: undefined,
      isLoading: false,
      fetchAllClients: async () => {
        const clientsList: Clients[] = await ClientsAPI.getAll();

        set(() => ({ clients: clientsList }));
      },
      searchClients: async (name: string) => {
        const clientsMatchedName = await ClientsAPI.getAllMatched(name);
        set(() => ({ searchedClients: clientsMatchedName }));
      },

      refreshSearchedClients: () => {
        set(() => ({ searchedClients: [] }));
      },

      setSelectedClient: (client) => {
        set(() => ({ selectedClient: client }));
      },
      setOrderClient: (client: Clients | undefined) => {
        set(() => ({ orderClient: client }));
      },
      setPaymentValidationClient: (client: Clients | undefined) => {
        set(() => ({ paymentValidationClient: client }));
      },
      sortClientsNameByASC: () => {
        set((state) => {
          return {
            clients: [...state.clients].sort((client1, client2) => {
              return client1.nom.localeCompare(client2.nom);
            }),
          };
        });
      },
      sortClientsNameByDESC: () => {
        set((state) => {
          return {
            clients: [...state.clients].sort((client1, client2) => {
              return client2.nom.localeCompare(client1.nom);
            }),
          };
        });
      },

      sortClientsByDate: () => {
        set((state) => {
          const sortedList = [...state.clients].sort((client1, client2) => {
            return (
              client1.date_ajout!.getTime() - client2.date_ajout!.getTime()
            );
          });
          return {
            clients: sortedList,
          };
        });
      },

      sortClientsByDateInterval: (beginningDate: Date, endingDate: Date) => {
        set((state) => {
          const sortedList = [...state.clients].filter((client) => {
            const clientDate = client.date_ajout!;
            return clientDate >= beginningDate && clientDate <= endingDate;
          });
          return {
            clients: sortedList,
          };
        });
      },

      sortClientsByDateIntervalPerDay: (
        beginningDate: Date,
        endingDate: Date
      ) => {
        set((state) => {
          state.clients.forEach((client) => {
            const clientDate = client.date_ajout!;

            // Vérifiez si la date d'ajout est dans l'intervalle spécifié
            if (clientDate >= beginningDate && clientDate <= endingDate) {
              // Formatez la date d'ajout comme une chaîne de caractères "yyyy-MM-dd"
              const dateKey = clientDate.toISOString().split("T")[0];

              // Ajoutez le client au groupe correspondant à cette date
              if (!state.clientsPerDay.has(dateKey)) {
                state.clientsPerDay.set(dateKey, []);
              }
              state.clientsPerDay.get(dateKey)!.push(client);
            }
          });

          state.clientsPerDay.forEach((clients) => {
            // Triez les clients par date_ajout, du plus ancien au plus récent
            clients.sort(
              (a, b) => a.date_ajout!.getTime() - b.date_ajout!.getTime()
            );
          });

          return { clientsPerDay: state.clientsPerDay };
        });
      },
    }),
    {
      name: "ClientsStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useClientsStore;
