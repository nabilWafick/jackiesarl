import { FC } from "react";
import ClientCard from "../../../../components/ui/dashboard/clients/ClientCard";
import useClientsStore from "../../../../store/clients/useClients.store";
// import useAuthenticatedEmployeStore from "../../../../store/authenticated_employe/useAuthenticatedEmploye.store";

const SelectedClientPage: FC = () => {
  // const authenticatedEmploye = useAuthenticatedEmployeStore(state => state.authenticatedEmploye)
  const client = useClientsStore((state) => state.selectedClient);
  return (
    <div className="h-full w-full flex justify-center items-center content-center">
      <ClientCard client={client!} />
    </div>
  );
};

export default SelectedClientPage;
