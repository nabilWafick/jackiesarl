import { FC } from "react";
import SoldeClient from "../../../../models/solde_client/solde_client.model";

interface AdvanceTableProps {
  avances: SoldeClient[];
}

const AdvanceTable: FC<AdvanceTableProps> = ({ avances }) => {
  return (
    <div className="flex flex-col justify-start w-full ">
      {/* <h2 className="text-sm my-3 p-2 bg-primary w-max">01-04-2025</h2> */}

      {/* <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p> */}
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="font-medium">Client</td>
              <td className="font-medium">Avance CIM BENIN</td>
              <td className="font-medium">Avance NOCIBE</td>
              <td className="font-medium">Avance</td>
              <td className="font-medium">Pourcentage</td>
            </tr>

            {avances.map((avance, index) => {
              return (
                <tr key={index}>
                  <td>
                    {avance.client!.prenoms} {avance.client!.nom}
                  </td>
                  <td>
                    {avance.avance_CIMBENIN} <i> fcfa</i>
                  </td>
                  <td>
                    {avance.avance_NOCIBE} <i> fcfa</i>
                  </td>
                  <td>
                    {avance.avance} <i> fcfa</i>
                  </td>
                  <td>{avance.pourcentage_avance_client}%</td>
                </tr>
              );
            })}

            <tr>
              <td className=" font-medium">Total Avances</td>
              <td className=" font-medium">
                {avances[0].total_avance_CIMBENIN}
                <i> fcfa</i>
              </td>
              <td className=" font-medium">
                {avances[0].total_avance_NOCIBE}
                <i> fcfa</i>
              </td>
              <td className=" font-medium">
                {avances[0].total_avance_clients}
                <i> fcfa</i>
              </td>
              <td className=" font-medium">100%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <div className="flex flex-row items-center content-center">
        <span className=" text-md my-3 font-medium text-gray-700">
          Total Avance
        </span>
        <span className="ml-20 text-md">30 000 000</span>
      </div> */}
    </div>
  );
};

export default AdvanceTable;
