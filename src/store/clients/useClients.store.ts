import create from "zustand";
import Clients from "../../models/clients/clients.model";

interface ClientsStore {
  clients: Clients[] | Clients[][];
  selectedClientId: number;
  isLoading: boolean;
  fetchAllClients: () => void;
  fetchAllClientsByASC: () => void;
  fetchAllClientsByDESC: () => void;
  fetchAllClientsByIntervall: () => void;
}

const useClients = create<ClientsStore>()((set) => ({
  clients: [],
  selectedClientId: 0,
  isLoading: false,
  fetchAllClients: () => {
    set((state) => ({ clients: state.clients }));
  },
  fetchAllClientsByASC: () => {},
  fetchAllClientsByDESC: () => {},
  fetchAllClientsByIntervall: () => {},
}));

export default useClients;
