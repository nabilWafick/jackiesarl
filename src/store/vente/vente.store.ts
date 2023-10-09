import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AchatClientAPI from "../../api/achat_client/achat_client.api";
import Vente from "../../models/vente/vente.model";
import Clients from "../../models/clients/clients.model";

interface SalesStore {
  sales: Vente[];
  salesPerDay: Map<string, Vente[]>;
  isLoading: boolean;
  fetchAllSales: (clients: Clients[]) => void;
  sortSalesByCIMBENINCategory: () => void;
  sortSalesNOCIBECategory: () => void;
  sortSalesOTHERCategory: () => void;
  sortSalesByDate: () => void;
  sortSalesByDateInterval: (beginningDate: Date, endingDate: Date) => void;
  sortSalesByDateIntervalPerDay: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
}

const useSalesStore = create<SalesStore>()(
  persist(
    (set, get) => ({
      sales: [],
      salesPerDay: new Map(),
      isLoading: false,
      fetchAllSales: async (clients: Clients[]) => {
        const clientsPurchases = await AchatClientAPI.getAll();
        const sales = clientsPurchases.map(
          (sales) =>
            new Vente(
              sales.quantite_achetee,
              sales.categorie,
              sales.montant,
              sales.numero_ctp,
              sales.bordereau,
              sales.numero_bc,
              clients.find((client) => client!.id === sales.id_client)!,
              sales.id,
              new Date(sales.date_achat!)
            )
        );
        set(() => ({ sales: sales }));
        //  console.log(selectedsales);
        const salesListLength = get().sales;
        console.log("salesListLength: ", salesListLength);
      },
      sortSalesByCIMBENINCategory: () => {
        set((state) => {
          const sortedList = [...state.sales].filter(
            (sale) => sale.categorie === "CIM BENIN"
          );

          return {
            sales: sortedList,
          };
        });
      },
      sortSalesNOCIBECategory: () => {
        set((state) => {
          const sortedList = [...state.sales].filter(
            (sale) => sale.categorie === "NOCIBE"
          );

          return {
            sales: sortedList,
          };
        });
      },
      sortSalesOTHERCategory: () => {
        set((state) => {
          const sortedList = [...state.sales].filter(
            (sale) => sale.categorie === "Autres"
          );

          return {
            sales: sortedList,
          };
        });
      },
      sortSalesByDate: () => {
        set((state) => {
          const sortedList = [...state.sales].sort(
            (sale1, sale2) =>
              sale1.date_achat!.getTime() - sale2.date_achat!.getTime()
          );
          return {
            sales: sortedList,
          };
        });
      },
      sortSalesByDateInterval: (beginningDate: Date, endingDate: Date) => {
        set((state) => {
          const sortedList = [...state.sales].filter((sale) => {
            const saleDate = sale.date_achat!;
            return saleDate >= beginningDate && saleDate <= endingDate;
          });
          return {
            sales: sortedList,
          };
        });
      },
      sortSalesByDateIntervalPerDay: (
        beginningDate: Date,
        endingDate: Date
      ) => {
        set((state) => {
          state.sales.forEach((sale) => {
            const saleDate = sale.date_achat!;

            // Vérifiez si la date d'ajout est dans l'intervalle spécifié
            if (saleDate >= beginningDate && saleDate <= endingDate) {
              // Formatez la date d'ajout comme une chaîne de caractères "yyyy-MM-dd"
              const dateKey = saleDate.toISOString().split("T")[0];

              // Ajoutez le client au groupe correspondant à cette date
              if (!state.salesPerDay.has(dateKey)) {
                state.salesPerDay.set(dateKey, []);
              }
              state.salesPerDay.get(dateKey)!.push(sale);
            }
          });

          state.salesPerDay.forEach((clients) => {
            // Triez les clients par date_ajout, du plus ancien au plus récent
            clients.sort(
              (a, b) => a.date_achat!.getTime() - b.date_achat!.getTime()
            );
          });

          return { salesPerDay: state.salesPerDay };
        });
      },
    }),
    {
      name: "SalesStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useSalesStore;
