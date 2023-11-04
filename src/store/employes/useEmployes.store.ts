/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import Employes from "../../models/employes/employes.model";
import EmployesAPI from "../../api/employes/employes.api";

interface EmployesStore {
  employes: Employes[];
  selectedEmploye: Employes | undefined;
  isLoading: boolean;
  fetchAllEmployes: () => void;
  setSelectedEmployee: (employe: Employes) => void;
}

const useEmployesStore = create<EmployesStore>()(
  persist(
    (set, get) => ({
      employes: [],
      selectedEmploye: undefined,
      isLoading: false,
      fetchAllEmployes: async () => {
        const employeesList: Employes[] = await EmployesAPI.getAll();
        set(() => ({ employes: employeesList }));
      },
      setSelectedEmployee: (employe) => {
        set(() => ({ selectedEmploye: employe }));
        //    const selectedEmployee = get().selectedEmploye;
        // console.log("selectedEmployee", selectedEmployee!.id!);
      },
    }),
    {
      name: "EmployesStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useEmployesStore;
