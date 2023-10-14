import { Link } from "react-router-dom";
import ShowStatisticsButton from "../../../../components/ui/dashboard/widgets/ShowStatisticsButton.widget";
import AddingButton from "../../../../components/ui/dashboard/widgets/AddingButton.widget";
import { toggleModal } from "../../../../components/ui/dashboard/widgets/ToggleModal";
import FilterOptionButton from "../../../../components/ui/dashboard/widgets/FilterOptionButton.widget";
import ClientsTable from "../../../../components/ui/dashboard/clients/ClientsTable";
import "../../../../assets/css/table.css";
import ClientAdding from "../../../../components/form/forms/client_adding/ClientAdding";
import useClientsStore from "../../../../store/clients/useClients.store";
import { useEffect, useReducer } from "react";
import ActionResult from "../../../../components/ui/dashboard/widgets/ActionResult";

const ClientsListPage = () => {
  const clientsList = useClientsStore((state) => state.clients);
  // const testList = useClientsStore((state) => state.testList);
  const fetchClientList = useClientsStore((state) => state.fetchAllClients);
  const sortClientsNameByASC = useClientsStore(
    (state) => state.sortClientsNameByASC
  );
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    fetchClientList();
  }, [fetchClientList]);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center content-center">
      <div className="w-full flex flex-row justify-between items-center">
        <Link to="/clients/statistiques" className="w-full">
          <ShowStatisticsButton />
        </Link>
        <AddingButton
          option="Ajouter un client"
          onClick={() => {
            toggleModal("client-adding-form");
          }}
        />
        <ClientAdding
          firstname=""
          lastname=""
          ifuNumber=""
          phoneNumber=""
          email={undefined}
        />
        <ActionResult />
      </div>
      <div className="w-full flex justify-end items-center mt-2 content-center">
        <FilterOptionButton />
      </div>
      <div>clientsListLength: {clientsList.length}</div>

      <button
        className="bg-secondary text-white"
        onClick={() => {
          toggleModal("action-result-message");
          sortClientsNameByASC();
          forceUpdate();
        }}
      >
        Sort Name By ASCII
      </button>
      <ClientsTable clientsList={clientsList} />
    </div>
  );
};

export default ClientsListPage;
