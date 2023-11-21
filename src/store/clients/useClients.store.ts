/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import Clients from "../../models/clients/clients.model";
import ClientsAPI from "../../api/clients/clients.api";
import { createJSONStorage, persist } from "zustand/middleware";
import { Moment } from "moment";
import { authenticatedEmployee } from "../../data/GlobalData";
interface ClientsStore {
  clients: Clients[];
  searchedClients: Clients[];
  clientsPerDay: Map<string, Clients[]>;
  selectedClient: Clients | undefined;
  orderClient: Clients | undefined;
  paymentValidationClient: Clients | undefined;
  isLoading: boolean;
  startDate: Date | Moment | undefined;
  endDate: Date | Moment | undefined;
  selectedSortOption: string;
  fetchAllClients: () => void;
  searchClients: (name: string) => void;
  refreshSearchedClients: () => void;
  setSelectedClient: (client: Clients) => void;
  setOrderClient: (client: Clients | undefined) => void;
  setPaymentValidationClient: (client: Clients | undefined) => void;
  onStartDateChange: (date: Date | Moment) => void;
  onEndDateChange: (date: Date | Moment) => void;
  resetDatesInterval: () => void;
  onSelectedSetOptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
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
      startDate: undefined,
      endDate: undefined,
      selectedSortOption: "new-to-old",
      fetchAllClients: async () => {
        const begin = get().startDate;
        const end = get().endDate;
        const auth = authenticatedEmployee.value;
        const clientsList: Clients[] = await ClientsAPI.getAll(
          auth!,
          begin ? begin.toLocaleString() : undefined,
          end ? end.toLocaleString() : undefined
        );

        set(() => ({ clients: clientsList }));
      },
      searchClients: async (name: string) => {
        const auth = authenticatedEmployee.value;
        const clientsMatchedName = await ClientsAPI.getAllMatched(auth!, name);
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

      onStartDateChange: async (date: Date | Moment) => {
        // ======== dates setting up ===========

        if (get().startDate == undefined && get().endDate == undefined) {
          set(() => ({ startDate: date }));
        } else if (get().startDate == undefined && get().endDate != undefined) {
          if (
            new Date(get().endDate!.toLocaleString()) >
            new Date(date.toLocaleString())
          ) {
            set(() => ({ startDate: date }));
          } else {
            const tmp = get().endDate;
            set(() => ({ endDate: date }));
            set(() => ({ startDate: tmp }));
          }
        } else if (get().startDate != undefined && get().endDate == undefined) {
          set(() => ({ startDate: date }));
        } else if (get().startDate != undefined && get().endDate != undefined) {
          if (
            new Date(get().endDate!.toLocaleString()) >
            new Date(date.toLocaleString())
          ) {
            set(() => ({ startDate: date }));
          } else {
            const tmp = get().endDate;
            set(() => ({ endDate: date }));
            set(() => ({ startDate: tmp }));
          }
        }

        // ============= TO EXECUTE ===========

        const begin = get().startDate
          ? get().startDate!.toLocaleString()
          : undefined;
        const end = get().endDate ? get().endDate!.toLocaleString() : undefined;
        const auth = authenticatedEmployee.value;

        let clientsList: Clients[] = [];

        if (get().selectedSortOption == "alphabetic") {
          clientsList = await ClientsAPI.getAllByAlphabeticalOrder(
            auth!,
            begin,
            end
          );
          // console.log(clientsList);
        } else if (get().selectedSortOption == "old-to-new") {
          clientsList = await ClientsAPI.getAllFromOldToNew(auth!, begin, end);
        } else {
          clientsList = await ClientsAPI.getAllFromNewToOld(auth!, begin, end);
        }
        set(() => ({ clients: clientsList }));

        // ============= TO EXECUTE ===========
      },
      onEndDateChange: async (date: Date | Moment) => {
        // ======== dates setting up ===========

        if (get().startDate == undefined && get().endDate == undefined) {
          set(() => ({ endDate: date }));
        } else if (get().startDate != undefined && get().endDate == undefined) {
          if (
            new Date(get().startDate!.toLocaleString()) <
            new Date(date.toLocaleString())
          ) {
            set(() => ({ endDate: date }));
          } else {
            const tmp = get().startDate;
            set(() => ({ startDate: date }));
            set(() => ({ endDate: tmp }));
          }
        } else if (get().startDate == undefined && get().endDate != undefined) {
          set(() => ({ endDate: date }));
        } else if (get().startDate != undefined && get().endDate != undefined) {
          if (
            new Date(get().startDate!.toLocaleString()) <
            new Date(date.toLocaleString())
          ) {
            set(() => ({ endDate: date }));
          } else {
            const tmp = get().startDate;
            set(() => ({ startDate: date }));
            set(() => ({ endDate: tmp }));
          }
        }

        // ============= TO EXECUTE ===========

        const begin = get().startDate
          ? get().startDate!.toLocaleString()
          : undefined;
        const end = get().endDate ? get().endDate!.toLocaleString() : undefined;
        const auth = authenticatedEmployee.value;

        let clientsList: Clients[] = [];

        if (get().selectedSortOption == "alphabetic") {
          clientsList = await ClientsAPI.getAllByAlphabeticalOrder(
            auth!,
            begin,
            end
          );
          // console.log(clientsList);
        } else if (get().selectedSortOption == "old-to-new") {
          clientsList = await ClientsAPI.getAllFromOldToNew(auth!, begin, end);
        } else {
          clientsList = await ClientsAPI.getAllFromNewToOld(auth!, begin, end);
        }
        set(() => ({ clients: clientsList }));

        // ============= TO EXECUTE ===========
      },
      resetDatesInterval: async () => {
        set(() => ({
          startDate: undefined,
          endDate: undefined,
        }));
        // ============= TO EXECUTE ===========

        const begin = get().startDate
          ? get().startDate!.toLocaleString()
          : undefined;
        const end = get().endDate ? get().endDate!.toLocaleString() : undefined;
        const auth = authenticatedEmployee.value;

        let clientsList: Clients[] = [];

        if (get().selectedSortOption == "alphabetic") {
          clientsList = await ClientsAPI.getAllByAlphabeticalOrder(
            auth!,
            begin,
            end
          );
          // console.log(clientsList);
        } else if (get().selectedSortOption == "old-to-new") {
          clientsList = await ClientsAPI.getAllFromOldToNew(auth!, begin, end);
        } else {
          clientsList = await ClientsAPI.getAllFromNewToOld(auth!, begin, end);
        }
        set(() => ({ clients: clientsList }));
      },
      onSelectedSetOptionChange: async (
        e: React.ChangeEvent<HTMLSelectElement>
      ) => {
        const { value } = e.target;
        set(() => ({ selectedSortOption: value }));

        const begin = get().startDate
          ? get().startDate!.toLocaleString()
          : undefined;
        const end = get().endDate ? get().endDate!.toLocaleString() : undefined;
        const auth = authenticatedEmployee.value;

        let clientsList: Clients[] = [];

        if (value == "alphabetic") {
          clientsList = await ClientsAPI.getAllByAlphabeticalOrder(
            auth!,
            begin,
            end
          );
          console.log(clientsList);
        } else if (value == "old-to-new") {
          clientsList = await ClientsAPI.getAllFromOldToNew(auth!, begin, end);
        } else {
          clientsList = await ClientsAPI.getAllFromNewToOld(auth!, begin, end);
        }
        set(() => ({ clients: clientsList }));
      },

      /* sortClientsByDateIntervalPerDay: (
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
      },*/
    }),
    {
      name: "ClientsStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useClientsStore;
