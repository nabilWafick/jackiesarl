/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Moment } from "moment";
import { authenticatedEmployee } from "../../data/GlobalData";
import FactureMECEF from "../../models/facture_mecef/facture_mecef.model";
import AchatClient from "../../models/achat_client/achat_client.model";
import FactureMECEFAPI from "../../api/facture_mecef/facture_mecef.api";

interface FactureMECEFStore {
  facturesMECEF: FactureMECEF[];
  selectedPurchase: AchatClient | undefined;
  isLoading: boolean;
  startDate: Date | Moment | undefined;
  endDate: Date | Moment | undefined;
  isUpdate: boolean;
  // selectedSortOption: string;
  fetchAllClientsBill: () => void;
  setSelectedPurchase: (purchase: AchatClient | undefined) => void;
  setIsUpdate: (update: boolean) => void;
  onStartDateChange: (date: Date | Moment) => void;
  onEndDateChange: (date: Date | Moment) => void;
  resetDatesInterval: () => void;
  // onSelectedSetOptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const useFactureMECEFStore = create<FactureMECEFStore>()(
  persist(
    (set, get) => ({
      facturesMECEF: [],
      selectedPurchase: undefined,
      isLoading: false,
      startDate: undefined,
      endDate: undefined,
      selectedSortOption: "new-to-old",
      isUpdate: false,
      fetchAllClientsBill: async () => {
        const begin = get().startDate;
        const end = get().endDate;
        const auth = authenticatedEmployee.value;
        const facturesList: FactureMECEF[] = await FactureMECEFAPI.getAll(
          auth!,
          begin ? begin.toLocaleString() : undefined,
          end ? end.toLocaleString() : undefined
        );
        //  console.log("bills in store", facturesList);

        set(() => ({ facturesMECEF: facturesList }));
      },

      setSelectedPurchase: (purchase: AchatClient | undefined) => {
        set(() => ({ selectedPurchase: purchase }));
      },

      setIsUpdate: (update: boolean) => {
        set(() => ({ isUpdate: update }));
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

        const facturesList: FactureMECEF[] = await FactureMECEFAPI.getAll(
          auth!,
          begin ? begin.toLocaleString() : undefined,
          end ? end.toLocaleString() : undefined
        );

        set(() => ({ facturesMECEF: facturesList }));
        /*
        if (get().selectedSortOption == "alphabetic") {
          facturesList = await ClientsAPI.getAllByAlphabeticalOrder(
            auth!,
            begin,
            end
          );
          // console.log(facturesList);
        } else if (get().selectedSortOption == "old-to-new") {
          facturesList = await ClientsAPI.getAllFromOldToNew(auth!, begin, end);
        } else {
          facturesList = await ClientsAPI.getAllFromNewToOld(auth!, begin, end);
        }
          */
        set(() => ({ facturesMECEF: facturesList }));

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

        // let facturesList: FactureMECEF[] = [];

        const facturesList: FactureMECEF[] = await FactureMECEFAPI.getAll(
          auth!,
          begin ? begin.toLocaleString() : undefined,
          end ? end.toLocaleString() : undefined
        );

        set(() => ({ facturesMECEF: facturesList }));

        /*
        if (get().selectedSortOption == "alphabetic") {
          facturesList = await ClientsAPI.getAllByAlphabeticalOrder(
            auth!,
            begin,
            end
          );
          // console.log(facturesList);
        } else if (get().selectedSortOption == "old-to-new") {
          facturesList = await ClientsAPI.getAllFromOldToNew(auth!, begin, end);
        } else {
          facturesList = await ClientsAPI.getAllFromNewToOld(auth!, begin, end);
          }
          
          */

        set(() => ({ facturesMECEF: facturesList }));

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

        const facturesList: FactureMECEF[] = await FactureMECEFAPI.getAll(
          auth!,
          begin ? begin.toLocaleString() : undefined,
          end ? end.toLocaleString() : undefined
        );

        set(() => ({ facturesMECEF: facturesList }));

        /*
        if (get().selectedSortOption == "alphabetic") {
          facturesList = await ClientsAPI.getAllByAlphabeticalOrder(
            auth!,
            begin,
            end
          );
          // console.log(facturesList);
        } else if (get().selectedSortOption == "old-to-new") {
          facturesList = await ClientsAPI.getAllFromOldToNew(auth!, begin, end);
        } else {
          facturesList = await ClientsAPI.getAllFromNewToOld(auth!, begin, end);
        }
          */

        set(() => ({ facturesMECEF: facturesList }));
      },
      /*
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

        let facturesList: FactureMECEF[] = [];

        if (value == "alphabetic") {
          facturesList = await ClientsAPI.getAllByAlphabeticalOrder(
            auth!,
            begin,
            end
          );
          console.log(facturesList);
        } else if (value == "old-to-new") {
          facturesList = await ClientsAPI.getAllFromOldToNew(auth!, begin, end);
        } else {
          facturesList = await ClientsAPI.getAllFromNewToOld(auth!, begin, end);
        }
        set(() => ({ cturesMECEF: facturesList }));
          },
      */
    }),
    {
      name: "FactureMECEFStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useFactureMECEFStore;
