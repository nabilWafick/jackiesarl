/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AchatEntreprise from "../../models/achat_entreprise/achat_entreprise.model";
import AchatEntrepriseAPI from "../../api/achat_entreprise/achat_entreprise.api";
import { Moment } from "moment";
import Employes from "../../models/employes/employes.model";

interface CompanyPurchasesListStore {
  companyPurchases: AchatEntreprise[];
  companyPurchasesListPerDay: Map<string, AchatEntreprise[]>;
  isLoading: boolean;
  startDate: Date | Moment | undefined;
  endDate: Date | Moment | undefined;
  selectedSortOption: string;
  authenticatedEmployee: Employes | undefined;
  setAuthenticatedEmployee: (employee: Employes) => void;
  fetchAllCompanyPurchases: () => void;
  onStartDateChange: (date: Date | Moment) => void;
  onEndDateChange: (date: Date | Moment) => void;
  resetDatesInterval: () => void;
  onSelectedSetOptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const useCompanyPurchasesListStore = create<CompanyPurchasesListStore>()(
  persist(
    (set, get) => ({
      companyPurchases: [],
      companyPurchasesListPerDay: new Map(),
      isLoading: false,
      startDate: undefined,
      endDate: undefined,
      selectedSortOption: "new-to-old",
      authenticatedEmployee: undefined,
      setAuthenticatedEmployee: (employee) => {
        set(() => ({ authenticatedEmployee: employee }));
      },
      fetchAllCompanyPurchases: async () => {
        const begin = get().startDate;
        const end = get().endDate;
        const auth = get().authenticatedEmployee;
        const companyPurchasesList = await AchatEntrepriseAPI.getAll(
          auth!,
          begin ? begin.toLocaleString() : undefined,
          end ? end.toLocaleString() : undefined
        );
        set(() => ({ companyPurchases: companyPurchasesList }));
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
        const companyPurchasesList = await AchatEntrepriseAPI.getAll(
          auth!,
          begin,
          end
        );

        // if (get().selectedSortOption == "old-to-new") {
        //   companyPurchasesList = await AchatEntrepriseAPI.getAllFromOldToNew(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "new-to-old") {
        //   companyPurchasesList = await AchatEntrepriseAPI.getAllFromNewToOld(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "more-important") {
        //   companyPurchasesList = await AchatEntrepriseAPI.getAllMostImportant(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "less-important") {
        //   companyPurchasesList = await AchatEntrepriseAPI.getAllLessImportant(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "cim-benin-more-important") {
        //   companyPurchasesList =
        //     await AchatEntrepriseAPI.getAllCIMBENINMostImportant(begin, end);
        // } else if (get().selectedSortOption == "cim-benin-less-important") {
        //   companyPurchasesList =
        //     await AchatEntrepriseAPI.getAllCIMBENINLessImportant(begin, end);
        // } else if (get().selectedSortOption == "nocibe-more-important") {
        //   companyPurchasesList =
        //     await AchatEntrepriseAPI.getAllNOCIBEMostImportant(begin, end);
        // } else if (get().selectedSortOption == "nocibe-less-important") {
        //   companyPurchasesList =
        //     await AchatEntrepriseAPI.getAllNOCIBELessImportant(begin, end);
        // }

        set(() => ({ companyPurchases: companyPurchasesList }));

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

        const companyPurchasesList = await AchatEntrepriseAPI.getAll(
          auth!,
          begin,
          end
        );

        // if (get().selectedSortOption == "old-to-new") {
        //   companyPurchasesList = await AchatEntrepriseAPI.getAllFromOldToNew(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "new-to-old") {
        //   companyPurchasesList = await AchatEntrepriseAPI.getAllFromNewToOld(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "more-important") {
        //   companyPurchasesList = await AchatEntrepriseAPI.getAllMostImportant(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "less-important") {
        //   companyPurchasesList = await AchatEntrepriseAPI.getAllLessImportant(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "cim-benin-more-important") {
        //   companyPurchasesList =
        //     await AchatEntrepriseAPI.getAllCIMBENINMostImportant(begin, end);
        // } else if (get().selectedSortOption == "cim-benin-less-important") {
        //   companyPurchasesList =
        //     await AchatEntrepriseAPI.getAllCIMBENINLessImportant(begin, end);
        // } else if (get().selectedSortOption == "nocibe-more-important") {
        //   companyPurchasesList =
        //     await AchatEntrepriseAPI.getAllNOCIBEMostImportant(begin, end);
        // } else if (get().selectedSortOption == "nocibe-less-important") {
        //   companyPurchasesList =
        //     await AchatEntrepriseAPI.getAllNOCIBELessImportant(begin, end);
        // }

        set(() => ({ companyPurchases: companyPurchasesList }));

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

        const companyPurchasesList = await AchatEntrepriseAPI.getAll(
          auth!,
          begin,
          end
        );

        // if (get().selectedSortOption == "old-to-new") {
        //   companyPurchasesList = await AchatEntrepriseAPI.getAllFromOldToNew(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "new-to-old") {
        //   companyPurchasesList = await AchatEntrepriseAPI.getAllFromNewToOld(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "more-important") {
        //   companyPurchasesList = await AchatEntrepriseAPI.getAllMostImportant(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "less-important") {
        //   companyPurchasesList = await AchatEntrepriseAPI.getAllLessImportant(
        //     begin,
        //     end
        //   );
        // } else if (get().selectedSortOption == "cim-benin-more-important") {
        //   companyPurchasesList =
        //     await AchatEntrepriseAPI.getAllCIMBENINMostImportant(begin, end);
        // } else if (get().selectedSortOption == "cim-benin-less-important") {
        //   companyPurchasesList =
        //     await AchatEntrepriseAPI.getAllCIMBENINLessImportant(begin, end);
        // } else if (get().selectedSortOption == "nocibe-more-important") {
        //   companyPurchasesList =
        //     await AchatEntrepriseAPI.getAllNOCIBEMostImportant(begin, end);
        // } else if (get().selectedSortOption == "nocibe-less-important") {
        //   companyPurchasesList =
        //     await AchatEntrepriseAPI.getAllNOCIBELessImportant(begin, end);
        // }

        set(() => ({ companyPurchases: companyPurchasesList }));
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

        const companyPurchasesList = await AchatEntrepriseAPI.getAll(
          auth!,
          begin,
          end
        );

        // if (value == "old-to-new") {
        //   companyPurchasesList = await AchatEntrepriseAPI.getAllFromOldToNew(
        //     begin,
        //     end
        //   );
        // } else if (value == "new-to-old") {
        //   companyPurchasesList = await AchatEntrepriseAPI.getAllFromNewToOld(
        //     begin,
        //     end
        //   );
        // } else if (value == "more-important") {
        //   companyPurchasesList = await AchatEntrepriseAPI.getAllMostImportant(
        //     begin,
        //     end
        //   );
        // } else if (value == "less-important") {
        //   companyPurchasesList = await AchatEntrepriseAPI.getAllLessImportant(
        //     begin,
        //     end
        //   );
        // } else if (value == "cim-benin-more-important") {
        //   companyPurchasesList =
        //     await AchatEntrepriseAPI.getAllCIMBENINMostImportant(begin, end);
        // } else if (value == "cim-benin-less-important") {
        //   companyPurchasesList =
        //     await AchatEntrepriseAPI.getAllCIMBENINLessImportant(begin, end);
        // } else if (value == "nocibe-more-important") {
        //   companyPurchasesList =
        //     await AchatEntrepriseAPI.getAllNOCIBEMostImportant(begin, end);
        // } else if (value == "nocibe-less-important") {
        //   companyPurchasesList =
        //     await AchatEntrepriseAPI.getAllNOCIBELessImportant(begin, end);
        // }

        set(() => ({ companyPurchases: companyPurchasesList }));
      },
    }),
    {
      name: "CompanyPurchasesListStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCompanyPurchasesListStore;
