/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import StockBonCommande from "../../models/stock_bon_commande/stock_bon_commande.model";
import StockBonCommandeAPI from "../../api/stock_bon_commande/stock_bon_commande.api";
import { authenticatedEmployee } from "../../data/GlobalData";

interface PurchasesOrderStockStore {
  purchasesOrderStock: StockBonCommande[];
  purchasesOrderStockPerDay: Map<string, StockBonCommande[]>;
  isLoading: boolean;
  fetchAllPurchasesOrderStock: () => void;
}

const usePurchasesOrderStockStore = create<PurchasesOrderStockStore>()(
  persist(
    (set, get) => ({
      purchasesOrderStock: [],
      purchasesOrderStockPerDay: new Map(),
      isLoading: false,
      fetchAllPurchasesOrderStock: async () => {
        const auth = authenticatedEmployee.value;
        const selectedpurchasesOrderStock = await StockBonCommandeAPI.getAll(
          auth!
        );
        set(() => ({ purchasesOrderStock: selectedpurchasesOrderStock }));
        // console.log(selectedpurchasesOrderStock);
      },
    }),
    {
      name: "PurchasesOrderStockStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default usePurchasesOrderStockStore;
