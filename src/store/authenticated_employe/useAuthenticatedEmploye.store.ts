/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import Employes from "../../models/employes/employes.model";

interface AuthenticatedEmployeStore {
  authenticatedEmploye: Employes | undefined;
  setAuthenticatedEmploye: (employe: Employes) => void;
}

const useAuthenticatedEmployeStore = create<AuthenticatedEmployeStore>()(
  persist(
    (set, get) => ({
      authenticatedEmploye: undefined,
      setAuthenticatedEmploye: (employe) => {
        set(() => ({ authenticatedEmploye: employe }));
      },
    }),
    {
      name: "AuthenticatedEmployeStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthenticatedEmployeStore;
