import ClientCard from "../../../../components/ui/dashboard/clients/ClientCard";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton.widget";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import ClientPurchasesTable from "../../../../components/ui/dashboard/client_purchases/ClientPurchasesTable";
import "../../../../assets/css/table.css";
import useClientsStore from "../../../../store/clients/useClients.store";
import { FC, useEffect } from "react";
import useClientPurchasesStore from "../../../../store/achat_client/useAchatClient.store";
import { redirect } from "react-router-dom";
import ClientPurchaseAdding from "../../../../components/form/forms/client_purchase_adding/ClientPurchaseAdding";

const ClientPurchasesPage: FC = () => {
  const selectedClient = useClientsStore((state) => state.selectedClient);
  const clientPurchases = useClientPurchasesStore(
    (state) => state.clientPurchases
  );
  const fetchAllClientPurchases = useClientPurchasesStore(
    (state) => state.fetchAllClientPurchases
  );

  if (!selectedClient) {
    redirect("/clients");
  }
  useEffect(() => {
    fetchAllClientPurchases(selectedClient!.id!);
  }, [fetchAllClientPurchases, selectedClient]);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center content-center">
      <ClientCard client={selectedClient!} />
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        <AddingButton
          option="Ajouter un achat"
          onClick={() => {
            toggleModal("client-purchase-adding-form");
          }}
        />
        <ClientPurchaseAdding
          quantity=""
          category=""
          amount=""
          ctpNumber=""
          slip=""
          bcNumber=""
        />
      </div>
      <ClientPurchasesTable clientPurchases={clientPurchases} />
    </div>
  );
};

export default ClientPurchasesPage;
