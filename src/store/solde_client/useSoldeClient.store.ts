/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import SoldeClient from "../../models/solde_client/solde_client.model";
import SoldeClientAPI from "../../api/solde_client/solde_client.api";
import { Moment } from "moment";
import Employes from "../../models/employes/employes.model";

interface SoldeClientStore {
  soldeClient: SoldeClient;
  selectedClientId: number;
  startDate: Date | Moment | undefined;
  endDate: Date | Moment | undefined;
  authenticatedEmployee: Employes | undefined;
  setAuthenticatedEmployee: (employee: Employes) => void;
  fetchSoldeClient: (idClient: number) => void;
  onStartDateChange: (date: Date | Moment) => void;
  onEndDateChange: (date: Date | Moment) => void;
  resetDatesInterval: () => void;
}

const useSoldeClientStore = create<SoldeClientStore>()(
  persist(
    (set, get) => {
      return {
        soldeClient: new SoldeClient(
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ),
        selectedClientId: 0,
        startDate: undefined,
        endDate: undefined,
        authenticatedEmployee: undefined,
        setAuthenticatedEmployee: (employee) => {
          set(() => ({ authenticatedEmployee: employee }));
        },
        fetchSoldeClient: async (clientId: number) => {
          set(() => ({ selectedClientId: clientId }));
          const begin = get().startDate;
          const end = get().endDate;
          const auth = get().authenticatedEmployee;
          const newSoldeClient = await SoldeClientAPI.getById(
            auth!,
            begin ? begin.toLocaleString() : undefined,
            end ? end.toLocaleString() : undefined,
            clientId
          );
          set(() => ({
            soldeClient: newSoldeClient!,
          }));
        },
        onStartDateChange: async (date: Date | Moment) => {
          // ======== dates setting up ===========

          if (get().startDate == undefined && get().endDate == undefined) {
            set(() => ({ startDate: date }));
          } else if (
            get().startDate == undefined &&
            get().endDate != undefined
          ) {
            if (
              new Date(get().endDate!.toLocaleString()) >
              new Date(date.toLocaleString())
            ) {
              set(() => ({ startDate: date }));
            } else {
              const tmp = get().endDate;
              set(() => ({ endDate: date }));
              set(() => ({ startDate: tmp }));
            }
          } else if (
            get().startDate != undefined &&
            get().endDate == undefined
          ) {
            set(() => ({ startDate: date }));
          } else if (
            get().startDate != undefined &&
            get().endDate != undefined
          ) {
            if (
              new Date(get().endDate!.toLocaleString()) >
              new Date(date.toLocaleString())
            ) {
              set(() => ({ startDate: date }));
            } else {
              const tmp = get().endDate;
              set(() => ({ endDate: date }));
              set(() => ({ startDate: tmp }));
            }
          }

          // ============= TO EXECUTE ===========

          const begin = get().startDate
            ? get().startDate!.toLocaleString()
            : undefined;
          const end = get().endDate
            ? get().endDate!.toLocaleString()
            : undefined;
          const auth = get().authenticatedEmployee;

          const newSoldeClient = await SoldeClientAPI.getById(
            auth!,
            begin ? begin.toLocaleString() : undefined,
            end ? end.toLocaleString() : undefined,
            get().selectedClientId
          );

          set(() => ({ soldeClient: newSoldeClient }));
          // ============= TO EXECUTE ===========
        },
        onEndDateChange: async (date: Date | Moment) => {
          // ======== dates setting up ===========

          if (get().startDate == undefined && get().endDate == undefined) {
            set(() => ({ endDate: date }));
          } else if (
            get().startDate != undefined &&
            get().endDate == undefined
          ) {
            if (
              new Date(get().startDate!.toLocaleString()) <
              new Date(date.toLocaleString())
            ) {
              set(() => ({ endDate: date }));
            } else {
              const tmp = get().startDate;
              set(() => ({ startDate: date }));
              set(() => ({ endDate: tmp }));
            }
          } else if (
            get().startDate == undefined &&
            get().endDate != undefined
          ) {
            set(() => ({ endDate: date }));
          } else if (
            get().startDate != undefined &&
            get().endDate != undefined
          ) {
            if (
              new Date(get().startDate!.toLocaleString()) <
              new Date(date.toLocaleString())
            ) {
              set(() => ({ endDate: date }));
            } else {
              const tmp = get().startDate;
              set(() => ({ startDate: date }));
              set(() => ({ endDate: tmp }));
            }
          }

          // ============= TO EXECUTE ===========

          const begin = get().startDate
            ? get().startDate!.toLocaleString()
            : undefined;
          const end = get().endDate
            ? get().endDate!.toLocaleString()
            : undefined;
          const auth = get().authenticatedEmployee;

          const newSoldeClient = await SoldeClientAPI.getById(
            auth!,
            begin ? begin.toLocaleString() : undefined,
            end ? end.toLocaleString() : undefined,
            get().selectedClientId
          );

          set(() => ({ soldeClient: newSoldeClient }));
          // ============= TO EXECUTE ===========
        },
        resetDatesInterval: async () => {
          set(() => ({
            startDate: undefined,
            endDate: undefined,
          }));
          const begin = get().startDate
            ? get().startDate!.toLocaleString()
            : undefined;
          const end = get().endDate
            ? get().endDate!.toLocaleString()
            : undefined;
          const auth = get().authenticatedEmployee;

          const newSoldeClient = await SoldeClientAPI.getById(
            auth!,
            begin ? begin.toLocaleString() : undefined,
            end ? end.toLocaleString() : undefined,
            get().selectedClientId
          );

          set(() => ({ soldeClient: newSoldeClient }));
        },
      };
    },
    {
      name: "SoldeClientStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useSoldeClientStore;
