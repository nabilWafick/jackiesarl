/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import PaiementClient from "../../models/paiement_client/paiement.model";
import PaiementClientAPI from "../../api/paiement_client/paiement_client.api";
import { Moment } from "moment";

interface ClientPaymentsStore {
  clientPayments: PaiementClient[];
  clientPaymentsPerDay: Map<string, PaiementClient[]>;
  isLoading: boolean;
  selectedClientId: number;
  startDate: Date | Moment | undefined;
  endDate: Date | Moment | undefined;
  selectedSortOption: string;
  fetchAllClientPayments: (clientId: number) => void;
  onStartDateChange: (date: Date | Moment) => void;
  onEndDateChange: (date: Date | Moment) => void;
  resetDatesInterval: () => void;
  onSelectedSetOptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const useClientPaymentsStore = create<ClientPaymentsStore>()(
  persist(
    (set, get) => ({
      clientPayments: [],
      clientsPayments: [],
      clientPaymentsPerDay: new Map(),
      selectedClientId: 0,
      startDate: undefined,
      endDate: undefined,
      selectedSortOption: "new-to-old",
      isLoading: false,
      fetchAllClientPayments: async (clientId: number) => {
        set(() => ({ selectedClientId: clientId }));
        const begin = get().startDate;
        const end = get().endDate;
        const selectedClientPayments = await PaiementClientAPI.getAllOfClient(
          begin ? begin.toLocaleString() : undefined,
          end ? end.toLocaleString() : undefined,
          clientId
        );
        set(() => ({ clientPayments: selectedClientPayments }));
      },

      /*  fetchAllClientsPayments: async () => {
        const allClientsPayments = await PaiementClientAPI.getAll();
        set(() => ({ clientsPayments: allClientsPayments }));
      },*/

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

        let selectedClientPayments: PaiementClient[] = [];

        if (get().selectedSortOption == "old-to-new") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientFromOldToNew(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "new-to-old") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientFromNewToOld(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientMostImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientLessImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "cim-benin-more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientCIMBENINMostImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "cim-benin-less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientCIMBENINLessImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "nocibe-more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientNOCIBEMostImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "nocibe-less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientNOCIBELessImportant(
              begin,
              end,
              get().selectedClientId
            );
        }

        set(() => ({ clientPayments: selectedClientPayments }));

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

        let selectedClientPayments: PaiementClient[] = [];

        if (get().selectedSortOption == "old-to-new") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientFromOldToNew(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "new-to-old") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientFromNewToOld(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientMostImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientLessImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "cim-benin-more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientCIMBENINMostImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "cim-benin-less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientCIMBENINLessImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "nocibe-more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientNOCIBEMostImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "nocibe-less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientNOCIBELessImportant(
              begin,
              end,
              get().selectedClientId
            );
        }

        set(() => ({ clientPayments: selectedClientPayments }));

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

        let selectedClientPayments: PaiementClient[] = [];

        if (get().selectedSortOption == "old-to-new") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientFromOldToNew(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "new-to-old") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientFromNewToOld(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientMostImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientLessImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "cim-benin-more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientCIMBENINMostImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "cim-benin-less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientCIMBENINLessImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "nocibe-more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientNOCIBEMostImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "nocibe-less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientNOCIBELessImportant(
              begin,
              end,
              get().selectedClientId
            );
        }

        set(() => ({ clientPayments: selectedClientPayments }));
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

        let selectedClientPayments: PaiementClient[] = [];

        if (value == "old-to-new") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientFromOldToNew(
              begin,
              end,
              get().selectedClientId
            );
        } else if (value == "new-to-old") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientFromNewToOld(
              begin,
              end,
              get().selectedClientId
            );
        } else if (value == "more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientMostImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (value == "less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientLessImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (value == "cim-benin-more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientCIMBENINMostImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (value == "cim-benin-less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientCIMBENINLessImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (value == "nocibe-more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientNOCIBEMostImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (value == "nocibe-less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllOfClientNOCIBELessImportant(
              begin,
              end,
              get().selectedClientId
            );
        }

        set(() => ({ clientPayments: selectedClientPayments }));
      },
    }),
    {
      name: "ClientPaymentsStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useClientPaymentsStore;
