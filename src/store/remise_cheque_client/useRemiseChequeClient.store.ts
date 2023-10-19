/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import RemiseChequeClient from "../../models/remise_cheque_client/remise_cheque_client.model";
import RemiseChequeClientAPI from "../../api/remise_cheque_client/remise_cheque_client.api";

interface ClientChecksRemittanceStore {
  clientChecksRemittance: RemiseChequeClient[];
  clientChecksRemittancePerDay: Map<string, RemiseChequeClient[]>;
  isLoading: boolean;
  fetchAllClientChecksRemittance: (clientId: number) => void;
  sortClientChecksRemittanceByDate: () => void;
  sortClientChecksRemittanceByDateInterval: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
  sortClientChecksRemittanceByDateIntervalPerDay: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
}

const useClientChecksRemittanceStore = create<ClientChecksRemittanceStore>()(
  persist(
    (set, get) => ({
      clientChecksRemittance: [],
      clientChecksRemittancePerDay: new Map(),
      isLoading: false,
      fetchAllClientChecksRemittance: async (clientId: number) => {
        const selectedclientChecksRemittance =
          await RemiseChequeClientAPI.getAllOfClient(clientId);
        set(() => ({ clientChecksRemittance: selectedclientChecksRemittance }));
      },

      sortClientChecksRemittanceByDate: () => {
        set((state) => {
          const sortedList = [...state.clientChecksRemittance].sort(
            (clientCheckRemittance1, clientCheckRemittance2) =>
              clientCheckRemittance1.date_remise!.getTime() -
              clientCheckRemittance2.date_remise!.getTime()
          );
          return {
            clientChecksRemittance: sortedList,
          };
        });
      },
      sortClientChecksRemittanceByDateInterval: (
        beginningDate: Date,
        endingDate: Date
      ) => {
        set((state) => {
          const sortedList = [...state.clientChecksRemittance].filter(
            (clientCheckRemittance) => {
              const checkRemittanceDate = clientCheckRemittance.date_remise!;
              return (
                checkRemittanceDate >= beginningDate &&
                checkRemittanceDate <= endingDate
              );
            }
          );
          return {
            clientChecksRemittance: sortedList,
          };
        });
      },
      sortClientChecksRemittanceByDateIntervalPerDay: (
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
      },
    }),
    {
      name: "ClientChecksRemittanceStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useClientChecksRemittanceStore;
