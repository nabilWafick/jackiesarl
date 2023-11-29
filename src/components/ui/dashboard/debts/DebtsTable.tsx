import { FC } from "react";
import SoldeClient from "../../../../models/solde_client/solde_client.model";
import "../../../../assets/css/Sidebar.css";

interface DebtsTableProps {
  creances: SoldeClient[];
}

const DebtsTable: FC<DebtsTableProps> = ({ creances }) => {
  //creances.sort((creance1, creance2) => creance2.creance - creance1.creance);

  return (
    <div className="flex flex-col justify-start w-full ">
      {/* <p className=" text-sm my-3 p-2 bg-primary w-max">01-04-2025</p> */}
      <div className="flex flex-col justify-start w-full my-3  border-2 border-primary  rounded-lg shadow-md overflow-auto sidebar">
        <table className="table table-striped text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
          <tbody>
            <tr>
              <td className="font-medium">Client</td>
              <td className="font-medium">Créance CIM BENIN</td>
              <td className="font-medium">Créance NOCIBE</td>
              <td className="font-medium">Créance</td>
              <td className="font-medium">Pourcentage</td>
            </tr>

            {creances.map((creance, index) => {
              return (
                <tr key={index}>
                  <td>
                    {creance.client!.prenoms} {creance.client!.nom}
                  </td>
                  <td>
                    {creance.creance_CIMBENIN} <i> fcfa</i>
                  </td>
                  <td>
                    {creance.creance_NOCIBE} <i> fcfa</i>
                  </td>
                  <td>
                    {creance.creance} <i> fcfa</i>
                  </td>
                  <td>{creance.pourcentage_creance_client}%</td>
                </tr>
              );
            })}

            <tr>
              <td className=" font-medium">Total Créances</td>
              <td className=" font-medium">
                {creances.length == 0 ? "" : creances[0].total_creance_CIMBENIN}
                <i> fcfa</i>
              </td>
              <td className=" font-medium">
                {creances.length == 0 ? "" : creances[0].total_creance_NOCIBE}
                <i> fcfa</i>
              </td>
              <td className=" font-medium">
                {creances.length == 0 ? "" : creances[0].total_creance_clients}
                <i> fcfa</i>
              </td>
              <td className=" font-medium">100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DebtsTable;
