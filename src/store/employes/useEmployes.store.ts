import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import Employes from "../../models/employes/employes.model";
import EmployesAPI from "../../api/employes/employes.api";

interface EmployesStore {
  employees: Employes[];
  employeesPerDay: Map<string, Employes[]>;
  //selectedClient: Clients | undefined;
  isLoading: boolean;
  fetchAllEmployes: () => void;
  //   setSelectedClient: (client: Clients) => void;
  //   sortClientsNameByASC: () => void;
  //   sortClientsNameByDESC: () => void;
  //   sortClientsByDate: () => void;
  //   sortClientsByDateInterval: (beginningDate: Date, endingDate: Date) => void;
  //   sortClientsByDateIntervalPerDay: (
  //     beginningDate: Date,
  //     endingDate: Date
  //   ) => void;
}

const useEmployesStore = create<EmployesStore>()(
  persist(
    (set, get) => ({
      employees: [],
      employeesPerDay: new Map(),
      // selectedClient: undefined,
      isLoading: false,
      fetchAllEmployes: async () => {
        const employeesList: Employes[] = await EmployesAPI.getAll();
        //  console.log(clientsList)
        set(() => ({ employees: employeesList }));
        const length = get().employees.length;
        console.log(length);
      },
      //   setSelectedClient: (client) => {
      //     set(() => ({ selectedClient: client }));
      //     const selectedClient = get().selectedClient;
      //     console.log("selectedClient", selectedClient);
      //   },
      //   sortClientsNameByASC: () => {
      //     set((state) => {
      //       return {
      //         clients: [...state.clients].sort((client1, client2) => {
      //           return client1.nom.localeCompare(client2.nom);
      //         }),
      //       };
      //     });
      //   },
      //   sortClientsNameByDESC: () => {
      //     set((state) => {
      //       return {
      //         clients: [...state.clients].sort((client1, client2) => {
      //           return client2.nom.localeCompare(client1.nom);
      //         }),
      //       };
      //     });
      //   },
      //   sortClientsByDate: () => {
      //     set((state) => {
      //       const sortedList = [...state.clients].sort((client1, client2) => {
      //         return (
      //           client1.date_ajout!.getTime() - client2.date_ajout!.getTime()
      //         );
      //       });
      //       return {
      //         clients: sortedList,
      //       };
      //     });
      //   },
      //   sortClientsByDateInterval: (beginningDate: Date, endingDate: Date) => {
      //     set((state) => {
      //       const sortedList = [...state.clients].filter((client) => {
      //         const clientDate = client.date_ajout!;
      //         return clientDate >= beginningDate && clientDate <= endingDate;
      //       });
      //       return {
      //         clients: sortedList,
      //       };
      //     });
      //   },
      //   sortClientsByDateIntervalPerDay: (
      //     beginningDate: Date,
      //     endingDate: Date
      //   ) => {
      //     set((state) => {
      //       state.clients.forEach((client) => {
      //         const clientDate = client.date_ajout!;

      //         // Vérifiez si la date d'ajout est dans l'intervalle spécifié
      //         if (clientDate >= beginningDate && clientDate <= endingDate) {
      //           // Formatez la date d'ajout comme une chaîne de caractères "yyyy-MM-dd"
      //           const dateKey = clientDate.toISOString().split("T")[0];

      //           // Ajoutez le client au groupe correspondant à cette date
      //           if (!state.clientsPerDay.has(dateKey)) {
      //             state.clientsPerDay.set(dateKey, []);
      //           }
      //           state.clientsPerDay.get(dateKey)!.push(client);
      //         }
      //       });

      //       state.clientsPerDay.forEach((clients) => {
      //         // Triez les clients par date_ajout, du plus ancien au plus récent
      //         clients.sort(
      //           (a, b) => a.date_ajout!.getTime() - b.date_ajout!.getTime()
      //         );
      //       });

      //       return { clientsPerDay: state.clientsPerDay };
      //     });
      //   },
    }),
    {
      name: "EmployesStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useEmployesStore;
