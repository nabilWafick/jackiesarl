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
  TotalStocksBonCommandeQuotidiens,
  TotalVenteQuotidienne,
} from "../../models/table_bord/table_bord.model";
import TableBordAPI from "../../api/table_bord/table_bord.api";

interface DashBoardStore {
  isToday: 1 | 0;
  statistiquePaiementsHebdomadaires: TotalPaiementsJournaliers[];
  totalClientsIncrits: TotalClientsInscritsQuotidiens;
  totalVente: TotalVenteQuotidienne;
  totalAchatsEntreprise: TotalAchatsEntrepriseQuotidiens[];
  totalCommandesNonTraitees: TotalCommandesNonTraiteesQuotidiennes[];
  totalCommandesTraites: TotalCommandesTraiteesQuotidiennes[];
  totalPaiementsBanques: TotalPaiementsBanquesQuotidiens[];
  totalStocksBonCommande: TotalStocksBonCommandeQuotidiens[];
  totalAvancesCreances: TotalAvancesCreancesQuotidiennes;
  isLoading: boolean;
  fetchDashBoardData: (isToday: 1 | 0) => void;
  fetchStatistiquePaiementsHebdomadaires: () => void;
  fetchTotalClientsIncrits: (isToday: 1 | 0) => void;
  fetchTotalVente: (isToday: 1 | 0) => void;
  fetchTotalAchatsEntreprise: (isToday: 1 | 0) => void;
  fetchTotalCommandesNonTraitees: (isToday: 1 | 0) => void;
  fetchTotalCommandesTraites: (isToday: 1 | 0) => void;
  fetchTotalPaiementsBanques: (isToday: 1 | 0) => void;
  fetchTotalStocksBonCommande: (isToday: 1 | 0) => void;
  fetchTotalAvancesCreances: (isToday: 1 | 0) => void;
  setIsToday: (isAujourdhui: 1 | 0) => void;
}

const useDashBoardStore = create<DashBoardStore>()(
  persist(
    (set, get) => ({
      isToday: 1,
      statistiquePaiementsHebdomadaires: [],
      totalClientsIncrits: { total_clients_incrits: 0 },
      totalVente: { total_vente: 0 },
      totalAchatsEntreprise: [],
      totalCommandesNonTraitees: [],
      totalCommandesTraites: [],
      totalPaiementsBanques: [],
      totalStocksBonCommande: [],
      totalAvancesCreances: { total_avances: 0, total_creances: 0 },
      isLoading: false,

      fetchDashBoardData: async (isToday: 1 | 0) => {
        set((state) => {
          state.fetchStatistiquePaiementsHebdomadaires();
          state.fetchTotalClientsIncrits(isToday);
          state.fetchTotalVente(isToday);
          state.fetchTotalAchatsEntreprise(isToday);
          state.fetchTotalCommandesNonTraitees(isToday);
          state.fetchTotalCommandesTraites(isToday);
          state.fetchTotalPaiementsBanques(isToday);
          state.fetchTotalStocksBonCommande(isToday);
          state.fetchTotalAvancesCreances(isToday);

          return {};
        });
      },
      fetchStatistiquePaiementsHebdomadaires: async () => {
        const statistiquePaiementsHebdomadairesData =
          await TableBordAPI.getWeekDailyPayments();
        set(() => ({
          statistiquePaiementsHebdomadaires:
            statistiquePaiementsHebdomadairesData,
        }));
      },
      fetchTotalClientsIncrits: async (isToday: 1 | 0) => {
        const totalClientsIncritsData =
          await TableBordAPI.getDailyRegisteredCustumersTotal(isToday);
        set(() => ({ totalClientsIncrits: totalClientsIncritsData }));
      },
      fetchTotalVente: async (isToday: 1 | 0) => {
        const totalVenteData = await TableBordAPI.getDailySalesTotal(isToday);
        set(() => ({ totalVente: totalVenteData }));
      },
      fetchTotalAchatsEntreprise: async (isToday: 1 | 0) => {
        const totalAchatsEntrepriseData =
          await TableBordAPI.getDailyCompanyPurchases(isToday);
        set(() => ({ totalAchatsEntreprise: totalAchatsEntrepriseData }));
      },
      fetchTotalCommandesNonTraitees: async (isToday: 1 | 0) => {
        const totalCommandesNonTraiteesData =
          await TableBordAPI.getDailyUntraitedOrdersTotal(isToday);
        set(() => ({
          totalCommandesNonTraitees: totalCommandesNonTraiteesData,
        }));
      },
      fetchTotalCommandesTraites: async (isToday: 1 | 0) => {
        const totalCommandesTraitesData =
          await TableBordAPI.getDailyTraitedOrdersTotal(isToday);
        set(() => ({ totalCommandesTraites: totalCommandesTraitesData }));
      },
      fetchTotalPaiementsBanques: async (isToday: 1 | 0) => {
        const totalPaiementsBanquesData =
          await TableBordAPI.getDailyPaymentPerBank(isToday);
        set(() => ({ totalPaiementsBanques: totalPaiementsBanquesData }));
      },
      fetchTotalStocksBonCommande: async (isToday: 1 | 0) => {
        const totalStocksBonCommandeData =
          await TableBordAPI.getDailyPurchasesOrdersStockTotal(isToday);
        set(() => ({ totalStocksBonCommande: totalStocksBonCommandeData }));
      },
      fetchTotalAvancesCreances: async (isToday: 1 | 0) => {
        const totalAvancesCreancesData =
          await TableBordAPI.getDailyAdvancesDebts(isToday);
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
