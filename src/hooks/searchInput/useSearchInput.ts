import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useClientsStore from "../../store/clients/useClients.store";
import useInterfacesStore from "../../store/interfaces/useInfacesStore";

const useSearchInput = () => {
  const [searchInputData, setSearchInputData] = useState<string>("");

  const currentActiveSideBarOption = useInterfacesStore(
    (state) => state.currentActiveSideBarOption
  );
  const currentActiveSideBarSubOption = useInterfacesStore(
    (state) => state.currentActiveSideBarSubOption
  );
  const setCurrentActiveSideBarOption = useInterfacesStore(
    (state) => state.setCurrentActiveSideBarOption
  );
  const setCurrentActiveSideBarSubOption = useInterfacesStore(
    (state) => state.setCurrentActiveSideBarSubOption
  );
  const searchClients = useClientsStore((state) => state.searchClients);

  const navigateTo = useNavigate();

  const clearSearchInputData = () => {
    setSearchInputData("");
    // if (searchInputData == "NULL") {
    // alert("Null");
    //  }
  };

  const onSearchInputDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputData(e.target.value);
    searchClients(e.target.value);

    if (searchInputData == "NULL") {
      e.target.value = "NULL";
    }

    if (
      currentActiveSideBarOption != "/search" ||
      currentActiveSideBarSubOption != "/search"
    ) {
      navigateTo("/search");
      setCurrentActiveSideBarOption(50, "/search", undefined);
      setCurrentActiveSideBarSubOption("/search");
    }
  };

  return {
    searchInputData,
    onSearchInputDataChange,
    clearSearchInputData,
  };
};

export default useSearchInput;
