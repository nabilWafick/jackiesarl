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
      autoComplete="off"
      className={`w-full h-full flex self-center  shadow-sm rounded-md bg-backgroundColor border-[2px] border-secondary focus:outline-none focus:border-[3px] px-2 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]`}
    />
  );
};

export default JSSearchInput;
