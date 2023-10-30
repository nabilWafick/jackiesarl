/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import SoldeClient from "../../models/solde_client/solde_client.model";
import SoldeClientAPI from "../../api/solde_client/solde_client.api";
import { Moment } from "moment";

interface AvanceStore {
  avances: SoldeClient[];
  isLoading: boolean;
  startDate: Date | Moment | undefined;
  endDate: Date | Moment | undefined;
  selectedSortOption: string;
  fetchAvances: () => void;
  onStartDateChange: (date: Date | Moment) => void;
  onEndDateChange: (date: Date | Moment) => void;
  resetDatesInterval: () => void;
  onSelectedSetOptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const useAvanceStore = create<AvanceStore>()(
  persist(
    (set, get) => {
      return {
        avances: [],
        isLoading: false,
        startDate: undefined,
        endDate: undefined,
        selectedSortOption: "more-important",
        fetchAvances: async () => {
          const begin = get().startDate;
          const end = get().endDate;
          const creancesList = await SoldeClientAPI.getAllAdvanceMoreImportant(
            begin ? begin.toLocaleString() : undefined,
            end ? end.toLocaleString() : undefined
          );
          set(() => ({
            avances: creancesList,
          }));
        },
        onStartDateChange: async (date: Date | Moment) => {
          // ======== dates setting up ===========

          if (get().startDate == undefined && get().endDate == undefined) {
            set(() => ({ startDate: date }));
          } else if (
            get().startDate == undefined &&
            get().endDate != undefined
          ) {
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
          } else if (
            get().startDate != undefined &&
            get().endDate == undefined
          ) {
            set(() => ({ startDate: date }));
          } else if (
            get().startDate != undefined &&
            get().endDate != undefined
          ) {
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
          const end = get().endDate
            ? get().endDate!.toLocaleString()
            : undefined;

          let soldesClientsList: SoldeClient[] = [];

          if (get().selectedSortOption == "more-important") {
            soldesClientsList = await SoldeClientAPI.getAllAdvanceMoreImportant(
              begin,
              end
            );
          } else if (get().selectedSortOption == "less-important") {
            soldesClientsList = await SoldeClientAPI.getAllAdvanceLessImportant(
              begin,
              end
            );
          }

          set(() => ({ avances: soldesClientsList }));

          // ============= TO EXECUTE ===========
        },
        onEndDateChange: async (date: Date | Moment) => {
          // ======== dates setting up ===========

          if (get().startDate == undefined && get().endDate == undefined) {
            set(() => ({ endDate: date }));
          } else if (
            get().startDate != undefined &&
            get().endDate == undefined
          ) {
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
          } else if (
            get().startDate == undefined &&
            get().endDate != undefined
          ) {
            set(() => ({ endDate: date }));
          } else if (
            get().startDate != undefined &&
            get().endDate != undefined
          ) {
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
          const end = get().endDate
            ? get().endDate!.toLocaleString()
            : undefined;

          let soldesClientsList: SoldeClient[] = [];

          if (get().selectedSortOption == "more-important") {
            soldesClientsList = await SoldeClientAPI.getAllAdvanceMoreImportant(
              begin,
              end
            );
          } else if (get().selectedSortOption == "less-important") {
            soldesClientsList = await SoldeClientAPI.getAllAdvanceLessImportant(
              begin,
              end
            );
          }

          set(() => ({ avances: soldesClientsList }));

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
          const end = get().endDate
            ? get().endDate!.toLocaleString()
            : undefined;

          let soldesClientsList: SoldeClient[] = [];

          if (get().selectedSortOption == "more-important") {
            soldesClientsList = await SoldeClientAPI.getAllAdvanceMoreImportant(
              begin,
              end
            );
          } else if (get().selectedSortOption == "less-important") {
            soldesClientsList = await SoldeClientAPI.getAllAdvanceLessImportant(
              begin,
              end
            );
          }

          set(() => ({ avances: soldesClientsList }));
        },
        onSelectedSetOptionChange: async (
          e: React.ChangeEvent<HTMLSelectElement>
        ) => {
          const { value } = e.target;
          set(() => ({ selectedSortOption: value }));

          const begin = get().startDate
            ? get().startDate!.toLocaleString()
            : undefined;
          const end = get().endDate
            ? get().endDate!.toLocaleString()
            : undefined;

          let soldesClientsList: SoldeClient[] = [];

          if (value == "more-important") {
            soldesClientsList = await SoldeClientAPI.getAllAdvanceMoreImportant(
              begin,
              end
            );
          } else if (value == "less-important") {
            soldesClientsList = await SoldeClientAPI.getAllAdvanceLessImportant(
              begin,
              end
            );
          }

          set(() => ({ avances: soldesClientsList }));
        },
      };
    },
    {
      name: "AvanceStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAvanceStore;
