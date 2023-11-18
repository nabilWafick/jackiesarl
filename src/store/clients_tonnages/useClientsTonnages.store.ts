/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import ClientsTonnagesAPI from "../../api/clients_tonnages/clients_tonnages.api";
import { createJSONStorage, persist } from "zustand/middleware";
import ClientsTonnages from "../../models/clients_tonnages/clients_tonnages.model";
import Employes from "../../models/employes/employes.model";

interface ClientsTonnagesStore {
  clientsTonnages: ClientsTonnages[];
  isLoading: boolean;
  authenticatedEmployee: Employes | undefined;
  setAuthenticatedEmployee: (employee: Employes) => void;
  fetchAllClientsTonnages: () => void;
}

const useClientsTonnagesStore = create<ClientsTonnagesStore>()(
  persist(
    (set, get) => ({
      clientsTonnages: [],
      isLoading: false,
      authenticatedEmployee: undefined,
      setAuthenticatedEmployee: (employee) => {
        set(() => ({ authenticatedEmployee: employee }));
      },
      fetchAllClientsTonnages: async () => {
        const auth = get().authenticatedEmployee;
        const clientsTonnagesList: ClientsTonnages[] =
          await ClientsTonnagesAPI.getAll(auth!);

        set(() => ({ clientsTonnages: clientsTonnagesList }));
      },
    }),
    {
      name: "ClientsTonnagesStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useClientsTonnagesStore;
