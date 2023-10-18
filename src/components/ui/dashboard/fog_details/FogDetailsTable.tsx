import { FC } from "react";
import ActivitesDepot from "../../../../models/activites_depot/activites_depot.model";

interface FogDetailsTableProps {
  fogDetails: ActivitesDepot[];
}

const FogDetailsTable: FC<FogDetailsTableProps> = ({ fogDetails }) => {
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
              <td className="font-medium">Quantité Avant Vente</td>
              <td className="font-medium">Vente</td>
              <td className="font-medium">Quantité Après Vente</td>
              <td className="font-medium">Versement</td>
              <td className="font-medium">Dépense</td>
              <td className="font-medium">Observation</td>
            </tr>

            {fogDetails.map((fogDetail) => (
              <tr key={fogDetail.id}>
                <td>{fogDetail.quantite_avant_vente}</td>
                <td>{fogDetail.vente}</td>
                <td>{fogDetail.quantite_apres_vente}</td>
                <td>{fogDetail.versement}</td>
                <td>{fogDetail.depense}</td>
                <td>{fogDetail.observation}</td>
              </tr>
            ))}

            {/* <tr>
              <td className=" font-medium">Total</td>
              <td className=" font-medium">15 000 000</td>
              <td className=" font-medium">15 000 000</td>
              <td className=" font-medium">15 000 000</td>
              <td className=" font-medium">15 000 000</td>
              <td className=" font-medium">15 000 000</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FogDetailsTable;
