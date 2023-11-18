/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import {
  TotalAchatsEntrepriseQuotidiens,
  TotalAvancesCreancesQuotidiennes,
  TotalClientsInscritsQuotidiens,
  TotalCommandesNonTraiteesQuotidiennes,
  TotalCommandesTraiteesQuotidiennes,
  TotalPaiementsBanquesQuotidiens,
  TotalPaiementsJournaliers,
  TotalVentesJournaliers,
  TotalStocksBonCommandeQuotidiens,
  TotalVenteQuotidienne,
} from "../../models/table_bord/table_bord.model";
import TableBordAPI from "../../api/table_bord/table_bord.api";
import Employes from "../../models/employes/employes.model";

interface DashBoardStore {
  isToday: 1 | 0;
  statistiquePaiementsHebdomadaires: TotalPaiementsJournaliers[];
  statistiqueVentesHebdomadaires: TotalVentesJournaliers[];
  totalClientsIncrits: TotalClientsInscritsQuotidiens;
  totalVente: TotalVenteQuotidienne;
  totalAchatsEntreprise: TotalAchatsEntrepriseQuotidiens[];
  totalCommandesNonTraitees: TotalCommandesNonTraiteesQuotidiennes[];
  totalCommandesTraitees: TotalCommandesTraiteesQuotidiennes[];
  totalPaiementsBanques: TotalPaiementsBanquesQuotidiens[];
  totalStocksBonCommande: TotalStocksBonCommandeQuotidiens[];
  totalAvancesCreances: TotalAvancesCreancesQuotidiennes;
  isLoading: boolean;
  authenticatedEmployee: Employes | undefined;
  setAuthenticatedEmployee: (employee: Employes) => void;
  fetchDashBoardData: (isToday: 1 | 0) => void;
  fetchStatistiquePaiementsHebdomadaires: () => void;
  fetchStatistiqueSalesHebdomadaires: () => void;
  fetchTotalClientsIncrits: (isToday: 1 | 0) => void;
  fetchTotalVente: (isToday: 1 | 0) => void;
  fetchTotalAchatsEntreprise: (isToday: 1 | 0) => void;
  fetchTotalCommandesNonTraitees: (isToday: 1 | 0) => void;
  fetchTotalCommandesTraitees: (isToday: 1 | 0) => void;
  fetchTotalPaiementsBanques: (isToday: 1 | 0) => void;
  fetchTotalStocksBonCommande: (isToday: 1 | 0) => void;
  fetchTotalAvancesCreances: (isToday: 1 | 0) => void;
  setIsToday: (isAujourdhui: 1 | 0) => void;
}

const useDashBoardStore = create<DashBoardStore>()(
  persist(
    (set, get) => ({
      isToday: 1,
      statistiquePaiementsHebdomadaires: [
        {
          jour: "",
          total_paiement: 0,
        },
        {
          jour: "",
          total_paiement: 0,
        },
        {
          jour: "",
          total_paiement: 0,
        },
        {
          jour: "",
          total_paiement: 0,
        },
        {
          jour: "",
          total_paiement: 0,
        },
        {
          jour: "",
          total_paiement: 0,
        },
        {
          jour: "",
          total_paiement: 0,
        },
      ],
      statistiqueVentesHebdomadaires: [
        {
          jour: "",
          total_vente: 0,
        },
        {
          jour: "",
          total_vente: 0,
        },
        {
          jour: "",
          total_vente: 0,
        },
        {
          jour: "",
          total_vente: 0,
        },
        {
          jour: "",
          total_vente: 0,
        },
        {
          jour: "",
          total_vente: 0,
        },
        {
          jour: "",
          total_vente: 0,
        },
      ],

      totalClientsIncrits: { total_clients_incrits: 0 },
      totalVente: { total_quantite: 0, total_vente: 0 },
      totalAchatsEntreprise: [
        {
          categorie: "",
          total_achat: 0,
        },
        {
          categorie: "",
          total_achat: 0,
        },
      ],
      totalCommandesNonTraitees: [
        {
          categorie: "",
          total_commande_non_traitee: 0,
        },
        {
          categorie: "",
          total_commande_non_traitee: 0,
        },
      ],
      totalCommandesTraitees: [
        {
          categorie: "",
          total_commande_traitee: 0,
        },
        {
          categorie: "",
          total_commande_traitee: 0,
        },
      ],
      totalPaiementsBanques: [
        {
          banque: "",
          total_paiement: 0,
        },
        {
          banque: "",
          total_paiement: 0,
        },
        {
          banque: "",
          total_paiement: 0,
        },
        {
          banque: "",
          total_paiement: 0,
        },
        {
          banque: "",
          total_paiement: 0,
        },
        {
          banque: "",
          total_paiement: 0,
        },
      ],
      totalStocksBonCommande: [
        {
          categorie: "",
          total_stock_restant: 0,
        },
        {
          categorie: "",
          total_stock_restant: 0,
        },
      ],
      totalAvancesCreances: { total_avances: 0, total_creances: 0 },
      isLoading: false,
      authenticatedEmployee: undefined,
      setAuthenticatedEmployee: (employee) => {
        set(() => ({ authenticatedEmployee: employee }));
      },
      fetchDashBoardData: async (isToday: 1 | 0) => {
        set((state) => {
          state.fetchStatistiquePaiementsHebdomadaires();
          state.fetchTotalClientsIncrits(isToday);
          state.fetchTotalVente(isToday);
          state.fetchTotalAchatsEntreprise(isToday);
          state.fetchTotalCommandesNonTraitees(isToday);
          state.fetchTotalCommandesTraitees(isToday);
          state.fetchTotalPaiementsBanques(isToday);
          state.fetchTotalStocksBonCommande(isToday);
          state.fetchTotalAvancesCreances(isToday);

          return {};
        });
      },

      fetchStatistiquePaiementsHebdomadaires: async () => {
        const auth = get().authenticatedEmployee;
        const statistiquePaiementsHebdomadairesData =
          await TableBordAPI.getWeekDailyPayments(auth!);

        set(() => ({
          statistiquePaiementsHebdomadaires:
            statistiquePaiementsHebdomadairesData,
        }));
      },
      fetchStatistiqueSalesHebdomadaires: async () => {
        const auth = get().authenticatedEmployee;
        const statistiqueVentesHebdomadairesData =
          await TableBordAPI.getWeekDailySales(auth!);

        set(() => ({
          statistiqueVentesHebdomadaires: statistiqueVentesHebdomadairesData,
        }));
      },
      fetchTotalClientsIncrits: async (isToday: 1 | 0) => {
        const auth = get().authenticatedEmployee;
        const totalClientsIncritsData =
          await TableBordAPI.getDailyRegisteredCustumersTotal(auth!, isToday);
        set(() => ({ totalClientsIncrits: totalClientsIncritsData }));
      },
      fetchTotalVente: async (isToday: 1 | 0) => {
        const auth = get().authenticatedEmployee;
        const totalVenteData = await TableBordAPI.getDailySalesTotal(
          auth!,
          isToday
        );
        set(() => ({ totalVente: totalVenteData }));
      },
      fetchTotalAchatsEntreprise: async (isToday: 1 | 0) => {
        const auth = get().authenticatedEmployee;
        const totalAchatsEntrepriseData =
          await TableBordAPI.getDailyCompanyPurchases(auth!, isToday);
        set(() => ({ totalAchatsEntreprise: totalAchatsEntrepriseData }));
      },
      fetchTotalCommandesNonTraitees: async (isToday: 1 | 0) => {
        const auth = get().authenticatedEmployee;
        const totalCommandesNonTraiteesData =
          await TableBordAPI.getDailyUntraitedOrdersTotal(auth!, isToday);

        set(() => ({
          totalCommandesNonTraitees: totalCommandesNonTraiteesData,
        }));
      },
      fetchTotalCommandesTraitees: async (isToday: 1 | 0) => {
        const auth = get().authenticatedEmployee;
        const totalCommandesTraiteesData =
          await TableBordAPI.getDailyTraitedOrdersTotal(auth!, isToday);

        set(() => ({ totalCommandesTraitees: totalCommandesTraiteesData }));
      },
      fetchTotalPaiementsBanques: async (isToday: 1 | 0) => {
        const auth = get().authenticatedEmployee;
        const totalPaiementsBanquesData =
          await TableBordAPI.getDailyPaymentPerBank(auth!, isToday);
        set(() => ({ totalPaiementsBanques: totalPaiementsBanquesData }));
      },
      fetchTotalStocksBonCommande: async (isToday: 1 | 0) => {
        const auth = get().authenticatedEmployee;
        const totalStocksBonCommandeData =
          await TableBordAPI.getDailyPurchasesOrdersStockTotal(auth!, isToday);
        set(() => ({ totalStocksBonCommande: totalStocksBonCommandeData }));
      },
      fetchTotalAvancesCreances: async (isToday: 1 | 0) => {
        const auth = get().authenticatedEmployee;
        const totalAvancesCreancesData =
          await TableBordAPI.getDailyAdvancesDebts(auth!, isToday);
        set(() => ({ totalAvancesCreances: totalAvancesCreancesData }));
      },

      setIsToday: (isAujourdhui: 1 | 0) => {
        set(() => ({
          isToday: isAujourdhui,
        }));
      },
    }),
    {
      name: "DashBoardStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useDashBoardStore;
