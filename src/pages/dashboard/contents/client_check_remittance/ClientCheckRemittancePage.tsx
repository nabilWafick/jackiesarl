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
import JSSelect from "../../../../components/form/widgets/Select.widget";

const ClientCheckRemittancePage: FC = () => {
  const selectedClient = useClientsStore((state) => state.selectedClient);
  const clientChecksRemittance = useClientChecksRemittanceStore(
    (state) => state.clientChecksRemittance
  );
  const fetchAllClientChecksRemittance = useClientChecksRemittanceStore(
    (state) => state.fetchAllClientChecksRemittance
  );
  const selectedSortOption = useClientChecksRemittanceStore(
    (state) => state.selectedSortOption
  );
  const startDate = useClientChecksRemittanceStore((state) => state.startDate);
  const endDate = useClientChecksRemittanceStore((state) => state.endDate);
  const onSelectedSetOptionChange = useClientChecksRemittanceStore(
    (state) => state.onSelectedSetOptionChange
  );
  const onStartDateChange = useClientChecksRemittanceStore(
    (state) => state.onStartDateChange
  );
  const onEndDateChange = useClientChecksRemittanceStore(
    (state) => state.onEndDateChange
  );
  const resetDatesInterval = useClientChecksRemittanceStore(
    (state) => state.resetDatesInterval
  );

  if (!selectedClient) {
    redirect("/clients");
  }
  useEffect(() => {
    fetchAllClientChecksRemittance(selectedClient!.id!);
  }, [fetchAllClientChecksRemittance, selectedClient]);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex justify-center mb-5">
        <ClientCard client={selectedClient!} />
      </div>

      <AddingButton
        option="Ajouter une remise de chèque"
        onClick={() => {
          toggleModal("client-check-remittance-adding-form");
        }}
      />

      <div className="w-full flex flex-col lg:flex-row justify-between items-center my-2 content-center">
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
            { value: "unvalidated", label: "Non Validée" },
            { value: "validated", label: "Validée" },
            {
              value: "rest-more-important",
              label: "Reste Plus Important",
            },
            {
              value: "rest-less-important",
              label: "Reste Moins important",
            },
            {
              value: "BOA",
              label: "BOA",
            },
            {
              value: "UBA",
              label: "UBA",
            },
            {
              value: "NSIA",
              label: "NSIA",
            },
            {
              value: "BGFI",
              label: "BGFI",
            },
            {
              value: "SGB",
              label: "SGB",
            },
            {
              value: "Ecobank",
              label: "Ecobank",
            },
          ]}
          onChange={onSelectedSetOptionChange}
        />
        <ClientCheckRemittanceAdding
          description=""
          bank="BOA"
          amount=""
          rest=""
        />
        <ActionResult />
      </div>
      <ClientCheckRemittanceTable
        clientChecksRemittance={clientChecksRemittance}
      />
    </div>
  );
};

export default ClientCheckRemittancePage;
