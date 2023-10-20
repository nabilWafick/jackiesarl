import ClientCard from "../../../../components/ui/dashboard/clients/ClientCard";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton.widget";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import ClientPaymentsTable from "../../../../components/ui/dashboard/client_payments/ClientPaymentsTable";
import "../../../../assets/css/table.css";
import ClientPaymentAdding from "../../../../components/form/forms/client_payment_adding/ClientPaymentAdding";
import useClientsStore from "../../../../store/clients/useClients.store";
import { FC, useEffect } from "react";
import { redirect } from "react-router-dom";
import useClientPaymentsStore from "../../../../store/paiement_client/usePaiementClient.store";
import ActionResult from "../../../../components/ui/dashboard/widgets/ActionResult";

const ClientPaymentsPage: FC = () => {
  const selectedClient = useClientsStore((state) => state.selectedClient);
  const clientPayments = useClientPaymentsStore(
    (state) => state.clientPayments
  );
  const fetchAllClientPayments = useClientPaymentsStore(
    (state) => state.fetchAllClientPayments
  );

  if (!selectedClient) {
    redirect("/clients");
  }
  useEffect(() => {
    fetchAllClientPayments(selectedClient!.id!);
  }, [fetchAllClientPayments, selectedClient]);
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <ClientCard client={selectedClient!} />
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        <AddingButton
          option="Ajouter un paiement"
          onClick={() => {
            toggleModal("client-payment-adding-form");
          }}
        />
        <ClientPaymentAdding
          bcNumber=""
          //   category=""
          amount=""
          bank=""
          reference=""
          slip=""
        />
      </div>
      <ClientPaymentsTable clientPayments={clientPayments} />
      <ActionResult />
    </div>
  );
};

export default ClientPaymentsPage;
