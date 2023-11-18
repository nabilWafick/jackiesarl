/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import StockCamion from "../../models/stock_camion/stock_camion.model";
import StockCamionAPI from "../../api/stock_camion/stock_camion.api";
import { Moment } from "moment";
import Employes from "../../models/employes/employes.model";

interface TrucksStockStore {
  trucksStock: StockCamion[];
  trucksStockPerDay: Map<string, StockCamion[]>;
  isLoading: boolean;
  startDate: Date | Moment | undefined;
  endDate: Date | Moment | undefined;
  selectedSortOption: string;
  authenticatedEmployee: Employes | undefined;
  setAuthenticatedEmployee: (employee: Employes) => void;
  fetchAllTruckStock: () => void;
  onStartDateChange: (date: Date | Moment) => void;
  onEndDateChange: (date: Date | Moment) => void;
  resetDatesInterval: () => void;
  // onSelectedSetOptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const useTrucksStockStore = create<TrucksStockStore>()(
  persist(
    (set, get) => ({
      trucksStock: [],
      trucksStockPerDay: new Map(),
      isLoading: false,
      startDate: undefined,
      endDate: undefined,
      selectedSortOption: "new-to-old",
      authenticatedEmployee: undefined,
      setAuthenticatedEmployee: (employee) => {
        set(() => ({ authenticatedEmployee: employee }));
      },
      fetchAllTruckStock: async () => {
        const begin = get().startDate;
        const end = get().endDate;
        const auth = get().authenticatedEmployee;
        const selectedtrucksStock = await StockCamionAPI.getAll(
          auth!,
          begin ? begin.toLocaleString() : undefined,
          end ? end.toLocaleString() : undefined
        );
        set(() => ({ trucksStock: selectedtrucksStock }));
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

        const truckStocksList: StockCamion[] = await StockCamionAPI.getAll(
          auth!,
          begin,
          end
        );

        // if (get().selectedSortOption == "old-to-new") {
        //   truckStocksList = await StockCamionAPI.getAllFromOldToNew(begin, end);
        // } else if (get().selectedSortOption == "new-to-old") {
        //   truckStocksList = await StockCamionAPI.getAllFromNewToOld(begin, end);
        // } else if (get().selectedSortOption == "more-important") {
        //   truckStocksList = await StockCamionAPI.getAllMostImportant(begin, end);
        // } else if (get().selectedSortOption == "less-important") {
        //   truckStocksList = await StockCamionAPI.getAllLessImportant(begin, end);
        // } else if (get().selectedSortOption == "validated") {
        //   truckStocksList = await StockCamionAPI.getAllValidated(begin, end);
        // } else if (get().selectedSortOption == "unvalidated") {
        //   truckStocksList = await StockCamionAPI.getAllUnvalidated(begin, end);
        // }

        set(() => ({ trucksStock: truckStocksList }));

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

        const truckStocksList: StockCamion[] = await StockCamionAPI.getAll(
          auth!,
          begin,
          end
        );

        // if (get().selectedSortOption == "old-to-new") {
        //   truckStocksList = await StockCamionAPI.getAllFromOldToNew(begin, end);
        // } else if (get().selectedSortOption == "new-to-old") {
        //   truckStocksList = await StockCamionAPI.getAllFromNewToOld(begin, end);
        // } else if (get().selectedSortOption == "more-important") {
        //   truckStocksList = await StockCamionAPI.getAllMostImportant(begin, end);
        // } else if (get().selectedSortOption == "less-important") {
        //   truckStocksList = await StockCamionAPI.getAllLessImportant(begin, end);
        // } else if (get().selectedSortOption == "validated") {
        //   truckStocksList = await StockCamionAPI.getAllValidated(begin, end);
        // } else if (get().selectedSortOption == "unvalidated") {
        //   truckStocksList = await StockCamionAPI.getAllUnvalidated(begin, end);
        // }

        set(() => ({ trucksStock: truckStocksList }));

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

        const truckStocksList: StockCamion[] = await StockCamionAPI.getAll(
          auth!,
          begin,
          end
        );

        // if (get().selectedSortOption == "old-to-new") {
        //   truckStocksList = await StockCamionAPI.getAllFromOldToNew(begin, end);
        // } else if (get().selectedSortOption == "new-to-old") {
        //   truckStocksList = await StockCamionAPI.getAllFromNewToOld(begin, end);
        // } else if (get().selectedSortOption == "more-important") {
        //   truckStocksList = await StockCamionAPI.getAllMostImportant(begin, end);
        // } else if (get().selectedSortOption == "less-important") {
        //   truckStocksList = await StockCamionAPI.getAllLessImportant(begin, end);
        // } else if (get().selectedSortOption == "validated") {
        //   truckStocksList = await StockCamionAPI.getAllValidated(begin, end);
        // } else if (get().selectedSortOption == "unvalidated") {
        //   truckStocksList = await StockCamionAPI.getAllUnvalidated(begin, end);
        // }

        set(() => ({ trucksStock: truckStocksList }));
      },
      /*  onSelectedSetOptionChange: async (
        e: React.ChangeEvent<HTMLSelectElement>
      ) => {
        const { value } = e.target;
        set(() => ({ selectedSortOption: value }));

        const begin = get().startDate
          ? get().startDate!.toLocaleString()
          : undefined;
        const end = get().endDate ? get().endDate!.toLocaleString() : undefined;

        const truckStocksList: StockCamion[] = await StockCamionAPI.getAll(begin,end);

        if (value == "old-to-new") {
          truckStocksList = await StockCamionAPI.getAllFromOldToNew(begin, end);
        } else if (value == "new-to-old") {
          truckStocksList = await StockCamionAPI.getAllFromNewToOld(begin, end);
        } else if (value == "more-important") {
          truckStocksList = await StockCamionAPI.getAllMostImportant(begin, end);
        } else if (value == "less-important") {
          truckStocksList = await StockCamionAPI.getAllLessImportant(begin, end);
        } else if (value == "validated") {
          truckStocksList = await StockCamionAPI.getAllValidated(begin, end);
        } else if (value == "unvalidated") {
          truckStocksList = await StockCamionAPI.getAllUnvalidated(begin, end);
        }

        set(() => ({ StockCamion: truckStocksList }));
      },*/
    }),
    {
      name: "TrucksStockStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useTrucksStockStore;
