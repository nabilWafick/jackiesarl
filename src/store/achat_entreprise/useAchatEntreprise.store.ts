import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AchatEntreprise from "../../models/achat_entreprise/achat_entreprise.model";
import AchatEntrepriseAPI from "../../api/achat_entreprise/achat_entreprise.api";

interface CompanyPurchasesStore {
  companyPurchases: AchatEntreprise[];
  companyPurchasesPerDay: Map<string, AchatEntreprise[]>;
  isLoading: boolean;
  fetchAllCompanyPurchases: () => void;
  //  sortCompanyPurchasesByCIMBENINCategory: () => void;
  //  sortCompanyPurchasesNOCIBECategory: () => void;
  //  sortCompanyPurchasesOTHERCategory: () => void;
  sortCompanyPurchasesByDate: () => void;
  sortCompanyPurchasesByDateInterval: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
  sortCompanyPurchasesByDateIntervalPerDay: (
    beginningDate: Date,
    endingDate: Date
  ) => void;
}

const useCompanyPurchasesStore = create<CompanyPurchasesStore>()(
  persist(
    (set, get) => ({
      companyPurchases: [],
      companyPurchasesPerDay: new Map(),
      isLoading: false,
      fetchAllCompanyPurchases: async () => {
        const companyPurchases = await AchatEntrepriseAPI.getAll();
        set(() => ({ companyPurchases: companyPurchases }));
        console.log(companyPurchases);
        const companyPurchasesListLength = get().companyPurchases;
        console.log("companyPurchasesListLength: ", companyPurchasesListLength);
      },
      /*  sortCompanyPurchasesByCIMBENINCategory: () => {
        set((state) => {
          const sortedList = [...state.companyPurchases].filter(
            (clientPurchase) => clientPurchase.categorie === "CIM BENIN"
          );

          return {
            companyPurchases: sortedList,
          };
        });
      },
      sortCompanyPurchasesNOCIBECategory: () => {
        set((state) => {
          const sortedList = [...state.companyPurchases].filter(
            (clientPurchase) => clientPurchase.categorie === "NOCIBE"
          );

          return {
            companyPurchases: sortedList,
          };
        });
      },
      sortCompanyPurchasesOTHERCategory: () => {
        set((state) => {
          const sortedList = [...state.companyPurchases].filter(
            (clientPurchase) => clientPurchase.categorie === "Autres"
          );

          return {
            companyPurchases: sortedList,
          };
        });
      },*/
      sortCompanyPurchasesByDate: () => {
        set((state) => {
          const sortedList = [...state.companyPurchases].sort(
            (clientPurchase1, clientPurchase2) =>
              clientPurchase1.date_achat!.getTime() -
              clientPurchase2.date_achat!.getTime()
          );
          return {
            companyPurchases: sortedList,
          };
        });
      },
      sortCompanyPurchasesByDateInterval: (
        beginningDate: Date,
        endingDate: Date
      ) => {
        set((state) => {
          const sortedList = [...state.companyPurchases].filter(
            (clientPurchase) => {
              const purchaseDate = clientPurchase.date_achat!;
              return (
                purchaseDate >= beginningDate && purchaseDate <= endingDate
              );
            }
          );
          return {
            companyPurchases: sortedList,
          };
        });
      },
      sortCompanyPurchasesByDateIntervalPerDay: (
        beginningDate: Date,
        endingDate: Date
      ) => {
        set((state) => {
          state.companyPurchases.forEach((clientPurchase) => {
            const clientDate = clientPurchase.date_achat!;

            // Vérifiez si la date d'ajout est dans l'intervalle spécifié
            if (clientDate >= beginningDate && clientDate <= endingDate) {
              // Formatez la date d'ajout comme une chaîne de caractères "yyyy-MM-dd"
              const dateKey = clientDate.toISOString().split("T")[0];

              // Ajoutez le client au groupe correspondant à cette date
              if (!state.companyPurchasesPerDay.has(dateKey)) {
                state.companyPurchasesPerDay.set(dateKey, []);
              }
              state.companyPurchasesPerDay.get(dateKey)!.push(clientPurchase);
            }
          });

          state.companyPurchasesPerDay.forEach((clients) => {
            // Triez les clients par date_ajout, du plus ancien au plus récent
            clients.sort(
              (a, b) => a.date_achat!.getTime() - b.date_achat!.getTime()
            );
          });

          return { companyPurchasesPerDay: state.companyPurchasesPerDay };
        });
      },
    }),
    {
      name: "CompanyPurchasesStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCompanyPurchasesStore;
