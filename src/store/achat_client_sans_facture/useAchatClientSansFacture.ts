/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AchatClient from "../../models/achat_client/achat_client.model";
import AchatClientAPI from "../../api/achat_client/achat_client.api";
import { authenticatedEmployee } from "../../data/GlobalData";

interface ClientPurchasesWithoutBillStore {
  purchasesWithoutBill: AchatClient[];

  fetchAllClientPurchasesWithoutBill: () => void;
}

const useClientPurchasesWithoutBillStore =
  create<ClientPurchasesWithoutBillStore>()(
    persist(
      (set, get) => ({
        purchasesWithoutBill: [],
        fetchAllClientPurchasesWithoutBill: async () => {
          const auth = authenticatedEmployee.value;
          const clientsPurchasesWithoutBill =
            await AchatClientAPI.getAllWithoutBill(auth!);
          set(() => ({
            purchasesWithoutBill: clientsPurchasesWithoutBill,
          }));
        },
      }),
      {
        name: "ClientPurchasesWithoutBillStore",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  );

export default useClientPurchasesWithoutBillStore;
