/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AchatClient from "../../models/achat_client/achat_client.model";
import AchatClientAPI from "../../api/achat_client/achat_client.api";
import { Moment } from "moment";

interface ClientPurchasesStore {
  clientPurchases: AchatClient[];
  clientPurchasesPerDay: Map<string, AchatClient[]>;
  isLoading: boolean;
  selectedClientId: number;
  startDate: Date | Moment | undefined;
  endDate: Date | Moment | undefined;
  selectedSortOption: string;
  fetchAllClientPurchases: (clientId: number) => void;
  onStartDateChange: (date: Date | Moment) => void;
  onEndDateChange: (date: Date | Moment) => void;
  resetDatesInterval: () => void;
  onSelectedSetOptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const useClientPurchasesStore = create<ClientPurchasesStore>()(
  persist(
    (set, get) => ({
      clientPurchases: [],
      clientPurchasesPerDay: new Map(),
      isLoading: false,
      selectedClientId: 0,
      startDate: undefined,
      endDate: undefined,
      selectedSortOption: "new-to-old",
      fetchAllClientPurchases: async (clientId: number) => {
        set(() => ({ selectedClientId: clientId }));
        const begin = get().startDate;
        const end = get().endDate;
        const selectedClientPurchases = await AchatClientAPI.getAllOfClient(
          begin ? begin.toLocaleString() : undefined,
          end ? end.toLocaleString() : undefined,
          clientId
        );
        set(() => ({ clientPurchases: selectedClientPurchases }));
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

        let selectedClientPurchases: AchatClient[] = [];

        if (get().selectedSortOption == "old-to-new") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientFromOldToNew(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "new-to-old") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientFromNewToOld(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "more-important") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientMostImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "less-important") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientLessImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "cim-benin-more-important") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientCIMBENINMostImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "cim-benin-less-important") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientCIMBENINLessImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "nocibe-more-important") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientNOCIBEMostImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "nocibe-less-important") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientNOCIBELessImportant(
              begin,
              end,
              get().selectedClientId
            );
        }

        set(() => ({ clientPurchases: selectedClientPurchases }));

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

        let selectedClientPurchases: AchatClient[] = [];

        if (get().selectedSortOption == "old-to-new") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientFromOldToNew(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "new-to-old") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientFromNewToOld(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "more-important") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientMostImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "less-important") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientLessImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "cim-benin-more-important") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientCIMBENINMostImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "cim-benin-less-important") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientCIMBENINLessImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "nocibe-more-important") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientNOCIBEMostImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "nocibe-less-important") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientNOCIBELessImportant(
              begin,
              end,
              get().selectedClientId
            );
        }

        set(() => ({ clientPurchases: selectedClientPurchases }));

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

        let selectedClientPurchases: AchatClient[] = [];

        if (get().selectedSortOption == "old-to-new") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientFromOldToNew(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "new-to-old") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientFromNewToOld(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "more-important") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientMostImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "less-important") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientLessImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "cim-benin-more-important") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientCIMBENINMostImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "cim-benin-less-important") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientCIMBENINLessImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "nocibe-more-important") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientNOCIBEMostImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "nocibe-less-important") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientNOCIBELessImportant(
              begin,
              end,
              get().selectedClientId
            );
        }
        set(() => ({ clientPurchases: selectedClientPurchases }));
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

        let selectedClientPurchases: AchatClient[] = [];

        if (value == "old-to-new") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientFromOldToNew(
              begin,
              end,
              get().selectedClientId
            );
        } else if (value == "new-to-old") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientFromNewToOld(
              begin,
              end,
              get().selectedClientId
            );
        } else if (value == "more-important") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientMostImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (value == "less-important") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientLessImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (value == "cim-benin-more-important") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientCIMBENINMostImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (value == "cim-benin-less-important") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientCIMBENINLessImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (value == "nocibe-more-important") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientNOCIBEMostImportant(
              begin,
              end,
              get().selectedClientId
            );
        } else if (value == "nocibe-less-important") {
          selectedClientPurchases =
            await AchatClientAPI.getAllOfClientNOCIBELessImportant(
              begin,
              end,
              get().selectedClientId
            );
        }

        set(() => ({ clientPurchases: selectedClientPurchases }));
      },
    }),
    {
      name: "ClientPurchasesStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useClientPurchasesStore;
