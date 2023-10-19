import { FC } from "react";
import useSearchInput from "../../../hooks/searchInput/useSearchInput";

interface JSSearchInputProps {}

const JSSearchInput: FC<JSSearchInputProps> = () => {
  const { searchInputData, onSearchInputDataChange } = useSearchInput();
  return (
    <input
      name="searchInput"
      id="searchInput"
      type="search"
      placeholder="Rechercher un client"
      value={searchInputData}
      onChange={onSearchInputDataChange}
      className={`w-full h-full shadow-sm rounded-md bg-transparent border-[2px] border-secondary focus:outline-none focus:border-[3px] px-2`}
    />
  );
};

export default JSSearchInput;
