import { FC } from "react";
import { IoIosStats } from "react-icons/io";
import { Link } from "react-router-dom";

const ShowStatisticsButton: FC = () => {
  return (
    <Link to="/clients/statistiques">
      <div
        className={`rounded-md shadow-md p-2 border-secondary  border-2 hover:border-2 text-secondary hover:border-secondary flex items-center w-max`}
      >
        <div className="flex items-center font-medium">
          Voir les statistiques
          <IoIosStats size={30} className={`ml-3 text-secondary`} />
        </div>
      </div>
    </Link>
  );
};

export default ShowStatisticsButton;
