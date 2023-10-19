import { FC } from "react";
import Brouillard from "../../../../models/brouillard/brouillard.model";
import useBrouillardStore from "../../../../store/brouillard/useBrouillard.store";
import { Link } from "react-router-dom";

interface FogTableProps {
  fogs: Brouillard[];
}

const FogTable: FC<FogTableProps> = ({ fogs }) => {
  const setSelectedBrouillard = useBrouillardStore(
    (state) => state.setSelectedBrouillard
  );
  return (
    <div className="flex flex-col justify-start w-full ">
      {/* <h2 className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</h2> */}
      <div
        className="
          flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md"
      >
        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="font-medium">Dépot</td>
              <td className="font-medium">Stock Actuel</td>
              <td className="font-medium">Nom Gérant</td>
              <td className="font-medium">Num Gérant</td>
            </tr>

            {fogs.map((fog) => (
              <tr key={fog.id}>
                <td>
                  <Link
                    className=" text-tableTextColor font-normal hover:text-tableTextColor focus:text-tableTextColor"
                    onClick={() => setSelectedBrouillard(fog)}
                    to="/brouillard/details"
                  >
                    {fog.depot}
                  </Link>
                </td>
                <td>
                  <Link
                    className=" text-tableTextColor font-normal hover:text-tableTextColor focus:text-tableTextColor"
                    onClick={() => setSelectedBrouillard(fog)}
                    to="/brouillard/details"
                  >
                    {fog.stock_actuel}
                    <i> t</i>
                  </Link>
                </td>

                <td>
                  <Link
                    className=" text-tableTextColor font-normal hover:text-tableTextColor focus:text-tableTextColor"
                    onClick={() => setSelectedBrouillard(fog)}
                    to="/brouillard/details"
                  >
                    {fog.nom_gerant}
                  </Link>
                </td>
                <td>
                  <Link
                    className=" text-tableTextColor font-normal hover:text-tableTextColor focus:text-tableTextColor"
                    onClick={() => setSelectedBrouillard(fog)}
                    to="/brouillard/details"
                  >
                    {fog.numero_gerant}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FogTable;
