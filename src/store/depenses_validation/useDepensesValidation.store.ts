/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import Depenses from "../../models/depenses/depenses.model";
import DepensesAPI from "../../api/depenses/depenses.api";
import { Moment } from "moment";

interface DepensesValidationStore {
  depenses: Depenses[];
  depensesPerDay: Map<string, Depenses[]>;
  isLoading: boolean;
  startDate: Date | Moment | undefined;
  endDate: Date | Moment | undefined;
  selectedSortOption: string;
  fetchAllDepenses: () => void;
  onStartDateChange: (date: Date | Moment) => void;
  onEndDateChange: (date: Date | Moment) => void;
  resetDatesInterval: () => void;
  onSelectedSetOptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const useDepensesValidationStore = create<DepensesValidationStore>()(
  persist(
    (set, get) => ({
      depenses: [],
      depensesPerDay: new Map(),
      isLoading: false,
      selectedClientId: 0,
      startDate: undefined,
      endDate: undefined,
      selectedSortOption: "new-to-old",
      fetchAllDepenses: async () => {
        const begin = get().startDate;
        const end = get().endDate;
        const depensesList: Depenses[] = await DepensesAPI.getAll(
          begin ? begin.toLocaleString() : undefined,
          end ? end.toLocaleString() : undefined
        );

        set(() => ({ depenses: depensesList }));
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

        let companyExpenses: Depenses[] = [];

        if (get().selectedSortOption == "old-to-new") {
          companyExpenses = await DepensesAPI.getAllFromOldToNew(begin, end);
        } else if (get().selectedSortOption == "new-to-old") {
          companyExpenses = await DepensesAPI.getAllFromNewToOld(begin, end);
        } else if (get().selectedSortOption == "more-important") {
          companyExpenses = await DepensesAPI.getAllMostImportant(begin, end);
        } else if (get().selectedSortOption == "less-important") {
          companyExpenses = await DepensesAPI.getAllLessImportant(begin, end);
        } else if (get().selectedSortOption == "validated") {
          companyExpenses = await DepensesAPI.getAllValidated(begin, end);
        } else if (get().selectedSortOption == "unvalidated") {
          companyExpenses = await DepensesAPI.getAllUnvalidated(begin, end);
        }

        set(() => ({ depenses: companyExpenses }));

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

        let companyExpenses: Depenses[] = [];

        if (get().selectedSortOption == "old-to-new") {
          companyExpenses = await DepensesAPI.getAllFromOldToNew(begin, end);
        } else if (get().selectedSortOption == "new-to-old") {
          companyExpenses = await DepensesAPI.getAllFromNewToOld(begin, end);
        } else if (get().selectedSortOption == "more-important") {
          companyExpenses = await DepensesAPI.getAllMostImportant(begin, end);
        } else if (get().selectedSortOption == "less-important") {
          companyExpenses = await DepensesAPI.getAllLessImportant(begin, end);
        } else if (get().selectedSortOption == "validated") {
          companyExpenses = await DepensesAPI.getAllValidated(begin, end);
        } else if (get().selectedSortOption == "unvalidated") {
          companyExpenses = await DepensesAPI.getAllUnvalidated(begin, end);
        }

        set(() => ({ depenses: companyExpenses }));

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

        let companyExpenses: Depenses[] = [];

        if (get().selectedSortOption == "old-to-new") {
          companyExpenses = await DepensesAPI.getAllFromOldToNew(begin, end);
        } else if (get().selectedSortOption == "new-to-old") {
          companyExpenses = await DepensesAPI.getAllFromNewToOld(begin, end);
        } else if (get().selectedSortOption == "more-important") {
          companyExpenses = await DepensesAPI.getAllMostImportant(begin, end);
        } else if (get().selectedSortOption == "less-important") {
          companyExpenses = await DepensesAPI.getAllLessImportant(begin, end);
        } else if (get().selectedSortOption == "validated") {
          companyExpenses = await DepensesAPI.getAllValidated(begin, end);
        } else if (get().selectedSortOption == "unvalidated") {
          companyExpenses = await DepensesAPI.getAllUnvalidated(begin, end);
        }

        set(() => ({ depenses: companyExpenses }));
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

        let companyExpenses: Depenses[] = [];

        if (value == "old-to-new") {
          companyExpenses = await DepensesAPI.getAllFromOldToNew(begin, end);
        } else if (value == "new-to-old") {
          companyExpenses = await DepensesAPI.getAllFromNewToOld(begin, end);
        } else if (value == "more-important") {
          companyExpenses = await DepensesAPI.getAllMostImportant(begin, end);
        } else if (value == "less-important") {
          companyExpenses = await DepensesAPI.getAllLessImportant(begin, end);
        } else if (value == "validated") {
          companyExpenses = await DepensesAPI.getAllValidated(begin, end);
        } else if (value == "unvalidated") {
          companyExpenses = await DepensesAPI.getAllUnvalidated(begin, end);
        }

        set(() => ({ depenses: companyExpenses }));
      },
    }),
    {
      name: "DepensesValidationStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useDepensesValidationStore;
