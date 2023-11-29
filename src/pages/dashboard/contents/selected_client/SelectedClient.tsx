import { FC } from "react";
import ClientCard from "../../../../components/ui/dashboard/clients/ClientCard";
import useClientsStore from "../../../../store/clients/useClients.store";
// import useAuthenticatedEmployeStore from "../../../../store/authenticated_employe/useAuthenticatedEmploye.store";

const SelectedClientPage: FC = () => {
  // const authenticatedEmploye = useAuthenticatedEmployeStore(state => state.authenticatedEmploye)
  const client = useClientsStore((state) => state.selectedClient);
  return (
    <div className="h-full w-full flex-col justify-start items-center content-center text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
      <div className="flex justify-center">
        <ClientCard client={client!} />
      </div>
    </div>
  );
};

export default SelectedClientPage;
