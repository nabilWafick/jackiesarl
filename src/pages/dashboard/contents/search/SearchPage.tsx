import { FunctionComponent } from "react";
import useClientsStore from "../../../../store/clients/useClients.store";
import { useNavigate } from "react-router-dom";
import useSearchInput from "../../../../hooks/searchInput/useSearchInput";
import useInterfacesStore from "../../../../store/interfaces/useInfacesStore";

interface SearchPageProps {}

const SearchPage: FunctionComponent<SearchPageProps> = () => {
  const selectedClient = useClientsStore((state) => state.selectedClient);
  const setSelectedClient = useClientsStore((state) => state.setSelectedClient);
  const searchedClients = useClientsStore((state) => state.searchedClients);
  const refreshSearchedClients = useClientsStore(
    (state) => state.refreshSearchedClients
  );
  const setCurrentActiveSideBarOption = useInterfacesStore(
    (state) => state.setCurrentActiveSideBarOption
  );
  const navigateTo = useNavigate();
  const { clearSearchInputData } = useSearchInput();
  return (
    <div className="w-full h-full flex ">
      <div className=" text-tableTextColor font-medium w-full block break-words">
        <ul className="w-full">
          {searchedClients.map((searchedClient, index) => (
            <li
              key={searchedClient.id!}
              className={`w-full cursor-pointer py-4 ${
                index % 2 != 0 ? "bg-primary" : "bg-white"
              } px-5`}
              onClick={() => {
                clearSearchInputData();
                setSelectedClient(searchedClient);
                setCurrentActiveSideBarOption(1, "/clients", selectedClient);
                refreshSearchedClients();
                navigateTo("/client");
              }}
            >
              {searchedClient.prenoms} {searchedClient.nom}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
