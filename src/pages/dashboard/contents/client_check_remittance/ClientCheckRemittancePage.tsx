import ClientCard from "../../../../components/ui/dashboard/clients/ClientCard";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton.widget";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import ClientCheckRemittanceTable from "../../../../components/ui/dashboard/client_check_remittance/ClientCheckRemittanceTable";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import "../../../../assets/css/table.css";
import ClientCheckRemittanceAdding from "../../../../components/form/forms/client_check_remittance_adding/ClientCheckRemittanceAdding";
import useClientsStore from "../../../../store/clients/useClients.store";
import { FC, useEffect } from "react";
import useClientChecksRemittanceStore from "../../../../store/remise_cheque_client/useRemiseChequeClient.store";
import { redirect } from "react-router-dom";
import ActionResult from "../../../../components/ui/dashboard/widgets/ActionResult";

const ClientCheckRemittancePage: FC = () => {
  const selectedClient = useClientsStore((state) => state.selectedClient);
  const clientChecksRemittance = useClientChecksRemittanceStore(
    (state) => state.clientChecksRemittance
  );
  const fetchAllClientChecksRemittance = useClientChecksRemittanceStore(
    (state) => state.fetchAllClientChecksRemittance
  );

  if (!selectedClient) {
    redirect("/clients");
  }
  useEffect(() => {
    fetchAllClientChecksRemittance(selectedClient!.id!);
  }, [fetchAllClientChecksRemittance, selectedClient]);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <ClientCard client={selectedClient!} />
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall />
        <AddingButton
          option="Ajouter une remise de chèque"
          onClick={() => {
            toggleModal("client-check-remittance-adding-form");
          }}
        />
        <ClientCheckRemittanceAdding description="" bank="" amount="" rest="" />
        <ActionResult />
      </div>
      <ClientCheckRemittanceTable
        clientChecksRemittance={clientChecksRemittance}
      />
    </div>
  );
};

export default ClientCheckRemittancePage;
