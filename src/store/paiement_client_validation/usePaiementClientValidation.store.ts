/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import PaiementClient from "../../models/paiement_client/paiement.model";
import PaiementClientAPI from "../../api/paiement_client/paiement_client.api";
import { Moment } from "moment";
import Employes from "../../models/employes/employes.model";

interface PaymentsValidationStore {
  clientPayments: PaiementClient[];
  clientPaymentsPerDay: Map<string, PaiementClient[]>;
  isLoading: boolean;
  selectedClientId: number;
  startDate: Date | Moment | undefined;
  endDate: Date | Moment | undefined;
  selectedSortOption: string;
  authenticatedEmployee: Employes | undefined;
  setAuthenticatedEmployee: (employee: Employes) => void;
  fetchAllClientPayments: () => void;
  onStartDateChange: (date: Date | Moment) => void;
  onEndDateChange: (date: Date | Moment) => void;
  resetDatesInterval: () => void;
  onSelectedSetOptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const usePaymentsValidationStore = create<PaymentsValidationStore>()(
  persist(
    (set, get) => ({
      clientPayments: [],
      clientsPayments: [],
      clientPaymentsPerDay: new Map(),
      selectedClientId: 0,
      startDate: undefined,
      endDate: undefined,
      selectedSortOption: "new-to-old",
      isLoading: false,
      authenticatedEmployee: undefined,
      setAuthenticatedEmployee: (employee) => {
        set(() => ({ authenticatedEmployee: employee }));
      },
      fetchAllClientPayments: async () => {
        // set(() => ({ selectedClientId: clientId }));
        const begin = get().startDate;
        const end = get().endDate;
        const auth = get().authenticatedEmployee;
        const selectedClientPayments = await PaiementClientAPI.getAll(
          auth!,
          begin ? begin.toLocaleString() : undefined,
          end ? end.toLocaleString() : undefined
        );
        set(() => ({ clientPayments: selectedClientPayments }));
      },

      /*  fetchAllClientsPayments: async () => {
        const allClientsPayments = await PaiementClientAPI.getAll();
        set(() => ({ clientsPayments: allClientsPayments }));
      },*/

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

        let selectedClientPayments: PaiementClient[] = [];

        if (get().selectedSortOption == "old-to-new") {
          selectedClientPayments = await PaiementClientAPI.getAllFromOldToNew(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "new-to-old") {
          selectedClientPayments = await PaiementClientAPI.getAllFromNewToOld(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "more-important") {
          selectedClientPayments = await PaiementClientAPI.getAllMostImportant(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "less-important") {
          selectedClientPayments = await PaiementClientAPI.getAllLessImportant(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "cim-benin-more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllCIMBENINMostImportant(
              auth!,
              begin,
              end
            );
        } else if (get().selectedSortOption == "cim-benin-less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllCIMBENINLessImportant(
              auth!,
              begin,
              end
            );
        } else if (get().selectedSortOption == "nocibe-more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllNOCIBEMostImportant(
              auth!,
              begin,
              end
            );
        } else if (get().selectedSortOption == "nocibe-less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllNOCIBELessImportant(
              auth!,
              begin,
              end
            );
        } else if (get().selectedSortOption == "unvalidated") {
          selectedClientPayments = await PaiementClientAPI.getAllUnvalidated(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "validated") {
          selectedClientPayments = await PaiementClientAPI.getAllValidated(
            auth!,
            begin,
            end
          );
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
        const auth = get().authenticatedEmployee;

        let selectedClientPayments: PaiementClient[] = [];

        if (get().selectedSortOption == "old-to-new") {
          selectedClientPayments = await PaiementClientAPI.getAllFromOldToNew(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "new-to-old") {
          selectedClientPayments = await PaiementClientAPI.getAllFromNewToOld(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "more-important") {
          selectedClientPayments = await PaiementClientAPI.getAllMostImportant(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "less-important") {
          selectedClientPayments = await PaiementClientAPI.getAllLessImportant(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "cim-benin-more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllCIMBENINMostImportant(
              auth!,
              begin,
              end
            );
        } else if (get().selectedSortOption == "cim-benin-less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllCIMBENINLessImportant(
              auth!,
              begin,
              end
            );
        } else if (get().selectedSortOption == "nocibe-more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllNOCIBEMostImportant(
              auth!,
              begin,
              end
            );
        } else if (get().selectedSortOption == "nocibe-less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllNOCIBELessImportant(
              auth!,
              begin,
              end
            );
        } else if (get().selectedSortOption == "unvalidated") {
          selectedClientPayments = await PaiementClientAPI.getAllUnvalidated(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "validated") {
          selectedClientPayments = await PaiementClientAPI.getAllValidated(
            auth!,
            begin,
            end
          );
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
        const auth = get().authenticatedEmployee;

        let selectedClientPayments: PaiementClient[] = [];

        if (get().selectedSortOption == "old-to-new") {
          selectedClientPayments = await PaiementClientAPI.getAllFromOldToNew(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "new-to-old") {
          selectedClientPayments = await PaiementClientAPI.getAllFromNewToOld(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "more-important") {
          selectedClientPayments = await PaiementClientAPI.getAllMostImportant(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "less-important") {
          selectedClientPayments = await PaiementClientAPI.getAllLessImportant(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "cim-benin-more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllCIMBENINMostImportant(
              auth!,
              begin,
              end
            );
        } else if (get().selectedSortOption == "cim-benin-less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllCIMBENINLessImportant(
              auth!,
              begin,
              end
            );
        } else if (get().selectedSortOption == "nocibe-more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllNOCIBEMostImportant(
              auth!,
              begin,
              end
            );
        } else if (get().selectedSortOption == "nocibe-less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllNOCIBELessImportant(
              auth!,
              begin,
              end
            );
        } else if (get().selectedSortOption == "unvalidated") {
          selectedClientPayments = await PaiementClientAPI.getAllUnvalidated(
            auth!,
            begin,
            end
          );
        } else if (get().selectedSortOption == "validated") {
          selectedClientPayments = await PaiementClientAPI.getAllValidated(
            auth!,
            begin,
            end
          );
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
        const auth = get().authenticatedEmployee;

        let selectedClientPayments: PaiementClient[] = [];

        if (value == "old-to-new") {
          selectedClientPayments = await PaiementClientAPI.getAllFromOldToNew(
            auth!,
            begin,
            end
          );
        } else if (value == "new-to-old") {
          selectedClientPayments = await PaiementClientAPI.getAllFromNewToOld(
            auth!,
            begin,
            end
          );
        } else if (value == "more-important") {
          selectedClientPayments = await PaiementClientAPI.getAllMostImportant(
            auth!,
            begin,
            end
          );
        } else if (value == "less-important") {
          selectedClientPayments = await PaiementClientAPI.getAllLessImportant(
            auth!,
            begin,
            end
          );
        } else if (value == "cim-benin-more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllCIMBENINMostImportant(
              auth!,
              begin,
              end
            );
        } else if (value == "cim-benin-less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllCIMBENINLessImportant(
              auth!,
              begin,
              end
            );
        } else if (value == "nocibe-more-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllNOCIBEMostImportant(
              auth!,
              begin,
              end
            );
        } else if (value == "nocibe-less-important") {
          selectedClientPayments =
            await PaiementClientAPI.getAllNOCIBELessImportant(
              auth!,
              begin,
              end
            );
        } else if (value == "unvalidated") {
          selectedClientPayments = await PaiementClientAPI.getAllUnvalidated(
            auth!,
            begin,
            end
          );
        } else if (value == "validated") {
          selectedClientPayments = await PaiementClientAPI.getAllValidated(
            auth!,
            begin,
            end
          );
        }

        set(() => ({ clientPayments: selectedClientPayments }));
      },
    }),
    {
      name: "PaymentsValidationStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default usePaymentsValidationStore;
