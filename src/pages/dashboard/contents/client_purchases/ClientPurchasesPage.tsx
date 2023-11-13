import ClientCard from "../../../../components/ui/dashboard/clients/ClientCard";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton.widget";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import ClientPurchasesTable from "../../../../components/ui/dashboard/client_purchases/ClientPurchasesTable";
import "../../../../assets/css/table.css";
import useClientsStore from "../../../../store/clients/useClients.store";
import { FC, useEffect } from "react";
import useClientPurchasesStore from "../../../../store/achat_client/useAchatClient.store";
import { useNavigate } from "react-router-dom";
import ClientPurchaseAdding from "../../../../components/form/forms/client_purchase_adding/ClientPurchaseAdding";
import ActionResult from "../../../../components/ui/dashboard/widgets/ActionResult";
import JSSelect from "../../../../components/form/widgets/Select.widget";

const ClientPurchasesPage: FC = () => {
  const selectedClient = useClientsStore((state) => state.selectedClient);
  const clientPurchases = useClientPurchasesStore(
    (state) => state.clientPurchases
  );
  const fetchAllClientPurchases = useClientPurchasesStore(
    (state) => state.fetchAllClientPurchases
  );
  const selectedSortOption = useClientPurchasesStore(
    (state) => state.selectedSortOption
  );
  const startDate = useClientPurchasesStore((state) => state.startDate);
  const endDate = useClientPurchasesStore((state) => state.endDate);
  const onSelectedSetOptionChange = useClientPurchasesStore(
    (state) => state.onSelectedSetOptionChange
  );
  const onStartDateChange = useClientPurchasesStore(
    (state) => state.onStartDateChange
  );
  const onEndDateChange = useClientPurchasesStore(
    (state) => state.onEndDateChange
  );
  const resetDatesInterval = useClientPurchasesStore(
    (state) => state.resetDatesInterval
  );
  const navigateTo = useNavigate();
  useEffect(() => {
    if (selectedClient == undefined) {
      navigateTo("/clients");
    }
    fetchAllClientPurchases(selectedClient!.id!);
  }, [navigateTo, fetchAllClientPurchases, selectedClient]);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center content-center">
      <ClientCard client={selectedClient!} />
      <div className="flex  self-end items-center">
        <AddingButton
          option="Ajouter un achat"
          onClick={() => {
            toggleModal("client-purchase-adding-form");
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

        <ClientPurchaseAdding
          quantity=""
          amount=""
          ctpNumber=""
          slip=""
          bcNumber=""
        />
        <ActionResult />
      </div>
      <ClientPurchasesTable clientPurchases={clientPurchases} />
    </div>
  );
};

export default ClientPurchasesPage;
