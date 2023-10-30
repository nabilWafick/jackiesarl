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
import JSSelect from "../../../../components/form/widgets/Select.widget";

const ClientPaymentsPage: FC = () => {
  const selectedClient = useClientsStore((state) => state.selectedClient);
  const clientPayments = useClientPaymentsStore(
    (state) => state.clientPayments
  );
  const fetchAllClientPayments = useClientPaymentsStore(
    (state) => state.fetchAllClientPayments
  );

  const selectedSortOption = useClientPaymentsStore(
    (state) => state.selectedSortOption
  );
  const startDate = useClientPaymentsStore((state) => state.startDate);
  const endDate = useClientPaymentsStore((state) => state.endDate);
  const onSelectedSetOptionChange = useClientPaymentsStore(
    (state) => state.onSelectedSetOptionChange
  );
  const onStartDateChange = useClientPaymentsStore(
    (state) => state.onStartDateChange
  );
  const onEndDateChange = useClientPaymentsStore(
    (state) => state.onEndDateChange
  );
  const resetDatesInterval = useClientPaymentsStore(
    (state) => state.resetDatesInterval
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
      <div className="flex  self-end items-center">
        <AddingButton
          option="Ajouter un achat"
          onClick={() => {
            toggleModal("client-payment-adding-form");
          }}
        />
      </div>
      <div className="w-full flex flex-row justify-between items-center mt-2 my-3 content-center">
        <DateIntervall
          selectedStartDate={startDate}
          selectedEndDate={endDate}
          onStartDateChange={onStartDateChange}
          onEndDateChange={onEndDateChange}
          resetDatesInterval={resetDatesInterval}
        />

        <JSSelect
          id="clients-select"
          name="clients-select"
          selectedOption={selectedSortOption}
          options={[
            { value: "new-to-old", label: "Nouveau à Ancien" },
            { value: "old-to-new", label: "Ancien à Nouveau" },
            { value: "more-important", label: "Plus Important" },
            { value: "less-important", label: "Moins Important" },
            {
              value: "cim-benin-more-important",
              label: "CIM BENIN Plus Important",
            },
            {
              value: "cim-benin-less-important",
              label: "CIM BENIN Moins important",
            },
            {
              value: "nocibe-more-important",
              label: "NOCIBE Plus Important",
            },
            {
              value: "nocibe-less-important",
              label: "NOCIBE Moins Important",
            },
          ]}
          onChange={onSelectedSetOptionChange}
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
