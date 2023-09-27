import { IoIosStats } from "react-icons/io";

const ShowStatisticsButton = () => {
  return (
    <div className="w-full flex justify-start items-center">
      <div
        className={`rounded-md shadow-md p-2 border-secondary  border-2 hover:border-2 text-secondary hover:border-secondary flex items-center`}
        onClick={() => {}}
      >
        <div className="flex items-center font-medium">
          Voir les statistiques
          <IoIosStats size={30} className={`ml-3 text-secondary`} />
        </div>
      </div>
    </div>
  );
};

export default ShowStatisticsButton;
