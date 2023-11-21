/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import Employes from "../../models/employes/employes.model";
import EmployesAPI from "../../api/employes/employes.api";
import { authenticatedEmployee } from "../../data/GlobalData";

interface EmployesStore {
  employes: Employes[];
  selectedEmploye: Employes | undefined;
  isLoading: boolean;
  fetchAllEmployes: () => void;
  setSelectedEmployee: (employee: Employes) => void;
}

const useEmployesStore = create<EmployesStore>()(
  persist(
    (set, get) => ({
      employes: [],
      selectedEmploye: undefined,
      isLoading: false,
      fetchAllEmployes: async () => {
        const auth = authenticatedEmployee.value;
        const employeesList: Employes[] = await EmployesAPI.getAll(auth!);
        set(() => ({ employes: employeesList }));
      },
      setSelectedEmployee: (employee) => {
        set(() => ({ selectedEmploye: employee }));
      },
    }),
    {
      name: "EmployesStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useEmployesStore;
