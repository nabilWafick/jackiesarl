/* eslint-disable @typescript-eslint/no-unused-vars */

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import PaiementClientAPI from "../../api/paiement_client/paiement_client.api";
import PaiementClient from "../../models/paiement_client/paiement.model";
import ClientsAPI from "../../api/clients/clients.api";

interface ClientsPaymentsValidationStore {
  clientsPaymentsValidation: PaiementClient[];
  clientsPaymentsValidationPerDay: Map<string, PaiementClient[]>;
  isLoading: boolean;
  fetchAllClientsPaymentsValidation: () => void;
  sortClientsPaymentsValidationByCIMBENINCategory: () => void;
  sortClientsPaymentsValidationNOCIBECategory: () => void;
  sortClientsPaymentsValidationOTHERCategory: () => void;
  sortClientsPaymentsValidationByDate: () => void;
  sortClientsPaymentsValidationByDateInterval: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
  sortClientsPaymentsValidationByDateIntervalPerDay: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
}

const useClientsPaymentsValidationStore =
  create<ClientsPaymentsValidationStore>()(
    persist(
      (set, get) => ({
        clientsPaymentsValidation: [],
        clientsPaymentsValidationPerDay: new Map(),
        isLoading: false,
        fetchAllClientsPaymentsValidation: async () => {
          const clientsPayments = await PaiementClientAPI.getAll();

          set(() => ({ clientsPaymentsValidation: clientsPayments }));
          //  console.log();
        },
        sortClientsPaymentsValidationByCIMBENINCategory: () => {
          set((state) => {
            const sortedList = [...state.clientsPaymentsValidation].filter(
              (clientPayment) => clientPayment.categorie === "CIM BENIN"
            );

            return {
              clientsPaymentsValidation: sortedList,
            };
          });
        },
        sortClientsPaymentsValidationNOCIBECategory: () => {
          set((state) => {
            const sortedList = [...state.clientsPaymentsValidation].filter(
              (clientPayment) => clientPayment.categorie === "NOCIBE"
            );
            return {
              clientsPaymentsValidation: sortedList,
            };
          });
        },
        sortClientsPaymentsValidationOTHERCategory: () => {
          set((state) => {
            const sortedList = [...state.clientsPaymentsValidation].filter(
              (clientPayment) => clientPayment.categorie === "Autres"
            );

            return {
              clientsPaymentsValidation: sortedList,
            };
          });
        },
        sortClientsPaymentsValidationByDate: () => {
          set((state) => {
            const sortedList = [...state.clientsPaymentsValidation].sort(
              (clientPayment1, clientPayment2) =>
                clientPayment1.date_paiement!.getTime() -
                clientPayment2.date_paiement!.getTime()
            );
            return {
              clientsPaymentsValidation: sortedList,
            };
          });
        },
        sortClientsPaymentsValidationByDateInterval: (
          beginningDate: Date,
          endingDate: Date
        ) => {
          set((state) => {
            const sortedList = [...state.clientsPaymentsValidation].filter(
              (clientPayment) => {
                const purchaseDate = clientPayment.date_paiement!;
                return (
                  purchaseDate >= beginningDate && purchaseDate <= endingDate
                );
              }
            );
            return {
              clientsPaymentsValidation: sortedList,
            };
          });
        },
        sortClientsPaymentsValidationByDateIntervalPerDay: (
          beginningDate: Date,
          endingDate: Date
        ) => {
          set((state) => {
            state.clientsPaymentsValidation.forEach((clientPayment) => {
              const clientDate = clientPayment.date_paiement!;

              // Vérifiez si la date d'ajout est dans l'intervalle spécifié
              if (clientDate >= beginningDate && clientDate <= endingDate) {
                // Formatez la date d'ajout comme une chaîne de caractères "yyyy-MM-dd"
                const dateKey = clientDate.toISOString().split("T")[0];

                // Ajoutez le client au groupe correspondant à cette date
                if (!state.clientsPaymentsValidationPerDay.has(dateKey)) {
                  state.clientsPaymentsValidationPerDay.set(dateKey, []);
                }
                state.clientsPaymentsValidationPerDay
                  .get(dateKey)!
                  .push(clientPayment);
              }
            });

            state.clientsPaymentsValidationPerDay.forEach((clients) => {
              // Triez les clients par date_ajout, du plus ancien au plus récent
              clients.sort(
                (a, b) =>
                  a.date_paiement!.getTime() - b.date_paiement!.getTime()
              );
            });

            return {
              clientsPaymentsValidationPerDay:
                state.clientsPaymentsValidationPerDay,
            };
          });
        },
      }),
      {
        name: "clientsPaymentsValidationStore",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  );

export default useClientsPaymentsValidationStore;
