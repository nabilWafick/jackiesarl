import { BsFilter } from "react-icons/bs";

const FilterOptionButton = () => {
  return (
    <div className="flex justify-end items-center w-full">
      <div className="w-max rounded-md border-2 p-1 border-secondary flex justify-between items-center shadow-md">
        <p className="ml-2 text-secondary">Liste des Clients</p>
        <div className="rounded-md border-2 p-1 ml-4 border-secondary flex justify-between items-center text-secondary">
          par ordre alphabétique <BsFilter className="ml-3" />
        </div>
      </div>
    </div>
  );
};

export default FilterOptionButton;
