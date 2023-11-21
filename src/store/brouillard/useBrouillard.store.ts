/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import Brouillard from "../../models/brouillard/brouillard.model";
import BrouillardAPI from "../../api/brouillard/brouillard.api";
import { Moment } from "moment";
import { authenticatedEmployee } from "../../data/GlobalData";
interface BrouillardStore {
  brouillards: Brouillard[];
  selectedBrouillard: Brouillard | undefined;
  brouillardPerDay: Map<string, Brouillard[]>;
  isLoading: boolean;
  startDate: Date | Moment | undefined;
  endDate: Date | Moment | undefined;
  // selectedDepotId: number;
  selectedSortOption: string;
  setSelectedBrouillard: (brouillard: Brouillard) => void;
  fetchAllBrouillard: () => void;
  onStartDateChange: (date: Date | Moment) => void;
  onEndDateChange: (date: Date | Moment) => void;
  resetDatesInterval: () => void;
  onSelectedSetOptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const useBrouillardStore = create<BrouillardStore>()(
  persist(
    (set, get) => ({
      brouillards: [],
      brouillardPerDay: new Map(),
      selectedBrouillard: undefined,
      isLoading: false,
      startDate: undefined,
      endDate: undefined,
      // selectedDepotId: 0,
      selectedSortOption: "new-to-old",
      setSelectedBrouillard: (brouillard: Brouillard) => {
        set(() => ({ selectedBrouillard: brouillard }));
      },
      fetchAllBrouillard: async () => {
        const begin = get().startDate;
        const end = get().endDate;
        const auth = authenticatedEmployee.value;
        const brouillardsList: Brouillard[] = await BrouillardAPI.getAll(
          auth!,
          begin ? begin.toLocaleString() : undefined,
          end ? end.toLocaleString() : undefined
        );

        set(() => ({ brouillards: brouillardsList }));
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
        const brouillardList = await BrouillardAPI.getAll(auth!, begin, end);

        // if (get().selectedSortOption == "old-to-new") {
        //   BrouillardList = await BrouillardAPI.getAllFromOldToNew(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "new-to-old") {
        //   BrouillardList = await BrouillardAPI.getAllFromNewToOld(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "more-important") {
        //   BrouillardList = await BrouillardAPI.getAllMostImportant(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "less-important") {
        //   BrouillardList = await BrouillardAPI.getAllLessImportant(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "cim-benin-more-important") {
        //   BrouillardList =
        //     await BrouillardAPI.getAllCIMBENINMostImportant(auth!,begin, end);
        // } else if (get().selectedSortOption == "cim-benin-less-important") {
        //   BrouillardList =
        //     await BrouillardAPI.getAllCIMBENINLessImportant(auth!,begin, end);
        // } else if (get().selectedSortOption == "nocibe-more-important") {
        //   BrouillardList =
        //     await BrouillardAPI.getAllNOCIBEMostImportant(auth!,begin, end);
        // } else if (get().selectedSortOption == "nocibe-less-important") {
        //   BrouillardList =
        //     await BrouillardAPI.getAllNOCIBELessImportant(auth!,begin, end);
        // }

        set(() => ({ brouillards: brouillardList }));

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

        const brouillardList = await BrouillardAPI.getAll(auth!, begin, end);

        // if (get().selectedSortOption == "old-to-new") {
        //   BrouillardList = await BrouillardAPI.getAllFromOldToNew(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "new-to-old") {
        //   BrouillardList = await BrouillardAPI.getAllFromNewToOld(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "more-important") {
        //   BrouillardList = await BrouillardAPI.getAllMostImportant(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "less-important") {
        //   BrouillardList = await BrouillardAPI.getAllLessImportant(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "cim-benin-more-important") {
        //   BrouillardList =
        //     await BrouillardAPI.getAllCIMBENINMostImportant(auth!,begin, end);
        // } else if (get().selectedSortOption == "cim-benin-less-important") {
        //   BrouillardList =
        //     await BrouillardAPI.getAllCIMBENINLessImportant(auth!,begin, end);
        // } else if (get().selectedSortOption == "nocibe-more-important") {
        //   BrouillardList =
        //     await BrouillardAPI.getAllNOCIBEMostImportant(auth!,begin, end);
        // } else if (get().selectedSortOption == "nocibe-less-important") {
        //   BrouillardList =
        //     await BrouillardAPI.getAllNOCIBELessImportant(auth!,begin, end);
        // }

        set(() => ({ brouillards: brouillardList }));

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
        const auth = authenticatedEmployee.value;

        const brouillardList = await BrouillardAPI.getAll(auth!, begin, end);

        // if (get().selectedSortOption == "old-to-new") {
        //   BrouillardList = await BrouillardAPI.getAllFromOldToNew(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "new-to-old") {
        //   BrouillardList = await BrouillardAPI.getAllFromNewToOld(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "more-important") {
        //   BrouillardList = await BrouillardAPI.getAllMostImportant(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "less-important") {
        //   BrouillardList = await BrouillardAPI.getAllLessImportant(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "cim-benin-more-important") {
        //   BrouillardList =
        //     await BrouillardAPI.getAllCIMBENINMostImportant(auth!,begin, end);
        // } else if (get().selectedSortOption == "cim-benin-less-important") {
        //   BrouillardList =
        //     await BrouillardAPI.getAllCIMBENINLessImportant(auth!,begin, end);
        // } else if (get().selectedSortOption == "nocibe-more-important") {
        //   BrouillardList =
        //     await BrouillardAPI.getAllNOCIBEMostImportant(auth!,begin, end);
        // } else if (get().selectedSortOption == "nocibe-less-important") {
        //   BrouillardList =
        //     await BrouillardAPI.getAllNOCIBELessImportant(auth!,begin, end);
        // }

        set(() => ({ brouillards: brouillardList }));
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

        const brouillardList = await BrouillardAPI.getAll(auth!, begin, end);

        // if (value == "old-to-new") {
        //   BrouillardList = await BrouillardAPI.getAllFromOldToNew(
        //     begin,
        //     end
        //   );
        // } else if (value == "new-to-old") {
        //   BrouillardList = await BrouillardAPI.getAllFromNewToOld(
        //     begin,
        //     end
        //   );
        // } else if (value == "more-important") {
        //   BrouillardList = await BrouillardAPI.getAllMostImportant(
        //     begin,
        //     end
        //   );
        // } else if (value == "less-important") {
        //   BrouillardList = await BrouillardAPI.getAllLessImportant(
        //     begin,
        //     end
        //   );
        // } else if (value == "cim-benin-more-important") {
        //   BrouillardList =
        //     await BrouillardAPI.getAllCIMBENINMostImportant(auth!,begin, end);
        // } else if (value == "cim-benin-less-important") {
        //   BrouillardList =
        //     await BrouillardAPI.getAllCIMBENINLessImportant(auth!,begin, end);
        // } else if (value == "nocibe-more-important") {
        //   BrouillardList =
        //     await BrouillardAPI.getAllNOCIBEMostImportant(auth!,begin, end);
        // } else if (value == "nocibe-less-important") {
        //   BrouillardList =
        //     await BrouillardAPI.getAllNOCIBELessImportant(auth!,begin, end);
        // }

        set(() => ({ brouillards: brouillardList }));
      },
    }),
    {
      name: "BrouillardStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useBrouillardStore;
