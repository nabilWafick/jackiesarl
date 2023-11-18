/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import Commandes from "../../models/commandes/commandes.model";
import CommandesAPI from "../../api/commandes/commandes.api";
import { Moment } from "moment";
import Employes from "../../models/employes/employes.model";
interface CommandesStore {
  clientsOrders: Commandes[];
  clientsOrdersPerDay: Map<string, Commandes[]>;
  isLoading: boolean;
  startDate: Date | Moment | undefined;
  endDate: Date | Moment | undefined;
  selectedSortOption: string;
  authenticatedEmployee: Employes | undefined;
  setAuthenticatedEmployee: (employee: Employes) => void;
  fetchAllClientsOrders: () => void;
  onStartDateChange: (date: Date | Moment) => void;
  onEndDateChange: (date: Date | Moment) => void;
  resetDatesInterval: () => void;
  onSelectedSetOptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const useCommandesStore = create<CommandesStore>()(
  persist(
    (set, get) => ({
      clientsOrders: [],
      clientsOrdersPerDay: new Map(),
      isLoading: false,
      startDate: undefined,
      endDate: undefined,
      selectedSortOption: "new-to-old",
      authenticatedEmployee: undefined,
      setAuthenticatedEmployee: (employee) => {
        set(() => ({ authenticatedEmployee: employee }));
      },
      fetchAllClientsOrders: async () => {
        const begin = get().startDate;
        const end = get().endDate;
        const auth = get().authenticatedEmployee;
        const clientsOrdersList = await CommandesAPI.getAll(
          auth!,
          begin ? begin.toLocaleString() : undefined,
          end ? end.toLocaleString() : undefined
        );

        set(() => ({ clientsOrders: clientsOrdersList }));
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
        const auth = get().authenticatedEmployee;

        let commandesList: Commandes[] = [];

        if (get().selectedSortOption == "old-to-new") {
          commandesList = await CommandesAPI.getAllFromOldToNew(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "new-to-old") {
          commandesList = await CommandesAPI.getAllFromNewToOld(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "more-important") {
          commandesList = await CommandesAPI.getAllMostImportant(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "less-important") {
          commandesList = await CommandesAPI.getAllLessImportant(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "cim-benin-more-important") {
          commandesList = await CommandesAPI.getAllCIMBENINMostImportant(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "cim-benin-less-important") {
          commandesList = await CommandesAPI.getAllCIMBENINLessImportant(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "nocibe-more-important") {
          commandesList = await CommandesAPI.getAllNOCIBEMostImportant(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "nocibe-less-important") {
          commandesList = await CommandesAPI.getAllNOCIBELessImportant(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "delivered") {
          commandesList = await CommandesAPI.getAllDelivered(auth!, begin, end);
        } else if (get().selectedSortOption == "undelivered") {
          commandesList = await CommandesAPI.getAllUndelivered(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "destination") {
          commandesList = await CommandesAPI.getAllGroupByDestination(
            auth!,
            begin,
            end
          );
        }

        set(() => ({ clientsOrders: commandesList }));

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
        const auth = get().authenticatedEmployee;

        let commandesList: Commandes[] = [];

        if (get().selectedSortOption == "old-to-new") {
          commandesList = await CommandesAPI.getAllFromOldToNew(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "new-to-old") {
          commandesList = await CommandesAPI.getAllFromNewToOld(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "more-important") {
          commandesList = await CommandesAPI.getAllMostImportant(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "less-important") {
          commandesList = await CommandesAPI.getAllLessImportant(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "cim-benin-more-important") {
          commandesList = await CommandesAPI.getAllCIMBENINMostImportant(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "cim-benin-less-important") {
          commandesList = await CommandesAPI.getAllCIMBENINLessImportant(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "nocibe-more-important") {
          commandesList = await CommandesAPI.getAllNOCIBEMostImportant(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "nocibe-less-important") {
          commandesList = await CommandesAPI.getAllNOCIBELessImportant(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "delivered") {
          commandesList = await CommandesAPI.getAllDelivered(auth!, begin, end);
        } else if (get().selectedSortOption == "undelivered") {
          commandesList = await CommandesAPI.getAllUndelivered(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "destination") {
          commandesList = await CommandesAPI.getAllGroupByDestination(
            auth!,
            begin,
            end
          );
        }

        set(() => ({ clientsOrders: commandesList }));

        // ============= TO EXECUTE ===========
      },
      resetDatesInterval: async () => {
        set(() => ({
          startDate: undefined,
          endDate: undefined,
        }));
        const begin = get().startDate
          ? get().startDate!.toLocaleString()
          : undefined;
        const end = get().endDate ? get().endDate!.toLocaleString() : undefined;
        const auth = get().authenticatedEmployee;

        let commandesList: Commandes[] = [];

        if (get().selectedSortOption == "old-to-new") {
          commandesList = await CommandesAPI.getAllFromOldToNew(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "new-to-old") {
          commandesList = await CommandesAPI.getAllFromNewToOld(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "more-important") {
          commandesList = await CommandesAPI.getAllMostImportant(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "less-important") {
          commandesList = await CommandesAPI.getAllLessImportant(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "cim-benin-more-important") {
          commandesList = await CommandesAPI.getAllCIMBENINMostImportant(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "cim-benin-less-important") {
          commandesList = await CommandesAPI.getAllCIMBENINLessImportant(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "nocibe-more-important") {
          commandesList = await CommandesAPI.getAllNOCIBEMostImportant(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "nocibe-less-important") {
          commandesList = await CommandesAPI.getAllNOCIBELessImportant(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "delivered") {
          commandesList = await CommandesAPI.getAllDelivered(auth!, begin, end);
        } else if (get().selectedSortOption == "undelivered") {
          commandesList = await CommandesAPI.getAllUndelivered(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "destination") {
          commandesList = await CommandesAPI.getAllGroupByDestination(
            auth!,
            begin,
            end
          );
        }

        set(() => ({ clientsOrders: commandesList }));
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
        const auth = get().authenticatedEmployee;

        let commandesList: Commandes[] = [];

        if (value == "old-to-new") {
          commandesList = await CommandesAPI.getAllFromOldToNew(
            auth!,
            begin,
            end
          );
        } else if (value == "new-to-old") {
          commandesList = await CommandesAPI.getAllFromNewToOld(
            auth!,
            begin,
            end
          );
        } else if (value == "more-important") {
          commandesList = await CommandesAPI.getAllMostImportant(
            auth!,
            begin,
            end
          );
        } else if (value == "less-important") {
          commandesList = await CommandesAPI.getAllLessImportant(
            auth!,
            begin,
            end
          );
        } else if (value == "cim-benin-more-important") {
          commandesList = await CommandesAPI.getAllCIMBENINMostImportant(
            auth!,
            begin,
            end
          );
        } else if (value == "cim-benin-less-important") {
          commandesList = await CommandesAPI.getAllCIMBENINLessImportant(
            auth!,
            begin,
            end
          );
        } else if (value == "nocibe-more-important") {
          commandesList = await CommandesAPI.getAllNOCIBEMostImportant(
            auth!,
            begin,
            end
          );
        } else if (value == "nocibe-less-important") {
          commandesList = await CommandesAPI.getAllNOCIBELessImportant(
            auth!,
            begin,
            end
          );
        } else if (value == "delivered") {
          commandesList = await CommandesAPI.getAllDelivered(auth!, begin, end);
        } else if (value == "undelivered") {
          commandesList = await CommandesAPI.getAllUndelivered(
            auth!,
            begin,
            end
          );
        } else if (value == "destination") {
          commandesList = await CommandesAPI.getAllGroupByDestination(
            auth!,
            begin,
            end
          );
        }

        set(() => ({ clientsOrders: commandesList }));
      },
    }),
    {
      name: "CommandesStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCommandesStore;
