import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AchatClient from "../../models/achat_client/achat_client.model";
import AchatClientAPI from "../../api/achat_client/achat_client.api";

interface ClientPurchasesStore {
  clientPurchases: AchatClient[];
  clientPurchasesPerDay: Map<string, AchatClient[]>;
  isLoading: boolean;
  fetchAllClientPurchases: (clientId: number) => void;
  sortClientPurchasesByCIMBENINCategory: () => void;
  sortClientPurchasesNOCIBECategory: () => void;
  sortClientPurchasesOTHERCategory: () => void;
  sortClientPurchasesByDate: () => void;
  sortClientPurchasesByDateInterval: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
  sortClientPurchasesByDateIntervalPerDay: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
}

const useClientPurchasesStore = create<ClientPurchasesStore>()(
  persist(
    (set, get) => ({
      clientPurchases: [],
      clientPurchasesPerDay: new Map(),
      isLoading: false,
      fetchAllClientPurchases: async (clientId: number) => {
        const selectedClientPurchases = await AchatClientAPI.getAllOfClient(
          clientId
        );
        set(() => ({ clientPurchases: selectedClientPurchases }));
        console.log(selectedClientPurchases);
        const clientPurchasesListLength = get().clientPurchases;
        console.log("clientPurchasesListLength: ", clientPurchasesListLength);
      },
      sortClientPurchasesByCIMBENINCategory: () => {
        set((state) => {
          const sortedList = [...state.clientPurchases].filter(
            (clientPurchase) => clientPurchase.categorie === "CIM BENIN"
          );

          return {
            clientPurchases: sortedList,
          };
        });
      },
      sortClientPurchasesNOCIBECategory: () => {
        set((state) => {
          const sortedList = [...state.clientPurchases].filter(
            (clientPurchase) => clientPurchase.categorie === "NOCIBE"
          );

          return {
            clientPurchases: sortedList,
          };
        });
      },
      sortClientPurchasesOTHERCategory: () => {
        set((state) => {
          const sortedList = [...state.clientPurchases].filter(
            (clientPurchase) => clientPurchase.categorie === "Autres"
          );

          return {
            clientPurchases: sortedList,
          };
        });
      },
      sortClientPurchasesByDate: () => {
        set((state) => {
          const sortedList = [...state.clientPurchases].sort(
            (clientPurchase1, clientPurchase2) =>
              clientPurchase1.date_achat!.getTime() -
              clientPurchase2.date_achat!.getTime()
          );
          return {
            clientPurchases: sortedList,
          };
        });
      },
      sortClientPurchasesByDateInterval: (
        beginningDate: Date,
        endingDate: Date
      ) => {
        set((state) => {
          const sortedList = [...state.clientPurchases].filter(
            (clientPurchase) => {
              const purchaseDate = clientPurchase.date_achat!;
              return (
                purchaseDate >= beginningDate && purchaseDate <= endingDate
              );
            }
          );
          return {
            clientPurchases: sortedList,
          };
        });
      },
      sortClientPurchasesByDateIntervalPerDay: (
        beginningDate: Date,
        endingDate: Date
      ) => {
        set((state) => {
          state.clientPurchases.forEach((clientPurchase) => {
            const clientDate = clientPurchase.date_achat!;

            // Vérifiez si la date d'ajout est dans l'intervalle spécifié
            if (clientDate >= beginningDate && clientDate <= endingDate) {
              // Formatez la date d'ajout comme une chaîne de caractères "yyyy-MM-dd"
              const dateKey = clientDate.toISOString().split("T")[0];

              // Ajoutez le client au groupe correspondant à cette date
              if (!state.clientPurchasesPerDay.has(dateKey)) {
                state.clientPurchasesPerDay.set(dateKey, []);
              }
              state.clientPurchasesPerDay.get(dateKey)!.push(clientPurchase);
            }
          });

          state.clientPurchasesPerDay.forEach((clients) => {
            // Triez les clients par date_ajout, du plus ancien au plus récent
            clients.sort(
              (a, b) => a.date_achat!.getTime() - b.date_achat!.getTime()
            );
          });

          return { clientPurchasesPerDay: state.clientPurchasesPerDay };
        });
      },
    }),
    {
      name: "ClientPurchasesStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useClientPurchasesStore;
