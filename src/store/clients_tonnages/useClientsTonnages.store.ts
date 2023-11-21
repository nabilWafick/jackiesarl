/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import ClientsTonnagesAPI from "../../api/clients_tonnages/clients_tonnages.api";
import { createJSONStorage, persist } from "zustand/middleware";
import ClientsTonnages from "../../models/clients_tonnages/clients_tonnages.model";

import { authenticatedEmployee } from "../../data/GlobalData";

interface ClientsTonnagesStore {
  clientsTonnages: ClientsTonnages[];
  isLoading: boolean;
  fetchAllClientsTonnages: () => void;
}

const useClientsTonnagesStore = create<ClientsTonnagesStore>()(
  persist(
    (set, get) => ({
      clientsTonnages: [],
      isLoading: false,
      fetchAllClientsTonnages: async () => {
        const auth = authenticatedEmployee.value;
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
