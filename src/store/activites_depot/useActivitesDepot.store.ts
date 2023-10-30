/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import ActivitesDepot from "../../models/activites_depot/activites_depot.model";
import ActivitesDepotAPI from "../../api/activites_depot/activites_depot.api";
import { Moment } from "moment";

interface ActivitesDepotStore {
  activitesDepot: ActivitesDepot[];
  activitesDepotPerDay: Map<string, ActivitesDepot[]>;
  isLoading: boolean;
  startDate: Date | Moment | undefined;
  endDate: Date | Moment | undefined;
  selectedDepotId: number;
  selectedSortOption: string;
  fetchAllActivitesDepot: (id_depot: number) => void;
  onStartDateChange: (date: Date | Moment) => void;
  onEndDateChange: (date: Date | Moment) => void;
  resetDatesInterval: () => void;
  onSelectedSetOptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const useActivitesDepotStore = create<ActivitesDepotStore>()(
  persist(
    (set, get) => ({
      activitesDepot: [],
      activitesDepotPerDay: new Map(),
      isLoading: false,
      startDate: undefined,
      endDate: undefined,
      selectedDepotId: 0,
      selectedSortOption: "new-to-old",
      fetchAllActivitesDepot: async (id_depot: number) => {
        set(() => ({ selectedDepotId: id_depot }));
        const begin = get().startDate;
        const end = get().endDate;
        const activitesDepotList: ActivitesDepot[] =
          await ActivitesDepotAPI.getAllByDepotID(
            begin ? begin.toLocaleString() : undefined,
            end ? end.toLocaleString() : undefined,
            id_depot
          );
        set(() => ({ activitesDepot: activitesDepotList }));
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
        const activitesDepotList = await ActivitesDepotAPI.getAllByDepotID(
          begin,
          end,
          get().selectedDepotId
        );

        // if (get().selectedSortOption == "old-to-new") {
        //   activitesDepotList = await ActivitesDepotAPI.getAllByDepotIDFromOldToNew(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "new-to-old") {
        //   activitesDepotList = await ActivitesDepotAPI.getAllByDepotIDFromNewToOld(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "more-important") {
        //   activitesDepotList = await ActivitesDepotAPI.getAllByDepotIDMostImportant(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "less-important") {
        //   activitesDepotList = await ActivitesDepotAPI.getAllByDepotIDLessImportant(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "cim-benin-more-important") {
        //   activitesDepotList =
        //     await ActivitesDepotAPI.getAllByDepotIDCIMBENINMostImportant(begin, end);
        // } else if (get().selectedSortOption == "cim-benin-less-important") {
        //   activitesDepotList =
        //     await ActivitesDepotAPI.getAllByDepotIDCIMBENINLessImportant(begin, end);
        // } else if (get().selectedSortOption == "nocibe-more-important") {
        //   activitesDepotList =
        //     await ActivitesDepotAPI.getAllByDepotIDNOCIBEMostImportant(begin, end);
        // } else if (get().selectedSortOption == "nocibe-less-important") {
        //   activitesDepotList =
        //     await ActivitesDepotAPI.getAllByDepotIDNOCIBELessImportant(begin, end);
        // }

        set(() => ({ activitesDepot: activitesDepotList }));

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

        const activitesDepotList = await ActivitesDepotAPI.getAllByDepotID(
          begin,
          end,
          get().selectedDepotId
        );

        // if (get().selectedSortOption == "old-to-new") {
        //   activitesDepotList = await ActivitesDepotAPI.getAllByDepotIDFromOldToNew(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "new-to-old") {
        //   activitesDepotList = await ActivitesDepotAPI.getAllByDepotIDFromNewToOld(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "more-important") {
        //   activitesDepotList = await ActivitesDepotAPI.getAllByDepotIDMostImportant(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "less-important") {
        //   activitesDepotList = await ActivitesDepotAPI.getAllByDepotIDLessImportant(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "cim-benin-more-important") {
        //   activitesDepotList =
        //     await ActivitesDepotAPI.getAllByDepotIDCIMBENINMostImportant(begin, end);
        // } else if (get().selectedSortOption == "cim-benin-less-important") {
        //   activitesDepotList =
        //     await ActivitesDepotAPI.getAllByDepotIDCIMBENINLessImportant(begin, end);
        // } else if (get().selectedSortOption == "nocibe-more-important") {
        //   activitesDepotList =
        //     await ActivitesDepotAPI.getAllByDepotIDNOCIBEMostImportant(begin, end);
        // } else if (get().selectedSortOption == "nocibe-less-important") {
        //   activitesDepotList =
        //     await ActivitesDepotAPI.getAllByDepotIDNOCIBELessImportant(begin, end);
        // }

        set(() => ({ activitesDepot: activitesDepotList }));

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

        const activitesDepotList = await ActivitesDepotAPI.getAllByDepotID(
          begin,
          end,
          get().selectedDepotId
        );

        // if (get().selectedSortOption == "old-to-new") {
        //   activitesDepotList = await ActivitesDepotAPI.getAllByDepotIDFromOldToNew(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "new-to-old") {
        //   activitesDepotList = await ActivitesDepotAPI.getAllByDepotIDFromNewToOld(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "more-important") {
        //   activitesDepotList = await ActivitesDepotAPI.getAllByDepotIDMostImportant(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "less-important") {
        //   activitesDepotList = await ActivitesDepotAPI.getAllByDepotIDLessImportant(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "cim-benin-more-important") {
        //   activitesDepotList =
        //     await ActivitesDepotAPI.getAllByDepotIDCIMBENINMostImportant(begin, end);
        // } else if (get().selectedSortOption == "cim-benin-less-important") {
        //   activitesDepotList =
        //     await ActivitesDepotAPI.getAllByDepotIDCIMBENINLessImportant(begin, end);
        // } else if (get().selectedSortOption == "nocibe-more-important") {
        //   activitesDepotList =
        //     await ActivitesDepotAPI.getAllByDepotIDNOCIBEMostImportant(begin, end);
        // } else if (get().selectedSortOption == "nocibe-less-important") {
        //   activitesDepotList =
        //     await ActivitesDepotAPI.getAllByDepotIDNOCIBELessImportant(begin, end);
        // }

        set(() => ({ activitesDepot: activitesDepotList }));
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

        const activitesDepotList = await ActivitesDepotAPI.getAllByDepotID(
          begin,
          end,
          get().selectedDepotId
        );

        // if (value == "old-to-new") {
        //   activitesDepotList = await ActivitesDepotAPI.getAllByDepotIDFromOldToNew(
        //     begin,
        //     end
        //   );
        // } else if (value == "new-to-old") {
        //   activitesDepotList = await ActivitesDepotAPI.getAllByDepotIDFromNewToOld(
        //     begin,
        //     end
        //   );
        // } else if (value == "more-important") {
        //   activitesDepotList = await ActivitesDepotAPI.getAllByDepotIDMostImportant(
        //     begin,
        //     end
        //   );
        // } else if (value == "less-important") {
        //   activitesDepotList = await ActivitesDepotAPI.getAllByDepotIDLessImportant(
        //     begin,
        //     end
        //   );
        // } else if (value == "cim-benin-more-important") {
        //   activitesDepotList =
        //     await ActivitesDepotAPI.getAllByDepotIDCIMBENINMostImportant(begin, end);
        // } else if (value == "cim-benin-less-important") {
        //   activitesDepotList =
        //     await ActivitesDepotAPI.getAllByDepotIDCIMBENINLessImportant(begin, end);
        // } else if (value == "nocibe-more-important") {
        //   activitesDepotList =
        //     await ActivitesDepotAPI.getAllByDepotIDNOCIBEMostImportant(begin, end);
        // } else if (value == "nocibe-less-important") {
        //   activitesDepotList =
        //     await ActivitesDepotAPI.getAllByDepotIDNOCIBELessImportant(begin, end);
        // }

        set(() => ({ activitesDepot: activitesDepotList }));
      },
    }),
    {
      name: "ActivitesDepotStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useActivitesDepotStore;
