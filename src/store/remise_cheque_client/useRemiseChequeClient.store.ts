/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import RemiseChequeClient from "../../models/remise_cheque_client/remise_cheque_client.model";
import RemiseChequeClientAPI from "../../api/remise_cheque_client/remise_cheque_client.api";
import { Moment } from "moment";
import Employes from "../../models/employes/employes.model";

interface ClientChecksRemittanceStore {
  clientChecksRemittance: RemiseChequeClient[];
  clientChecksRemittancePerDay: Map<string, RemiseChequeClient[]>;
  isLoading: boolean;
  selectedClientId: number;
  startDate: Date | Moment | undefined;
  endDate: Date | Moment | undefined;
  selectedSortOption: string;
  authenticatedEmployee: Employes | undefined;
  setAuthenticatedEmployee: (employee: Employes) => void;
  fetchAllClientChecksRemittance: (clientId: number) => void;
  onStartDateChange: (date: Date | Moment) => void;
  onEndDateChange: (date: Date | Moment) => void;
  resetDatesInterval: () => void;
  onSelectedSetOptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const useClientChecksRemittanceStore = create<ClientChecksRemittanceStore>()(
  persist(
    (set, get) => ({
      clientChecksRemittance: [],
      clientChecksRemittancePerDay: new Map(),
      isLoading: false,
      selectedClientId: 0,
      startDate: undefined,
      endDate: undefined,
      selectedSortOption: "new-to-old",
      authenticatedEmployee: undefined,
      setAuthenticatedEmployee: (employee) => {
        set(() => ({ authenticatedEmployee: employee }));
      },
      fetchAllClientChecksRemittance: async (clientId: number) => {
        set(() => ({ selectedClientId: clientId }));
        const begin = get().startDate;
        const end = get().endDate;
        const auth = get().authenticatedEmployee;
        const selectedclientChecksRemittance =
          await RemiseChequeClientAPI.getAllOfClient(
            auth!,
            begin ? begin.toLocaleString() : undefined,
            end ? end.toLocaleString() : undefined,
            clientId
          );
        set(() => ({ clientChecksRemittance: selectedclientChecksRemittance }));
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

        let selectedClientCheckRemittance: RemiseChequeClient[] = [];

        if (get().selectedSortOption == "old-to-new") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientFromOldToNew(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "new-to-old") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientFromNewToOld(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "more-important") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientMostImportant(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "less-important") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientLessImportant(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "rest-more-important") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientRestMoreImportant(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "rest-less-important") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientRestLessImportant(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "validated") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientValidated(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "unvalidated") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientUnvalidated(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        }
        // banks
        else if (get().selectedSortOption == "BOA") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientBOABank(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "UBA") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientUBABank(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "NSIA") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientNSIABank(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "BGFI") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientBGFIBank(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "SGB") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientSGBBank(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "Ecobank") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientEcobankBank(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        }

        set(() => ({ clientChecksRemittance: selectedClientCheckRemittance }));

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

        let selectedClientCheckRemittance: RemiseChequeClient[] = [];

        if (get().selectedSortOption == "old-to-new") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientFromOldToNew(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "new-to-old") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientFromNewToOld(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "more-important") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientMostImportant(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "less-important") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientLessImportant(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "rest-more-important") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientRestMoreImportant(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "rest-less-important") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientRestLessImportant(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "validated") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientValidated(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "unvalidated") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientUnvalidated(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        }
        // banks
        else if (get().selectedSortOption == "BOA") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientBOABank(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "UBA") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientUBABank(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "NSIA") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientNSIABank(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "BGFI") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientBGFIBank(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "SGB") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientSGBBank(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "Ecobank") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientEcobankBank(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        }

        set(() => ({ clientChecksRemittance: selectedClientCheckRemittance }));

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

        let selectedClientCheckRemittance: RemiseChequeClient[] = [];

        if (get().selectedSortOption == "old-to-new") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientFromOldToNew(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "new-to-old") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientFromNewToOld(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "more-important") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientMostImportant(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "less-important") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientLessImportant(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "rest-more-important") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientRestMoreImportant(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "rest-less-important") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientRestLessImportant(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "validated") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientValidated(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "unvalidated") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientUnvalidated(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        }
        // banks
        else if (get().selectedSortOption == "BOA") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientBOABank(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "UBA") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientUBABank(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "NSIA") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientNSIABank(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "BGFI") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientBGFIBank(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "SGB") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientSGBBank(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "Ecobank") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientEcobankBank(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        }

        set(() => ({ clientChecksRemittance: selectedClientCheckRemittance }));
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

        let selectedClientCheckRemittance: RemiseChequeClient[] = [];

        if (value == "old-to-new") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientFromOldToNew(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (value == "new-to-old") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientFromNewToOld(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (value == "more-important") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientMostImportant(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (value == "less-important") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientLessImportant(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (value == "rest-more-important") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientRestMoreImportant(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (value == "rest-less-important") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientRestLessImportant(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (value == "validated") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientValidated(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (value == "unvalidated") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientUnvalidated(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        }
        // banks
        else if (get().selectedSortOption == "BOA") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientBOABank(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "UBA") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientUBABank(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "NSIA") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientNSIABank(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "BGFI") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientBGFIBank(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "SGB") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientSGBBank(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        } else if (get().selectedSortOption == "Ecobank") {
          selectedClientCheckRemittance =
            await RemiseChequeClientAPI.getAllOfClientEcobankBank(
              auth!,
              begin,
              end,
              get().selectedClientId
            );
        }

        set(() => ({ clientChecksRemittance: selectedClientCheckRemittance }));
      },
      /* sortClientChecksRemittanceByDateIntervalPerDay: (
        beginningDate: Date,
        endingDate: Date
      ) => {
        set((state) => {
          state.clientChecksRemittance.forEach((clientCheckRemittance) => {
            const clientDate = clientCheckRemittance.date_remise!;

            // Vérifiez si la date d'ajout est dans l'intervalle spécifié
            if (clientDate >= beginningDate && clientDate <= endingDate) {
              // Formatez la date d'ajout comme une chaîne de caractères "yyyy-MM-dd"
              const dateKey = clientDate.toISOString().split("T")[0];

              // Ajoutez le client au groupe correspondant à cette date
              if (!state.clientChecksRemittancePerDay.has(dateKey)) {
                state.clientChecksRemittancePerDay.set(dateKey, []);
              }
              state.clientChecksRemittancePerDay
                .get(dateKey)!
                .push(clientCheckRemittance);
            }
          });

          state.clientChecksRemittancePerDay.forEach((clients) => {
            // Triez les clients par date_ajout, du plus ancien au plus récent
            clients.sort(
              (a, b) => a.date_remise!.getTime() - b.date_remise!.getTime()
            );
          });

          return {
            clientChecksRemittancePerDay: state.clientChecksRemittancePerDay,
          };
        });
      },*/
    }),
    {
      name: "ClientChecksRemittanceStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useClientChecksRemittanceStore;
