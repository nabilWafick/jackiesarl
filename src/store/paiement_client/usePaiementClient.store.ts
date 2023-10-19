/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import PaiementClient from "../../models/paiement_client/paiement.model";
import PaiementClientAPI from "../../api/paiement_client/paiement_client.api";

interface ClientPaymentsStore {
  clientPayments: PaiementClient[];
  clientPaymentsPerDay: Map<string, PaiementClient[]>;
  isLoading: boolean;
  fetchAllClientPayments: (clientId: number) => void;
  sortClientPaymentsByCIMBENINCategory: () => void;
  sortClientPaymentsNOCIBECategory: () => void;
  sortClientPaymentsOTHERCategory: () => void;
  sortClientPaymentsByDate: () => void;
  sortClientPaymentsByDateInterval: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
  sortClientPaymentsByDateIntervalPerDay: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
}

const useClientPaymentsStore = create<ClientPaymentsStore>()(
  persist(
    (set, get) => ({
      clientPayments: [],
      clientPaymentsPerDay: new Map(),
      isLoading: false,
      fetchAllClientPayments: async (clientId: number) => {
        const selectedClientPayments = await PaiementClientAPI.getAllOfClient(
          clientId
        );
        set(() => ({ clientPayments: selectedClientPayments }));
      },
      sortClientPaymentsByCIMBENINCategory: () => {
        set((state) => {
          const sortedList = [...state.clientPayments].filter(
            (clientPayment) => clientPayment.categorie === "CIM BENIN"
          );

          return {
            clientPayments: sortedList,
          };
        });
      },
      sortClientPaymentsNOCIBECategory: () => {
        set((state) => {
          const sortedList = [...state.clientPayments].filter(
            (clientPayment) => clientPayment.categorie === "NOCIBE"
          );
          return {
            clientPayments: sortedList,
          };
        });
      },
      sortClientPaymentsOTHERCategory: () => {
        set((state) => {
          const sortedList = [...state.clientPayments].filter(
            (clientPayment) => clientPayment.categorie === "Autres"
          );

          return {
            clientPayments: sortedList,
          };
        });
      },
      sortClientPaymentsByDate: () => {
        set((state) => {
          const sortedList = [...state.clientPayments].sort(
            (clientPayment1, clientPayment2) =>
              clientPayment1.date_paiement!.getTime() -
              clientPayment2.date_paiement!.getTime()
          );
          return {
            clientPayments: sortedList,
          };
        });
      },
      sortClientPaymentsByDateInterval: (
        beginningDate: Date,
        endingDate: Date
      ) => {
        set((state) => {
          const sortedList = [...state.clientPayments].filter(
            (clientPayment) => {
              const purchaseDate = clientPayment.date_paiement!;
              return (
                purchaseDate >= beginningDate && purchaseDate <= endingDate
              );
            }
          );
          return {
            clientPayments: sortedList,
          };
        });
      },
      sortClientPaymentsByDateIntervalPerDay: (
        beginningDate: Date,
        endingDate: Date
      ) => {
        set((state) => {
          state.clientPayments.forEach((clientPayment) => {
            const clientDate = clientPayment.date_paiement!;

            // Vérifiez si la date d'ajout est dans l'intervalle spécifié
            if (clientDate >= beginningDate && clientDate <= endingDate) {
              // Formatez la date d'ajout comme une chaîne de caractères "yyyy-MM-dd"
              const dateKey = clientDate.toISOString().split("T")[0];

              // Ajoutez le client au groupe correspondant à cette date
              if (!state.clientPaymentsPerDay.has(dateKey)) {
                state.clientPaymentsPerDay.set(dateKey, []);
              }
              state.clientPaymentsPerDay.get(dateKey)!.push(clientPayment);
            }
          });

          state.clientPaymentsPerDay.forEach((clients) => {
            // Triez les clients par date_ajout, du plus ancien au plus récent
            clients.sort(
              (a, b) => a.date_paiement!.getTime() - b.date_paiement!.getTime()
            );
          });

          return { clientPaymentsPerDay: state.clientPaymentsPerDay };
        });
      },
    }),
    {
      name: "ClientPaymentsStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useClientPaymentsStore;
