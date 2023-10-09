import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import StockCamion from "../../models/stock_camion/stock_camion.model";
import StockCamionAPI from "../../api/stock_camion/stock_camion.api";

interface TrucksStockStore {
  trucksStock: StockCamion[];
  trucksStockPerDay: Map<string, StockCamion[]>;
  isLoading: boolean;
  fetchAllTruckStock: () => void;
  sortTruckStockByCIMBENINCategory: () => void;
  sortTruckStockNOCIBECategory: () => void;
  sortTruckStockOTHERCategory: () => void;
  sortTruckStockByDate: () => void;
  sortTruckStockByDateInterval: (beginningDate: Date, endingDate: Date) => void;
  sortTruckStockByDateIntervalPerDay: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
}

const useTrucksStockStore = create<TrucksStockStore>()(
  persist(
    (set, get) => ({
      trucksStock: [],
      trucksStockPerDay: new Map(),
      isLoading: false,
      fetchAllTruckStock: async () => {
        const selectedtrucksStock = await StockCamionAPI.getAll();
        set(() => ({ trucksStock: selectedtrucksStock }));
        // console.log(selectedtrucksStock);
        const trucksStockListLength = get().trucksStock;
        console.log("trucksStockListLength: ", trucksStockListLength);
      },
      sortTruckStockByCIMBENINCategory: () => {
        set((state) => {
          const sortedList = [...state.trucksStock].filter(
            (truckStock) => truckStock.categorie === "CIM BENIN"
          );

          return {
            trucksStock: sortedList,
          };
        });
      },
      sortTruckStockNOCIBECategory: () => {
        set((state) => {
          const sortedList = [...state.trucksStock].filter(
            (truckStock) => truckStock.categorie === "NOCIBE"
          );

          return {
            trucksStock: sortedList,
          };
        });
      },
      sortTruckStockOTHERCategory: () => {
        set((state) => {
          const sortedList = [...state.trucksStock].filter(
            (truckStock) => truckStock.categorie === "Autres"
          );

          return {
            trucksStock: sortedList,
          };
        });
      },
      sortTruckStockByDate: () => {
        set((state) => {
          const sortedList = [...state.trucksStock].sort(
            (truckStock1, truckStock2) =>
              truckStock1.date_approvisionnement!.getTime() -
              truckStock2.date_approvisionnement!.getTime()
          );
          return {
            trucksStock: sortedList,
          };
        });
      },
      sortTruckStockByDateInterval: (beginningDate: Date, endingDate: Date) => {
        set((state) => {
          const sortedList = [...state.trucksStock].filter((truckStock) => {
            const purchaseDate = truckStock.date_approvisionnement!;
            return purchaseDate >= beginningDate && purchaseDate <= endingDate;
          });
          return {
            trucksStock: sortedList,
          };
        });
      },
      sortTruckStockByDateIntervalPerDay: (
        beginningDate: Date,
        endingDate: Date
      ) => {
        set((state) => {
          state.trucksStock.forEach((truckStock) => {
            const purchaseDate = truckStock.date_approvisionnement!;

            // Vérifiez si la date d'ajout est dans l'intervalle spécifié
            if (purchaseDate >= beginningDate && purchaseDate <= endingDate) {
              // Formatez la date d'ajout comme une chaîne de caractères "yyyy-MM-dd"
              const dateKey = purchaseDate.toISOString().split("T")[0];

              // Ajoutez le client au groupe correspondant à cette date
              if (!state.trucksStockPerDay.has(dateKey)) {
                state.trucksStockPerDay.set(dateKey, []);
              }
              state.trucksStockPerDay.get(dateKey)!.push(truckStock);
            }
          });

          state.trucksStockPerDay.forEach((truckStock) => {
            // Triez les clients par date_ajout, du plus ancien au plus récent
            truckStock.sort(
              (a, b) =>
                a.date_approvisionnement!.getTime() -
                b.date_approvisionnement!.getTime()
            );
          });

          return { trucksStockPerDay: state.trucksStockPerDay };
        });
      },
    }),
    {
      name: "TrucksStockStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useTrucksStockStore;
