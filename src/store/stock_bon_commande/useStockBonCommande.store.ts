/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import StockBonCommande from "../../models/stock_bon_commande/stock_bon_commande.model";
import StockBonCommandeAPI from "../../api/stock_bon_commande/stock_bon_commande.api";
import Employes from "../../models/employes/employes.model";

interface PurchasesOrderStockStore {
  purchasesOrderStock: StockBonCommande[];
  purchasesOrderStockPerDay: Map<string, StockBonCommande[]>;
  isLoading: boolean;
  authenticatedEmployee: Employes | undefined;
  setAuthenticatedEmployee: (employee: Employes) => void;
  fetchAllPurchasesOrderStock: () => void;
  sortPurchasesOrderStockByCIMBENINCategory: () => void;
  sortPurchasesOrderStockNOCIBECategory: () => void;
  sortPurchasesOrderStockOTHERCategory: () => void;
  sortPurchasesOrderStockByDate: () => void;
  sortPurchasesOrderStockByDateInterval: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
  sortPurchasesOrderStockByDateIntervalPerDay: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
}

const usePurchasesOrderStockStore = create<PurchasesOrderStockStore>()(
  persist(
    (set, get) => ({
      purchasesOrderStock: [],
      purchasesOrderStockPerDay: new Map(),
      isLoading: false,
      authenticatedEmployee: undefined,
      setAuthenticatedEmployee: (employee) => {
        set(() => ({ authenticatedEmployee: employee }));
      },
      fetchAllPurchasesOrderStock: async () => {
        const auth = get().authenticatedEmployee;
        const selectedpurchasesOrderStock = await StockBonCommandeAPI.getAll(
          auth!
        );
        set(() => ({ purchasesOrderStock: selectedpurchasesOrderStock }));
        // console.log(selectedpurchasesOrderStock);
      },
      sortPurchasesOrderStockByCIMBENINCategory: () => {
        set((state) => {
          const sortedList = [...state.purchasesOrderStock].filter(
            (purchaseOrderStock) => purchaseOrderStock.categorie === "CIM BENIN"
          );

          return {
            purchasesOrderStock: sortedList,
          };
        });
      },
      sortPurchasesOrderStockNOCIBECategory: () => {
        set((state) => {
          const sortedList = [...state.purchasesOrderStock].filter(
            (purchaseOrderStock) => purchaseOrderStock.categorie === "NOCIBE"
          );

          return {
            purchasesOrderStock: sortedList,
          };
        });
      },
      sortPurchasesOrderStockOTHERCategory: () => {
        set((state) => {
          const sortedList = [...state.purchasesOrderStock].filter(
            (purchaseOrderStock) => purchaseOrderStock.categorie === "Autres"
          );

          return {
            purchasesOrderStock: sortedList,
          };
        });
      },
      sortPurchasesOrderStockByDate: () => {
        set((state) => {
          const sortedList = [...state.purchasesOrderStock].sort(
            (purchaseOrderStock1, purchaseOrderStock2) =>
              purchaseOrderStock1.date_rechargement!.getTime() -
              purchaseOrderStock2.date_rechargement!.getTime()
          );
          return {
            purchasesOrderStock: sortedList,
          };
        });
      },
      sortPurchasesOrderStockByDateInterval: (
        beginningDate: Date,
        endingDate: Date
      ) => {
        set((state) => {
          const sortedList = [...state.purchasesOrderStock].filter(
            (purchaseOrderStock) => {
              const purchaseDate = purchaseOrderStock.date_rechargement!;
              return (
                purchaseDate >= beginningDate && purchaseDate <= endingDate
              );
            }
          );
          return {
            purchasesOrderStock: sortedList,
          };
        });
      },
      sortPurchasesOrderStockByDateIntervalPerDay: (
        beginningDate: Date,
        endingDate: Date
      ) => {
        set((state) => {
          state.purchasesOrderStock.forEach((purchaseOrderStock) => {
            const purchaseDate = purchaseOrderStock.date_rechargement!;

            // Vérifiez si la date d'ajout est dans l'intervalle spécifié
            if (purchaseDate >= beginningDate && purchaseDate <= endingDate) {
              // Formatez la date d'ajout comme une chaîne de caractères "yyyy-MM-dd"
              const dateKey = purchaseDate.toISOString().split("T")[0];

              // Ajoutez le client au groupe correspondant à cette date
              if (!state.purchasesOrderStockPerDay.has(dateKey)) {
                state.purchasesOrderStockPerDay.set(dateKey, []);
              }
              state.purchasesOrderStockPerDay
                .get(dateKey)!
                .push(purchaseOrderStock);
            }
          });

          state.purchasesOrderStockPerDay.forEach((purchaseOrderStock) => {
            // Triez les clients par date_ajout, du plus ancien au plus récent
            purchaseOrderStock.sort(
              (a, b) =>
                a.date_rechargement!.getTime() - b.date_rechargement!.getTime()
            );
          });

          return { purchasesOrderStockPerDay: state.purchasesOrderStockPerDay };
        });
      },
    }),
    {
      name: "PurchasesOrderStockStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default usePurchasesOrderStockStore;
