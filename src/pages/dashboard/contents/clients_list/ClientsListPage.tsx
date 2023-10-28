import ShowStatisticsButton from "../../../../components/ui/dashboard/widgets/ShowStatisticsButton.widget";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton.widget";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import ClientsTable from "../../../../components/ui/dashboard/clients/ClientsTable";
import "../../../../assets/css/table.css";
import ClientAdding from "../../../../components/form/forms/client_adding/ClientAdding";
import useClientsStore from "../../../../store/clients/useClients.store";
import { useEffect /* useReducer */ } from "react";
import ActionResult from "../../../../components/ui/dashboard/widgets/ActionResult";
import DateIntervall from "../../../../components/ui/dashboard/widgets/DateIntervall.widget";
import JSSelect from "../../../../components/form/widgets/Select.widget";

const ClientsListPage = () => {
  const clientsList = useClientsStore((state) => state.clients);
  const selectedSortOption = useClientsStore(
    (state) => state.selectedSortOption
  );
  const startDate = useClientsStore((state) => state.startDate);
  const endDate = useClientsStore((state) => state.endDate);
  const fetchClientList = useClientsStore((state) => state.fetchAllClients);
  const onSelectedSetOptionChange = useClientsStore(
    (state) => state.onSelectedSetOptionChange
  );
  const onStartDateChange = useClientsStore((state) => state.onStartDateChange);
  const onEndDateChange = useClientsStore((state) => state.onEndDateChange);
  const resetDatesInterval = useClientsStore(
    (state) => state.resetDatesInterval
  );

  useEffect(() => {
    fetchClientList();
  }, [fetchClientList]);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center content-center">
      <div className="w-full flex flex-row justify-between items-center">
        <ShowStatisticsButton />
        <AddingButton
          option="Ajouter un client"
          onClick={() => {
            toggleModal("client-adding-form");
          }}
        />
      </div>
      <div className="w-full flex justify-end items-center mt-2 content-center">
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
            { value: "alphabetic", label: "Ordre Alphabétique" },
            { value: "new-to-old", label: "Nouveau à Ancien" },
            { value: "old-to-new", label: "Ancien à Nouveau" },
          ]}
          onChange={onSelectedSetOptionChange}
        />
      </div>
      <ClientAdding
        firstname=""
        lastname=""
        ifuNumber=""
        phoneNumber=""
        email={undefined}
      />
      <ActionResult />

      <ClientsTable clientsList={clientsList} />
    </div>
  );
};

export default ClientsListPage;
