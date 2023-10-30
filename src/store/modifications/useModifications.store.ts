/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import ModificationsAPI from "../../api/modifications/modifications.api";
import Modifications from "../../models/modifications/modifications.model";
import { Moment } from "moment";

interface ModificationsStore {
  modifications: Modifications[];
  modificationsPerDay: Map<string, Modifications[]>;
  isLoading: boolean;
  startDate: Date | Moment | undefined;
  endDate: Date | Moment | undefined;
  selectedSortOption: string;
  fetchAllModifications: () => void;
  onStartDateChange: (date: Date | Moment) => void;
  onEndDateChange: (date: Date | Moment) => void;
  resetDatesInterval: () => void;
  onSelectedSetOptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const useModificationsStore = create<ModificationsStore>()(
  persist(
    (set, get) => ({
      modifications: [],
      modificationsPerDay: new Map(),
      selectedClient: undefined,
      isLoading: false,
      startDate: undefined,
      endDate: undefined,
      selectedSortOption: "new-to-old",
      fetchAllModifications: async () => {
        const begin = get().startDate;
        const end = get().endDate;
        const modificationsList = await ModificationsAPI.getAll(
          begin ? begin.toLocaleString() : undefined,
          end ? end.toLocaleString() : undefined
        );

        set(() => ({ modifications: modificationsList }));
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

        const modificationsList = await ModificationsAPI.getAll(begin, end);

        // if (get().selectedSortOption == "old-to-new") {
        //   modificationsList = await ModificationsAPI.getAllFromOldToNew(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "new-to-old") {
        //   modificationsList = await ModificationsAPI.getAllFromNewToOld(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "more-important") {
        //   modificationsList = await ModificationsAPI.getAllMostImportant(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "less-important") {
        //   modificationsList = await ModificationsAPI.getAllLessImportant(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "cim-benin-more-important") {
        //   modificationsList =
        //     await ModificationsAPI.getAllCIMBENINMostImportant(begin, end);
        // } else if (get().selectedSortOption == "cim-benin-less-important") {
        //   modificationsList =
        //     await ModificationsAPI.getAllCIMBENINLessImportant(begin, end);
        // } else if (get().selectedSortOption == "nocibe-more-important") {
        //   modificationsList =
        //     await ModificationsAPI.getAllNOCIBEMostImportant(begin, end);
        // } else if (get().selectedSortOption == "nocibe-less-important") {
        //   modificationsList =
        //     await ModificationsAPI.getAllNOCIBELessImportant(begin, end);
        // }

        set(() => ({ modifications: modificationsList }));

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

        const modificationsList = await ModificationsAPI.getAll(begin, end);

        // if (get().selectedSortOption == "old-to-new") {
        //   modificationsList = await ModificationsAPI.getAllFromOldToNew(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "new-to-old") {
        //   modificationsList = await ModificationsAPI.getAllFromNewToOld(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "more-important") {
        //   modificationsList = await ModificationsAPI.getAllMostImportant(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "less-important") {
        //   modificationsList = await ModificationsAPI.getAllLessImportant(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "cim-benin-more-important") {
        //   modificationsList =
        //     await ModificationsAPI.getAllCIMBENINMostImportant(begin, end);
        // } else if (get().selectedSortOption == "cim-benin-less-important") {
        //   modificationsList =
        //     await ModificationsAPI.getAllCIMBENINLessImportant(begin, end);
        // } else if (get().selectedSortOption == "nocibe-more-important") {
        //   modificationsList =
        //     await ModificationsAPI.getAllNOCIBEMostImportant(begin, end);
        // } else if (get().selectedSortOption == "nocibe-less-important") {
        //   modificationsList =
        //     await ModificationsAPI.getAllNOCIBELessImportant(begin, end);
        // }

        set(() => ({ modifications: modificationsList }));

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

        const modificationsList = await ModificationsAPI.getAll(begin, end);

        // if (get().selectedSortOption == "old-to-new") {
        //   modificationsList = await ModificationsAPI.getAllFromOldToNew(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "new-to-old") {
        //   modificationsList = await ModificationsAPI.getAllFromNewToOld(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "more-important") {
        //   modificationsList = await ModificationsAPI.getAllMostImportant(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "less-important") {
        //   modificationsList = await ModificationsAPI.getAllLessImportant(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "cim-benin-more-important") {
        //   modificationsList =
        //     await ModificationsAPI.getAllCIMBENINMostImportant(begin, end);
        // } else if (get().selectedSortOption == "cim-benin-less-important") {
        //   modificationsList =
        //     await ModificationsAPI.getAllCIMBENINLessImportant(begin, end);
        // } else if (get().selectedSortOption == "nocibe-more-important") {
        //   modificationsList =
        //     await ModificationsAPI.getAllNOCIBEMostImportant(begin, end);
        // } else if (get().selectedSortOption == "nocibe-less-important") {
        //   modificationsList =
        //     await ModificationsAPI.getAllNOCIBELessImportant(begin, end);
        // }

        set(() => ({ modifications: modificationsList }));
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

        const modificationsList = await ModificationsAPI.getAll(begin, end);

        // if (value == "old-to-new") {
        //   modificationsList = await ModificationsAPI.getAllFromOldToNew(
        //     begin,
        //     end
        //   );
        // } else if (value == "new-to-old") {
        //   modificationsList = await ModificationsAPI.getAllFromNewToOld(
        //     begin,
        //     end
        //   );
        // } else if (value == "more-important") {
        //   modificationsList = await ModificationsAPI.getAllMostImportant(
        //     begin,
        //     end
        //   );
        // } else if (value == "less-important") {
        //   modificationsList = await ModificationsAPI.getAllLessImportant(
        //     begin,
        //     end
        //   );
        // } else if (value == "cim-benin-more-important") {
        //   modificationsList =
        //     await ModificationsAPI.getAllCIMBENINMostImportant(begin, end);
        // } else if (value == "cim-benin-less-important") {
        //   modificationsList =
        //     await ModificationsAPI.getAllCIMBENINLessImportant(begin, end);
        // } else if (value == "nocibe-more-important") {
        //   modificationsList =
        //     await ModificationsAPI.getAllNOCIBEMostImportant(begin, end);
        // } else if (value == "nocibe-less-important") {
        //   modificationsList =
        //     await ModificationsAPI.getAllNOCIBELessImportant(begin, end);
        // }

        set(() => ({ modifications: modificationsList }));
      },
    }),
    {
      name: "ModificationsStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useModificationsStore;
