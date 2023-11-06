/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import Rapports from "../../models/rapports/rapports.model";
import RapportsAPI from "../../api/rapports/rapports.api";
import Employes from "../../models/employes/employes.model";

interface ReportsStore {
  employeesReports: Rapports[];
  authEmployeeReports: Rapports[];
  isLoading: boolean;
  reportSelectedEmployee: Employes | undefined;

  //   startDate: Date | Moment | undefined;
  //   endDate: Date | Moment | undefined;
  //   selectedSortOption: string;
  fetchAllEmployeesReports: () => void;
  fetchAllOfEmployeeReports: (employee_id: number) => void;
  setReportSelectedEmployee: (employee: Employes) => void;
  //   onStartDateChange: (date: Date | Moment) => void;
  //   onEndDateChange: (date: Date | Moment) => void;
  //   resetDatesInterval: () => void;
  //   onSelectedSetOptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const useReportsStore = create<ReportsStore>()(
  persist(
    (set, get) => ({
      employeesReports: [],
      authEmployeeReports: [],
      reportSelectedEmployee: undefined,
      //   startDate: undefined,
      //   endDate: undefined,
      //   selectedSortOption: "new-to-old",
      isLoading: false,
      fetchAllEmployeesReports: async () => {
        // set(() => ({ selectedClientId: clientId }));
        // const begin = get().startDate;
        // const end = get().endDate;
        const employeesReportsList = await RapportsAPI.getAll();
        //   begin ? begin.toLocaleString() : undefined,
        //   end ? end.toLocaleString() : undefined
        //();
        //  console.log("employeesReportsList", employeesReportsList);
        set(() => ({ employeesReports: employeesReportsList }));
      },
      fetchAllOfEmployeeReports: async (employee_id: number) => {
        // set(() => ({ selectedClientId: clientId }));
        // const begin = get().startDate;
        // const end = get().endDate;
        //   console.log("employee_id in store", employee_id);
        const employeeReports = await RapportsAPI.getAllOfEmployee(employee_id);
        //    console.log("employeeReports", employeeReports);
        //   begin ? begin.toLocaleString() : undefined,
        //   end ? end.toLocaleString() : undefined
        set(() => ({ authEmployeeReports: employeeReports }));
        //();
      },
      setReportSelectedEmployee: (employee: Employes) => {
        set(() => ({ reportSelectedEmployee: employee }));
      },

      /*  fetchAllClientsPayments: async () => {
        const allClientsPayments = await PaiementClientAPI.getAll();
        set(() => ({ clientsPayments: allClientsPayments }));
      },*/

      /* onStartDateChange: async (date: Date | Moment) => {
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
          selectedClientPayments = await PaiementClientAPI.getAllFromOldToNew(
            begin,
            end
          );
        } else if (get().selectedSortOption == "new-to-old") {
          selectedClientPayments = await PaiementClientAPI.getAllFromNewToOld(
            begin,
            end
          );
        } else if (get().selectedSortOption == "more-important") {
          selectedClientPayments = await PaiementClientAPI.getAllMostImportant(
            begin,
            end
          );
        } else if (get().selectedSortOption == "less-important") {
          selectedClientPayments = await PaiementClientAPI.getAllLessImportant(
            begin,
            end
          );
        } else if (get().selectedSortOption == "cim-benin-more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllCIMBENINMostImportant(begin, end);
        } else if (get().selectedSortOption == "cim-benin-less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllCIMBENINLessImportant(begin, end);
        } else if (get().selectedSortOption == "nocibe-more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllNOCIBEMostImportant(begin, end);
        } else if (get().selectedSortOption == "nocibe-less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllNOCIBELessImportant(begin, end);
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
          selectedClientPayments = await PaiementClientAPI.getAllFromOldToNew(
            begin,
            end
          );
        } else if (get().selectedSortOption == "new-to-old") {
          selectedClientPayments = await PaiementClientAPI.getAllFromNewToOld(
            begin,
            end
          );
        } else if (get().selectedSortOption == "more-important") {
          selectedClientPayments = await PaiementClientAPI.getAllMostImportant(
            begin,
            end
          );
        } else if (get().selectedSortOption == "less-important") {
          selectedClientPayments = await PaiementClientAPI.getAllLessImportant(
            begin,
            end
          );
        } else if (get().selectedSortOption == "cim-benin-more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllCIMBENINMostImportant(begin, end);
        } else if (get().selectedSortOption == "cim-benin-less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllCIMBENINLessImportant(begin, end);
        } else if (get().selectedSortOption == "nocibe-more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllNOCIBEMostImportant(begin, end);
        } else if (get().selectedSortOption == "nocibe-less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllNOCIBELessImportant(begin, end);
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
          selectedClientPayments = await PaiementClientAPI.getAllFromOldToNew(
            begin,
            end
          );
        } else if (get().selectedSortOption == "new-to-old") {
          selectedClientPayments = await PaiementClientAPI.getAllFromNewToOld(
            begin,
            end
          );
        } else if (get().selectedSortOption == "more-important") {
          selectedClientPayments = await PaiementClientAPI.getAllMostImportant(
            begin,
            end
          );
        } else if (get().selectedSortOption == "less-important") {
          selectedClientPayments = await PaiementClientAPI.getAllLessImportant(
            begin,
            end
          );
        } else if (get().selectedSortOption == "cim-benin-more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllCIMBENINMostImportant(begin, end);
        } else if (get().selectedSortOption == "cim-benin-less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllCIMBENINLessImportant(begin, end);
        } else if (get().selectedSortOption == "nocibe-more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllNOCIBEMostImportant(begin, end);
        } else if (get().selectedSortOption == "nocibe-less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllNOCIBELessImportant(begin, end);
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
          selectedClientPayments = await PaiementClientAPI.getAllFromOldToNew(
            begin,
            end
          );
        } else if (value == "new-to-old") {
          selectedClientPayments = await PaiementClientAPI.getAllFromNewToOld(
            begin,
            end
          );
        } else if (value == "more-important") {
          selectedClientPayments = await PaiementClientAPI.getAllMostImportant(
            begin,
            end
          );
        } else if (value == "less-important") {
          selectedClientPayments = await PaiementClientAPI.getAllLessImportant(
            begin,
            end
          );
        } else if (value == "cim-benin-more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllCIMBENINMostImportant(begin, end);
        } else if (value == "cim-benin-less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllCIMBENINLessImportant(begin, end);
        } else if (value == "nocibe-more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllNOCIBEMostImportant(begin, end);
        } else if (value == "nocibe-less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllNOCIBELessImportant(begin, end);
        }

        set(() => ({ clientPayments: selectedClientPayments }));
      },*/
    }),
    {
      name: "ReportsStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useReportsStore;
